import { Link, NavLink } from 'react-router-dom';
import { Rocket, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import React from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook'unu import et

const Header = () => {
  const { t, i18n } = useTranslation(); // t fonksiyonunu ve i18n nesnesini al

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('models'), href: '/models' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

  const languageAbbreviations: { [key: string]: string } = {
    tr: 'TR',
    en: 'EN',
    nl: 'NL',
  };

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between h-20 relative">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/spaceAutomotiveLogo.svg"
              alt="Space Automotive Logo"
              className="h-12 w-auto md:h-14"
            />
          </Link>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="/spaceAutomotiveHeader.svg"
              alt="Space Automotive Header Logo"
              className="h-4 w-auto sm:h-5 lg:h-4"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-[#0540f2]" : "text-gray-600 hover:text-[#0540f2]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Select onValueChange={handleLanguageChange} defaultValue={selectedLanguage}>
              <SelectTrigger className="w-12 h-10 rounded-full bg-gradient-to-r from-[#0540f2] to-[#020873] text-white hover:from-[#020873] hover:to-[#0540f2] transition-all border-none flex items-center justify-center [&>svg]:hidden">
                <SelectValue className="flex items-center justify-center">
                  {languageAbbreviations[selectedLanguage]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">{languageAbbreviations['tr']}</SelectItem>
                <SelectItem value="en">{languageAbbreviations['en']}</SelectItem>
                <SelectItem value="nl">{languageAbbreviations['nl']}</SelectItem>
              </SelectContent>
            </Select>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <Select onValueChange={handleLanguageChange} defaultValue={selectedLanguage}>
              <SelectTrigger className="w-12 h-10 rounded-full bg-gradient-to-r from-[#0540f2] to-[#020873] text-white hover:from-[#020873] hover:to-[#0540f2] transition-all border-none flex items-center justify-center [&>svg]:hidden">
                <SelectValue className="flex items-center justify-center">
                  {languageAbbreviations[selectedLanguage]}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">{languageAbbreviations['tr']}</SelectItem>
                <SelectItem value="en">{languageAbbreviations['en']}</SelectItem>
                <SelectItem value="nl">{languageAbbreviations['nl']}</SelectItem>
              </SelectContent>
            </Select>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-gray-300 text-gray-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-l-gray-200">
                <div className="flex flex-col gap-6 p-6">
                  <Link to="/" className="flex items-center gap-2 mb-6">
                    <img
                      src="/spaceAutomotiveLogo.svg"
                      alt="Space Automotive Logo"
                      className="h-14 w-auto md:h-16"
                    />
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) =>
                          `text-lg font-medium transition-colors ${
                            isActive ? "text-[#0540f2]" : "text-gray-600 hover:text-[#0540f2]"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
