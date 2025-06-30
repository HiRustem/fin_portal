const CreditCalculatorSeoText = () => {
  return (
    <div className='w-full flex flex-col gap-2 mt-4 mx-auto max-w-[841px] text-lg pb-6'>
      <h1 className='pb-1 font-bold'>
        <b className='font-bold'>Кредитный калькулятор</b> онлайн — точный расчет графика платежей
        по кредиту
      </h1>

      <p className='pb-4'>
        Планируете взять кредит или уже оформили заем? Наш <cite>Кредитный калькулятор</cite> — это
        удобный инструмент для{' '}
        <strong className='font-normal'>расчета графика платежей по кредиту</strong> в режиме
        онлайн. Без регистрации, бесплатно и точно — достаточно ввести параметры кредита.
      </p>

      <h2 className='pb-1 font-bold'>
        Что умеет <b className='font-bold'>калькулятор</b>?
      </h2>

      <ul className='pb-4 list-disc pl-4'>
        <li className='pb-1'>
          Выполняет <strong className='font-normal'>расчет ежемесячных платежей по кредиту</strong>{' '}
          — выберите <em>аннуитетную</em> или
          <em>дифференцированную</em> схему.
        </li>
        <li className='pb-1'>
          Показывает <strong className='font-normal'>график платежей с разбивкой по месяцам</strong>
          : проценты и основная сумма.
        </li>
        <li className='pb-1'>
          Учитывает{' '}
          <strong className='font-normal'>частичное и полное досрочное погашение кредита</strong> —
          посмотрите, сколько сэкономите.
        </li>
        <li className='pb-1'>
          Работает <strong className='font-normal'>онлайн и бесплатно</strong> — не нужно
          регистрироваться или оставлять контактные данные.
        </li>
      </ul>

      <h2 className='pb-1 font-bold'>
        Кому будет полезен <b className='font-bold'>кредитный калькулятор</b>?
      </h2>

      <ul className='pb-4 list-disc pl-4'>
        <li className='pb-1'>
          Заемщикам, которые хотят{' '}
          <strong className='font-normal'>рассчитать потребительский кредит онлайн</strong> или
          подобрать оптимальные условия по ипотеке.
        </li>
        <li className='pb-1'>
          Тем, кто планирует <strong className='font-normal'>досрочно погасить кредит</strong> и
          хочет увидеть влияние на переплату.
        </li>
        <li className='pb-1'>
          Студентам, аналитикам и всем, кто изучает{' '}
          <b className='font-normal'>финансовые инструменты</b>.
        </li>
      </ul>

      <h2 className='pb-1 font-bold'>Как использовать?</h2>

      <ol className='pb-4 list-decimal pl-5'>
        <li className='pb-1'>Введите сумму кредита, срок и процентную ставку.</li>
        <li className='pb-1'>Выберите тип платежей: аннуитетный или дифференцированный.</li>
        <li className='pb-1'>При необходимости — добавьте параметры досрочного погашения.</li>
        <li className='pb-1'>Нажмите кнопку «Рассчитать» и получите график.</li>
      </ol>

      <h2 className='pb-1 font-bold'>
        Почему стоит выбрать <b className='font-bold'>наш калькулятор</b>?
      </h2>

      <p className='flex flex-col gap-1'>
        <span>
          <strong className='font-normal'>Рассчитать кредит онлайн</strong> — значит получить точные
          данные без похода в банк.
        </span>
        <span>
          Вы можете <strong className='font-normal'>сравнить разные варианты кредита</strong> и
          выбрать наилучший.
        </span>
        <span>
          Расчет учитывает <em>актуальные банковские правила</em>.
        </span>
        <span>
          Всё максимально прозрачно: вы сразу видите, сколько платите процентов и основного долга.
        </span>
      </p>
    </div>
  );
};

export default CreditCalculatorSeoText;
