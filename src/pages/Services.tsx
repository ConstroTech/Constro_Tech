
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hammer, Paintbrush, Building, WandSparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Services</h1>
            <p className="text-gray-300 text-lg">
              Comprehensive design and build solutions for residential and commercial spaces
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">What We Offer</h2>
            <div className="w-16 h-1 bg-interior-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              At Interior Vista Design, we offer a comprehensive range of services to meet all your interior design 
              and construction needs. From initial concept to final execution, our team of experts ensures 
              a seamless and stress-free experience.
            </p>
          </div>
          
          {/* General Contracting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-serif mb-4">General Contracting</h2>
              <div className="w-16 h-1 bg-interior-gold mb-6"></div>
              <p className="text-muted-foreground mb-6">
                Our general contracting services encompass a wide range of construction activities, ensuring 
                that your project is executed with precision and excellence. We manage all aspects of the 
                construction process, from planning and scheduling to material procurement and quality control.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Project planning and scheduling</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Construction management and coordination</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Quality control and assurance</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Cost management and budget control</p>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="btn-primary">
                  Request a Quote
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="General Contracting" 
                className="rounded-md shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Interior Fit-outs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Interior Fit-outs" 
                className="rounded-md shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif mb-4">Interior Fit-outs</h2>
              <div className="w-16 h-1 bg-interior-gold mb-6"></div>
              <p className="text-muted-foreground mb-6">
                Our interior fit-out services transform empty spaces into functional and aesthetically pleasing 
                environments. We handle everything from space planning and material selection to installation 
                and finishing, ensuring a seamless and efficient process.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Space planning and layout design</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Material selection and procurement</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Custom furniture and fixture installation</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Finishing touches and styling</p>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="btn-primary">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Design & Build */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-serif mb-4">Design & Build</h2>
              <div className="w-16 h-1 bg-interior-gold mb-6"></div>
              <p className="text-muted-foreground mb-6">
                Our design and build approach integrates the design and construction phases, offering a streamlined 
                process with a single point of responsibility. This approach enhances communication, reduces costs, 
                and accelerates project timelines while ensuring design integrity.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Integrated design and construction process</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Streamlined communication and coordination</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Cost-effective solutions and value engineering</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Accelerated project timelines</p>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="btn-primary">
                  Request a Quote
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Design & Build" 
                className="rounded-md shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Refurbishment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Refurbishment" 
                className="rounded-md shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif mb-4">Refurbishment</h2>
              <div className="w-16 h-1 bg-interior-gold mb-6"></div>
              <p className="text-muted-foreground mb-6">
                Our refurbishment services breathe new life into existing spaces, whether it's a minor update 
                or a complete overhaul. We assess the current condition, develop a tailored plan, and execute 
                the renovations with minimal disruption to your daily activities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Assessment and planning of renovation needs</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Structural modifications and improvements</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Aesthetic updates and modernization</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-interior-gold mt-2 mr-2"></div>
                  <p className="text-sm">Energy efficiency and sustainability improvements</p>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="btn-primary">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how our services can transform your space.
          </p>
          <Link to="/contact">
            <Button className="py-3 px-8 bg-interior-gold text-interior-charcoal hover:bg-white transition-colors rounded-sm text-sm uppercase tracking-wider font-medium">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
