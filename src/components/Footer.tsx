import { Link } from 'react-router-dom';
import { Rocket, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t('models'), href: '/models' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/spaceAutomotiveLogoBeyaz.svg"
                alt="Space Automotive Logo"
                className="h-14 w-auto md:h-28"
              />
            </Link>
            <p className="text-muted-foreground text-center md:text-left">{t('footerSlogan')}</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4">{t('footerQuickLinks')}</h3>
            <nav className="flex flex-col items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold mb-4">{t('footerFollowUs')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Space Automotive. {t('footerAllRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
