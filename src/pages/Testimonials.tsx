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
            <section id="testimonials" className="bg-bg-gray min-h-[80vh] flex flex-col justify-center py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <div className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Testimonials</div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Trusted by Doctors</h2>

                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-10">
                            <div className="inline-flex bg-gray-200/50 p-1.5 rounded-full shadow-inner border border-gray-200">
                                <Link to="/use-cases" className="px-8 py-2.5 rounded-full text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">
                                    Use Cases
                                </Link>
                                <button className="px-8 py-2.5 rounded-full text-sm font-bold bg-white text-[#E11D48] shadow-sm transition-all border border-gray-100">
                                    Testimonials
                                </button>
                            </div>
                        </div>

                        <p className="text-text-secondary">Join 100+ doctors who trust pilfiloffical</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-bg-white p-10 rounded-lg shadow-soft border border-border-light relative"
                            >
                                <div className="text-primary-red/20 absolute top-6 right-8 text-6xl font-serif">“</div>
                                <p className="text-lg font-bold text-text-primary mb-8 leading-relaxed italic pr-4">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-pill bg-light-blue text-primary-blue flex items-center justify-center font-bold">
                                        {t.name.charAt(4)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-text-primary text-sm">{t.name}</div>
                                        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{t.role}</div>
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
