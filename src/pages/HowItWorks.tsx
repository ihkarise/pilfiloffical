import { MousePointer2, Settings, Monitor, Instagram, PlayCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    { n: "1", title: "Load", desc: "Pour your homeopathic globules or pills onto the counting tray", icon: <MousePointer2 /> },
    { n: "2", title: "Set Count", desc: "Slide the calibrated ruler to your desired pill count (6–60)", icon: <Settings /> },
    { n: "3", title: "Dispense", desc: "Tilt and release pills directly into patient bottles", icon: <Monitor /> },
  ];

  return (
    <div className="pt-20">
      <section id="how-it-works" className="bg-bg-gray py-20 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Process</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Simple 3-Step Process</h2>
            <p className="text-text-secondary">Start counting pills accurately in seconds. No training required.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative mb-24">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border-light -translate-y-1/2 z-0" />
              
              {steps.map((s, i) => (
                  <div key={i} className="relative z-10 bg-bg-gray text-center lg:px-6">
                      <div className="w-16 h-16 rounded-pill bg-primary-blue text-white flex items-center justify-center mx-auto mb-8 text-xl font-bold border-8 border-bg-gray shadow-soft">
                          {s.n}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                  </div>
              ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border-light text-center max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1.5 mb-6">
                 <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <Instagram className="w-10 h-10 text-pink-500" />
                 </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Watch Video Tutorials</h3>
            <p className="text-text-secondary mb-8 text-lg">Want to see it in action? Check out our official Instagram page @Pilfilsystem for hands-on tutorials and demonstrations.</p>
            <a 
              href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-1"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Tutorials on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
