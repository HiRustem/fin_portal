export type CreditPeriodType = 'years' | 'months';

export type CreditRepaymentType = 'annuity' | 'differentiated';

export type CreditCalculatorFormState = {
  creditAmount: number;
  creditPercent: number;
  creditPeriod: number;
  creditPeriodType: CreditPeriodType;
  creditStartDate: string;
  creditRepaymentType: CreditRepaymentType;
};

export interface CreditParams {
  amount: number;
  percent: number;
  period: number;
  startDate: string;
}

export interface Payment {
  date: string;
  total: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface CreditScheduleResult {
  schedule: Payment[];
  totalPayments: number;
  overpayment: number;
  fullCostPercent: number;
}
