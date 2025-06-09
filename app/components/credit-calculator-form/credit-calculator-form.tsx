import { Input } from "../ui/input";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import {
  creditAmountRules,
  creditPercentRules,
  defaultCreditCalculcatorFormValues,
} from "./model/constants";
import { CreditCalculatorFormState } from "./model/types";
import CreditRepaymentPeriod from "./ui/credit-repayment-period/credit-repayment-period";

const CreditCalculatorForm = () => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: defaultCreditCalculcatorFormValues,
  });

  const onSubmit = (data: CreditCalculatorFormState) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Controller
          name="creditAmount"
          rules={creditAmountRules}
          control={methods.control}
          render={({ field, fieldState, formState }) => {
            return (
              <div>
                <Label htmlFor="credit-amount-input">Сумма кредита/займа</Label>
                <Input
                  id="credit-amount-input"
                  name="creditAmount"
                  onChange={field.onChange}
                  value={field.value}
                />
              </div>
            );
          }}
        />

        <Controller
          name="creditPercent"
          rules={creditPercentRules}
          control={methods.control}
          render={({ field, fieldState, formState }) => {
            return (
              <div>
                <Label htmlFor="credit-percent-input">
                  Процентная ставка, % годовых
                </Label>
                <Input
                  id="credit-percent-input"
                  name="creditPercent"
                  onChange={field.onChange}
                  value={field.value}
                />
              </div>
            );
          }}
        />

        <Controller
          name="creditPeriod"
          rules={{}}
          control={methods.control}
          render={({ field, fieldState, formState }) => {
            return (
              <CreditRepaymentPeriod
                id="credit-period-input"
                name="creditPeriod"
                onChange={field.onChange}
                value={field.value}
              />
            );
          }}
        />
      </form>
    </FormProvider>
  );
};

export default CreditCalculatorForm;
