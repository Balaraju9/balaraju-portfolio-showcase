
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hoot App",
      description: "Language-learning mobile app with interactive challenges, real-time AI feedback, and analytics dashboards. Enhanced vocabulary retention by 30% and generated 100+ personalized progress reports automatically.",
      technologies: ["Flutter", "Firebase", "REST APIs", "AI APIs"],
      color: "from-tech-blue to-blue-600",
      githubUrl: "https://github.com/Balaraju9/hoot_app_project",
      demoUrl: "https://play.google.com/store/apps/details?id=com.technicalhub.hoot"
    },
    {
      title: "Group Chatting App",
      description: "Real-time chat app with group messaging, file sharing, and user authentication. Reduced latency by 35% with optimized sockets and handled 200+ concurrent users with 99.9% uptime.",
      technologies: ["Node.js", "WebSockets", "MongoDB", "Express"],
      color: "from-tech-teal to-teal-600",
      githubUrl: "https://github.com/Balaraju9/groupchatting_project",
      demoUrl: "https://groupchattingapp-qh2y.onrender.com/"
    },
    {
      title: "Shop Nest",
      description: "E-commerce app with product listings, cart, authentication, and payment integration. Scaled for 2,000+ users with optimized performance and improved checkout flow conversion by 20%.",
      technologies: ["Flutter", "Firebase", "Cloud Functions", "Payment Gateway"],
      color: "from-tech-purple to-purple-600",
      githubUrl: "https://github.com/Balaraju9/Shop_nest_project",
      demoUrl: "https://github.com/Balaraju9/Shop_nest_project"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in mobile and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:glow-effect transition-all duration-300 group hover:-translate-y-2"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-2xl">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
