
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
      <section className="section py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742057138/WhatsApp_Image_2025-03-15_at_22.15.32_7275dd2b_ckgfse.jpg" 
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
                CONSTRO TECH SOLUTIONS specializes in the design, execution, and delivery of
                various types of interior and exterior designs for residential and commercial buildings.
                Additionally, we offer services for the Structural design, execution, and delivery of
                residential and commercial projects.
              </p>
              <p className="text-muted-foreground mb-6">
                Constro Tech Solutions has a longstanding history of providing quality construction
                and service, which is the result of hard work, attention to detail, and dedication to
                serving the community. We are a conservative contracting firm that follows a strategy to
                become not the largest general contractor but the best. At Constro Tech Solutions, we
                treat our clients with respect, fulfill our promises, and deliver projects safely, on time,
                and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="text-4xl font-serif font-bold text-interior-charcoal mb-2">56+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="text-4xl font-serif font-bold text-interior-charcoal mb-2">5+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="text-4xl font-serif font-bold text-interior-charcoal mb-2">50+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision and Mission */}
      <section className="section py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <h3 className="text-2xl font-serif mb-4">VISION</h3>
              <div className="w-12 h-1 bg-interior-gold mb-6"></div>
              <p className="text-muted-foreground">
                Our vision is to build a reliable company for our valued clients and to distinguish our 
                company through the delivery of high-quality products.
              </p>
            </div>
            <div className="p-8 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <h3 className="text-2xl font-serif mb-4">MISSION</h3>
              <div className="w-12 h-1 bg-interior-gold mb-6"></div>
              <p className="text-muted-foreground mb-4">
                A dependable & reliable partner to all our clients.
              </p>
              <p className="text-muted-foreground mb-4">
                Delivering a good quality of product within a timeline.
              </p>
              <p className="text-muted-foreground">
                Our mission is dedicated serving our clients and community by delivering the best of 
                value in service and innovative, efficient solutions. We are deeply committed to exceeding 
                client expectations for quality, responsiveness, customer service, and professional excellence 
                while delivering our projects on time and within agreed upon schedules and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section py-16">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <Phone size={24} className="text-interior-gold mb-4" />
                <h3 className="text-xl font-serif mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">+91-9740112626</p>
                <p className="text-gray-300 text-sm">+91-7975311636</p>
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
