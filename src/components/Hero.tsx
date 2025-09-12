import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/2127740/pexels-photo-2127740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
        <Link to="/models">
          <button className="px-8 py-4 bg-gradient-to-r from-[#0540f2] to-[#020873] text-white font-bold rounded-full shadow-lg hover:from-[#020873] hover:to-[#0540f2] transition-all duration-300 transform hover:scale-105">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
