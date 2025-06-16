import { Label } from '../../../ui/label';
import { useState } from 'react';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { CreditCalculatorFormState, CreditPeriodType } from '../../model/types';
import { useMediaQuery } from '~/lib/utils';
import { DrawerComponent, DrawerTrigger } from '~/components/ui/drawer';
import { Button } from '~/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { NumericFormat } from 'react-number-format';
import FormFieldError from '~/components/ui/error';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

const creditPeriodTypes = new Map<CreditPeriodType, string>()
  .set('months', 'месяца')
  .set('years', 'года');

interface ICreditRepaymentPeriod {
  defaultPeriodTypeValue: CreditPeriodType;
  periodTypeValue: CreditPeriodType;
  onChangePeriodType: (value: CreditPeriodType) => void;
  field: ControllerRenderProps<CreditCalculatorFormState, 'creditPeriod'>;
  fieldState: ControllerFieldState;
}

const CreditRepaymentPeriod = ({
  defaultPeriodTypeValue,
  periodTypeValue,
  onChangePeriodType,
  field,
  fieldState,
}: ICreditRepaymentPeriod) => {
  const isTabletS = useMediaQuery('(max-width: 576px)');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Label htmlFor='credit-period-input'>Срок кредита/займа</Label>

      <div className='flex gap-2'>
        <div className='flex flex-col gap-2 w-full'>
          <NumericFormat
            customInput={Input}
            id='credit-period-input'
            name='creditPeriod'
            onChange={field.onChange}
            value={field.value}
          />

          <FormFieldError error={fieldState?.error?.message} />
        </div>

        {isTabletS ? (
          <DrawerComponent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            value={periodTypeValue}
            valuesMap={creditPeriodTypes}
            title='Срок кредита/займа'
            trigger={
              <DrawerTrigger asChild>
                <Button variant='outline'>
                  <p>{creditPeriodTypes.get(periodTypeValue)}</p>

                  <ChevronDown className='size-3.5' />
                </Button>
              </DrawerTrigger>
            }
            onSelect={onChangePeriodType}
          />
        ) : (
          <Select
            open={isOpen}
            onOpenChange={(open: boolean) => setIsOpen(open)}
            name='creditPeriodType'
            value={periodTypeValue}
            onValueChange={(value: string) => {
              onChangePeriodType(value as CreditPeriodType);
            }}
          >
            <SelectTrigger className='w-[200px]'>
              <SelectValue defaultChecked defaultValue={defaultPeriodTypeValue} />
            </SelectTrigger>

            <SelectContent>
              {Array.from(creditPeriodTypes.keys()).map((typeItem) => (
                <SelectItem className='cursor-pointer' key={typeItem} value={typeItem}>
                  {creditPeriodTypes.get(typeItem)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};

export default CreditRepaymentPeriod;
