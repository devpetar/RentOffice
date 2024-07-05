import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { UserStorageService } from '../../../core/services/storage/user-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BACKEND_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postOfficeDetails(officeDTO: any): Observable<any> {
    return this.http
      .post<[]>(BACKEND_URL + "api/admin/office", officeDTO, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Office posted successfully')),
        catchError(this.handleError<[]>('Error posting the office', []))
      );
  }

  updateOfficeDetails(id: number, officeDTO: any): Observable<any> {
    return this.http
      .put<[]>(BACKEND_URL + `api/admin/office-update/${id}`, officeDTO, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Office updated successfully')),
        catchError(this.handleError<[]>('Error updating the office', []))
      );
  }

  getOfficeById(id: number): Observable<any> {
    return this.http
      .get<[]>(BACKEND_URL + `api/admin/get-office/${id}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Office fetched successfully')),
        catchError(this.handleError<[]>('Error fetching the office', []))
      );
  }

  getOffices(pageNumber: number): Observable<any> {
    return this.http
      .get<[]>(BACKEND_URL + `api/admin/all-offices/${pageNumber}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Offices fetched successfully')),
        catchError(this.handleError<[]>('Error fetching offices', []))
      );
  }

  getReservations(pageNumber: number): Observable<any> {
    return this.http
      .get<[]>(BACKEND_URL + `api/admin/reservations/${pageNumber}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Reservations fetched successfully')),
        catchError(this.handleError<[]>('Error fetching the reservations', []))
      );
  }

  changeReservationStatus(reservationId: number, status: string): Observable<any> {
    return this.http
      .get<[]>(BACKEND_URL + `api/admin/reservation/${reservationId}/${status}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Reservation status updated successfully')),
        catchError(this.handleError<[]>('Error updating reservation status.', []))
      );
  }

  deleteOffice(officeId: any): Observable<any> {
    return this.http
      .delete<[]>(BACKEND_URL + `api/admin/office-delete/${officeId}`, {
        headers: this.createAuthorizationHeader(),
      })
      .pipe(
        tap((_) => this.log('Office deleted successfully')),
        catchError(this.handleError<[]>('Error deleting office', []))
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
