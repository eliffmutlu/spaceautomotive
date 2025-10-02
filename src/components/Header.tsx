import { Link, NavLink } from 'react-router-dom';
import { Rocket, Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import React from 'react';
import { useTranslation } from 'react-i18next'; // useTranslation hook'unu import et
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const { t, i18n } = useTranslation(); // t fonksiyonunu ve i18n nesnesini al

  const navLinks = [
    { name: t('home'), href: '/' },
    //{ name: t('models'), href: '/models' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const [selectedLanguage, setSelectedLanguage] = React.useState("nl");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (i18n.language !== "nl") {
      i18n.changeLanguage("nl");
    }
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-4">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between h-20 relative">
          <Link to="/" className="flex items-center gap-2 ml-4">
            <img
              src="/spaceAutomotiveLogo.svg"
              alt="Space Automotive Logo"
              className="h-10 w-auto md:h-14"
            />
          </Link>

          <div className="flex justify-center flex-1 pointer-events-none">
            <img
              src="/spaceAutomotiveHeader.svg"
              alt="Space Automotive Header Logo"
              className="h-2 w-auto sm:h-3 md:h-4 lg:h-3"
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
            <div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white rounded-full shadow-md border-gray-300 text-gray-800 p-2"
              >
                <FaBars className="h-6 w-6 text-[#0540f2]" />
              </Button>

              {isMenuOpen && (
                <div className="absolute top-20 right-6 w-64 bg-white rounded-lg shadow-lg p-6 z-50 relative">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 right-4 text-[#0540f2] hover:text-[#020873] focus:outline-none"
                  >
                    <IoMdClose className="h-6 w-6" />
                  </button>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={() => {
                          window.scrollTo(0, 0);
                          setIsMenuOpen(false);
                        }}
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
                  <div className="mt-6">
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
