import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Smartphone, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Leading IT Solutions Provider
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                Transforming Ideas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Into Reality
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                We empower businesses with next-generation technology. From AI-driven insights to seamless mobile experiences, we build the digital future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive technology solutions tailored to drive your business growth.
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <Link href="/services">
                <ServiceCard 
                  title="AI Solutions"
                  description="Leverage the power of Machine Learning and NLP to automate processes and gain predictive insights."
                  icon={<Brain className="w-8 h-8" />}
                />
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link href="/services">
                <ServiceCard 
                  title="Mobile Development"
                  description="Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android."
                  icon={<Smartphone className="w-8 h-8" />}
                />
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link href="/services">
                <ServiceCard 
                  title="Web Development"
                  description="Scalable, secure, and responsive web applications built with modern frameworks and best practices."
                  icon={<Globe className="w-8 h-8" />}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Why Industry Leaders Choose Collabus
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just write code; we solve business problems. Our partner-first approach ensures we understand your goals before we build.
              </p>
              
              <div className="space-y-6">
                {[
                  "Agile Development Methodology",
                  "Enterprise-Grade Security",
                  "24/7 Support & Maintenance",
                  "Scalable Cloud Architecture",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract visual representation */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl font-bold text-primary mb-2">98%</div>
                    <div className="text-muted-foreground">Client Satisfaction Rate</div>
                  </div>
                </div>
                
                {/* Decorative floating elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 bg-white rounded-xl shadow-lg border border-border/50"
                >
                  <Brain className="w-8 h-8 text-accent" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-10 p-4 bg-white rounded-xl shadow-lg border border-border/50"
                >
                  <Smartphone className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg bg-white text-slate-900 hover:bg-slate-100 hover:text-primary transition-colors font-semibold shadow-xl">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
