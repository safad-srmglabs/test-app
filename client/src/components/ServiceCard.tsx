import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group relative bg-white p-8 rounded-2xl border border-border/50",
        "shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20",
        "transition-all duration-300 flex flex-col h-full",
        className
      )}
    >
      <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold font-heading text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
        {description}
      </p>

      <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
