import type { MetaFunction } from '@remix-run/node';
import { CreditCalculatorPage } from '~/pages';

export const meta: MetaFunction = () => {
  return [{ title: 'Credit Calculator' }, { name: 'description', content: 'Credit Calculator' }];
};

export default function CreditCalculator() {
  return <CreditCalculatorPage />;
}
