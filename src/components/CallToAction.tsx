import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#020873] to-[#0540f2] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Link to="/contact">
          <button className="px-10 py-5 bg-white text-[#0540f2] font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
