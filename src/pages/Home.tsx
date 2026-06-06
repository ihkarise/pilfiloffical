import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Play, ChevronRight, Hourglass, Calculator, Hand, Zap, Target, ShieldCheck, Instagram, CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <>
      <section id="home" className="pt-28 pb-12 bg-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="lg:flex items-center gap-10">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-blue text-primary-blue text-[0.625rem] font-bold tracking-widest uppercase mb-5"
              >
                Precision Medicine Tool
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl lg:text-5xl font-bold leading-tight mb-3"
              >
                Precision Medicine Counting & Dispensing Tool
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-secondary-blue font-semibold mb-4"
              >
                Count. Fill. Dispense. In Seconds — Not Minutes.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base text-text-secondary mb-7 leading-relaxed max-w-lg"
              >
                Designed for modern homeopathic clinics. Engineered with medical-grade stainless steel for hygiene, accuracy, and efficiency.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <Link to="/contact" className="bg-primary-red text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-hover-red transition-all shadow-soft hover:shadow-hover active:scale-95">
                  Book Demo
                </Link>
                <a
                  href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border-light text-primary-blue px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-bg-gray transition-colors active:scale-95"
                >
                  <Instagram className="w-4 h-4" />
                  Watch Demo
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { val: "60", label: "Pills/Dispense" },
                  { val: "5s", label: "Count Time" },
                  { val: "0", label: "Errors" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-primary-blue">{s.val}</div>
                    <div className="text-xs text-text-muted mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft bg-bg-gray">
                <img
                  src="./hero-tool.png"
                  alt="pilfiloffical tool"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary-blue py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <Hourglass className="w-5 h-5" />, val: "60 Pills", label: "Per Dispense" },
              { icon: <Calculator className="w-5 h-5" />, val: "5 Seconds", label: "Count Time" },
              { icon: <ShieldCheck className="w-5 h-5" />, val: "100%", label: "Hygienic" },
              { icon: <Target className="w-5 h-5" />, val: "Zero", label: "Counting Errors" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="text-white/60 shrink-0">{s.icon}</div>
                <div>
                  <div className="font-bold text-sm">{s.val}</div>
                  <div className="text-white/60 text-xs">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features highlight */}
      <section className="bg-bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="text-primary-blue text-[0.625rem] font-bold uppercase tracking-[0.2em] mb-2">Why pilfiloffical</div>
            <h2 className="text-2xl lg:text-3xl font-bold">Built for Modern Clinics</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Zap className="w-5 h-5" />, title: "Lightning Fast", desc: "Count and dispense 60 pills in under 5 seconds" },
              { icon: <Hand className="w-5 h-5" />, title: "Hygienic Touch-Free", desc: "Medical-grade stainless steel, zero hand contamination" },
              { icon: <CheckCircle2 className="w-5 h-5" />, title: "Precise Every Time", desc: "Calibrated mechanism ensures exact pill counts" },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-border-light shadow-soft hover:shadow-hover transition-all group">
                <div className="w-10 h-10 rounded-full bg-light-blue text-primary-blue flex items-center justify-center mb-3 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-bold text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/features" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-blue hover:text-secondary-blue transition-colors">
              View all features <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
