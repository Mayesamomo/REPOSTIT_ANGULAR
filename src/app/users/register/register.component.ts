import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  toastr: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get fval() { return this.registerForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.register(this.registerForm.value).subscribe(
      (res) => {
        if (res.result) {
          this.registerForm.reset()
          this.router.navigate(['login']);
        }
      },
      (error) => {
        this.toastr.error(error.error.message, 'Error');
        this.loading = false;
      }
    )

  }
}
