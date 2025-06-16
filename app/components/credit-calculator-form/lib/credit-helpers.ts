import { convertDateDDMMYYYYtoISO } from './date-helpers';

interface CreditParams {
  amount: number;
  percent: number;
  period: number;
  startDate: string;
}

interface Payment {
  date: string;
  total: number;
  interest: number;
  principal: number;
  balance: number;
}

interface CreditScheduleResult {
  schedule: Payment[];
  totalPayments: number;
  overpayment: number;
  fullCostPercent: number;
}

function finalizeSummary(amount: number, totalPayments: number) {
  const overpayment = +(totalPayments - amount).toFixed(2);
  const fullCostPercent = +((totalPayments / amount - 1) * 100).toFixed(3);

  return { totalPayments, overpayment, fullCostPercent };
}

export function calculateAnnuitySchedule(params: CreditParams): CreditScheduleResult {
  const { amount, percent, period, startDate } = params;

  const startDateISO = convertDateDDMMYYYYtoISO(startDate);
  const monthlyRate = percent / 100 / 12;
  const annuityCoef =
    (monthlyRate * Math.pow(1 + monthlyRate, period)) / (Math.pow(1 + monthlyRate, period) - 1);
  const monthlyPayment = +(amount * annuityCoef).toFixed(2);

  const schedule: Payment[] = [];
  let balance = amount;
  let prevDate = new Date(startDateISO);
  let totalPayments = 0;

  schedule.push({
    date: prevDate.toISOString().slice(0, 10),
    total: 0,
    interest: 0,
    principal: 0,
    balance,
  });

  for (let i = 1; i <= period; i++) {
    const currentDate = new Date(startDateISO);
    currentDate.setMonth(currentDate.getMonth() + i);

    const daysInPeriod = Math.round(
      (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    const interest = +(((balance * (percent / 100)) / 365) * daysInPeriod).toFixed(2);
    const principal = +(monthlyPayment - interest).toFixed(2);
    const total = +(interest + principal).toFixed(2);
    totalPayments += total;
    balance = +(balance - principal).toFixed(2);
    prevDate = currentDate;

    schedule.push({
      date: currentDate.toISOString().slice(0, 10),
      total,
      interest,
      principal,
      balance: balance > 0.01 ? balance : 0,
    });
  }

  return {
    schedule,
    ...finalizeSummary(amount, +totalPayments.toFixed(2)),
  };
}

export function calculateDifferentiatedSchedule(params: CreditParams): CreditScheduleResult {
  const { amount, percent, period, startDate } = params;
  const monthlyPrincipal = +(amount / period).toFixed(2);
  const startDateISO = convertDateDDMMYYYYtoISO(startDate);
  const schedule: Payment[] = [];
  let balance = amount;
  let prevDate = new Date(startDateISO);
  let totalPayments = 0;

  schedule.push({
    date: prevDate.toISOString().slice(0, 10),
    total: 0,
    interest: 0,
    principal: 0,
    balance,
  });

  for (let i = 1; i <= period; i++) {
    const currentDate = new Date(startDateISO);
    currentDate.setMonth(currentDate.getMonth() + i);

    const daysInPeriod = Math.round(
      (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    const interest = +(((balance * (percent / 100)) / 365) * daysInPeriod).toFixed(2);
    const total = +(monthlyPrincipal + interest).toFixed(2);
    totalPayments += total;
    balance = +(balance - monthlyPrincipal).toFixed(2);
    prevDate = currentDate;

    schedule.push({
      date: currentDate.toISOString().slice(0, 10),
      total,
      interest,
      principal: monthlyPrincipal,
      balance: balance > 0.01 ? balance : 0,
    });
  }

  return {
    schedule,
    ...finalizeSummary(amount, +totalPayments.toFixed(2)),
  };
}
