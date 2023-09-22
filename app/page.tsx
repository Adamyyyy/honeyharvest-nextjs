import BenefitsSection from '@/components/BenefitsSection';
import ProductionSection from '@/components/ProductionSection';
import PromoSection from 'components/PromoSection';

export default function Home() {
  return (
    <main>
      <PromoSection />
      <BenefitsSection />
      <ProductionSection/>
    </main>
  );
}
