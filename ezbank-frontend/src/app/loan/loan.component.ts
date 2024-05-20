import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../loan.model';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent implements OnInit {
  loans: Loan[] = [];
  newLoanData: Loan = {
    mobileNumber: '',
    loanNumber: '',
    loanType: '',
    totalLoan: 0,
    amountPaid: 0,
    outstandingAmount: 0
  };

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.fetchLoans();
  }

  fetchLoans(): void {
    this.loanService.getAllLoans().subscribe(
      (data: Loan[]) => {
        this.loans = data;
      },
      (error) => {
        console.error('Error fetching loans:', error);
      }
    );
  }

  addLoan(): void {
    this.loanService.addLoan(this.newLoanData).subscribe(
      () => {
        this.fetchLoans();
        this.newLoanData = {
          mobileNumber: '',
          loanNumber: '',
          loanType: '',
          totalLoan: 0,
          amountPaid: 0,
          outstandingAmount: 0
        };
      },
      (error) => {
        console.error('Error adding loan:', error);
      }
    );
  }

  updateLoan(loanId: string, updatedLoanData: Loan): void {
    this.loanService.updateLoan(loanId, updatedLoanData).subscribe(
      () => {
        this.fetchLoans();
      },
      (error) => {
        console.error('Error updating loan:', error);
      }
    );
  }

  deleteLoan(loanId: string): void {
    this.loanService.deleteLoan(loanId).subscribe(
      () => {
        this.fetchLoans();
      },
      (error) => {
        console.error('Error deleting loan:', error);
      }
    );
  }
}