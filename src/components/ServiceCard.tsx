
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon, link, delay }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`service-card animate-fade-in transform transition-all duration-300 ${isHovered ? 'scale-105 shadow-xl' : ''} bg-gradient-to-b from-white to-gray-50`}
      style={{ animationDelay: `${delay}ms`, borderRadius: '8px 8px 2px 2px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mb-6 text-center transition-all duration-300 transform ${isHovered ? 'scale-110' : ''}`}>
        <div className="p-4 inline-flex items-center justify-center rounded-[4px] bg-gradient-to-r from-interior-gold/20 to-interior-gold/10 text-interior-gold">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-serif mb-3 text-center">{title}</h3>
      <p className="text-muted-foreground text-sm mb-5 text-center">{description}</p>
      <div className="flex justify-center">
        <Link 
          to={link} 
          className="group flex items-center text-sm font-medium bg-gradient-to-r from-interior-gold to-interior-charcoal bg-clip-text text-transparent hover:from-interior-charcoal hover:to-interior-gold transition-all duration-300"
        >
          Learn More 
          <ArrowRight 
            size={16} 
            className="ml-1 transition-transform duration-300 group-hover:translate-x-2 text-interior-gold group-hover:text-interior-charcoal" 
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
