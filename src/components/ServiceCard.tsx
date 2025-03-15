
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
      className={`service-card animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 text-interior-gold">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <Link 
        to={link} 
        className="flex items-center text-sm font-medium text-interior-charcoal hover:text-interior-gold transition-colors"
      >
        Learn More 
        <ArrowRight 
          size={16} 
          className={`ml-1 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} 
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
