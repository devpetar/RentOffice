import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-view-reservations',
  templateUrl: './view-reservations.component.html',
  styleUrl: './view-reservations.component.scss'
})
export class ViewReservationsComponent {

  currentPage: any = 1;
  total: any;
  reservations: any;
  isSpinning = false;

  constructor(private customerService: CustomerService) {
    this.getReservations();
  }

  getReservations() {
    this.isSpinning = true;
    this.customerService.getMyReservations(this.currentPage - 1).subscribe((res) => {
      console.log(res);
      this.isSpinning = false;
      this.reservations = res.reservationDtoList;
      this.total = res.totalPages * 5;
    })
  }

  pageIndexChange(value: any) {
    this.currentPage = value;
    this.getReservations();
  }
}
