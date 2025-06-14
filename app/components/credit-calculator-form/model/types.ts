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
