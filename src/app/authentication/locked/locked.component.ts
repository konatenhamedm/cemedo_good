import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
@Component({
  selector: 'app-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss'],
})
export class LockedComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  userImg: string;
  userFullName: string;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
    this.userImg = this.authService.currentUserValue.img;
    this.userFullName =
      this.authService.currentUserValue.firstName +
      ' ' +
      this.authService.currentUserValue.lastName;
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      const role = this.authService.currentUserValue.role;
      if (role === Role.All || role === Role.Admin) {
        this.router.navigate(['/admin/dashboard/main']);
      } else if (role === Role.Doctor) {
        this.router.navigate(['/doctor/dashboard']);
      } else if (role === Role.Infirmier) {
        this.router.navigate(['/infirmerie/dashboard']);
      } else if (role === Role.Pharmacien) {
        this.router.navigate(['/pharmacie/dashboard']);
      } else if (role === Role.Reception) {
        this.router.navigate(['/reception/dashboard']);
      } else if (role === Role.Assurance) {
        this.router.navigate(['/assurance/dashboard']);
      } else if (role === Role.Informaticien) {
        this.router.navigate(['/informatique/dashboard']);
      }
      else if (role === Role.Comptable) {
        this.router.navigate(['/comptable/dashboard']);
      } else {
        this.router.navigate(['/authentication/signin']);
      }
    }
  }
}