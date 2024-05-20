import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = 'http://localhost:8090/loans/api'; // Base URL for backend API

  constructor(private http: HttpClient) { }

  getAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.apiUrl}/fetch`);
  }

  addLoan(loanData: Loan): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, loanData);
  }

  updateLoan(loanId: string, updatedLoanData: Loan): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, updatedLoanData);
  }

  deleteLoan(loanId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete?mobileNumber=${loanId}`);
  }
}
