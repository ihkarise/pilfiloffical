import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    { name: "Dr. Varun Vasudevan", text: "Now what used to take minutes takes seconds.", role: "Homeopathic Practitioner" },
    { name: "Dr. Libin Job", text: "No more touching pills directly. Hygiene improved.", role: "Clinical Director" },
    { name: "Dr. Manthan Gohil", text: "Excellent build quality and easy to clean.", role: "Homeopathic Practitioner" },
    { name: "Dr. Sridharan Gupta", text: "A must-have tool for modern clinics.", role: "Ayurvedic Expert" },
  ];

  return (
    <div className="pt-20">
      <section id="testimonials" className="bg-bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[0.625rem] font-bold uppercase tracking-[0.2em] mb-3">Testimonials</div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-5">Trusted by Doctors</h2>

            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-gray-200/50 p-1 rounded-full shadow-inner border border-gray-200">
                <Link to="/use-cases" className="px-5 py-2 rounded-full text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">
                  Use Cases
                </Link>
                <button className="px-5 py-2 rounded-full text-sm font-bold bg-white text-[#E11D48] shadow-sm transition-all border border-gray-100">
                  Testimonials
                </button>
              </div>
            </div>

            <p className="text-text-secondary text-sm">Join 100+ doctors who trust pilfiloffical</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-bg-white p-6 rounded-xl shadow-soft border border-border-light relative overflow-hidden"
              >
                <div className="text-primary-red/15 absolute top-3 right-5 text-5xl font-serif leading-none select-none">"</div>
                <p className="text-base font-semibold text-text-primary mb-5 leading-relaxed italic pr-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-light-blue text-primary-blue flex items-center justify-center font-bold text-sm shrink-0">
                    {t.name.charAt(4)}
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">{t.name}</div>
                    <div className="text-[0.625rem] text-text-muted font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
