import { useState } from 'react';
import { getCreditStartDate, isValidDate } from '../../lib/date-helpers';
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
}

const CreditRepaymentStartDate = ({ value, onChange }: ICreditRepaymentStartDate) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [month, setMonth] = useState<Date>(date);

  const isTabletS = useMediaQuery('(max-width: 576px)');

  return (
    <div className='flex flex-col gap-3'>
      <Label htmlFor='date' className='px-1'>
        Дата выдачи
      </Label>

      <div className='relative flex gap-2'>
        <Input
          id='date'
          name='creditStartDate'
          value={value}
          placeholder='01.01.2001'
          className='bg-background pr-10'
          onChange={(e) => {
            const date = new Date(getCreditStartDate(new Date(e.target.value)));
            onChange(e.target.value);
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
        />

        {isTabletS ? (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant='outline'>
                <CalendarIcon className='size-3.5' />
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <div className='mx-auto w-full max-w-sm'>
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
              <Button
                id='date-picker'
                variant='ghost'
                className='absolute top-1/2 right-2 size-6 -translate-y-1/2'
              >
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
