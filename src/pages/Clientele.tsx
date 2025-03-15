
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';

const Clientele = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Clientele</h1>
            <p className="text-gray-300 text-lg">
              Trusted by leading businesses and discerning homeowners
            </p>
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Our Trusted Partners</h2>
            <div className="w-16 h-1 bg-interior-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              We have had the privilege of working with some of the most prestigious brands and individuals 
              in the industry. Our diverse clientele is a testament to our versatility and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Client logos would go here - using placeholder blocks for now */}
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
            <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
              <span className="text-gray-400 font-medium">Client Logo</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Client Testimonials</h2>
          <p className="section-subtitle text-center mx-auto">
            What our clients say about their experience working with us
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-md shadow-md">
              <div className="flex text-interior-gold mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-muted-foreground text-sm italic mb-6">
                "Interior Vista Design transformed our office space beyond our expectations. Their attention to detail 
                and commitment to quality was evident throughout the project. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-interior-charcoal">Rahul Sharma</h4>
                  <p className="text-xs text-muted-foreground">CEO, TechSolutions India</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-md shadow-md">
              <div className="flex text-interior-gold mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-muted-foreground text-sm italic mb-6">
                "Working with Interior Vista Design was a delight from start to finish. They listened to our needs, 
                provided innovative solutions, and delivered a stunning result within our budget."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-interior-charcoal">Priya Patel</h4>
                  <p className="text-xs text-muted-foreground">Owner, Luxury Stays</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-md shadow-md">
              <div className="flex text-interior-gold mb-4">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-muted-foreground text-sm italic mb-6">
                "The team at Interior Vista Design brought our vision to life with their creativity and expertise. 
                Their professionalism and dedication made the entire process smooth and enjoyable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-medium text-interior-charcoal">Vijay Mehta</h4>
                  <p className="text-xs text-muted-foreground">Director, Urban Spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Clientele;
