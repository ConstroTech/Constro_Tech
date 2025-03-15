
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
      
      {/* Projects Gallery with updated project names and new images */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053951/WhatsApp_Image_2025-03-15_at_21.21.50_b0f59ecc_iqv0ll.jpg" 
                  alt="40 Seats Cafeteria" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">40 Seats Cafeteria</h3>
              <p className="text-muted-foreground text-sm">Turnkey Project | Bangalore</p>
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
              <p className="text-muted-foreground text-sm">Residential Design | Bangalore</p>
            </div>
            
            {/* Project 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053886/WhatsApp_Image_2025-03-15_at_21.09.52_e0d92128_c5h6xf.jpg" 
                  alt="Luxury Residential Villa" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Residential Villa</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Bangalore</p>
            </div>
            
            {/* Project 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053783/WhatsApp_Image_2025-03-15_at_21.15.02_0cb48a2a_rzdnzz.jpg" 
                  alt="Pantry Work" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Pantry Work</h3>
              <p className="text-muted-foreground text-sm">Commercial | Bangalore</p>
            </div>
            
            {/* Project 5 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053285/WhatsApp_Image_2025-03-15_at_20.29.09_d1568ae0_pbrfve.jpg" 
                  alt="Painting Work" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Painting Work</h3>
              <p className="text-muted-foreground text-sm">Renovation | Bangalore</p>
            </div>
            
            {/* Project 6 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053933/WhatsApp_Image_2025-03-15_at_20.30.17_a32473d8_ljxeqm.jpg" 
                  alt="Luxury Residential Villa" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Residential Villa</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Bangalore</p>
            </div>
            
            {/* Project 7 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742054427/WhatsApp_Image_2025-03-15_at_21.09.50_b601b367_woeso8.jpg" 
                  alt="Luxury Residential Villa" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Residential Villa</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Bangalore</p>
            </div>
            
            {/* Project 8 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742054444/WhatsApp_Image_2025-03-15_at_21.09.49_564476d5_gnbqds.jpg" 
                  alt="Luxury Residential Villa" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Residential Villa</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Bangalore</p>
            </div>
            
            {/* Project 9 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742053877/WhatsApp_Image_2025-03-15_at_21.09.52_e0151764_hlzs2c.jpg" 
                  alt="Luxury Residential Villa" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Residential Villa</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Bangalore</p>
            </div>
            
            {/* New Project 10 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742058484/WhatsApp_Image_2025-03-15_at_22.37.28_2e416dfb_horybk.jpg" 
                  alt="Office Interior" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Office Interior</h3>
              <p className="text-muted-foreground text-sm">Commercial | Bangalore</p>
            </div>
            
            {/* New Project 11 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742058654/WhatsApp_Image_2025-03-15_at_22.39.50_8356073c_gzpk21.jpg" 
                  alt="Office Interior" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Office Interior</h3>
              <p className="text-muted-foreground text-sm">Commercial | Bangalore</p>
            </div>
            
            {/* New Project 12 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742058486/WhatsApp_Image_2025-03-15_at_22.37.56_dc09a1cb_fv1yvf.jpg" 
                  alt="Office Interior" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Office Interior</h3>
              <p className="text-muted-foreground text-sm">Commercial | Bangalore</p>
            </div>
            
            {/* New Project 13 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://res.cloudinary.com/ddoiavjyy/image/upload/v1742059111/WhatsApp_Image_2025-03-15_at_22.48.10_8788493b_qru3bg.jpg" 
                  alt="Flooring Work" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Flooring Work</h3>
              <p className="text-muted-foreground text-sm">Commercial | Bangalore</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
