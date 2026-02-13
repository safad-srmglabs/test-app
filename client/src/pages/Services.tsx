import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Brain, Smartphone, Globe, Cloud, Code, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "ai",
      title: "AI & Machine Learning",
      description: "Harness the power of data with our advanced AI solutions. We build predictive models, natural language processing tools, and intelligent automation systems.",
      icon: <Brain className="w-10 h-10" />,
      features: ["Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision", "Chatbot Development"]
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      description: "Create engaging mobile experiences that users love. We develop native iOS and Android apps as well as cost-effective cross-platform solutions.",
      icon: <Smartphone className="w-10 h-10" />,
      features: ["iOS Development (Swift)", "Android Development (Kotlin)", "React Native / Flutter", "App Store Optimization"]
    },
    {
      id: "web",
      title: "Web Development",
      description: "Build a powerful online presence. Our full-stack web development services ensure your application is scalable, secure, and SEO-friendly.",
      icon: <Globe className="w-10 h-10" />,
      features: ["Full-Stack Development", "E-commerce Solutions", "Custom CMS", "Progressive Web Apps (PWA)"]
    },
    {
      id: "cloud",
      title: "Cloud Services",
      description: "Migrate and optimize your infrastructure on the cloud. We help you leverage AWS, Azure, or Google Cloud for maximum efficiency and cost savings.",
      icon: <Cloud className="w-10 h-10" />,
      features: ["Cloud Migration", "DevOps & CI/CD", "Serverless Architecture", "Infrastructure as Code"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center opacity-20" />
        {/* Descriptive comment: Abstract tech background with network connections/nodes */}
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            End-to-end technology solutions designed to scale with your business.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg border border-border/50">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link href="/contact">
                      <Button size="lg" className="rounded-full">
                        Discuss {service.title}
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-border shadow-2xl relative overflow-hidden group p-8 flex items-center justify-center">
                     {/* Decorative Elements */}
                     <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)]" />
                     
                     <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
                           <Code className="w-8 h-8 text-primary mb-2" />
                           <div className="h-2 w-16 bg-slate-100 rounded mb-2" />
                           <div className="h-2 w-full bg-slate-50 rounded" />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg mt-8 hover:-translate-y-2 transition-transform duration-300 delay-100">
                           <Database className="w-8 h-8 text-accent mb-2" />
                           <div className="h-2 w-16 bg-slate-100 rounded mb-2" />
                           <div className="h-2 w-full bg-slate-50 rounded" />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg -mt-8 hover:-translate-y-2 transition-transform duration-300 delay-200">
                           <Shield className="w-8 h-8 text-indigo-500 mb-2" />
                           <div className="h-2 w-16 bg-slate-100 rounded mb-2" />
                           <div className="h-2 w-full bg-slate-50 rounded" />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 delay-300">
                           <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                           <div className="h-2 w-16 bg-slate-100 rounded mb-2" />
                           <div className="h-2 w-full bg-slate-50 rounded" />
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
