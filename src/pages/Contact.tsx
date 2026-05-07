import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        const subject = encodeURIComponent(`pilfiloffical Demo Request - ${data.name}`);
        const bodyText = `
Name: ${data.name}
Phone: ${data.phone}
Clinic: ${data.clinic || "N/A"}
City: ${data.city}
Email: ${data.email || "N/A"}

Message: 
${data.message || "N/A"}
        `.trim();
        
        const body = encodeURIComponent(bodyText);

        setTimeout(() => {
            window.location.href = `mailto:pilfilcadtools@gmail.com?subject=${subject}&body=${body}`;
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 800);
    };

    return (
        <div className="pt-20">
            <section id="contact" className="bg-bg-white min-h-[80vh] flex flex-col justify-center py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Upgrade Your Clinic with pilfiloffical</h2>
                            <p className="text-lg text-text-secondary mb-12 leading-relaxed">Book a free demo and see how pilfiloffical can save time and improve accuracy.</p>
                            
                            <div className="space-y-8 mb-16">
                                {[
                                    "Free demo",
                                    "10% preorder discount",
                                    "Expert guidance",
                                    "Delivery across India"
                                ].map((point, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="p-1.5 rounded-pill bg-primary-red/10 text-primary-red">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-text-primary">{point}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="space-y-4">
                                <a 
                                    href="https://wa.me/message/2GNIOSHNPCYLF1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto bg-[#22C55E] text-white px-10 py-5 rounded-pill text-base font-bold inline-flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-green-200"
                                >
                                    <MessageCircle className="w-6 h-6 " />
                                    Chat on WhatsApp
                                </a>
                                <p className="text-sm text-text-muted mt-3 italic max-w-sm">
                                    * For the fastest response time and expedited support, we highly recommend reaching out via WhatsApp.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-bg-gray p-10 lg:p-12 rounded-lg border border-border-light shadow-soft relative overflow-hidden">
                             <AnimatePresence>
                                 {isSuccess && (
                                     <motion.div 
                                         initial={{ opacity: 0, scale: 0.95 }}
                                         animate={{ opacity: 1, scale: 1 }}
                                         exit={{ opacity: 0, scale: 0.95 }}
                                         className="absolute inset-0 bg-bg-gray z-20 flex flex-col items-center justify-center text-center p-8"
                                     >
                                         <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-inner">
                                             <CheckCircle2 className="w-12 h-12" />
                                         </div>
                                         <h3 className="text-2xl font-bold mb-4 text-text-primary">Opening Email Client...</h3>
                                         <p className="text-text-secondary mb-8 leading-relaxed max-w-sm mx-auto">Please confirm and send the email from your default mail application.</p>
                                         <button 
                                             type="button"
                                             onClick={() => setIsSuccess(false)}
                                             className="bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors shadow-md"
                                         >
                                             Send Another Message
                                         </button>
                                     </motion.div>
                                 )}
                             </AnimatePresence>

                             <h3 className="text-2xl font-bold mb-10 text-text-primary">Request a Demo</h3>
                             <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                                 <div className="space-y-2">
                                     <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Name *</label>
                                     <input name="name" required type="text" placeholder="Your Name" className="w-full px-4 py-3.5 rounded-md bg-white border border-border-light focus:border-secondary-blue focus:ring-4 focus:ring-secondary-blue/10 outline-none transition-all text-sm font-medium" />
                                 </div>
                                 <div className="space-y-2">
                                     <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Phone Number *</label>
                                     <input name="phone" required type="tel" placeholder="Your Phone" className="w-full px-4 py-3.5 rounded-md bg-white border border-border-light focus:border-secondary-blue focus:ring-4 focus:ring-secondary-blue/10 outline-none transition-all text-sm font-medium" />
                                 </div>
                                 <div className="space-y-2">
                                     <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Clinic Name</label>
                                     <input name="clinic" type="text" placeholder="Clinic Name" className="w-full px-4 py-3.5 rounded-md bg-white border border-border-light focus:border-secondary-blue focus:ring-4 focus:ring-secondary-blue/10 outline-none transition-all text-sm font-medium" />
                                 </div>
                                 <div className="space-y-2">
                                     <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">City *</label>
                                     <input name="city" required type="text" placeholder="Your City" className="w-full px-4 py-3.5 rounded-md bg-white border border-border-light focus:border-secondary-blue focus:ring-4 focus:ring-secondary-blue/10 outline-none transition-all text-sm font-medium" />
                                 </div>
                                 <div className="sm:col-span-2 space-y-2">
                                     <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Email (optional)</label>
                                     <input name="email" type="email" placeholder="your@email.com" className="w-full px-4 py-3.5 rounded-md bg-white border border-border-light focus:border-secondary-blue outline-none text-sm font-medium" />
                                 </div>
                                 <div className="sm:col-span-2 space-y-2">
                                     <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Message (optional)</label>
                                     <textarea name="message" rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3.5 rounded-md bg-white border border-border-light focus:border-secondary-blue outline-none text-sm font-medium resize-none"></textarea>
                                 </div>
                                 <div className="sm:col-span-2 mt-4">
                                     <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-[#E11D48] text-white py-5 rounded-pill text-base font-bold hover:bg-[#BE123C] transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                     >
                                         {isSubmitting ? "Sending Request..." : "Request Demo"}
                                         {!isSubmitting && <Send className="w-5 h-5" />}
                                     </button>
                                 </div>
                             </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
