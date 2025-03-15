
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Projects</h1>
            <p className="text-gray-300 text-lg">
              Explore our portfolio of stunning interior design and build projects
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Gallery with updated images */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053951/WhatsApp_Image_2025-03-15_at_21.21.50_b0f59ecc_iqv0ll.jpg" 
                  alt="Modern Office Complex" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Modern Office Complex</h3>
              <p className="text-muted-foreground text-sm">Corporate Interiors | Bangalore</p>
            </div>
            
            {/* Project 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053918/WhatsApp_Image_2025-03-15_at_21.09.50_05ce81f1_zr6oxq.jpg" 
                  alt="Luxury Residential Villa" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Residential Villa</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Mumbai</p>
            </div>
            
            {/* Project 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053886/WhatsApp_Image_2025-03-15_at_21.09.52_e0d92128_c5h6xf.jpg" 
                  alt="Boutique Hotel Renovation" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Boutique Hotel Renovation</h3>
              <p className="text-muted-foreground text-sm">Hospitality Design | Goa</p>
            </div>
            
            {/* Project 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053783/WhatsApp_Image_2025-03-15_at_21.15.02_0cb48a2a_rzdnzz.jpg" 
                  alt="Heritage Building Restoration" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Heritage Building Restoration</h3>
              <p className="text-muted-foreground text-sm">Commercial Renovation | Delhi</p>
            </div>
            
            {/* Project 5 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053285/WhatsApp_Image_2025-03-15_at_20.29.09_d1568ae0_pbrfve.jpg" 
                  alt="Modern Retail Store" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Modern Retail Store</h3>
              <p className="text-muted-foreground text-sm">Retail Design | Hyderabad</p>
            </div>
            
            {/* Project 6 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053933/WhatsApp_Image_2025-03-15_at_20.30.17_a32473d8_ljxeqm.jpg" 
                  alt="Contemporary Apartment" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Contemporary Apartment</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Chennai</p>
            </div>
            
            {/* Project 7 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742054427/WhatsApp_Image_2025-03-15_at_21.09.50_b601b367_woeso8.jpg" 
                  alt="Elegant Home Interiors" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Elegant Home Interiors</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Pune</p>
            </div>
            
            {/* Project 8 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742054444/WhatsApp_Image_2025-03-15_at_21.09.49_564476d5_gnbqds.jpg" 
                  alt="Corporate Headquarters" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Corporate Headquarters</h3>
              <p className="text-muted-foreground text-sm">Office Design | Bangalore</p>
            </div>
            
            {/* Project 9 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053877/WhatsApp_Image_2025-03-15_at_21.09.52_e0151764_hlzs2c.jpg" 
                  alt="Luxury Villa Renovation" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Villa Renovation</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Kerala</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
