
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Metric = {
  label: string;
  value: string;
  percentage: number;
};

type CaseStudyProps = {
  study: {
    role: string;
    location: string;
    title: string;
    target: string;
    approach: string;
    targeting: string;
    metrics: Metric[];
    results: string;
    source: string;
  };
  delay: number;
};

export const CaseStudyCard = ({ study, delay }: CaseStudyProps) => {
  return (
    <div 
      className="glass-card rounded-xl shadow-md hover:shadow-xl transition-all border border-orbit-purple-400/20 overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-orbit-purple-600/30 p-4 flex items-center justify-between border-b border-orbit-purple-400/20">
        <div className="flex items-center">
          <div className="bg-orbit-orange-500/20 rounded-full p-2 mr-3">
            <Star className="text-orbit-orange-400" size={18} />
          </div>
          <h3 className="font-semibold text-orbit-yellow-200">{study.role}</h3>
        </div>
        <span className="text-orbit-orange-300 text-sm font-medium px-2 py-1 bg-orbit-orange-500/10 rounded-full">
          {study.location}
        </span>
      </div>
      
      <div className="p-6">
        <h4 className="font-bold text-xl mb-4 text-orbit-yellow-200">
          {study.title}
        </h4>
        
        <div className="space-y-4 mb-6 text-orbit-yellow-100/80">
          <p>
            <span className="font-medium text-orbit-yellow-200">Target:</span> {study.target}
          </p>
          <p>
            <span className="font-medium text-orbit-yellow-200">Approach:</span> {study.approach}
          </p>
          <p>
            <span className="font-medium text-orbit-yellow-200">Targeting:</span> {study.targeting}
          </p>
        </div>
        
        <div className="space-y-3 mb-6">
          {study.metrics.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <span className="text-sm text-orbit-yellow-100/60">{metric.label}</span>
                <span className="font-semibold text-orbit-yellow-200">{metric.value}</span>
              </div>
              <div className="h-2 bg-orbit-cosmos-300/50 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full", 
                    index === 1 && metric.label.includes("Cost") ? "bg-orbit-orange-500" : "bg-orbit-purple-500"
                  )} 
                  style={{ width: `${metric.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-orbit-cosmos-400/70 p-4 rounded-lg mb-4 border border-orbit-purple-400/20">
          <p className="font-semibold text-orbit-yellow-200">Results:</p>
          <p className="text-orbit-yellow-100/80">{study.results}</p>
        </div>
        
        <p className="text-sm text-orbit-yellow-100/50 italic">Source: {study.source}</p>
      </div>
    </div>
  );
};
