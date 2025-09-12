import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, MapPin, Gauge, Zap, GitBranch, Cog, ShieldCheck, SprayCan, Search, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// --- Filter Options ---
// These arrays contain the *original* Turkish strings which are used for filtering logic.
// The UI will display their translated versions.
const BRANDS = ["Tümü", "Space Motors", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Tesla"];
const LOCATIONS = ["Tümü", "Amsterdam", "Rotterdam", "Utrecht", "Den Haag", "Eindhoven"];
const COLORS = ["Siyah", "Beyaz", "Gri", "Kırmızı", "Mavi", "Sarı"];
const FUEL_TYPES = ["Benzin", "Dizel", "Elektrik", "Hibrit"];
const TRANSMISSIONS = ["Otomatik", "Manuel"];
const BODY_TYPES = ["Sedan", "SUV", "Hatchback", "Spor", "Station Wagon", "Ticari"];
const DRIVETRAINS = ["Önden Çekiş", "Arkadan İtiş", "Dört Çeker (AWD)"];

// --- Inventory Data ---
export const initialInventory = [
  { id: 1, brand: 'Space Motors', model: 'Nebula Cruiser', year: 2024, price: 85000, color: 'Siyah', fuelType: 'Elektrik', transmission: 'Otomatik', condition: 'İkinci El', bodyType: 'Sedan', enginePower: 450, engineSize: 0, drivetrain: 'Dört Çeker (AWD)', hasDamage: false, painted: false, replaced: false, location: 'Amsterdam', 
    images: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
      'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg'
    ],
    replacedParts: []
  },
  { id: 2, brand: 'BMW', model: 'M4', year: 2022, price: 75000, color: 'Sarı', fuelType: 'Benzin', transmission: 'Otomatik', condition: 'İkinci El', bodyType: 'Spor', enginePower: 510, engineSize: 3.0, drivetrain: 'Arkadan İtiş', hasDamage: false, painted: false, replaced: true, location: 'Rotterdam', 
    images: [
      'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg',
      'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg',
      'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg'
    ],
    replacedParts: ['front_bumper', 'hood']
  },
  { id: 3, brand: 'Mercedes-Benz', model: 'G-Class', year: 2023, price: 150000, color: 'Beyaz', fuelType: 'Dizel', transmission: 'Otomatik', condition: 'İkinci El', bodyType: 'SUV', enginePower: 330, engineSize: 2.9, drivetrain: 'Dört Çeker (AWD)', hasDamage: false, painted: false, replaced: false, location: 'Utrecht', 
    images: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      'https://images.pexels.com/photos/11224131/pexels-photo-11224131.jpeg',
      'https://images.pexels.com/photos/11047128/pexels-photo-11047128.jpeg'
    ],
    replacedParts: []
  },
  { id: 4, brand: 'Audi', model: 'A6', year: 2021, price: 55000, color: 'Mavi', fuelType: 'Hibrit', transmission: 'Otomatik', condition: 'İkinci El', bodyType: 'Sedan', enginePower: 299, engineSize: 2.0, drivetrain: 'Önden Çekiş', hasDamage: true, painted: true, replaced: true, location: 'Amsterdam', 
    images: [
      'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
      'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg'
    ],
    replacedParts: ['front_right_fender', 'front_right_door']
  },
  { id: 5, brand: 'Tesla', model: 'Model Y', year: 2023, price: 60000, color: 'Gri', fuelType: 'Elektrik', transmission: 'Otomatik', condition: 'İkinci El', bodyType: 'SUV', enginePower: 534, engineSize: 0, drivetrain: 'Dört Çeker (AWD)', hasDamage: false, painted: false, replaced: false, location: 'Eindhoven', 
    images: [
      'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg',
      'https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg',
      'https://images.pexels.com/photos/6894429/pexels-photo-6894429.jpeg'
    ],
    replacedParts: []
  },
  { id: 6, brand: 'Volkswagen', model: 'Golf', year: 2020, price: 25000, color: 'Kırmızı', fuelType: 'Benzin', transmission: 'Manuel', condition: 'İkinci El', bodyType: 'Hatchback', enginePower: 150, engineSize: 1.5, drivetrain: 'Önden Çekiş', hasDamage: false, painted: true, replaced: false, location: 'Den Haag', 
    images: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg',
      'https://images.pexels.com/photos/10394783/pexels-photo-10394783.jpeg',
      'https://images.pexels.com/photos/10065303/pexels-photo-10065303.jpeg'
    ],
    replacedParts: []
  },
  { id: 7, brand: 'Mercedes-Benz', model: 'Sprinter', year: 2022, price: 45000, color: 'Beyaz', fuelType: 'Dizel', transmission: 'Manuel', condition: 'İkinci El', bodyType: 'Ticari', enginePower: 190, engineSize: 2.0, drivetrain: 'Arkadan İtiş', hasDamage: false, painted: false, replaced: false, location: 'Amsterdam', 
    images: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg',
      'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg'
    ],
    replacedParts: []
  },
  { id: 8, brand: 'Audi', model: 'Q7', year: 2022, price: 82000, color: 'Gri', fuelType: 'Dizel', transmission: 'Otomatik', condition: 'İkinci El', bodyType: 'SUV', enginePower: 286, engineSize: 3.0, drivetrain: 'Dört Çeker (AWD)', hasDamage: false, painted: false, replaced: false, location: 'Utrecht', 
    images: [
      'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg',
      'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg',
      'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg'
    ],
    replacedParts: []
  }
];

