import useCreditCalculatorFormStore from '../credit-calculator-form/model/store';
import { useShallow } from 'zustand/shallow';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const CreditRepaymentSchedule = () => {
  const { schedule, fullCostPercent, overpayment, totalPayments } = useCreditCalculatorFormStore(
    useShallow((state) => ({
      schedule: state.schedule,
      fullCostPercent: state.fullCostPercent,
      overpayment: state.overpayment,
      totalPayments: state.totalPayments,
    })),
  );

  if (!schedule.length) return null;

  return (
    <div className='relative w-full max-w-[841px] mx-auto max-h-[350px] overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-200 overflow-y-auto'>
      <Table>
        <TableCaption>График платежей</TableCaption>

        <TableHeader className='sticky top-0 bg-white dark:bg-zinc-900'>
          <TableRow>
            <TableHead className='whitespace-nowrap'>Дата</TableHead>
            <TableHead className='whitespace-nowrap'>Платеж</TableHead>
            <TableHead className='whitespace-nowrap'>Проценты</TableHead>
            <TableHead className='whitespace-nowrap'>Тело кредита</TableHead>
            <TableHead className='whitespace-nowrap'>Остаток</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className='max-h-[350px] overflow-auto'>
          {schedule.map((payment) => (
            <TableRow key={payment.date}>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.balance}</TableCell>
              <TableCell>{payment.interest}</TableCell>
              <TableCell>{payment.principal}</TableCell>
              <TableCell>{payment.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className='whitespace-nowrap'>Всего {totalPayments}</TableCell>
            <TableCell className='whitespace-nowrap'>Полный процент: {fullCostPercent}</TableCell>
            <TableCell className='whitespace-nowrap'>Переплата: {overpayment}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CreditRepaymentSchedule;
