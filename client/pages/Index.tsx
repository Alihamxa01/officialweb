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
  ArrowRight,
  Play,
  Star,
  Code2,
  Rocket,
  Shield,
  Zap,
  Users,
  Award,
  Menu,
  X,
  CheckCircle,
  Globe,
  Bot,
  Database,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Code2,
      title: "Modern Technology Stack",
      description: "Built with the latest technologies and best practices",
    },
    {
      icon: Rocket,
      title: "Fast Development",
      description: "Agile methodology for rapid project delivery",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security for your applications",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and scalability",
    },
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
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote:
        "reeCoder transformed our outdated system into a modern, efficient platform. Exceptional work!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      quote:
        "Outstanding development team with incredible attention to detail. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      company: "InnovateCorp",
      quote:
        "Professional, reliable, and delivered exactly what we needed on time and within budget.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  reeCoder
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  Get Started
                </Button>
              </Link>
            </div>

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

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b">
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decorative images */}
        <div className="absolute left-4 top-1/4 opacity-10 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            alt="Code"
            className="w-24 h-24 rounded-lg"
          />
        </div>
        <div className="absolute right-4 top-1/3 opacity-10 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            alt="Data"
            className="w-32 h-32 rounded-lg"
          />
        </div>
        <div className="absolute left-8 bottom-1/4 opacity-10 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
            alt="Analytics"
            className="w-28 h-28 rounded-lg"
          />
        </div>
        <div className="absolute right-8 bottom-1/3 opacity-10 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=110&q=80"
            alt="Team"
            className="w-26 h-26 rounded-lg"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 animate-pulse">
              🚀 Premium Software Development Agency
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Transform Your Vision Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient">
                Digital Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              We craft cutting-edge software solutions that drive business
              growth and innovation. From concept to deployment, we're your
              trusted development partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-accent/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Why Choose reeCoder
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powered by Modern Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We leverage the most advanced and reliable technologies to build
              your solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Technology showcase with images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Web Development"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <CardDescription>
                  Modern web applications with React, Next.js, and cutting-edge
                  frameworks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
              <CardHeader className="text-center">
                <Bot className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>AI Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="AI Robotics"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <CardDescription>
                  Intelligent AI agents and automation solutions to streamline
                  your business processes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Backend Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Backend Development"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <CardDescription>
                  Scalable backend solutions with Node.js, databases, and cloud
                  infrastructure.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            Ready to Get Started?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into powerful digital solutions. Our expert
            team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-accent/10"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  reeCoder
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Your trusted partner for innovative software solutions. We turn
                your ideas into reality with cutting-edge technology and
                exceptional craftsmanship.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary">ISO 9001 Certified</Badge>
                <Badge variant="secondary">24/7 Support</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-primary transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>hello@reecoder.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 reeCoder. All rights reserved. Crafted with passion
              and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