interface FiltersState {
  search: string;
  brand: string;
  location: string;
  year: number[];
  price: number[];
  colors: string[];
  fuelTypes: string[];
  transmissions: string[];
  bodyTypes: string[];
  enginePower: number[];
  engineSize: number[];
  drivetrains: string[];
  hasDamage: string;
  showUnpaintedOnly: boolean;
  showUnreplacedOnly: boolean;
}

const initialFilters: FiltersState = {
  search: '',
  brand: 'Tümü', // Use original string for filtering
  location: 'Tümü', // Use original string for filtering
  year: [2010, 2024],
  price: [20000, 200000],
  colors: [],
  fuelTypes: [],
  transmissions: [],
  bodyTypes: [],
  enginePower: [100, 600],
  engineSize: [1.0, 6.0],
  drivetrains: [],
  hasDamage: 'Tümü', // Use original string for filtering
  showUnpaintedOnly: false,
  showUnreplacedOnly: false
};

type StringArrayFilterKeys = {
  [K in keyof FiltersState]: FiltersState[K] extends string[] ? K : never;
}[keyof FiltersState];

interface CheckboxGroupProps {
  title: string;
  options: readonly string[];
  selected: string[];
  onChange: (option: string) => void;
  translateOption: (option: string) => string; // Pass translateOption
}

const CheckboxGroup = ({ title, options, selected, onChange, translateOption }: CheckboxGroupProps) => (
  <div className="space-y-2">
    <Label>{title}</Label>
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {options.map(option => (
        <div key={option} className="flex items-center space-x-2">
          <Checkbox
            id={`${title}-${option}`}
            checked={selected.includes(option)}
            onCheckedChange={() => onChange(option)}
          />
          <Label htmlFor={`${title}-${option}`} className="font-normal">{translateOption(option)}</Label>
        </div>
      ))}
    </div>
  </div>
);

