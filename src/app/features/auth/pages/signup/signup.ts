import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCamera, faFile, faFolderOpen, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { FieldConfig } from '../../../../shared/components/forms/form-fields/form-fields.interface';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { isMobile } from '../../../../shared/utils/device';
import { User } from '../../../../core/services/user';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { existsValidator } from '../../../../shared/validators/exists-validator';
import { finalize, map, of, switchMap } from 'rxjs';
import { CreateUser } from '../../../../shared/interfaces/user';
import { Auth } from '../../../../core/services/auth';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { POST_LOGIN_DEFAULT_ROUTE } from '../../../../shared/config/config';
import { PasswordField } from '../../../../shared/components/forms/password-field/password-field';
import { matchControlValidator } from '../../../../shared/validators/match-control-validator';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { ImageUploader, ImageUploaderSelection } from '../../../../shared/components/media/image-uploader/image-uploader';
import { CommonDialog } from '../../../../shared/components/dialogs/common-dialog/common-dialog';
import { ScrollToInvalid } from '../../../../shared/directives/scroll-to-invalid';
import { FormValidation } from '../../../../shared/services/form-validation';
import { CapitalizeWordsPipe } from '../../../../shared/pipes/capitalize-words-pipe';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
    FormFieldsComponent,
    SanitizeInput,
    LoadingButton,
    MatSnackBarModule,
    RouterModule,
    PasswordField,
    Thumbnail,
    ImageUploader,
    ScrollToInvalid,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup implements OnInit {

  private userService = inject(User);
  private authService = inject(Auth);
  private formBuilder = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  private formValidation = inject(FormValidation);
  private capitalizeWordsPipe = new CapitalizeWordsPipe();

  signupForm!: FormGroup<{
    name: FormControl<string>;
    username: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;
  profilePhotoControl = new FormControl('', { nonNullable: true });
  usernameConfig!: FieldConfig;
  passwordConfig!: FieldConfig;
  isSubmitting = signal(false);
  hasClickedSubmit = signal(false);
  usernameExists = true;
  faCamera = faCamera;
  readonly faFolderOpen = faFolderOpen;
  faFile = faFile;
  faPen = faPen;
  faTrash = faTrash;
  selectedProfileImage = signal<{
    file: File;
    imageData: string;
    fileType: string;
  } | null>(null);

  isMobileDevice = isMobile();

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [commonFormValidator({
        required: true,
        disallowNumber: true,
        requireLetter: true,
        disallowSpecialChars: true,
        maxLength: 30,
      })]],
      username: [
        '',
        {
          validators: [
            commonFormValidator({
              required: true,
              disallowSpaces: true,
              disallowSpecialChars: true,
              minLength: 3,
              maxLength: 20,
            }),
          ],
          asyncValidators: [
            existsValidator({
              apiObserable: (value) => {
                return this.userService.checkIfUserExists({ username: value }).pipe(
                  map(response => response.exists)
                );
              }
            }),
          ],
        },
      ],

      password: ['', [commonFormValidator({
        required: true,
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20,
      })]],
      confirmPassword: ['', [commonFormValidator({
        required: true,
        disallowSpaces: true,
        maxLength: 20,
      })]],
    }, {
      validators: [matchControlValidator({
        sourceControlName: 'password',
        targetControlName: 'confirmPassword',
        sourceControlLabel: 'password',
      })],
    });
  }

  onSubmit(): void {
    this.hasClickedSubmit.set(true);
    this.formValidation.validateAndRun(this.signupForm, () => {
      this.isSubmitting.set(true);
      this.createUser();
    });
  }

  createUser() {
    if (this.signupForm.valid) {
      const controls = this.signupForm.controls;
      const userData: CreateUser = {
        name: this.capitalizeWordsPipe.transform(controls.name.value),
        username: controls.username.value.toLowerCase(),
        password: controls.password.value,
      };

      this.authService.signup(userData).pipe(
        switchMap(() => {
          const profileImage = this.selectedProfileImage();
          if (!profileImage) {
            return of(null);
          }

          let dialogRef: MatDialogRef<CommonDialog> | null = null;
          let canCloseDialog = false;
          let shouldCloseDialog = false;
          let minVisibleTimeout: ReturnType<typeof setTimeout> | null = null;
          const dialogOpenTimeout = setTimeout(() => {
            dialogRef = this.dialog.open(CommonDialog, {
              disableClose: true,
              data: {
                type: 'confirm',
                message: 'Profile created successfully. Adding your profile photo now, please wait...',
              },
            });
            minVisibleTimeout = setTimeout(() => {
              canCloseDialog = true;
              if (shouldCloseDialog) {
                dialogRef?.close();
              }
            }, 1000);
          }, 2000);

          return this.userService.updateProfileImage(profileImage.file).pipe(
            finalize(() => {
              clearTimeout(dialogOpenTimeout);
              if (minVisibleTimeout) {
                clearTimeout(minVisibleTimeout);
              }

              if (!dialogRef) {
                return;
              }

              if (canCloseDialog) {
                dialogRef.close();
              } else {
                shouldCloseDialog = true;
                minVisibleTimeout = setTimeout(() => {
                  canCloseDialog = true;
                  dialogRef?.close();
                }, 1000);
              }
            })
          );
        }),
        finalize(() => this.isSubmitting.set(false))
      ).subscribe({
        next: (response) => {
          console.log('user created', response);
          this.snackBar.open('Profile created successfully.', '✖', {
            duration: 3000,
            panelClass: 'snackbar-success',
          });
          this.router.navigate([POST_LOGIN_DEFAULT_ROUTE]);
        },
        error: (error) => {
          const isAuthenticated = !!this.authService.authState().user;
          const message = isAuthenticated
            ? 'Account created, but profile photo upload failed. You can update it later.'
            : error.error?.message || 'Signup failed. Please try again.';

          this.snackBar.open(message, '✖', { duration: 3000, panelClass: 'snackbar-error' });

          if (isAuthenticated) {
            this.router.navigate([POST_LOGIN_DEFAULT_ROUTE]);
          }

          console.error('error creating user', error);
        },
      });
    }
  }

  onProfilePhotoSelected(selection: ImageUploaderSelection) {
    const profileImage = selection.files[0];
    if (!profileImage) return;
    selection.dialogRef?.close({ file: profileImage });

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : null;
      if (!result) {
        this.selectedProfileImage.set(null);
        this.profilePhotoControl.setValue('');
        this.profilePhotoControl.markAsTouched();
        this.profilePhotoControl.markAsDirty();
        return;
      }

      const [, imageData = ''] = result.split(',', 2);
      this.selectedProfileImage.set({
        file: profileImage,
        imageData,
        fileType: profileImage.type || 'image/jpeg',
      });
      this.profilePhotoControl.setValue(profileImage.name);
      this.profilePhotoControl.markAsTouched();
      this.profilePhotoControl.markAsDirty();
    };
    reader.readAsDataURL(profileImage);
  }

  onRemovePhoto() {
    this.selectedProfileImage.set(null);
    this.profilePhotoControl.setValue('');
    this.profilePhotoControl.markAsTouched();
    this.profilePhotoControl.markAsDirty();
  }
}
