import { motion } from "motion/react";

const TechnicalDetails = () => {
    const specs = [
        { label: "Material", val: "Medical-Grade Stainless Steel" },
        { label: "Capacity", val: "6 to 60 Pills" },
        { label: "Models Available", val: "60-BT, 60-GL, 30-BT, 30-GL" },
        { label: "Weight (60 Model)", val: "550g – 650g" },
        { label: "Weight (30 Model)", val: "350g – 450g" },
        { label: "Power Required", val: "None (Manual Operation)" },
        { label: "Accuracy", val: "100% Precise Counting" },
        { label: "Pill Types", val: "Globules, Biochemic Tablets, Pills" },
    ];

    const models = [
        { id: "60-BT", desc: "Dispenses 2, 3, 5 grain globules up to 1cm" },
        { id: "60-GL", desc: "Handles 40-number pills and 1-grain globules" },
        { id: "30-BT", desc: "Compact version for small clinics" },
        { id: "30-GL", desc: "Compact lightweight model" },
    ];

    return (
        <div className="pt-20">
            <section id="technical-details" className="bg-bg-gray py-20 min-h-[80vh]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Specifications</div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Details</h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">Engineered for precision and built with medical-grade materials, the pilfiloffical system provides unmatched reliability for daily clinical use.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        <div className="bg-bg-white p-10 rounded-lg shadow-soft border border-border-light flex flex-col h-full">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-blue mb-8">General Specifications</h3>
                            <div className="space-y-4 flex-grow">
                                {specs.map((s, i) => (
                                    <div key={i} className="flex justify-between py-3 border-b border-border-light last:border-0 hover:bg-bg-gray/50 transition-colors px-2 rounded-md">
                                        <span className="text-sm font-bold text-text-primary">{s.label}</span>
                                        <span className="text-sm text-text-secondary">{s.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-bg-white p-10 rounded-lg shadow-soft border border-border-light flex flex-col h-full">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-blue mb-8">Available Models</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {models.map((m, i) => (
                                    <div key={i} className="p-6 rounded-lg bg-bg-gray border border-border-light group hover:border-secondary-blue transition-all">
                                        <div className="text-xl font-bold text-primary-blue mb-3 group-hover:text-secondary-blue transition-colors">{m.id}</div>
                                        <p className="text-xs text-text-secondary leading-relaxed font-medium">{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white"
                    >
                        <img 
                            src="./technical-specs.png" 
                            alt="pilfiloffical System Engineering" 
                            className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80";
                            }}
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TechnicalDetails;