const Models = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const [searchParams] = useSearchParams();

  const getInitialFilters = (): FiltersState => {
    const newFilters = { ...initialFilters };
    const bodyTypesParam = searchParams.get('bodyTypes');
    if (bodyTypesParam) {
      const bodyTypesFromUrl = bodyTypesParam.split(',');
      const validBodyTypes = bodyTypesFromUrl.filter(bt => BODY_TYPES.includes(bt));
      if (validBodyTypes.length > 0) {
        newFilters.bodyTypes = validBodyTypes;
      }
    }
    return newFilters;
  };

  const [filters, setFilters] = useState<FiltersState>(getInitialFilters);

  const handleFilterChange = (key: keyof FiltersState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (key: StringArrayFilterKeys, option: string) => {
    setFilters(prev => {
      const list = prev[key];
      const newList = list.includes(option)
        ? list.filter(item => item !== option)
        : [...list, option];
      return { ...prev, [key]: newList };
    });
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  // Helper to translate filter options for display
  const translateOption = (option: string) => {
    switch (option) {
      case "Tümü": return t('allOption');
      case "Var": return t('hasDamageYes');
      case "Yok": return t('hasDamageNo');
      case "Siyah": return t('colorBlack');
      case "Beyaz": return t('colorWhite');
      case "Gri": return t('colorGrey');
      case "Kırmızı": return t('colorRed');
      case "Mavi": return t('colorBlue');
      case "Sarı": return t('colorYellow');
      case "Benzin": return t('fuelPetrol');
      case "Dizel": return t('fuelDiesel');
      case "Elektrik": return t('fuelElectric');
      case "Hibrit": return t('fuelHybrid');
      case "Otomatik": return t('transmissionAutomatic');
      case "Manuel": return t('transmissionManual');
      case "Sedan": return t('bodySedan');
      case "SUV": return t('bodySUV');
      case "Hatchback": return t('bodyHatchback');
      case "Spor": return t('bodySport');
      case "Station Wagon": return t('bodyStationWagon');
      case "Ticari": return t('bodyCommercial');
      case "Önden Çekiş": return t('drivetrainFWD');
      case "Arkadan İtiş": return t('drivetrainRWD');
      case "Dört Çeker (AWD)": return t('drivetrainAWD');
      // For brands and locations, if they are not in the switch, they will return the original string.
      // This is acceptable as brand names and city names might not need translation or are handled differently.
      default: return option; 
    }
  };

  const filteredInventory = initialInventory.filter(car => {
    const { search, brand, location, year, price, colors, fuelTypes, transmissions, bodyTypes, enginePower, engineSize, drivetrains, hasDamage, showUnpaintedOnly, showUnreplacedOnly } = filters;

    return (
      (search === '' || `${car.brand} ${car.model}`.toLowerCase().includes(search.toLowerCase())) &&
      (brand === 'Tümü' || car.brand === brand) &&
      (location === 'Tümü' || car.location === location) &&
      (car.year >= year[0] && car.year <= year[1]) &&
      (car.price >= price[0] && car.price <= price[1]) &&
      (colors.length === 0 || colors.includes(car.color)) &&
      (fuelTypes.length === 0 || fuelTypes.includes(car.fuelType)) &&
      (transmissions.length === 0 || transmissions.includes(car.transmission)) &&
      (bodyTypes.length === 0 || bodyTypes.includes(car.bodyType)) &&
      (car.enginePower >= enginePower[0] && car.enginePower <= enginePower[1]) &&
      (car.engineSize >= engineSize[0] && car.engineSize <= engineSize[1]) &&
      (drivetrains.length === 0 || drivetrains.includes(car.drivetrain)) &&
      (hasDamage === 'Tümü' || (hasDamage === 'Var' && car.hasDamage) || (hasDamage === 'Yok' && !car.hasDamage)) &&
      (!showUnpaintedOnly || !car.painted) &&
      (!showUnreplacedOnly || !car.replaced)
    );
  });

  const getPaintStatusText = (painted: boolean, replaced: boolean) => {
    if (!painted && !replaced) return t('unpaintedUnreplaced');
    if (painted && !replaced) return t('painted');
    if (!painted && replaced) return t('replaced');
    return t('paintedReplaced');
  };

  return (
    <div className="pt-20">
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-[#0540f2] to-[#020873] text-transparent bg-clip-text">
            {t('exploreVehiclesTitle')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            {t('exploreVehiclesSubtitle')}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <Card className="mb-8 bg-card border-border p-6">
          <CardHeader>
            <CardTitle className="text-2xl">{t('filterTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* --- Basic Filters --- */}
            <div className="space-y-2">
              <Label htmlFor="search">{t('searchLabel')}</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder={t('searchPlaceholder')} className="pl-9" value={filters.search} onChange={e => handleFilterChange('search', e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t('brandLabel')}</Label>
              <Select value={filters.brand} onValueChange={value => handleFilterChange('brand', value)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{BRANDS.map(b => <SelectItem key={b} value={b}>{translateOption(b)}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('locationLabel')}</Label>
              <Select value={filters.location} onValueChange={value => handleFilterChange('location', value)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{LOCATIONS.map(l => <SelectItem key={l} value={l}>{translateOption(l)}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>{t('hasDamageLabel')}</Label>
              <Select value={filters.hasDamage} onValueChange={value => handleFilterChange('hasDamage', value)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tümü">{t('allOption')}</SelectItem>
                  <SelectItem value="Var">{t('hasDamageYes')}</SelectItem>
                  <SelectItem value="Yok">{t('hasDamageNo')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* --- Range Filters --- */}
            <div className="space-y-2 xl:col-span-2">
              <div className="flex justify-between items-center">
                <Label>{t('priceRangeLabel')}</Label>
                <span className="text-sm font-medium text-primary">{filters.price[0].toLocaleString()} - {filters.price[1].toLocaleString()}</span>
              </div>
              <Slider value={filters.price} onValueChange={value => handleFilterChange('price', value)} min={0} max={250000} step={1000} />
            </div>
            <div className="space-y-2 xl:col-span-2">
              <div className="flex justify-between items-center">
                <Label>{t('yearRangeLabel')}</Label>
                <span className="text-sm font-medium text-primary">{filters.year[0]} - {filters.year[1]}</span>
              </div>
              <Slider value={filters.year} onValueChange={value => handleFilterChange('year', value)} min={2000} max={2024} step={1} />
            </div>

            {/* --- Checkbox Groups --- */}
            <div className="lg:col-span-2 xl:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CheckboxGroup title={t('bodyTypeLabel')} options={BODY_TYPES} selected={filters.bodyTypes} onChange={option => handleCheckboxChange('bodyTypes', option)} translateOption={translateOption} />
              <CheckboxGroup title={t('fuelTypeLabel')} options={FUEL_TYPES} selected={filters.fuelTypes} onChange={option => handleCheckboxChange('fuelTypes', option)} translateOption={translateOption} />
              <CheckboxGroup title={t('transmissionLabel')} options={TRANSMISSIONS} selected={filters.transmissions} onChange={option => handleCheckboxChange('transmissions', option)} translateOption={translateOption} />
              <CheckboxGroup title={t('drivetrainLabel')} options={DRIVETRAINS} selected={filters.drivetrains} onChange={option => handleCheckboxChange('drivetrains', option)} translateOption={translateOption} />
              <CheckboxGroup title={t('colorLabel')} options={COLORS} selected={filters.colors} onChange={option => handleCheckboxChange('colors', option)} translateOption={translateOption} />
              <div className="space-y-2">
                <Label>{t('paintReplaceStatusLabel')}</Label>
                <div className="flex flex-col space-y-2 pt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="unpainted"
                      checked={filters.showUnpaintedOnly}
                      onCheckedChange={checked => handleFilterChange('showUnpaintedOnly', !!checked)}
                    />
                    <Label htmlFor="unpainted" className="font-normal">{t('unpaintedOption')}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="unreplaced"
                      checked={filters.showUnreplacedOnly}
                      onCheckedChange={checked => handleFilterChange('showUnreplacedOnly', !!checked)}
                    />
                    <Label htmlFor="unreplaced" className="font-normal">{t('unreplacedOption')}</Label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            <strong className="text-primary">{filteredInventory.length}</strong> {t('vehiclesFound', { count: filteredInventory.length })}
          </p>
          <Button variant="ghost" onClick={resetFilters}><X className="mr-2 h-4 w-4" /> {t('clearFilters')}</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInventory.map(car => (
            <Card key={car.id} className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 flex flex-col shadow-sm hover:shadow-lg">
              <CardHeader className="p-0">
                <img src={car.images[0]} alt={`${car.brand} ${car.model}`} className="w-full h-64 object-cover" />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl mb-2">{car.brand} {car.model}</CardTitle>
                <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <Car className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{car.year}</span>
                    </div>
                  </div>
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{translateOption(car.location)}</span>
                    </div>
                  </div>
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{translateOption(car.fuelType)}</span>
                    </div>
                  </div>
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <Cog className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{translateOption(car.transmission)}</span>
                    </div>
                  </div>
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <Gauge className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{car.enginePower} HP</span>
                    </div>
                  </div>
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <GitBranch className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{translateOption(car.drivetrain)}</span>
                    </div>
                  </div>
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{t('damageRecord', { status: car.hasDamage ? t('hasDamageYes') : t('hasDamageNo') })}</span>
                    </div>
                  </div>
                  <div className="p-px rounded-lg bg-gradient-to-r from-[#0540f2] to-[#020873]">
                    <div className="flex items-center gap-2 p-2 bg-card rounded-[7px] h-full">
                      <SprayCan className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{getPaintStatusText(car.painted, car.replaced)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-card border-t flex justify-between items-center mt-auto">
                <p className="text-xl font-bold text-white">€{car.price.toLocaleString()}</p>
                <Link to={`/models/${car.id}`}>
                  <Button>{t('viewDetailsButton')}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        {filteredInventory.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">{t('noVehiclesFound')}</p>
            <Button onClick={resetFilters} className="mt-4">{t('clearFiltersButton')}</Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Models;
