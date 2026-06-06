import { MousePointer2, Settings, Monitor, Instagram, PlayCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    { n: "1", title: "Load", desc: "Pour your homeopathic globules or pills onto the counting tray", icon: <MousePointer2 /> },
    { n: "2", title: "Set Count", desc: "Slide the calibrated ruler to your desired pill count (6–60)", icon: <Settings /> },
    { n: "3", title: "Dispense", desc: "Tilt and release pills directly into patient bottles", icon: <Monitor /> },
  ];

  return (
    <div className="pt-20">
      <section id="how-it-works" className="bg-bg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[0.625rem] font-bold uppercase tracking-[0.2em] mb-3">Process</div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Simple 3-Step Process</h2>
            <p className="text-text-secondary text-sm leading-relaxed">Start counting pills accurately in seconds. No training required.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative mb-10">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border-light -translate-y-1/2 z-0" />

            {steps.map((s, i) => (
              <div key={i} className="relative z-10 bg-bg-gray text-center lg:px-4">
                <div className="w-14 h-14 rounded-full bg-primary-blue text-white flex items-center justify-center mx-auto mb-5 text-lg font-bold border-[6px] border-bg-gray shadow-soft">
                  {s.n}
                </div>
                <h3 className="text-base font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-border-light text-center max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1 mb-5">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Watch Video Tutorials</h3>
            <p className="text-text-secondary mb-6 text-sm leading-relaxed">Want to see it in action? Check out our official Instagram page @Pilfilsystem for hands-on tutorials and demonstrations.</p>
            <a
              href="https://www.instagram.com/pilfilmedicinecountingtool/reels/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2.5 hover:shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <PlayCircle className="w-4 h-4" />
              Watch Tutorials on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
