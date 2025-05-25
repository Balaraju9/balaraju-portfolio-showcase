
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Dart", "Java", "Python", "JavaScript"],
      color: "from-tech-blue to-blue-600"
    },
    {
      title: "Technologies & Frameworks",
      skills: ["Flutter", "Firebase", "Node.js", "REST APIs", "SQL", "Spring", "Hibernate"],
      color: "from-tech-teal to-teal-600"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Postman", "VS Code", "Linux", "Docker"],
      color: "from-tech-purple to-purple-600"
    },
    {
      title: "Concepts & Domains",
      skills: ["TCP/IP", "Machine Learning", "Distributed Systems", "Unix/Linux", "Mobile Development"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl hover:glow-effect transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-xl">
                  {category.title.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "500+", label: "LeetCode Problems" },
            { number: "200+", label: "GeeksforGeeks Solutions" },
            { number: "70+", label: "CodeChef Problems" },
            { number: "3+", label: "Mobile Apps Built" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
