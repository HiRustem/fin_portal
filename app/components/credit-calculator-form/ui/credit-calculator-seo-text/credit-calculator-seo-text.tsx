const CreditCalculatorSeoText = () => {
  return (
    <div className='w-full flex flex-col gap-2 mt-4 mx-auto max-w-[841px] text-lg pb-6'>
      <h1 className='mb-1 font-bold'>FinFormulas — удобные финансовые калькуляторы</h1>
      <p className='mb-4'>
        Наш <strong className='font-normal'>кредитный калькулятор</strong> поможет быстро и
        бесплатно рассчитать график платежей по займу или кредиту. Укажите сумму, процентную ставку,
        срок, дату начала — и вы получите полный
        <strong className='font-normal'>платежный график</strong> с деталями по каждому месяцу.
      </p>

      <h2 className='mb-1 font-bold'>Поддерживаются:</h2>
      <ul className='flex flex-col gap-2 list-disc ml-4 mb-4'>
        <li>аннуитетные и дифференцированные платежи;</li>
        <li>расчет ежемесячного платежа и переплаты по кредиту;</li>
        <li>учет даты выдачи кредита;</li>
        <li>удобный формат таблицы с возможностью копирования;</li>
      </ul>

      <h2 className='mb-1 font-bold'>Как пользоваться калькулятором</h2>
      <ol className='flex flex-col gap-2 mb-2 pl-5 list-decimal'>
        <li>Введите сумму кредита или займа.</li>
        <li>Укажите годовую процентную ставку.</li>
        <li>Выберите срок кредитования — в месяцах или годах.</li>
        <li>Задайте дату выдачи кредита.</li>
        <li>Выберите порядок погашения — аннуитетный или дифференцированный.</li>
        <li>
          Нажмите кнопку <strong>&quot;Рассчитать&quot;</strong>.
        </li>
      </ol>

      <p className='mb-4'>
        Ниже отобразится таблица с ежемесячными платежами, включая:
        <strong className='font-normal'>даты, суммы основного долга, процентов и остатка</strong>.
        Калькулятор учитывает все параметры и подойдет для предварительной оценки условий
        потребительского кредита, ипотеки или автокредита.
      </p>

      <h2 className='mb-1 font-bold'>Почему стоит использовать наш калькулятор</h2>
      <ul className='flex flex-col gap-2 list-disc pl-4 mb-2'>
        <li>Бесплатно и без регистрации</li>
        <li>Моментальный расчет прямо в браузере</li>
        <li>Работает на любых устройствах</li>
      </ul>

      <p className='mb-4'>
        Попробуйте сейчас — просто введите параметры и получите точный{' '}
        <strong className='font-normal'>график платежей по кредиту</strong>.
      </p>

      <div className='mb-4'>
        <h3 className='font-bold mb-2'>Часто задаваемые вопросы</h3>
        <details className='mb-2'>
          <summary className='mb-1 cursor-pointer'>Что такое аннуитетный платеж?</summary>
          <p>
            Аннуитетный платеж — это фиксированная сумма, которую вы платите каждый месяц,
            включающая проценты и основную часть долга.
          </p>
        </details>
        <details className='mb-2'>
          <summary className='mb-1 cursor-pointer'>Можно ли учитывать досрочные погашения?</summary>
          <p>Наш калькулятор пока не может учитывать частичное и полное досрочное погашение.</p>
        </details>
      </div>

      <p>© 2025 FinFormulas. Все права защищены.</p>
    </div>
  );
};

export default CreditCalculatorSeoText;
