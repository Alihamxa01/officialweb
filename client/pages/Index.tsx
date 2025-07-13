import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Code,
  Globe,
  Smartphone,
  Database,
  Zap,
  Users,
  Award,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Responsive, fast, and secure web applications using modern frameworks and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
    },
    {
      icon: Database,
      title: "Backend & API Development",
      description:
        "Scalable backend solutions and robust APIs to power your applications.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Enhance your existing applications with performance improvements and modern architecture.",
    },
    {
      icon: Users,
      title: "Team Augmentation",
      description:
        "Extend your development team with our skilled professionals on-demand.",
    },
  ];

  const features = [
    "10+ Years of Experience",
    "50+ Successful Projects",
    "24/7 Support & Maintenance",
    "Agile Development Process",
    "Modern Tech Stack",
    "Quality Assurance",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "React Native",
    "Flutter",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  reeCoder
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              🚀 Innovative Software Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Transform Your Ideas Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              We're a cutting-edge software house that crafts exceptional
              digital experiences. From web applications to mobile apps, we
              bring your vision to life with precision and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-muted-foreground">
              We work with the latest and most powerful technologies
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Software Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer end-to-end software development services to help your
              business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                About reeCoder
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Your Trusted Development Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience in software development,
                reeCoder has been at the forefront of digital innovation. We
                combine technical expertise with creative vision to deliver
                solutions that not only meet your requirements but exceed your
                expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center border-0 bg-background/50">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projects Delivered
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-0 bg-background/50">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        10+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-0 bg-background/50">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        25+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Team Members
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-0 bg-background/50">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        99%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful
            digital solutions. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
            >
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Send us an Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  reeCoder
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your trusted partner for innovative software solutions. We turn
                your ideas into reality with cutting-edge technology and
                exceptional craftsmanship.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Backend Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@reecoder.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 reeCoder. All rights reserved. Built with passion and
              precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
