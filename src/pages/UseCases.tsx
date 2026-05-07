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
      <section id="use-cases" className="bg-bg-white min-h-[80vh] flex flex-col justify-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Use Cases</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Built for Healthcare Professionals</h2>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-gray-100 p-1.5 rounded-full shadow-inner">
                <button className="px-8 py-2.5 rounded-full text-sm font-bold bg-white text-[#1E3A8A] shadow-sm transition-all">
                  Use Cases
                </button>
                <Link to="/testimonials" className="px-8 py-2.5 rounded-full text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">
                  Testimonials
                </Link>
              </div>
            </div>

            <p className="text-text-secondary">pilfiloffical serves diverse healthcare settings where precision and hygiene matter most.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((c, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-bg-gray p-10 rounded-lg border border-border-light shadow-soft text-center group transition-all"
              >
                <div className="w-16 h-16 rounded-pill bg-light-blue text-primary-blue flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  <div className="[&>svg]:w-7 [&>svg]:h-7">{c.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-4">{c.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Instagram Integration Section */}
          <div className="mt-24 pt-16 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1 shrink-0">
                  <div className="w-full h-full bg-white rounded-full border-2 border-white overflow-hidden p-1">
                    <img src="./logo.png" alt="pilfiloffical" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">@Pilfilsystem</h3>
                  <p className="text-gray-500 text-sm">See pilfiloffical in action across clinics</p>
                </div>
              </div>
              <a 
                href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all shrink-0"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Mocking the Top Views/Reels */}
              {[
                { img: "./gallery-action-1.png", views: "12.4K" },
                { img: "./gallery-main.png", views: "8.2K" },
                { img: "./gallery-action-2.png", views: "5.1K" },
                { img: "./digital-scan.png", views: "3.9K" }
              ].map((reel, i) => (
                <a 
                  key={i}
                  href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="group relative aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <img src={reel.img} className="w-full h-full object-cover" alt={`Instagram Reel ${i+1}`} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex flex-col justify-center items-center">
                      <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="white" />
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm font-bold drop-shadow-md">
                    <Play className="w-4 h-4" fill="white" /> {reel.views}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
