import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-offices',
  templateUrl: './update-offices.component.html',
  styleUrl: './update-offices.component.scss'
})
export class UpdateOfficesComponent {

  id: any = this.activatedroute.snapshot.params['id'];
  updateOfficeForm: FormGroup;
  isSpinning = false;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private adminService: AdminService,
    private router: Router,
    private activatedroute: ActivatedRoute) {
    this.updateOfficeForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.getOfficeById();
  }

  getOfficeById() {
    this.adminService.getOfficeById(this.id).subscribe((res) => {
      this.updateOfficeForm.patchValue(res);
    })
  }

  submitForm() {
    this.isSpinning = true;
    this.adminService.updateOfficeDetails(this.id, this.updateOfficeForm.value).subscribe((res) => {
      this.isSpinning = false;
      console.log(res);
      this.message
        .success(
          `Office updated successfully`,
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
