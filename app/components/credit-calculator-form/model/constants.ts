import { FieldValue, FieldValues, RegisterOptions } from 'react-hook-form';
import { CreditCalculatorFormState } from './types';
import { getCreditStartDate } from '../lib/date-helpers';

export const creditAmountRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditAmount'
> = {
  required: {
    value: true,
    message: '* Обязательное поле',
  },
  minLength: {
    value: 4,
    message: '* Минимальное число символов - 4',
  },
};

export const creditPercentRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditPercent'
> = {
  required: {
    value: true,
    message: '* Обязательное поле',
  },
};

export const creditPeriodRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditPeriod'
> = {
  required: {
    value: true,
    message: '* Обязательное поле',
  },
  maxLength: {
    value: 4,
    message: '* Максимальное количество символов - 4',
  },
};

export const creditStartDateRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditStartDate'
> = {};

export const creditRepaymentTypeRules: CreditCalculatorFormFieldRules<
  CreditCalculatorFormState,
  'creditRepaymentType'
> = {};

export const validateNumberValue = (value: string) => {
  return value.match(/\d/g)?.join('') || '';
};

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
