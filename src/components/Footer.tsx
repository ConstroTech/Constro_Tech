
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-interior-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4 text-interior-gold">Interior Vista Design</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We transform spaces into extraordinary experiences with our innovative design solutions and impeccable craftsmanship.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-interior-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-interior-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-interior-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-interior-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-interior-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Projects</Link></li>
              <li><Link to="/technology" className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Technology</Link></li>
              <li><Link to="/clientele" className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Clientele</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-interior-gold transition-colors text-sm">General Contracting</li>
              <li className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Interior Fit-outs</li>
              <li className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Design & Build</li>
              <li className="text-gray-300 hover:text-interior-gold transition-colors text-sm">Refurbishment</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-interior-gold mt-1" />
                <div className="text-sm">
                  <p className="text-gray-300">+91-9740112626</p>
                  <p className="text-gray-300">+91-7975311636</p>
                  <p className="text-gray-300">+91-8748925647</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-interior-gold mt-1" />
                <a href="mailto:constrotechsolutions419@gmail.com" className="text-gray-300 text-sm hover:text-interior-gold transition-colors">
                  constrotechsolutions419@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-interior-gold mt-1" />
                <p className="text-gray-300 text-sm">
                  123 Design Street, Bangalore, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Interior Vista Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
