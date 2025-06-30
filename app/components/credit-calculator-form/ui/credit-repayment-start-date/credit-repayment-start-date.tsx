import { useState } from 'react';
import {
  convertDateDDMMYYYYtoISO,
  getCreditStartDate,
  isValidDate,
  isValidDateString,
} from '../../lib/date-helpers';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer';
import { useMediaQuery } from '~/lib/utils';

interface ICreditRepaymentStartDate {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const CreditRepaymentStartDate = ({ value, onChange, error }: ICreditRepaymentStartDate) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [month, setMonth] = useState<Date>(date);

  const isTabletS = useMediaQuery('(max-width: 576px)');

  return (
    <div className='flex flex-col gap-2'>
      <Label htmlFor='date' className='px-1'>
        Дата выдачи
      </Label>

      <div className='relative flex gap-2'>
        <div className='flex flex-col gap-2 w-full'>
          <Input
            id='date'
            name='creditStartDate'
            value={value}
            placeholder='01.01.2001'
            className='bg-background pr-10 w-full'
            onChange={(e) => {
              onChange(e.target.value);

              if (!isValidDateString(e.target.value)) return;

              const convertedDate = convertDateDDMMYYYYtoISO(e.target.value);

              const date = new Date(convertedDate);

              if (isValidDate(date)) {
                setDate(date);
                setMonth(date);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setOpen(true);
              }
            }}
            error={error}
          />
        </div>

        {isTabletS ? (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant='outline'>
                <CalendarIcon className='size-3.5' />
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <div className='mx-auto w-full max-w-sm pb-6'>
                <DrawerHeader>
                  <DrawerTitle>Дата выдачи</DrawerTitle>
                  <DrawerDescription>Выберите дату выдачи</DrawerDescription>
                </DrawerHeader>

                <div className='flex items-center justify-center p-4 pb-4'>
                  <Calendar
                    mode='single'
                    selected={date}
                    captionLayout='dropdown'
                    month={month}
                    onMonthChange={setMonth}
                    onSelect={(date) => {
                      if (!date) return;

                      setDate(date);
                      onChange(getCreditStartDate(date));
                      setOpen(false);
                    }}
                  />
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button id='date-picker' variant='ghost' className='absolute top-0 right-0'>
                <CalendarIcon className='size-3.5' />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className='w-auto overflow-hidden p-0'
              align='end'
              alignOffset={-8}
              sideOffset={10}
            >
              <Calendar
                mode='single'
                selected={date}
                captionLayout='dropdown'
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  if (!date) return;

                  setDate(date);
                  onChange(getCreditStartDate(date));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default CreditRepaymentStartDate;
