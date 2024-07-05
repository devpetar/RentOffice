import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-view-offices',
  templateUrl: './view-offices.component.html',
  styleUrl: './view-offices.component.scss'
})
export class ViewOfficesComponent {
  
  currentPage: any = 1;
  total: any;
  loading = false;
  offices: any = [];

  constructor(private adminService: AdminService,
    private message: NzMessageService,
    private modalService: NzModalService) {
    this.getOffices();
  }

  showConfirm(officeId: any): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Do you want to delete this Office?',
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
      nzOnOk: () => this.deleteOffice(officeId)
    });
  }

  getOffices() {
    this.adminService.getOffices(this.currentPage - 1).subscribe((res) => {
      console.log(res);
      this.offices = res.officeDtoList;
      this.total = res.totalPages * 5;
    })
  }

  deleteOffice(officeId: any) {
    this.adminService.deleteOffice(officeId).subscribe((res) => {
      this.getOffices();
      this.message
        .success(
          `Office Deleted Successfully`,
          { nzDuration: 5000 }
        );
    })
  }

  pageIndexChange(value: any) {
    this.currentPage = value;
    this.getOffices();
  }
}
