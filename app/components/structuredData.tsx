export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Кредитный калькулятор — FinFormulas',
    url: 'https://finformulas.ru/',
    description:
      'FinFormulas — удобные и точные финансовые калькуляторы: кредиты, ипотеки, рассрочки и многое другое.',
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
