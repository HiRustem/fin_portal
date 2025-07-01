import type { MetaFunction } from '@remix-run/node';
import { CreditCalculatorPage } from '~/pages';

export const meta: MetaFunction = () => {
  return [
    { title: 'Кредитный калькулятор — FinFormulas' },
    {
      name: 'description',
      content:
        'FinFormulas — удобные и точные финансовые калькуляторы: кредиты, ипотеки, рассрочки и многое другое.',
    },
    {
      property: 'og:title',
      content: 'Кредитный калькулятор — FinFormulas',
    },
    {
      property: 'og:description',
      content:
        'FinFormulas — удобные и точные финансовые калькуляторы: кредиты, ипотеки, рассрочки и многое другое.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://finformulas.ru/' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Кредитный калькулятор — FinFormulas' },
    {
      name: 'twitter:description',
      content:
        'FinFormulas — удобные и точные финансовые калькуляторы: кредиты, ипотеки, рассрочки и многое другое.',
    },
  ];
};

export default function Index() {
  return <CreditCalculatorPage />;
}
