export interface Loan {
    [x: string]: string | number;
    mobileNumber: string;
    loanNumber: string;
    loanType: string;
    totalLoan: number;
    amountPaid: number;
    outstandingAmount: number;
  }
  