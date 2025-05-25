
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Download, ExternalLink, Code } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced Typography */}
          <div className="space-y-6 mb-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-muted-foreground text-2xl md:text-3xl font-normal mb-2">
                Hi, I'm
              </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                Marisetti Balaraju
              </span>
              <div className="inline-block ml-4">
                <Code className="h-12 w-12 md:h-16 md:w-16 text-primary animate-spin-slow" />
              </div>
            </h1>
          </div>

          {/* Enhanced Profile Section - Moved below name */}
          <div className="relative mb-8">
            {/* Glow Effect Behind Profile */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl rounded-full scale-150"></div>
            
            {/* Profile Image with Modern Border */}
            <div className="w-40 h-40 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-background rounded-full"></div>
              </div>
              <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  MB
                </span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>
          </div>

          {/* Description and Tech Stack */}
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="text-primary font-semibold">Flutter & Full-Stack Developer</span>
              <br />
              Building scalable, user-first applications with modern technologies
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['Flutter', 'Firebase', 'Node.js', 'React', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Contact Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/Balaraju9', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              View Resume
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="group bg-secondary/50 hover:bg-secondary/70 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('#projects')}
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              See My Work
            </Button>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent"></div>
            <div 
              className="animate-bounce cursor-pointer p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300 inline-block"
              onClick={() => scrollToSection('#about')}
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
