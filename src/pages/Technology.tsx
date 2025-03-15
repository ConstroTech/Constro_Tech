
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Smartphone, Cpu, Zap, Shield, PencilRuler } from 'lucide-react';

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Technology</h1>
            <p className="text-gray-300 text-lg">
              Cutting-edge tools and technologies that power our design and build process
            </p>
          </div>
        </div>
      </section>
      
      {/* Technology Overview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Innovation at Our Core</h2>
            <div className="w-16 h-1 bg-interior-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              At Interior Vista Design, we leverage the latest technologies to enhance our design process, 
              improve efficiency, and deliver exceptional results. Our commitment to innovation ensures 
              that we stay at the forefront of the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3D Visualization */}
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">3D Visualization</h3>
              <p className="text-muted-foreground text-sm">
                We utilize advanced 3D rendering software to create photorealistic visualizations of your space, 
                allowing you to see the final result before construction begins.
              </p>
            </div>
            
            {/* Virtual Reality */}
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Virtual Reality</h3>
              <p className="text-muted-foreground text-sm">
                Our VR technology enables you to experience your space in an immersive environment, allowing for 
                better decision-making and a clearer understanding of the design.
              </p>
            </div>
            
            {/* Building Information Modeling */}
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Building Information Modeling</h3>
              <p className="text-muted-foreground text-sm">
                BIM technology helps us coordinate all aspects of the construction process, reducing errors, 
                improving communication, and ensuring a smoother project execution.
              </p>
            </div>
            
            {/* Energy Efficiency Solutions */}
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Energy Efficiency Solutions</h3>
              <p className="text-muted-foreground text-sm">
                We implement advanced energy modeling tools to design spaces that are not only beautiful but also 
                environmentally sustainable and cost-effective to operate.
              </p>
            </div>
            
            {/* Project Management Software */}
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Project Management Software</h3>
              <p className="text-muted-foreground text-sm">
                Our proprietary project management systems ensure transparent communication, real-time updates, 
                and efficient tracking of project milestones and budgets.
              </p>
            </div>
            
            {/* Digital Design Tools */}
            <div className="p-6 border border-gray-200 rounded-md hover:border-interior-gold transition-colors">
              <div className="mb-4 text-interior-gold">
                <PencilRuler size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Digital Design Tools</h3>
              <p className="text-muted-foreground text-sm">
                We use the latest CAD and design software to create detailed and accurate plans, ensuring 
                precision in every aspect of your project's execution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Technology Process</h2>
          <p className="section-subtitle text-center mx-auto">
            How we integrate technology into every step of our workflow
          </p>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-interior-gold"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-serif mb-2">Digital Consultation</h3>
                    <p className="text-muted-foreground text-sm">
                      We use digital tools to capture your requirements, preferences, and inspirations, 
                      creating a comprehensive brief for your project.
                    </p>
                  </div>
                  <div className="md:mx-4 my-4 md:my-0 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-interior-gold flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="h-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-3 md:order-1">
                    <div className="h-full"></div>
                  </div>
                  <div className="md:mx-4 my-4 md:my-0 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-interior-gold flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-2 md:order-3">
                    <h3 className="text-xl font-serif mb-2">3D Design Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Our designers create detailed 3D models and renderings, allowing you to visualize 
                      the space and make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-serif mb-2">Virtual Reality Experience</h3>
                    <p className="text-muted-foreground text-sm">
                      Experience your space in virtual reality, allowing for a truly immersive understanding 
                      of the design and making refinements as needed.
                    </p>
                  </div>
                  <div className="md:mx-4 my-4 md:my-0 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-interior-gold flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="h-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-3 md:order-1">
                    <div className="h-full"></div>
                  </div>
                  <div className="md:mx-4 my-4 md:my-0 order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-interior-gold flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-2 md:order-3">
                    <h3 className="text-xl font-serif mb-2">Digital Project Management</h3>
                    <p className="text-muted-foreground text-sm">
                      Our digital management systems provide real-time updates, transparent communication, 
                      and efficient tracking throughout the construction process.
                    </p>
                  </div>
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

export default Technology;
