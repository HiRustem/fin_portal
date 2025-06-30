export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Кредитный калькулятор онлайн',
    url: 'https://yourdomain.ru/', // заменишь на свой
    description:
      'Онлайн кредитный калькулятор для расчета графика платежей по кредиту. Поддержка аннуитетных и дифференцированных платежей, досрочного погашения.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'RUB',
    },
  };

  return (
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
