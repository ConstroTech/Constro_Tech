
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-serif font-semibold tracking-tight text-interior-charcoal">
              Interior Vista Design
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-interior-gold' : 'text-interior-charcoal'} hover:text-interior-gold transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-medium ${isActive('/about') ? 'text-interior-gold' : 'text-interior-charcoal'} hover:text-interior-gold transition-colors`}>
              About Us
            </Link>
            <Link to="/services" className={`text-sm font-medium ${isActive('/services') ? 'text-interior-gold' : 'text-interior-charcoal'} hover:text-interior-gold transition-colors`}>
              Services
            </Link>
            <Link to="/projects" className={`text-sm font-medium ${isActive('/projects') ? 'text-interior-gold' : 'text-interior-charcoal'} hover:text-interior-gold transition-colors`}>
              Projects
            </Link>
            <Link to="/technology" className={`text-sm font-medium ${isActive('/technology') ? 'text-interior-gold' : 'text-interior-charcoal'} hover:text-interior-gold transition-colors`}>
              Technology
            </Link>
            <Link to="/clientele" className={`text-sm font-medium ${isActive('/clientele') ? 'text-interior-gold' : 'text-interior-charcoal'} hover:text-interior-gold transition-colors`}>
              Clientele
            </Link>
            <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? 'text-interior-gold' : 'text-interior-charcoal'} hover:text-interior-gold transition-colors`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-interior-charcoal" /> : <Menu className="h-6 w-6 text-interior-charcoal" />}
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
          <Link to="/technology" className={`text-sm font-medium ${isActive('/technology') ? 'text-interior-gold' : 'text-interior-charcoal'} py-2`} onClick={closeMenu}>
            Technology
          </Link>
          <Link to="/clientele" className={`text-sm font-medium ${isActive('/clientele') ? 'text-interior-gold' : 'text-interior-charcoal'} py-2`} onClick={closeMenu}>
            Clientele
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
