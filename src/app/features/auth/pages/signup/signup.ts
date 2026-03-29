import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCamera, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { FieldConfig } from '../../../../shared/components/forms/form-fields/form-fields.interface';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
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
  faPen = faPen;
  faTrash = faTrash;
  selectedProfileImage = signal<{
    file: File;
    imageData: string;
    fileType: string;
  } | null>(null);

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
    console.log('Form Value:', this.signupForm.value);
    if (this.signupForm.valid) {
      this.isSubmitting.set(true);
      this.createUser();
    }
  }

  createUser() {
    if (this.signupForm.valid) {
      const controls = this.signupForm.controls;
      const userData: CreateUser = {
        name: controls.name.value,
        username: controls.username.value,
        password: controls.password.value,
      };

      this.authService.signup(userData).pipe(
        switchMap(() => {
          const profileImage = this.selectedProfileImage();
          if (!profileImage) {
            return of(null);
          }

          const dialogRef = this.dialog.open(CommonDialog, {
            disableClose: true,
            data: {
              type: 'confirm',
              message: 'Profile created successfully. Adding your profile photo now, please wait...',
            },
          });

          return this.userService.updateProfileImage(profileImage.file).pipe(
            finalize(() => dialogRef.close())
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
