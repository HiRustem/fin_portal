import { Input } from '../ui/input';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Label } from '../ui/label';
import {
  creditAmountRules,
  creditPercentRules,
  creditPeriodRules,
  creditRepaymentTypeRules,
  creditStartDateRules,
  defaultCreditCalculcatorFormValues,
} from './model/constants';
import { CreditCalculatorFormState } from './model/types';
import CreditRepaymentPeriod from './ui/credit-repayment-period/credit-repayment-period';
import CreditRepaymentStartDate from './ui/credit-repayment-start-date/credit-repayment-start-date';
import CreditRepaymentTypeSelect from './ui/credit-repayment-type/credit-repayment-type';
import { Button } from '../ui/button';
import { calculateAnnuitySchedule, calculateDifferentiatedSchedule } from './lib/credit-helpers';
import FormFieldError from '../ui/error';
import { NumericFormat } from 'react-number-format';

const CreditCalculatorForm = () => {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: defaultCreditCalculcatorFormValues,
  });

  const watchCreditPeriodType = methods.watch('creditPeriodType');

  const onSubmit = (data: CreditCalculatorFormState) => {
    console.log(data);

    const amount = Number(data.creditAmount);
    const percent = Number(data.creditPercent);
    const period =
      data.creditPeriodType === 'years'
        ? Number(data.creditPeriod) * 12
        : Number(data.creditPeriod);
    const startDate = data.creditStartDate;

    if (data.creditRepaymentType === 'annuity') {
      const result = calculateAnnuitySchedule({
        amount,
        percent,
        period,
        startDate,
      });

      console.log('annutiy', result);
    } else {
      const result = calculateDifferentiatedSchedule({
        amount,
        percent,
        period,
        startDate,
      });

      console.log('differentiate', result);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className='' onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name='creditAmount'
          rules={creditAmountRules}
          control={methods.control}
          render={({ field, fieldState }) => {
            return (
              <div>
                <Label htmlFor='credit-amount-input'>Сумма кредита/займа</Label>

                <NumericFormat
                  id='credit-amount-input'
                  name='creditAmount'
                  suffix=' ₽'
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  customInput={Input}
                  decimalScale={0}
                  fixedDecimalScale
                  thousandSeparator=' '
                />

                <FormFieldError error={fieldState?.error?.message} />
              </div>
            );
          }}
        />

        <Controller
          name='creditPercent'
          rules={creditPercentRules}
          control={methods.control}
          render={({ field, fieldState }) => {
            return (
              <div>
                <Label htmlFor='credit-percent-input'>Процентная ставка, % годовых</Label>

                <NumericFormat
                  id='credit-percent-input'
                  name='creditPercent'
                  value={field.value}
                  onValueChange={(values) => {
                    field.onChange(values.value);
                  }}
                  suffix='%'
                  decimalScale={2}
                  fixedDecimalScale
                  customInput={Input}
                />

                <FormFieldError error={fieldState?.error?.message} />
              </div>
            );
          }}
        />

        <Controller
          name='creditPeriod'
          rules={creditPeriodRules}
          control={methods.control}
          render={({ field, fieldState }) => {
            return (
              <CreditRepaymentPeriod
                defaultPeriodTypeValue={defaultCreditCalculcatorFormValues.creditPeriodType}
                periodTypeValue={watchCreditPeriodType}
                onChangePeriodType={(value) => {
                  methods.setValue('creditPeriodType', value);
                }}
                field={field}
                fieldState={fieldState}
              />
            );
          }}
        />

        <Controller
          name='creditStartDate'
          rules={creditStartDateRules}
          control={methods.control}
          render={({ field }) => {
            return <CreditRepaymentStartDate value={field.value} onChange={field.onChange} />;
          }}
        />

        <Controller
          name='creditRepaymentType'
          rules={creditRepaymentTypeRules}
          control={methods.control}
          render={({ field }) => {
            return (
              <CreditRepaymentTypeSelect
                defaultRepaymentTypeValue={defaultCreditCalculcatorFormValues.creditRepaymentType}
                repaymentTypeValue={field.value}
                onChangeRepaymentType={field.onChange}
              />
            );
          }}
        />

        <Button disabled={!methods.formState.isValid} type='submit' variant='outline'>
          Посчитать
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreditCalculatorForm;
