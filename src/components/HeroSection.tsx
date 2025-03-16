
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

const HeroSection = ({ title, subtitle, buttonText, buttonLink, backgroundImage }: HeroSectionProps) => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative overlay shape */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-interior-gold/20 rounded-tl-[100px] backdrop-blur-sm transform rotate-6 z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {subtitle}
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Link to={buttonLink}>
            <Button className="group bg-interior-gold hover:bg-interior-gold/90 text-interior-charcoal px-8 py-6 rounded-md text-sm uppercase tracking-wider font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center">
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
