
import { Hammer, Paintbrush, Building, WandSparkles, ArrowRight } from 'lucide-react';
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
      
      {/* Hero Section with updated background image */}
      <HeroSection 
        title="Transform Your Space"
        subtitle="Innovative interior design solutions for residential and commercial spaces"
        buttonText="Explore Our Services"
        buttonLink="/services"
        backgroundImage="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053992/homepage_hjfqbx.jpg"
      />
      
      {/* Services Section */}
      <section className="section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-2">Our Services</h2>
          <div className="w-24 h-1 bg-interior-gold mx-auto mb-6"></div>
          <p className="section-subtitle text-center mx-auto">
            We offer comprehensive design and build solutions tailored to your unique requirements
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <ServiceCard 
              title="General Contracting" 
              description="Complete project management from concept to completion with attention to every detail."
              icon={<Hammer size={32} />}
              link="/services"
              delay={0}
            />
            <ServiceCard 
              title="Interior Fit-outs" 
              description="Custom interior solutions designed to enhance functionality and aesthetics."
              icon={<Paintbrush size={32} />}
              link="/services"
              delay={200}
            />
            <ServiceCard 
              title="Design & Build" 
              description="Integrated approach combining innovative design with quality construction."
              icon={<Building size={32} />}
              link="/services"
              delay={400}
            />
            <ServiceCard 
              title="Refurbishment" 
              description="Revitalize existing spaces with modern updates and thoughtful renovations."
              icon={<WandSparkles size={32} />}
              link="/services"
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="section py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Crafting Exceptional Spaces</h2>
              <p className="text-muted-foreground mb-6">
                Constro Tech Solution is a premier design and build company specializing in creating 
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
                <Button className="group bg-interior-charcoal hover:bg-black text-white px-6 py-3 rounded-md text-sm uppercase tracking-wider font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742054422/WhatsApp_Image_2025-03-15_at_21.09.50_ddef13b2_t7vbi8.jpg" 
                  alt="Interior Design" 
                  className="rounded-md shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-interior-gold rounded-md hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Preview with the new images */}
      <section className="section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-2">Recent Projects</h2>
          <div className="w-24 h-1 bg-interior-gold mx-auto mb-6"></div>
          <p className="section-subtitle text-center mx-auto">
            Explore our portfolio of transformative design and build projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="group relative overflow-hidden rounded-md shadow-md animate-fade-in" style={{ animationDelay: '0ms' }}>
              <img 
                src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053951/WhatsApp_Image_2025-03-15_at_21.21.50_b0f59ecc_iqv0ll.jpg" 
                alt="Project 1" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-serif mb-2">Commercial Interior</h3>
                <p className="text-gray-200 text-sm">Corporate Interiors</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-md shadow-md animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img 
                src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053918/WhatsApp_Image_2025-03-15_at_21.09.50_05ce81f1_zr6oxq.jpg" 
                alt="Project 2" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-serif mb-2">Modern Residential Interior</h3>
                <p className="text-gray-200 text-sm">Residential Design</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-md shadow-md animate-fade-in" style={{ animationDelay: '400ms' }}>
              <img 
                src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053886/WhatsApp_Image_2025-03-15_at_21.09.52_e0d92128_c5h6xf.jpg" 
                alt="Project 3" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-serif mb-2">Modern Residential Interior</h3>
                <p className="text-gray-200 text-sm">Residential Design</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button className="group bg-interior-gold hover:bg-interior-gold/90 text-interior-charcoal px-8 py-3 rounded-md text-sm uppercase tracking-wider font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-interior-charcoal text-white relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-interior-gold/20 rounded-tr-[100px] backdrop-blur-sm transform -rotate-6 z-0 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project requirements and discover how we can bring your vision to life.
          </p>
          <Link to="/contact">
            <Button className="group bg-interior-gold hover:bg-white transition-all duration-300 text-interior-charcoal hover:text-interior-charcoal px-8 py-3 rounded-md text-sm uppercase tracking-wider font-medium transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
