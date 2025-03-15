
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
      
      {/* Projects Gallery */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-md shadow-md mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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
                  src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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
                  src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Contemporary Apartment" 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Contemporary Apartment</h3>
              <p className="text-muted-foreground text-sm">Residential Design | Chennai</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
