import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { InputHTMLAttributes } from "react";

const CreditRepaymentPeriod = (
  props?: InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <div>
      <Label htmlFor={props?.id}>Срок кредита/займа</Label>
      <Input {...props} />
    </div>
  );
};

export default CreditRepaymentPeriod;
