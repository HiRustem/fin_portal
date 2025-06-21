import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Payment } from '~/components/credit-calculator-form';

interface ISetScheduleDto {
    schedule: Payment[];
    fullCostPercent: number;
    overpayment: number;
    totalPayments: number;
}

interface ICreditCalculatorFormState {
    schedule: Payment[];
    fullCostPercent: number;
    overpayment: number;
    totalPayments: number;
}

interface ICreditCalculatorFormActions {
    setSchedule: (schedule: ISetScheduleDto) => void;
}

const defaultValues: ICreditCalculatorFormState = {
    schedule: [],
    fullCostPercent: 0,
    overpayment: 0,
    totalPayments: 0,
}

const useCreditCalculatorFormStore = create<ICreditCalculatorFormState & ICreditCalculatorFormActions>()(
    immer((set) => ({
        setSchedule: ({ schedule, fullCostPercent, overpayment, totalPayments }) => {
            set({ schedule, fullCostPercent, overpayment, totalPayments });
        },

        ...defaultValues,
    }))
)

export default useCreditCalculatorFormStore;