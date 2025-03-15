
import { Hammer, Paintbrush, Building, WandSparkles } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Transform Your Space"
        subtitle="Innovative interior design solutions for residential and commercial spaces"
        buttonText="Explore Our Services"
        buttonLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      />
      
      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center mx-auto">
            We offer comprehensive design and build solutions tailored to your unique requirements
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ServiceCard 
              title="General Contracting" 
              description="Complete project management from concept to completion with attention to every detail."
              icon={<Hammer size={28} />}
              link="/services"
              delay={0}
            />
            <ServiceCard 
              title="Interior Fit-outs" 
              description="Custom interior solutions designed to enhance functionality and aesthetics."
              icon={<Paintbrush size={28} />}
              link="/services"
              delay={200}
            />
            <ServiceCard 
              title="Design & Build" 
              description="Integrated approach combining innovative design with quality construction."
              icon={<Building size={28} />}
              link="/services"
              delay={400}
            />
            <ServiceCard 
              title="Refurbishment" 
              description="Revitalize existing spaces with modern updates and thoughtful renovations."
              icon={<WandSparkles size={28} />}
              link="/services"
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Crafting Exceptional Spaces</h2>
              <p className="text-muted-foreground mb-6">
                Interior Vista Design is a premier design and build company specializing in creating 
                bespoke interior spaces that blend functionality with aesthetic excellence. Our team 
                of experienced designers and craftsmen work collaboratively to bring your vision to life.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Expert team with years of industry experience</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Commitment to quality and attention to detail</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Innovative design solutions for every project</p>
                </div>
              </div>
              <Link to="/about">
                <Button className="btn-primary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Interior Design" 
                  className="rounded-md shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-interior-gold rounded-md hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Recent Projects</h2>
          <p className="section-subtitle text-center mx-auto">
            Explore our portfolio of transformative design and build projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="group relative overflow-hidden rounded-md shadow-md animate-fade-in" style={{ animationDelay: '0ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-serif mb-2">Modern Office Complex</h3>
                <p className="text-gray-200 text-sm">Corporate Interiors</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-md shadow-md animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-serif mb-2">Luxury Residential Villa</h3>
                <p className="text-gray-200 text-sm">Residential Design</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-md shadow-md animate-fade-in" style={{ animationDelay: '400ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Project 3" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-serif mb-2">Boutique Hotel Renovation</h3>
                <p className="text-gray-200 text-sm">Hospitality Design</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="btn-primary">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project requirements and discover how we can bring your vision to life.
          </p>
          <Link to="/contact">
            <Button className="py-3 px-8 bg-interior-gold text-interior-charcoal hover:bg-white transition-colors rounded-sm text-sm uppercase tracking-wider font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
