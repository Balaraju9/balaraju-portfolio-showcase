import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_yyu7rpw',       // Your Service ID
        'template_e9vrcbs',      // Your Template ID
        formRef.current,
        'bScHXhmmC--w1g-pi'      // Your Public Key
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I’ll get back to you shortly.",
          });
          formRef.current?.reset(); // Clear form
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Balaraju9",
      icon: Github,
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/balaraju-marisetti",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/balarajumarisetti0/",
      icon: User,
      color: "hover:text-yellow-400"
    },
    {
      name: "Email",
      url: "mailto:22a91a05j1@aec.edu.in",
      icon: Mail,
      color: "hover:text-red-400"
    }
  ];

  const profiles = [
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org/user/balarajumarisetti" },
    { name: "CodeChef", url: "https://codechef.com/users/balu102" },
    { name: "Naukri Code360", url: "https://naukri.com/code360/profile/Balaraju" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="bg-muted/50"
                  />
                </div>
                <Button type="submit" className="w-full glow-effect">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Primary Contact</h4>
                  <a
                    href="mailto:22a91a05j1@aec.edu.in"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    22a91a05j1@aec.edu.in
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Social Profiles</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-3 rounded-lg bg-muted/50 transition-all duration-300 hover:glow-effect ${link.color}`}
                      >
                        <link.icon className="mr-2 h-5 w-5" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Coding Profiles</h4>
                  <div className="space-y-2">
                    {profiles.map((profile) => (
                      <a
                        key={profile.name}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-primary"
                      >
                        {profile.name}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
