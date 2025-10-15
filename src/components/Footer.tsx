import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/praful-chand-potluri",
      color: "hover:text-[#0077b5]"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/prafulpotluri",
      color: "hover:text-foreground"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:prafulpotluri@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <footer className="bg-surface-alt border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className={`transition-colors ${link.color}`}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Praful Chand Potluri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
