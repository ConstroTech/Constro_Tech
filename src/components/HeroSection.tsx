
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {subtitle}
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Link to={buttonLink}>
            <Button className="btn-primary">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
