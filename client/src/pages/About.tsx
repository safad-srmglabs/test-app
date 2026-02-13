import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="pt-32 pb-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Collabus</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are a team of passionate technologists dedicated to driving digital transformation.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                 {/* Stock image for team collaboration */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaborating in a modern office"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block p-2 px-4 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                To Provide Cutting-Edge IT Solutions
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At Collabus, we believe technology should be an enabler, not a barrier. Our mission is to democratize access to sophisticated digital tools, allowing businesses of all sizes to compete on a global stage.
                </p>
                <p>
                  Founded in 2020, we have grown from a small consultancy to a full-service development house, serving clients across fintech, healthcare, and retail sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Innovation</h3>
              <p className="text-slate-400 leading-relaxed">
                We constantly explore new technologies to keep our clients ahead of the curve. Status quo is not in our vocabulary.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Excellence</h3>
              <p className="text-slate-400 leading-relaxed">
                We take pride in our craft. From clean code to pixel-perfect designs, quality is non-negotiable.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">Collaboration</h3>
              <p className="text-slate-400 leading-relaxed">
                We work WITH you, not just for you. Your success is our success, and transparency is key to our partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
