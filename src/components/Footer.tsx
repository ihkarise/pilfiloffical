import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Target, BriefcaseMedical } from "lucide-react";

import { SITE_NAME } from "../constants";

const Footer = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-primary-blue text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              {!imgError ? (
                <img
                  src="./logo.png"
                  alt={`${SITE_NAME} Logo`}
                  className="h-10 w-auto brightness-0 invert"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-2xl font-extrabold tracking-tighter text-white">{SITE_NAME}</span>
              )}
            </Link>
            <p className="text-white/70 max-w-sm text-sm leading-loose mb-6">
              Precision dispensing for modern clinics using medical-grade stainless steel. Engineered for hygiene, accuracy, and efficiency.
            </p>
          </div>

          <div>
            <div className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Quick Links</div>
            <div className="space-y-3 text-sm font-semibold">
              <Link to="/" className="block hover:text-primary-red transition-colors">Home</Link>
              <Link to="/features" className="block hover:text-primary-red transition-colors">Product</Link>
              <Link to="/use-cases" className="block hover:text-primary-red transition-colors">Use Cases</Link>
              <Link to="/how-it-works" className="block hover:text-primary-red transition-colors">How It Works</Link>
              <Link to="/benefits" className="block hover:text-primary-red transition-colors">Benefits</Link>
              <Link to="/digital" className="block hover:text-primary-red transition-colors text-primary-red">pilfiloffical Digital</Link>
            </div>
          </div>

          <div>
            <div className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">More</div>
            <div className="space-y-3 text-sm font-semibold">
              <Link to="/technical" className="block hover:text-primary-red transition-colors">Technical Details</Link>
              <Link to="/gallery" className="block hover:text-primary-red transition-colors">Gallery</Link>
              <Link to="/testimonials" className="block hover:text-primary-red transition-colors">Testimonials</Link>
              <Link to="/contact" className="block hover:text-primary-red transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Contact</div>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <PhoneCall className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Phone</div>
                  <a href="tel:+917907671049" className="text-white font-semibold hover:text-primary-red transition-colors">+91 7907671049</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Target className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Email</div>
                  <a href="mailto:pilfilcadtools@gmail.com" className="text-white font-semibold hover:text-primary-red transition-colors break-all">pilfilcadtools@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-3">
                <BriefcaseMedical className="w-4 h-4 text-white/60 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/40 text-xs mb-0.5">Address</div>
                  <p className="text-white/80 leading-relaxed">Pilfil, beside Lakshmi Silks, opp. Arcadia Hotel, Eerayil Kadavu, Kottayam, Kerala 686001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.625rem] font-bold uppercase tracking-[0.15em] text-white/30">
          <span>© 2026 Pilfiloffical. All rights reserved.</span>
          <span>Made with Precision in India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
