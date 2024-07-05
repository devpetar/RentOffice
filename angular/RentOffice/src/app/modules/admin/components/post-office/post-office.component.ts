import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrl: './post-office.component.scss'
})
export class PostOfficeComponent implements OnInit {
  
  officeDetailsForm: FormGroup;
  isSpinning = false;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private adminService: AdminService,
    private router: Router) {
    this.officeDetailsForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.isSpinning = true;
    this.adminService.postOfficeDetails(this.officeDetailsForm.value).subscribe((res) => {
      this.isSpinning = false;
      console.log(res);
      this.message
        .success(
          `Office Posted Successfully`,
          { nzDuration: 5000 }
        );
      this.router.navigateByUrl('/admin/offices');
    }, error => {
      this.message
        .error(
          `${error.error}`,
          { nzDuration: 5000 }
        )
    });
  }
}
