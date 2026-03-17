import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Auth } from '../../../../core/services/auth';
import { User } from '../../../../core/services/user';
import { Thumbnail } from '../../../../shared/components/media/thumbnail/thumbnail';
import { FormFieldsComponent } from '../../../../shared/components/forms/form-fields/form-fields';
import { SanitizeInput } from '../../../../shared/directives/sanitize-input';
import { AutoResizeTextarea } from '../../../../shared/directives/auto-resize';
import { commonFormValidator } from '../../../../shared/validators/common-form-validator';
import { ImageUploader } from '../../../../shared/components/media/image-uploader/image-uploader';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    Thumbnail,
    FormFieldsComponent,
    SanitizeInput,
    AutoResizeTextarea,
    ImageUploader,
  ],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfile implements OnInit {
  private authService = inject(Auth);
  private userService = inject(User);
  private formBuilder = inject(NonNullableFormBuilder);

  authState = this.authService.authState;
  profileState = this.authService.profileState;
  faArrowLeft = faArrowLeft;

  hasClickedBasicSubmit = signal(false);
  hasClickedCredentialsSubmit = signal(false);

  basicForm!: FormGroup<{
    name: FormControl<string>;
    bio: FormControl<string>;
  }>;

  credentialsForm!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
    currentPassword: FormControl<string>;
  }>;

  ngOnInit(): void {
    this.createForms();
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
      bio: ['', [commonFormValidator({ maxLength: 80 })]],
    });

    this.credentialsForm = this.formBuilder.group({
      username: [user?.username || '', [commonFormValidator({
        required: true,
        disallowSpaces: true,
        disallowSpecialChars: true,
        minLength: 3,
        maxLength: 20,
      })]],
      password: ['', [commonFormValidator({
        requireNumber: true,
        requireLetter: true,
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20,
      })]],
      confirmPassword: ['', [commonFormValidator({
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20,
      })]],
      currentPassword: ['', [commonFormValidator({
        disallowSpaces: true,
        minLength: 6,
        maxLength: 20,
      })]],
    });
  }


  onBasicSubmit() {
    this.hasClickedBasicSubmit.set(true);
    console.log('Basic form value:', this.basicForm.value);
    if (this.basicForm.valid) {

    }
  }

  onCredentialsSubmit() {
    this.hasClickedCredentialsSubmit.set(true);
    console.log('Credentials form value:', this.credentialsForm.value);
  }

  onProfilePhotoSelected(files: File[]) {
    const profileImage = files[0];
    if (!profileImage) return;
    this.userService.updateProfileImage(profileImage).subscribe();
  }
}
