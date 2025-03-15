
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navbarBgClass = scrolled 
    ? 'bg-white shadow-md py-3' 
    : isHomePage 
      ? 'bg-transparent py-5' 
      : 'bg-white shadow-md py-3';

  const textColorClass = (!scrolled && isHomePage) ? 'text-white' : 'text-interior-charcoal';
  const activeTextColorClass = (!scrolled && isHomePage) ? 'text-interior-gold' : 'text-interior-gold';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/fce58ace-aa54-4834-bc38-c562e5a894b3.png" 
              alt="Constro Tech" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-sm font-medium ${isActive('/') ? activeTextColorClass : textColorClass} hover:text-interior-gold transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-medium ${isActive('/about') ? activeTextColorClass : textColorClass} hover:text-interior-gold transition-colors`}>
              About Us
            </Link>
            <Link to="/services" className={`text-sm font-medium ${isActive('/services') ? activeTextColorClass : textColorClass} hover:text-interior-gold transition-colors`}>
              Services
            </Link>
            <Link to="/projects" className={`text-sm font-medium ${isActive('/projects') ? activeTextColorClass : textColorClass} hover:text-interior-gold transition-colors`}>
              Projects
            </Link>
            <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? activeTextColorClass : textColorClass} hover:text-interior-gold transition-colors`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <X className={`h-6 w-6 ${textColorClass}`} /> : 
              <Menu className={`h-6 w-6 ${textColorClass}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen bg-white' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-interior-gold' : 'text-interior-charcoal'} py-2`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-medium ${isActive('/about') ? 'text-interior-gold' : 'text-interior-charcoal'} py-2`} onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/services" className={`text-sm font-medium ${isActive('/services') ? 'text-interior-gold' : 'text-interior-charcoal'} py-2`} onClick={closeMenu}>
            Services
          </Link>
          <Link to="/projects" className={`text-sm font-medium ${isActive('/projects') ? 'text-interior-gold' : 'text-interior-charcoal'} py-2`} onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? 'text-interior-gold' : 'text-interior-charcoal'} py-2`} onClick={closeMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
