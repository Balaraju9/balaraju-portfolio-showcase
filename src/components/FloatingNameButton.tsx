
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingNameButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={scrollToTop}
        className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full px-4 py-3"
      >
        <User className="mr-2 h-4 w-4" />
        <span className="text-sm font-medium">Balaraju</span>
      </Button>
    </div>
  );
};

export default FloatingNameButton;
