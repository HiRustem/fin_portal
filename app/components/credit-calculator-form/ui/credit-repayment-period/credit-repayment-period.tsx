import { Label } from '../../../ui/label';
import { InputHTMLAttributes, useState } from 'react';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { CreditPeriodType } from '../../model/types';
import { useMediaQuery } from '~/lib/utils';
import { DrawerComponent, DrawerTrigger } from '~/components/ui/drawer';
import { Button } from '~/components/ui/button';
import { ChevronDown } from 'lucide-react';

const creditPeriodTypes = new Map<CreditPeriodType, string>()
  .set('months', 'месяца')
  .set('years', 'года');

interface ICreditRepaymentPeriod {
  defaultPeriodTypeValue: CreditPeriodType;
  periodTypeValue: CreditPeriodType;
  onChangePeriodType: (value: CreditPeriodType) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const CreditRepaymentPeriod = ({
  defaultPeriodTypeValue,
  inputProps,
  periodTypeValue,
  onChangePeriodType,
}: ICreditRepaymentPeriod) => {
  const isTabletS = useMediaQuery('(max-width: 576px)');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Label htmlFor={inputProps?.id}>Срок кредита/займа</Label>
      <div className='flex gap-2'>
        <Input {...inputProps} />

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
