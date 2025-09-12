import { ShieldCheck, HeartHandshake, LayoutGrid, Building, Car, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-primary">
            {t('aboutHeroTitle')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            {t('aboutHeroSubtitle')}
          </p>
        </div>
      </section>

      {/* Marka Değerleri Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-primary">{t('aboutValuesTitle')}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('aboutValuesSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('aboutValue1Title')}</h3>
              <p className="text-muted-foreground">{t('aboutValue1Description')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('aboutValue2Title')}</h3>
              <p className="text-muted-foreground">{t('aboutValue2Description')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                <LayoutGrid className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('aboutValue3Title')}</h3>
              <p className="text-muted-foreground">{t('aboutValue3Description')}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('aboutValue4Title')}</h3>
              <p className="text-muted-foreground">{t('aboutValue4Description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Space Group Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary">{t('aboutSpaceGroupTitle')}</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                {t('aboutSpaceGroupSubtitle')}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary">{t('aboutSpaceAutomotiveTitle')}</h4>
                    <p className="text-muted-foreground">{t('aboutSpaceAutomotiveDescription')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-primary">{t('aboutSpaceElektrotechniekTitle')}</h4>
                    <p className="text-muted-foreground">{t('aboutSpaceElektrotechniekDescription')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Space Group Team Collaboration" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rakiplerden Farkı Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-primary">{t('aboutWhySpaceAutomotiveTitle')}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('aboutWhySpaceAutomotiveSubtitle')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold mb-2 text-primary">{t('aboutWhy1Title')}</h3>
              <p className="text-muted-foreground">{t('aboutWhy1Description')}</p>
            </div>
            <div className="p-8 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold mb-2 text-primary">{t('aboutWhy2Title')}</h3>
              <p className="text-muted-foreground">{t('aboutWhy2Description')}</p>
            </div>
            <div className="p-8 rounded-lg bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold mb-2 text-primary">{t('aboutWhy3Title')}</h3>
              <p className="text-muted-foreground">{t('aboutWhy3Description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
