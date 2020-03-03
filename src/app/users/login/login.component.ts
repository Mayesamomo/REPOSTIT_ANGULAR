import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  isError: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // for accessing to form fields
  get fval() { return this.loginForm.controls; }
  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.isError = true;
      return;
    }

    this.loading = true;
    this.authservice.login(this.fval.username.value, this.fval.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/']);
          this.isError = false;
        },
        error => {
          this.toastr.error(error.error.message, 'Error');
          this.loading = false;
        });
  }
}
