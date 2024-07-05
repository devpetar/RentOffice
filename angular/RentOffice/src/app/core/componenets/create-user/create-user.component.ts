import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent implements OnInit {

  createUserForm!: FormGroup;
  isSpinning = false;

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private message: NzMessageService,
    private router: Router,) { }

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
    });
  }

  submitForm(): void {

    this.isSpinning = true;
    this.authService.register(this.createUserForm.value).subscribe(
      (res) => {
        this.isSpinning = false;
        if (res.id != null) {
          this.message.success("Account created", { nzDuration: 5000 });
          this.router.navigateByUrl("/");
        } else {
          this.message
            .error(
              `${res.message}`,
              { nzDuration: 5000 }
            )
        }
      })
  }
}
