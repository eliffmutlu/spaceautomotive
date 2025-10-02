// Temporarily disabled FeaturedVehicles component
/*
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface FeaturedVehiclesProps {
  title: string;
}

const FeaturedVehicles: React.FC<FeaturedVehiclesProps> = ({ title }) => {
  const { t } = useTranslation();

  const vehicles = [
    {
      id: '1',
      nameKey: 'vehicleName1',
      image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '₺2.500.000',
      descriptionKey: 'vehicleDescription1',
    },
    {
      id: '2',
      nameKey: 'vehicleName2',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '₺1.800.000',
      descriptionKey: 'vehicleDescription2',
    },
    {
      id: '3',
      nameKey: 'vehicleName3',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '₺3.200.000',
      descriptionKey: 'vehicleDescription3',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#020873] mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={vehicle.image} alt={t(vehicle.nameKey)} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#0540f2] mb-2">{t(vehicle.nameKey)}</h3>
                <p className="text-gray-700 text-lg mb-3">{vehicle.price}</p>
                <p className="text-gray-600 mb-4">{t(vehicle.descriptionKey)}</p>
                <Link to={`/models/${vehicle.id}`} className="inline-block px-6 py-3 bg-gradient-to-r from-[#0540f2] to-[#020873] text-white font-medium rounded-full hover:from-[#020873] hover:to-[#0540f2] transition-all duration-300">
                  {t('viewDetails')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
*/
