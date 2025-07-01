import type { MetaFunction } from '@remix-run/node';
import { CreditCalculatorPage } from '~/pages';

export const meta: MetaFunction = () => {
  return [
    { title: 'Кредитный онлайн калькулятор' },
    {
      name: 'description',
      content:
        'Онлайн кредитный калькулятор для расчета графика платежей по кредиту. Поддержка аннуитетных и дифференцированных платежей, досрочного погашения',
    },
    {
      property: 'og:title',
      content: 'Кредитный калькулятор онлайн — расчет графика платежей по кредиту',
    },
    {
      property: 'og:description',
      content:
        'Быстрый и точный расчет платежей по кредиту. Рассчитайте аннуитетные и дифференцированные платежи онлайн бесплатно.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://finformulas.ru/' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Кредитный калькулятор онлайн' },
    {
      name: 'twitter:description',
      content:
        'Онлайн калькулятор для расчета графика платежей по кредиту с учетом досрочного погашения.',
    },
  ];
};

export default function Index() {
  return <CreditCalculatorPage />;
}
