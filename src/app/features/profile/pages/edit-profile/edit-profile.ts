import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { finalize, map } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { User } from '../../../../core/services/user';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { PasswordField } from '../../../../shared/components/forms/password-field/password-field';
import { CommonDialog, CommonDialogResult } from '../../../../shared/components/dialogs/common-dialog/common-dialog';
import { ImageUploader, ImageUploaderSelection } from '../../../../shared/components/media/image-uploader/image-uploader';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';
import { ScrollToInvalid } from '../../../../shared/directives/scroll-to-invalid';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { UpdateProfileCredentials } from '../../../../shared/interfaces/user';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { existsValidator } from '../../../../shared/validators/exists-validator';
import { matchControlValidator } from '../../../../shared/validators/match-control-validator';
import { FormValidation } from '../../../../shared/services/form-validation';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule,
    FontAwesomeModule,
    Thumbnail,
    FormFieldsComponent,
    SanitizeInput,
    AutoResizeTextarea,
    ScrollToInvalid,
    ImageUploader,
    LoadingButton,
    PasswordField,
  ],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile implements OnInit {
  private authService = inject(Auth);
  private userService = inject(User);
  private formBuilder = inject(NonNullableFormBuilder);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  private formValidation = inject(FormValidation);

  authState = this.authService.authState;
  profileState = this.authService.profileState;
  faArrowLeft = faArrowLeft;

  hasClickedBasicSubmit = signal(false);
  hasClickedCredentialsSubmit = signal(false);
  profileImageLoading = signal(false);
  basicSaveLoading = signal(false);
  credentialsSaveLoading = signal(false);

  basicForm!: FormGroup<{
    name: FormControl<string>;
    bio: FormControl<string>;
  }>;

  credentialsForm!: FormGroup<{
    username: FormControl<string>;
    newPassword: FormControl<string>;
    confirmPassword: FormControl<string>;
    currentPassword: FormControl<string>;
  }>;

  ngOnInit(): void {
    this.createForms();
    this.loadFullProfileImage();
  }

  loadFullProfileImage() {
    this.profileImageLoading.set(true);
    this.userService.getFullProfileImage().pipe(
      finalize(() => this.profileImageLoading.set(false))
    ).subscribe();
  }

  createForms() {
    const user = this.authState().user;

    this.basicForm = this.formBuilder.group({
      name: [user?.name || '', [commonFormValidator({
        required: true,
        disallowNumber: true,
        requireLetter: true,
        disallowSpecialChars: true,
        maxLength: 30,
      })]],
      bio: [user?.bio || '', [commonFormValidator({
        maxLength: 80
      })]],
    });

    this.credentialsForm = this.formBuilder.group({
      username: [
        user?.username || '',
        {
          validators: [
            commonFormValidator({
              disallowSpaces: true,
              disallowSpecialChars: true,
              minLength: 3,
              maxLength: 20,
            }),
          ],
          asyncValidators: [
            existsValidator({
              ignoreValue: () => this.authState().status === 'authenticated'
                ? this.authState().user?.username
                : null,
              apiObserable: (value) => {
                return this.userService.checkIfUserExists({ username: value }).pipe(
                  map(response => response.exists)
                )
              }
            }),
          ],
        },
      ],
      newPassword: ['', [commonFormValidator({
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20,
      })]],
      confirmPassword: ['', [commonFormValidator({
        disallowSpaces: true,
        maxLength: 20,
      })]],
      currentPassword: ['', [commonFormValidator({
        required: true,
        disallowSpaces: true,
        maxLength: 20,
      })]],
    }, {
      validators: [matchControlValidator({
        sourceControlName: 'newPassword',
        targetControlName: 'confirmPassword',
        sourceControlLabel: 'new password',
        targetRequiredWhenSourceHasValue: true,
      })],
    });
  }

  onBasicSubmit() {
    this.hasClickedBasicSubmit.set(true);
    this.formValidation.validateAndRun(this.basicForm, () => {
      this.basicSaveLoading.set(true);
      this.userService.updateProfileBasics(this.basicForm.getRawValue()).pipe(
        finalize(() => this.basicSaveLoading.set(false))
      ).subscribe({
        next: () => {
          this.credentialsForm.controls.currentPassword.reset('');
          this.credentialsForm.controls.newPassword.reset('');
          this.credentialsForm.controls.confirmPassword.reset('');
          this.snackBar.open('Profile basics updated successfully', '✖', {
            duration: 5000,
            panelClass: 'snackbar-success',
          });
        },
        error: (error) => {
          const message = error.error?.message || error.error || 'Profile basics update failed. Please try again.';
          this.snackBar.open(message, '✖', {
            duration: 5000,
            panelClass: 'snackbar-error',
          });
          this.hasClickedBasicSubmit.set(false);
        },
      });
    });
  }

  onCredentialsSubmit() {
    this.hasClickedCredentialsSubmit.set(true);
    this.formValidation.validateAndRun(this.credentialsForm, () => {
      const { username, newPassword: password, currentPassword } = this.credentialsForm.getRawValue();
      const body: UpdateProfileCredentials = {
        ...(username && { username }),
        currentPassword,
        ...(password?.trim() && { password }),
      };

      this.credentialsSaveLoading.set(true);
      this.userService.updateCredentials(body).pipe(
        finalize(() => this.credentialsSaveLoading.set(false))
      ).subscribe({
        next: () => {
          this.snackBar.open('Credentials updated successfully', '✖', {
            duration: 3000,
            panelClass: 'snackbar-success',
          });
          this.credentialsForm.controls.currentPassword.reset('');
          this.credentialsForm.controls.newPassword.reset('');
          this.credentialsForm.controls.confirmPassword.reset('');
          this.hasClickedCredentialsSubmit.set(false);
        },
        error: (error) => {
          const message = error.error?.message || error.error || 'Credentials update failed. Please try again.';
          this.snackBar.open(message, '✖', {
            duration: 3000,
            panelClass: 'snackbar-error',
          });
        },
      });
    });
  }

  onProfilePhotoSelected(selection: ImageUploaderSelection) {
    const profileImage = selection.files[0];
    if (!profileImage) return;

    this.userService.updateProfileImage(profileImage).subscribe({
      next: () => {
        selection.dialogRef?.close({ file: profileImage });
        this.snackBar.open('Profile photo updated successfully', '✖', {
          duration: 3000,
          panelClass: 'snackbar-success',
        });
      },
      error: () => {
        selection.dialogRef?.componentInstance?.isCropping.set(false);
      }
    });
  }

  onRemovePhoto() {
    this.dialog.open(CommonDialog, {
      width: '30rem',
      data: {
        type: 'warning',
        message: 'Are you sure you want to remove your profile photo?',
        confirmText: 'Remove Photo',
        cancelText: 'Cancel',
        onConfirm: (dialogRef: MatDialogRef<CommonDialog, CommonDialogResult>, dialog: CommonDialog) => {
          this.profileImageLoading.set(true);
          this.userService.deleteProfileImage().pipe(
            finalize(() => {
              this.profileImageLoading.set(false);
              dialog.isConfirming.set(false);
            })
          ).subscribe({
            next: () => {
              dialogRef.close({ confirmed: true });
              this.snackBar.open('Profile photo removed successfully', '✖', {
                duration: 3000,
                panelClass: 'snackbar-success',
              });
            },
            error: (error) => {
              const message = error.error?.message || error.error || 'Failed to remove profile photo. Please try again.';
              this.snackBar.open(message, '✖', {
                duration: 3000,
                panelClass: 'snackbar-error',
              });
            },
          });
        },
      },
    });
  }
}