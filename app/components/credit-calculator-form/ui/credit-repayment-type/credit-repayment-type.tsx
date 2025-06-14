import { useState } from 'react';
import { Label } from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { CreditRepaymentType } from '../../model/types';

import { DrawerComponent } from '~/components/ui/drawer';
import { useMediaQuery } from '~/lib/utils';

const creditRepaymentTypes = new Map<CreditRepaymentType, string>()
  .set('annuity', 'Аннуитетный')
  .set('differentiated', 'Дифференцированный');

interface ICreditRepaymentType {
  repaymentTypeValue: CreditRepaymentType;
  defaultRepaymentTypeValue: CreditRepaymentType;
  onChangeRepaymentType: (value: CreditRepaymentType) => void;
}

const CreditRepaymentTypeSelect = ({
  repaymentTypeValue,
  defaultRepaymentTypeValue,
  onChangeRepaymentType,
}: ICreditRepaymentType) => {
  const isTabletS = useMediaQuery('(max-width: 576px)');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isTabletS) {
    return (
      <div className='flex gap-2 items-center'>
        <Label>Порядок погашения</Label>

        <DrawerComponent<CreditRepaymentType>
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          value={repaymentTypeValue}
          valuesMap={creditRepaymentTypes}
          title='Порядок погашения'
          description='Выберите тип погашения'
          onSelect={onChangeRepaymentType}
        />
      </div>
    );
  }

  return (
    <div>
      <Label htmlFor='credit-repayment-type'>Порядок погашения</Label>
      <Select
        open={isOpen}
        onOpenChange={(open: boolean) => setIsOpen(open)}
        name='creditRepaymentType'
        value={repaymentTypeValue}
        onValueChange={(value: string) => {
          onChangeRepaymentType(value as CreditRepaymentType);
        }}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue defaultChecked defaultValue={defaultRepaymentTypeValue} />
        </SelectTrigger>

        <SelectContent>
          {Array.from(creditRepaymentTypes.keys()).map((typeItem) => (
            <SelectItem className='cursor-pointer' key={typeItem} value={typeItem}>
              {creditRepaymentTypes.get(typeItem)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CreditRepaymentTypeSelect;
