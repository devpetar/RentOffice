import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { UserStorageService } from '../../../core/services/storage/user-storage.service';

const BACKEND_URL = "http://localhost:8080/"; 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  bookOffice(reservationDTO: any): Observable<any> {
    return this.http
      .post<[]>(BACKEND_URL + "api/customer/reserve", reservationDTO, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Reservation created successfully')),
        catchError(this.handleError<[]>('Error creating reservation', []))
      );
  }

  getOffices(pageNumber: number): Observable<any> {
    return this.http
      .get<[]>(BACKEND_URL + `api/customer/offices/${pageNumber}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Offices fetched successfully')),
        catchError(this.handleError<[]>('Error fetching offices', []))
      );
  }

  getMyReservations(pageNumber: number): Observable<any> {
    return this.http
      .get<[]>(BACKEND_URL + `api/customer/reservations/${UserStorageService.getUserId()}/${pageNumber}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Bookings fetched successfully')),
        catchError(this.handleError<[]>('Error fetching Bookings', []))
      );
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    );
  }

  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }

  handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
