import React from 'react';
import { Zap, ShieldCheck, Leaf, Brain } from 'lucide-react';

interface Reason {
  icon: React.ReactNode;
  description: string;
}

interface WhyChooseUsProps {
  title: string;
  subtitle: string;
  reasons: Reason[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ title, subtitle, reasons }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#020873] mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col items-center text-center transform hover:translate-y-[-5px] transition-transform duration-300">
              <div className="mb-6 p-4 rounded-full bg-[#e0e7ff]">
                {React.cloneElement(reason.icon as React.ReactElement, { className: "h-10 w-10 text-[#0540f2]" })}
              </div>
              <p className="text-gray-700 text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
