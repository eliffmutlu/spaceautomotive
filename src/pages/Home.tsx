import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
//import FeaturedVehicles from '../components/FeaturedVehicles';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import { useTranslation } from 'react-i18next';
import { Zap, ShieldCheck, Leaf, Brain } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const whyChooseUsReasons = [
    {
      icon: <Zap />,
      description: t('aboutWhy1Description'),
    },
    {
      icon: <ShieldCheck />,
      description: t('aboutWhy2Description'),
    },
    {
      icon: <Leaf />,
      description: t('aboutWhy3Description'),
    },
    {
      icon: <Brain />,
      description: t('aboutWhy4Description'),
    },
  ];

  return (
    <div className="bg-white">
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        buttonText={t('exploreModels')}
      />
      <CompanyOverview />
      {/* <FeaturedVehicles title={t('featuredVehiclesTitle')} /> */}
      <WhyChooseUs
        title={t('aboutWhySpaceAutomotiveTitle')}
        subtitle={t('aboutWhySpaceAutomotiveSubtitle')}
        reasons={whyChooseUsReasons}
      />
      <CallToAction
        title={t('callToActionTitle')}
        subtitle={t('callToActionSubtitle')}
        buttonText={t('contactUs')}
      />
    </div>
  );
};

export default Home;
