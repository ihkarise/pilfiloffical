import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const inputBase = "w-full px-4 py-3 rounded-xl border border-border-light bg-white text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all duration-200";
const labelBase = "block text-xs font-bold uppercase tracking-widest text-text-muted mb-1.5";

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
      <section id="contact" className="bg-bg-white flex flex-col justify-center py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left column */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">Upgrade Your Clinic with pilfiloffical</h2>
              <p className="text-base text-text-secondary mb-6 leading-relaxed">Book a free demo and see how pilfiloffical can save time and improve accuracy.</p>

              <div className="space-y-4 mb-8">
                {[
                  "Free demo",
                  "10% preorder discount",
                  "Expert guidance",
                  "Delivery across India"
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="p-1.5 rounded-full bg-primary-red/10 text-primary-red shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-text-primary text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917907671049"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1DAF54] transition-all shadow-soft hover:shadow-hover active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <p className="text-xs text-text-muted mt-3 max-w-xs leading-relaxed">
                * For the fastest response time and expedited support, we highly recommend reaching out via WhatsApp.
              </p>
            </div>

            {/* Right column — Form */}
            <div className="bg-white rounded-2xl border border-border-light shadow-soft p-6 sm:p-8">
              <h3 className="text-lg font-bold text-text-primary mb-6">Request a Demo</h3>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-green-500" />
                    </div>
                    <p className="font-bold text-text-primary text-lg">Request Sent!</p>
                    <p className="text-sm text-text-secondary">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelBase}>Name *</label>
                        <input name="name" required placeholder="Your Name" className={inputBase} />
                      </div>
                      <div>
                        <label className={labelBase}>Phone *</label>
                        <input name="phone" required placeholder="Your Phone" className={inputBase} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelBase}>Clinic Name</label>
                        <input name="clinic" placeholder="Clinic Name" className={inputBase} />
                      </div>
                      <div>
                        <label className={labelBase}>City *</label>
                        <input name="city" required placeholder="Your City" className={inputBase} />
                      </div>
                    </div>
                    <div>
                      <label className={labelBase}>Email (Optional)</label>
                      <input name="email" type="email" placeholder="your@email.com" className={inputBase} />
                    </div>
                    <div>
                      <label className={labelBase}>Message (Optional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us about your requirements..."
                        className={`${inputBase} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-red text-white py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-hover-red transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-soft hover:shadow-hover"
                    >
                      {isSubmitting ? (
                        <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Request Demo
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
