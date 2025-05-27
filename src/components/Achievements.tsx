
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "Competitive Programming",
      items: [
        "Solved 500+ LeetCode problems", 
        "200+ GeeksforGeeks solutions", 
        "70+ CodeChef problems completed",
        "150+ Code360 problems solved"
      ],
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Recognition & Rankings",
      items: [
        "Ranked in Top 5% in Red Hat System Administration (RHCSA)", 
        "Received goodies from Google Gen AI Study Jam 2024", 
        "Actively contributes to open-source and coding communities"
      ],
      icon: "🎖️",
      color: "from-tech-blue to-blue-600"
    },
    {
      title: "Professional Certifications",
      items: [
        "Python Programming, Cybersecurity, Data Science (Cisco)", 
        "Red Hat Certified System Administrator (RHCSA)", 
        "Cisco Certified Network Associate (CCNA)", 
        "Cloud Computing & IoT (IIT Kharagpur)",
        "IT Specialist (HTML, CSS, Java) - Certiport"
      ],
      icon: "📜",
      color: "from-tech-teal to-teal-600"
    }
  ];

  const certifications = [
    "Python Programming", 
    "Cybersecurity Fundamentals", 
    "Data Science", 
    "RHCSA", 
    "CCNA", 
    "Cloud Computing", 
    "IoT Development",
    "IT Specialist"
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition of excellence in competitive programming and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-effect hover:glow-effect transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{achievement.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">{achievement.title}</h3>
                
                <ul className="space-y-2 text-muted-foreground">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Badges */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Professional Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-effect p-4 rounded-lg text-center hover:glow-effect transition-all duration-300 group cursor-default">
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
