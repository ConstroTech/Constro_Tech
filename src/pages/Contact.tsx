import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const emailSubject = encodeURIComponent(`${formData.subject || 'Contact Form Inquiry'}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:constrotechsolutions419@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Show toast and reset form
    toast({
      title: "Email client opened",
      description: "Please send the email from your email client to complete your inquiry.",
    });
    
    // Reset form state
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-interior-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
            <p className="text-gray-300 text-lg">
              Get in touch with us to discuss your project or inquire about our services
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="w-12 h-12 bg-interior-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-interior-gold" />
              </div>
              <h3 className="text-xl font-serif mb-4">Phone</h3>
              <p className="text-muted-foreground mb-2">+91-9740112626</p>
              <p className="text-muted-foreground mb-2">+91-7975311636</p>
              <p className="text-muted-foreground">+91-8748925647</p>
            </div>
            
            {/* Email */}
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="w-12 h-12 bg-interior-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-interior-gold" />
              </div>
              <h3 className="text-xl font-serif mb-4">Email</h3>
              <a 
                href="mailto:constrotechsolutions419@gmail.com" 
                className="text-muted-foreground hover:text-interior-gold transition-colors"
              >
                constrotechsolutions419@gmail.com
              </a>
            </div>
            
            {/* Address */}
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <div className="w-12 h-12 bg-interior-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-interior-gold" />
              </div>
              <h3 className="text-xl font-serif mb-4">Address</h3>
              <p className="text-muted-foreground">
                123 Design Street<br />
                Bangalore, Karnataka<br />
                India - 560001
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Send Us a Message</h2>
            <p className="section-subtitle text-center mx-auto">
              We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-interior-gold/50 focus:border-interior-gold"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-interior-gold/50 focus:border-interior-gold"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-interior-gold/50 focus:border-interior-gold"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-interior-gold/50 focus:border-interior-gold"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Consultation">Project Consultation</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-interior-gold/50 focus:border-interior-gold"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                    Thank you for your message! We will get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="mt-16">
        <div className="h-96 bg-gray-200 w-full">
          {/* Embed Google Map here */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Google Map Embed</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
