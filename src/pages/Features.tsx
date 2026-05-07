import { motion } from "motion/react";
import { Target } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  const features = [
    { title: "Accurate Counting", desc: "Precision-engineered holes ensure exact pill counts every time" },
    { title: "Hygienic Dispensing", desc: "Medical-grade stainless steel prevents contamination" },
    { title: "Fast Output", desc: "Count and dispense 60 pills in seconds, not minutes" },
    { title: "Compact Design", desc: "Space-efficient tool fits perfectly on any clinic desk" },
    { title: "Easy Operation", desc: "Simple mechanism requires no training or technical skills" },
    { title: "Clinic-Friendly", desc: "Designed specifically for homeopathic and ayurveda practices" },
  ];

  return (
    <div className="pt-20">
      <section id="features" className="bg-bg-white min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Features</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Built for Precision & Efficiency</h2>
            <p className="text-text-secondary">Every detail of pilfiloffical is engineered to save time, ensure accuracy, and maintain the highest hygiene standards.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="p-8 rounded-lg bg-bg-gray border border-border-light shadow-soft transition-all"
              >
                <div className="w-12 h-12 rounded-pill bg-light-blue text-primary-blue flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <Link to="/technical" className="bg-[#1E3A8A] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/20 flex items-center gap-2 hover:bg-[#1e3a8a]/90 transition-colors">
                  View Full Technical Specs
               </Link>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
