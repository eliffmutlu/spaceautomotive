import React from 'react';
import { useTranslation } from 'react-i18next';

const CompanyOverview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pl-12 pr-8 md:pl-20 md:pr-16">
        <div>
          <h2 className="text-4xl font-bold text-[#020873] mb-4">{t("companyOverviewHeading")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 border-l-4 border-[#020873] pl-4 italic">
            {t("companyOverviewDescription")}
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/AutomotiveLogo-100.jpg"
            alt="Company Logo"
            className="w-72 h-72 md:w-96 md:h-96 object-contain shadow-lg rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
