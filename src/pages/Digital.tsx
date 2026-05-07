import { QrCode, Scan, CheckCircle2, MousePointer2 } from "lucide-react";

const pilfilofficalDigital = () => {
    return (
        <div className="pt-20">
            <section id="pillfil-digital" className="bg-bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <div className="inline-block px-4 py-1 rounded-pill bg-primary-red/10 text-primary-red text-[10px] font-bold uppercase tracking-widest mb-4">New Feature</div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">pilfiloffical Digital</h2>
                        <p className="text-xl text-primary-blue font-semibold mb-6">QR-Based Medicine Identification System</p>
                        <p className="text-text-secondary text-lg">When medicines look the same, identification becomes the risk. Add a digital verification layer to eliminate look-alike confusion.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-12">
                            <div className="p-10 rounded-lg bg-bg-gray border-l-4 border-primary-red shadow-soft">
                                <h3 className="text-2xl font-bold mb-6">The Challenge</h3>
                                <p className="text-text-secondary leading-loose">
                                    In homeopathic clinics, multiple medicines are stored together with similar bottles and labels. Even experienced practitioners face difficulty in quick identification. For patients, the risk of confusion is even higher.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">The Solution</h3>
                                <p className="text-text-secondary leading-relaxed">pilfiloffical Digital introduces a QR-based identification system that ensures every medicine is instantly recognized.</p>
                                <div className="space-y-4">
                                    {[
                                        "Unique QR code assigned to each medicine",
                                        "Scan using any mobile device",
                                        "Instantly view the correct medicine name"
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <QrCode className="w-5 h-5 text-secondary-blue" />
                                            <span className="text-sm font-semibold text-text-primary">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-secondary-blue to-primary-red blur opacity-20 group-hover:opacity-30 transition" />
                            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl bg-white p-2">
                                 <img 
                                    src="./digital-scan.png" 
                                    alt="Digital Verification" 
                                    className="w-full h-full object-cover rounded-xl"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2173ff9e5950?auto=format&fit=crop&q=80&w=1200";
                                    }}
                                />
                                {/* Scanning Overlay Effect */}
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-[scan_3s_ease-in-out_infinite]" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-16">
                         <h3 className="text-3xl font-bold mb-16">Scan. Identify. Confirm.</h3>
                         <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { title: "Problem", desc: "Similar medicines create confusion", icon: <MousePointer2 /> },
                                { title: "Scan", desc: "Scan QR code on bottle", icon: <Scan /> },
                                { title: "Result", desc: "See exact medicine name", icon: <QrCode /> },
                                { title: "Confirm", desc: "Dispense with confidence", icon: <CheckCircle2 /> },
                            ].map((s, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-14 h-14 rounded-pill bg-light-blue text-primary-blue flex items-center justify-center mx-auto shadow-soft">
                                        {s.icon}
                                    </div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs text-text-primary">{s.title}</h4>
                                    <p className="text-[11px] text-text-secondary font-medium">{s.desc}</p>
                                </div>
                            ))}
                         </div>
                    </div>

                    <div className="bg-primary-blue text-white p-8 rounded-lg text-center text-xl font-bold tracking-tight mb-16">
                        From Visual Similarity to Digital Certainty
                    </div>
                    
                    <div className="bg-bg-gray border border-border-light rounded-2xl p-8 lg:p-12 mb-20 text-center shadow-soft">
                        <h3 className="text-2xl font-bold text-text-primary mb-4">Want to learn more about pilfiloffical Digital?</h3>
                        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                            Transform how your clinic handles medicine identification. Reach out to our team to see how pilfiloffical Digital can be integrated into your practice securely.
                        </p>
                        <a 
                            href="https://wa.me/message/2GNIOSHNPCYLF1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#22C55E] text-white px-10 py-5 rounded-pill text-base font-bold inline-flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-green-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                            Contact us on WhatsApp for more details
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default pilfilofficalDigital;
