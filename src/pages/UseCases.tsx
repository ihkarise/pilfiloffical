import { motion } from "motion/react";
import { BriefcaseMedical, Stethoscope, GraduationCap, Store, Instagram, Play } from "lucide-react";
import { Link } from "react-router-dom";

const UseCases = () => {
  const cases = [
    { title: "Homeopathic Clinics", desc: "Perfect for dispensing globules and biochemic tablets with precision", icon: <BriefcaseMedical /> },
    { title: "Ayurveda Clinics", desc: "Ideal for counting ayurvedic pills and tablets hygienically", icon: <Stethoscope /> },
    { title: "Medical Colleges", desc: "Essential tool for pharmacy training and practical sessions", icon: <GraduationCap /> },
    { title: "Pharmacies", desc: "Speed up prescription filling with accurate automated counting", icon: <Store /> },
  ];

  return (
    <div className="pt-20">
      <section id="use-cases" className="bg-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[0.625rem] font-bold uppercase tracking-[0.2em] mb-3">Use Cases</div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-5">Built for Healthcare Professionals</h2>

            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-gray-100 p-1 rounded-full shadow-inner">
                <button className="px-5 py-2 rounded-full text-sm font-bold bg-white text-[#1E3A8A] shadow-sm transition-all">
                  Use Cases
                </button>
                <Link to="/testimonials" className="px-5 py-2 rounded-full text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">
                  Testimonials
                </Link>
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed">pilfiloffical serves diverse healthcare settings where precision and hygiene matter most.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-bg-gray p-6 rounded-xl border border-border-light shadow-soft text-center group transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-light-blue text-primary-blue flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  <div className="[&>svg]:w-5 [&>svg]:h-5">{c.icon}</div>
                </div>
                <h3 className="text-sm font-bold mb-2">{c.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1 shrink-0">
                  <div className="w-full h-full bg-white rounded-full border-2 border-white overflow-hidden p-0.5">
                    <img src="./logo.png" alt="pilfiloffical" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">@pilfilmedicinecountingtool</div>
                  <div className="text-xs text-text-muted">Follow us on Instagram</div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
