import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CustomerService } from '../services/customer.service';
import { UserStorageService } from '../../../core/services/storage/user-storage.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrl: './offices.component.scss'
})
export class OfficesComponent {
  
  currentPage: any = 1;
  total: any;
  isSpinning = false;
  isVisibleMiddle = false;
  loading = false;
  offices: any = [];
  id: number;
  date: Date[] = [];
  checkInDate: Date;
  checkOutDate: Date;

  constructor(private customerService: CustomerService,
    private router: Router,
    private message: NzMessageService) {
    this.getOffices();
  }

  onChange(result: Date[]): void {
    if (result.length === 2) {
      this.checkInDate = result[0];
      this.checkOutDate = result[1];
    }
  }

  showModalMiddle(id: number): void {
    this.isVisibleMiddle = true;
    this.id = id;
  }

  handleOkMiddle(): void {
    this.isSpinning = true;
    let obj = {
      userId: UserStorageService.getUserId(),
      officeId: this.id,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate
    }
    this.customerService.bookOffice(obj).subscribe((res) => {
      this.isSpinning = false;
      console.log(res);
      this.message
        .success(
          `Request submitted for approval!`,
          { nzDuration: 5000 }
        );
      this.router.navigateByUrl('/customer/reservations');
    }, error => {
      this.message
        .error(
          `${error.error}`,
          { nzDuration: 5000 }
        )
    });
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  getOffices() {
    this.customerService.getOffices(this.currentPage - 1).subscribe((res) => {
      console.log(res);
      this.offices = res.officeDtoList;
      this.total = res.totalPages * 5;
    })
  }

  pageIndexChange(value: any) {
    this.currentPage = value;
    this.getOffices();
  }
}
