
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "Workbees Technologies",
      role: "Software Development Intern",
      type: "Remote",
      period: "Sep 2024 – Nov 2024",
      achievements: [
        "Designed intuitive mobile UIs in Flutter, improving UX flow by 20%",
        "Suggested 10+ feature improvements used by 1,000+ users",
        "Executed 50+ test cases with 95% bug-free deployment",
        "Streamlined workflows across teams, cutting timelines by 15%"
      ],
      color: "from-tech-blue to-blue-600"
    },
    {
      company: "Technical Hub",
      role: "Mobile App Developer Intern",
      type: "Part-Time",
      period: "Jul 2024 – Aug 2024",
      achievements: [
        "Built 3+ functional mobile apps, including a to-do and e-commerce app",
        "Optimized app response time by 40%",
        "Collaborated in technical assessments and 20+ coding challenges",
        "Improved team productivity and coding efficiency by 25%"
      ],
      color: "from-tech-teal to-teal-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional journey in software development and mobile app creation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-blue to-tech-teal hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} hidden md:block border-4 border-background`}></div>
                  
                  <Card className="md:ml-16 glass-effect hover:glow-effect transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                          <h4 className="text-lg font-semibold">{exp.company}</h4>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-1">
                            {exp.type}
                          </span>
                          <div className="text-muted-foreground text-sm">{exp.period}</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
