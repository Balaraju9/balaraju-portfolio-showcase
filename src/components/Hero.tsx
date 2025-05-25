
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient animate-gradient-shift bg-[length:400%_400%]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-blue/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-tech-teal/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-tech-purple/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-tech-blue to-tech-teal p-1">
            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
              <span className="text-6xl font-bold text-gradient">MB</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-gradient">Marisetti Balaraju</span>
            <span className="animate-pulse"> 👋</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Flutter & Full-Stack Dev | Building scalable, user-first applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-effect hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:scale-105 transition-transform duration-200"
              onClick={() => window.open('https://github.com/Balaraju9', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="hover:scale-105 transition-transform duration-200"
              onClick={() => scrollToSection('#projects')}
            >
              See My Work
            </Button>
          </div>

          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('#about')}>
            <ArrowDown className="h-8 w-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
