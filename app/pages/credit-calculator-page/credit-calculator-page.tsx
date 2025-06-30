import { CreditCalculatorForm, StructuredData } from '~/components';
import { CreditRepaymentSchedule } from '~/components/credit-repayment-schedule';
import CreditCalculatorImage from '~/assets/images/credit_calculator.png';
import CreditCalculatorSeoText from '~/components/credit-calculator-form/ui/credit-calculator-seo-text/credit-calculator-seo-text';

const CreditCalculatorPage = () => {
  return (
    <>
      <StructuredData />
      <main>
        <div className='w-full flex flex-col gap-4 max-[870px]:px-[10px]'>
          <div className='w-full flex gap-2 mt-32 mx-auto max-w-[841px]'>
            <CreditCalculatorForm />

            <img
              className='w-full h-full max-w-[400px] max-h-[400px] max-[725px]:max-w-[350px] max-[725px]:max-h-[350px] max-[678px]:hidden'
              src={CreditCalculatorImage}
              alt='credit-calculator-image'
            />
          </div>

          <CreditRepaymentSchedule />

          <CreditCalculatorSeoText />
        </div>
      </main>
    </>
  );
};

export default CreditCalculatorPage;
