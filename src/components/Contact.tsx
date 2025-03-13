
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-400/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let's Work Together
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Contact Information */}
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="glass-panel rounded-xl p-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3 text-primary" />
                    <a href="mailto:alex@example.com" className="hover:text-primary transition-colors">
                      alex@example.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin size={20} className="mr-3 text-primary" />
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      linkedin.com/in/alexdev
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github size={20} className="mr-3 text-primary" />
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      github.com/alexdev
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-medium mb-4">Currently Available For</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 text-green-500 mt-0.5" />
                    <span>Full-time positions</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 text-green-500 mt-0.5" />
                    <span>Freelance projects</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 text-green-500 mt-0.5" />
                    <span>Consulting opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 text-green-500 mt-0.5" />
                    <span>Speaking engagements</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-3 order-1 md:order-2">
              <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-card"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check size={18} className="mr-2" />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
