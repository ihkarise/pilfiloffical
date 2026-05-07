import { Clock, UserCheck, BriefcaseMedical, CheckCircle2, Zap } from "lucide-react";

const Benefits = () => {
  return (
    <div className="pt-20">
      <section id="benefits" className="bg-bg-gray min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Benefits</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Doctors Love pilfiloffical</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-bg-white p-12 rounded-lg shadow-soft border border-border-light">
                  <h3 className="text-2xl font-bold mb-10 text-text-primary">Peace of Mind</h3>
                  <div className="space-y-8">
                      {[
                          { title: "Saves Time", desc: "Spend more time with patients, less on counting", icon: <Clock /> },
                          { title: "Reduces Effort", desc: "No more eye strain from tiny globules", icon: <UserCheck /> },
                          { title: "Professional Image", desc: "Modern and efficient practice impression", icon: <BriefcaseMedical /> },
                      ].map((item, i) => (
                          <div key={i} className="flex gap-6 items-start">
                              <div className="p-2.5 rounded-pill bg-light-blue text-primary-blue shadow-soft">
                                  <CheckCircle2 className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                                  <p className="text-sm text-text-secondary">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="bg-primary-blue text-white p-12 rounded-lg shadow-soft">
                  <h3 className="text-2xl font-bold mb-10 text-white">ROI & Accuracy</h3>
                  <div className="space-y-8">
                      {[
                          { title: "Accurate Dosing", desc: "Eliminate human error in pill counting" },
                          { title: "Faster Workflow", desc: "See more patients in less time" },
                          { title: "Hygienic Process", desc: "Zero direct contact with medicines" },
                      ].map((item, i) => (
                          <div key={i} className="flex gap-6 items-start">
                               <div className="p-2.5 rounded-pill bg-white/10 text-white">
                                  <Zap className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                                  <p className="text-sm text-white/70">{item.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
