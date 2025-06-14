import { FieldValue, FieldValues, RegisterOptions } from 'react-hook-form';
import { CreditCalculatorFormState } from './types';
import { getCreditStartDate } from '../lib/date-helpers';

export const creditAmountRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditAmount'
> = {};

export const creditPercentRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditPercent'
> = {};

export const creditPeriodRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditPeriod'
> = {};

type CreditCalculatorFormFieldRules<
  TFieldValues extends FieldValues,
  TFieldName extends FieldValue<TFieldValues>,
> = Omit<
  RegisterOptions<TFieldValues, TFieldName>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

export const defaultCreditCalculcatorFormValues: CreditCalculatorFormState = {
  creditAmount: 100000,
  creditPercent: 5,
  creditPeriod: 3,
  creditPeriodType: 'years',
  creditStartDate: getCreditStartDate(new Date()),
  creditRepaymentType: 'annuity',
};
