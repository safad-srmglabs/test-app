import { Link } from "wouter";
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="text-xl font-bold font-heading">Collabus</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions.
              We build the future of digital experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-blue-400">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-blue-400">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Web Applications</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Cloud Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-blue-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>ACR Mansion G, 147/F, 8th Main<br />3rd Block Koramangala<br />Bengaluru, Karnataka 560034</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+91 99645 54137</span>
                  <span>+971 56 515 5262</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@collabus.it.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Collabus Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
