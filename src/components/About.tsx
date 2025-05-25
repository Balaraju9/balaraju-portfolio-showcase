
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "B.Tech in CSE",
      institution: "Aditya Engineering College",
      period: "2022–2026",
      grade: "CGPA: 8.36"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College",
      period: "2020–2022",
      grade: "91.7%"
    },
    {
      degree: "SSC",
      institution: "Narayana School, Aryapuram",
      period: "2015–2020",
      grade: "98.4%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a passionate software engineer with expertise in <span className="text-primary font-semibold">Flutter</span>, 
              <span className="text-primary font-semibold"> Firebase</span>, and <span className="text-primary font-semibold">full-stack development</span>. 
              I thrive on building scalable, user-centric applications and solving complex problems with clean code.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My goal is to contribute to innovative tech teams and grow as a versatile developer. 
              With a strong foundation in computer science and hands-on experience in modern technologies, 
              I'm committed to delivering high-quality solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Driven'].map((trait) => (
                <span key={trait} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="glass-effect hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-primary">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <span className="font-semibold text-accent">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
