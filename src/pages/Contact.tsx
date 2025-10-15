import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in new opportunities, collaborations, or just a friendly chat about data science and engineering. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/praful-chand-potluri-5a261117b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover-lift group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>

              <a
                href="mailto:prafulpotluri@gmail.com"
                className="flex items-center p-4 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover-lift group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">prafulpotluri@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+12692074064"
                className="flex items-center p-4 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover-lift group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 269 207 4064</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-primary/10">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="border-primary/20 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
