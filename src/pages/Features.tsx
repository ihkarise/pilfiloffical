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
      <section id="features" className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[0.625rem] font-bold uppercase tracking-[0.2em] mb-3">Features</div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Built for Precision & Efficiency</h2>
            <p className="text-text-secondary text-sm leading-relaxed">Every detail of pilfiloffical is engineered to save time, ensure accuracy, and maintain the highest hygiene standards.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-bg-gray border border-border-light shadow-soft transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-light-blue text-primary-blue flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center pb-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/technical" className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20 flex items-center gap-2 hover:bg-[#1e3a8a]/90 transition-colors">
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
