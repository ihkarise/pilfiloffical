import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneCall, Target, BriefcaseMedical } from "lucide-react";

import { SITE_NAME } from "../constants";

const Footer = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-primary-blue text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              {/* Logo image replaces the word "pilfiloffical" */}
              {!imgError ? (
                <img 
                  src="./logo.png" 
                  alt={`${SITE_NAME} Logo`} 
                  className="h-12 w-auto brightness-0 invert" 
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-3xl font-extrabold tracking-tighter text-white">{SITE_NAME}</span>
              )}
            </Link>
            <p className="text-white/70 max-w-sm text-sm leading-loose mb-10">
              Precision dispensing for modern clinics using medical-grade stainless steel. Engineered for hygiene, accuracy, and efficiency.
            </p>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-10">Quick Links</div>
            <div className="space-y-4 text-sm font-semibold">
              <Link to="/" className="block hover:text-primary-red transition-colors">Home</Link>
              <Link to="/features" className="block hover:text-primary-red transition-colors">Product</Link>
              <Link to="/use-cases" className="block hover:text-primary-red transition-colors">Use Cases</Link>
              <Link to="/how-it-works" className="block hover:text-primary-red transition-colors">How It Works</Link>
              <Link to="/benefits" className="block hover:text-primary-red transition-colors">Benefits</Link>
              <Link to="/digital" className="block hover:text-primary-red transition-colors text-primary-red">pilfiloffical Digital</Link>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-10">More</div>
            <div className="space-y-4 text-sm font-semibold">
              <Link to="/technical" className="block hover:text-primary-red transition-colors">Technical Details</Link>
              <Link to="/gallery" className="block hover:text-primary-red transition-colors">Gallery</Link>
              <Link to="/testimonials" className="block hover:text-primary-red transition-colors">Testimonials</Link>
              <Link to="/contact" className="block hover:text-primary-red transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-10">Contact</div>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <PhoneCall className="w-5 h-5 text-white/60 shrink-0" />
                <div>
                  <div className="font-bold">Phone</div>
                  <div className="text-white/70">+91 7907671049</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="w-5 h-5 text-white/60 shrink-0" />
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-white/70">pilfilcadtools@gmail.com</div>
                </div>
              </div>
              <div className="flex gap-4">
                <BriefcaseMedical className="w-5 h-5 text-white/60 shrink-0" />
                <div>
                  <div className="font-bold">Address</div>
                  <div className="text-white/70">Pilfil, beside Lakshmi Silks, opp. Arcadia Hotel, Eerayil Kadavu, Kottayam, Kerala 686001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <div>© 2026 {SITE_NAME}. All rights reserved.</div>
          <div className="flex gap-8">
            <span>Made with precision in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
