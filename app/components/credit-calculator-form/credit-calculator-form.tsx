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
import { NumericFormat } from 'react-number-format';
import useCreditCalculatorFormStore from './model/store';
const CreditCalculatorForm = () => {
  const setSchedule = useCreditCalculatorFormStore((state) => state.setSchedule)

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

      setSchedule({ ...result });

      console.log('annutiy', result);
    } else {
      const result = calculateDifferentiatedSchedule({
        amount,
        percent,
        period,
        startDate,
      });

      setSchedule({ ...result });

      console.log('differentiate', result);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className='max-w-[550px] flex flex-col gap-2 max-[576px]:max-w-full w-full mx-auto' onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name='creditAmount'
          rules={creditAmountRules}
          control={methods.control}
          render={({ field, fieldState }) => {
            return (
              <div className='flex flex-col gap-2'>
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
                  error={fieldState?.error?.message}
                />
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
              <div className='flex flex-col gap-2'>
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
                  error={fieldState?.error?.message}
                />
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
          render={({ field, fieldState }) => {
            return (
              <CreditRepaymentStartDate
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            );
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

        <Button className='mt-4' disabled={!methods.formState.isValid} type='submit' variant='outline'>
          Посчитать
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreditCalculatorForm;
