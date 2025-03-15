
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, Award, Users, Clock, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">About Us</h1>
            <p className="text-gray-300 text-lg">
              We are a team of passionate designers and builders dedicated to creating exceptional interior spaces.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Our Company" 
                  className="rounded-md shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-interior-gold rounded-md hidden md:block"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-interior-gold mb-6"></div>
              <p className="text-muted-foreground mb-6">
                Interior Vista Design was founded with a vision to transform ordinary spaces into extraordinary 
                experiences. With a blend of artistic vision and technical expertise, we have established 
                ourselves as a leading design and build company in the industry.
              </p>
              <p className="text-muted-foreground mb-6">
                Our journey began with a small team of passionate designers and has grown into a comprehensive 
                design and build firm serving clients across residential, commercial, and hospitality sectors.
              </p>
              <p className="text-muted-foreground">
                We believe that exceptional design should be accessible to all, and we work closely with our 
                clients to understand their needs, preferences, and budget constraints to deliver tailored 
                solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="text-4xl font-serif font-bold text-interior-charcoal mb-2">120+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="text-4xl font-serif font-bold text-interior-charcoal mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="text-4xl font-serif font-bold text-interior-charcoal mb-2">80+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="text-4xl font-serif font-bold text-interior-charcoal mb-2">25+</div>
              <p className="text-muted-foreground">Design Awards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Values</h2>
          <p className="section-subtitle text-center mx-auto">
            The principles that guide our work and define our approach
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We strive for excellence in every aspect of our work, from the initial design concept to the final execution.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Collaboration</h3>
              <p className="text-muted-foreground text-sm">
                We believe in the power of collaboration, working closely with clients, architects, and contractors.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Timeliness</h3>
              <p className="text-muted-foreground text-sm">
                We respect the value of time and ensure timely delivery of projects without compromising on quality.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                We continuously explore innovative design solutions and construction techniques to stay ahead.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              We'd love to hear from you. Reach out to discuss your project or inquire about our services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone size={24} className="text-interior-gold mb-4" />
                <h3 className="text-xl font-serif mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">+91-9740112626</p>
                <p className="text-gray-300 text-sm">+91-7975311636</p>
                <p className="text-gray-300 text-sm">+91-8748925647</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail size={24} className="text-interior-gold mb-4" />
                <h3 className="text-xl font-serif mb-2">Email</h3>
                <a href="mailto:constrotechsolutions419@gmail.com" className="text-gray-300 text-sm hover:text-interior-gold transition-colors">
                  constrotechsolutions419@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
