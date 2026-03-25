import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs';
import { Auth } from '../../../../core/services/auth';
import { User } from '../../../../core/services/user';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { matchControlValidator } from '../../../../shared/validators/match-control-validator';
import { ImageUploader, ImageUploaderSelection } from '../../../../shared/components/media/image-uploader/image-uploader';
import { ImageCropper, ImageCropperDialogResult } from '../../../../shared/components/media/image-cropper/image-cropper';
import { LoadingButton } from '../../../../shared/components/buttons/loading-button/loading-button';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    FontAwesomeModule,
    Thumbnail,
    FormFieldsComponent,
    SanitizeInput,
    AutoResizeTextarea,
    ImageUploader,
    LoadingButton,
  ],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile implements OnInit {
  private authService = inject(Auth);
  private userService = inject(User);
  private formBuilder = inject(NonNullableFormBuilder);
  private snackBar = inject(MatSnackBar);

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
      username: [user?.username || '', [commonFormValidator({
        required: true,
        disallowSpaces: true,
        disallowSpecialChars: true,
        minLength: 3,
        maxLength: 20,
      })]],
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
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20,
      })]],
    }, {
      validators: [matchControlValidator({
        sourceControlName: 'newPassword',
        targetControlName: 'confirmPassword',
        sourceControlLabel: 'new password',
      })],
    });
  }


  onBasicSubmit() {
    this.hasClickedBasicSubmit.set(true);
    console.log('Basic form value:', this.basicForm.value);
    if (this.basicForm.valid) {
      this.basicSaveLoading.set(true);
      this.userService.updateProfileBasics(this.basicForm.getRawValue()).pipe(
        finalize(() => this.basicSaveLoading.set(false))
      ).subscribe({
        next: () => {
          this.snackBar.open('Profile basics updated successfully', '✖', {
            duration: 3000,
            panelClass: 'snackbar-success',
          });
        },
      });
    }
  }

  onCredentialsSubmit() {
    this.hasClickedCredentialsSubmit.set(true);
    console.log('Credentials form value:', this.credentialsForm.value);
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
}
