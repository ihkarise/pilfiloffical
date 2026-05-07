import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Play, ChevronRight, Hourglass, Calculator, Hand, Zap, Target, ShieldCheck, Instagram, CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <>
      <section id="home" className="pt-32 pb-20 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-light-blue text-primary-blue text-[10px] font-bold tracking-widest uppercase mb-8"
              >
                Precision Medicine Tool
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold leading-tight mb-4"
              >
                Precision Medicine Counting & Dispensing Tool
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl text-secondary-blue font-semibold mb-6"
              >
                Count. Fill. Dispense. In Seconds — Not Minutes.
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-text-secondary mb-10 leading-relaxed max-w-lg"
              >
                Designed for modern homeopathic clinics. Engineered with medical-grade stainless steel for hygiene, accuracy, and efficiency.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-16"
              >
                <Link to="/contact" className="bg-primary-red text-white px-8 py-4 rounded-pill text-base font-semibold hover:bg-hover-red transition-all shadow-soft hover:shadow-hover">
                  Book Demo
                </Link>
                <a 
                  href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border-light text-primary-blue px-8 py-4 rounded-pill text-base font-semibold flex items-center gap-2 hover:bg-bg-gray transition-colors"
                >
                  <Play className="w-5 h-5 fill-primary-blue" />
                  Watch Demo
                </a>
              </motion.div>
              
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: "100%", val: "Stainless Steel" },
                  { label: "60+", val: "Pills Per Count" },
                  { label: "10x", val: "Faster Dispensing" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-text-primary mb-1">{stat.label}</div>
                    <div className="text-[10px] text-text-muted uppercase font-bold tracking-widest">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 mt-16 lg:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                <img 
                  src="./hero-tool.png" 
                  alt="pilfiloffical Precision Counter" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                
                {/* Overlay Highlights */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                    <div className="text-[#1E3A8A] font-bold text-sm">Medical Grade</div>
                    <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Stainless Steel</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-bg-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">From Problems to Solutions</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-bg-white p-8 lg:p-12 rounded-lg shadow-soft border border-border-light">
              <div className="flex items-center gap-3 mb-10 text-primary-red">
                   <Hourglass className="w-6 h-6" />
                   <h3 className="text-xl font-bold text-text-primary uppercase tracking-wide">The Problem</h3>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Manual Counting is Slow", desc: "Wasting clinic time counting pills one by one", icon: <Hourglass className="w-5 h-5" /> },
                  { title: "Dosage Errors Possible", desc: "Human error leads to incorrect counts", icon: <Calculator className="w-5 h-5" /> },
                  { title: "Hygiene Concerns", desc: "Touching pills increases contamination risk", icon: <Hand className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-lg bg-light-red flex items-center justify-center text-primary-red flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-blue text-white p-8 lg:p-12 rounded-lg shadow-soft">
              <div className="flex items-center gap-3 mb-10 text-white">
                   <CheckCircle2 className="w-6 h-6" />
                   <h3 className="text-xl font-bold uppercase tracking-wide text-white">The pilfiloffical Solution</h3>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Fast Automated Counting", desc: "Count up to 60 pills in seconds", icon: <Zap className="w-5 h-5" /> },
                  { title: "Precision Accuracy", desc: "Eliminate counting errors", icon: <Target className="w-5 h-5" /> },
                  { title: "No-Touch Dispensing", desc: "Maintain hygiene with hands-free operation", icon: <ShieldCheck className="w-5 h-5" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
              <a 
                href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-blue text-white px-8 py-3.5 rounded-pill text-sm font-bold inline-flex items-center gap-2 mx-auto hover:bg-primary-blue transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Watch Demo Video on Instagram
              </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
