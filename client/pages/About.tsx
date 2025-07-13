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
  Users,
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description:
        "We love what we do and it shows in every line of code we write.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Always exploring new technologies and creative solutions.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing and quality control in every project.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our success. We're partners, not just vendors.",
    },
  ];

  const team = [
    {
      name: "Ali Hamza",
      role: "Founder &  Chief Operator",
      specialties: [
        "Front-end Developer",
        "System Architecture",
        "Team Leadership",
        " Marketing Manager",
      ],
      skills: ["Next.js", "Tailwind CSS", "Node.js", "Figma", "Python"],
    },
    {
      name: "Najaf Ali",
      role: "CEO &  AI Agent Developer:",
      specialties: [
        "AI developer",
        "Python expert",
        "OpenAI Agent SDK Developer",
      ],
      skills: [
        "Python Specialist",
        "Javascript",
        "Next.js",
        "Figma",
        "AI Expert",
      ],
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
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
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
                  className="text-foreground hover:text-primary transition-colors font-medium"
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
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Get Started
              </Button>
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
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
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
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              About reeCoder
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Building Tomorrow's
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Solutions Today
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              We are a passionate team of developers, designers, and innovators
              dedicated to creating exceptional software solutions that
              transform businesses and enhance lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                reeCoder was born from a simple idea: to make intelligent,
                scalable technology accessible to everyone. What started as a
                small team of passionate developers has grown into a full-stack
                AI-driven service provider helping businesses automate,
                innovate, and grow. With a focus on simplicity, performance, and
                real impact—we’re redefining what smart web solutions can be
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                reeCoder was founded by Ali Hamza, with his best friend Najaf
                Asli joining as the lead developer. Together, they combine
                vision and code to build powerful AI-driven solutions for the
                modern web.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Team collaboration"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
              as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals who bring creativity, expertise, and
              passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="h-14 w-14 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Specialties Section */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wide flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-foreground text-sm uppercase tracking-wide flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how our expertise and passion can help bring your
            vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
              >
                Start Your Project
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
