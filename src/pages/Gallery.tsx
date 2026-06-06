import { Play } from "lucide-react";

const Gallery = () => {
  return (
    <div className="pt-20 pb-16">
      <section id="gallery" className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">See pilfiloffical in Action</h2>
            <p className="text-gray-500 mt-3 text-lg">Precision dispensing tools engineered for modern homeopathy clinics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl shadow-md h-[480px]">
              <img
                src="./gallery-main.png"
                alt="Pilfil dispensing tool in action"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80"; }}
              />
              <div className="absolute inset-0 bg-primary-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Play className="w-12 h-12 text-white fill-white shadow-xl" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-md flex-1 min-h-[225px]">
                <img
                  src="./gallery-grid-3.jpg"
                  alt="Pilfil tool close-up"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600"; }}
                />
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-md flex-1 min-h-[225px]">
                <img
                  src="./gallery-action-2.png"
                  alt="Pilfil tool detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1587854692152-cbe668df9762?auto=format&fit=crop&q=80&w=800"; }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { src: "./gallery-grid-5.jpg", alt: "Pilfil tool angle 1", fb: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=600" },
              { src: "./gallery-grid-6.jpg", alt: "Pilfil tool angle 2", fb: "https://images.unsplash.com/photo-1631549911780-87c04df0a996?auto=format&fit=crop&q=80&w=600" },
              { src: "./gallery-grid-7.jpg", alt: "Pilfil tool angle 3", fb: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" },
              { src: "./gallery-grid-1.png", alt: "Homeopathy medicine dispensing", fb: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=600" },
            ].map((img, i) => (
              <div key={i} className="aspect-square relative group overflow-hidden rounded-2xl shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => { e.currentTarget.src = img.fb; }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-md h-[300px]">
              <img
                src="./gallery-action-1.png"
                alt="Homeopathy medicines"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Precision. Hygiene. Efficiency.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-md h-[300px]">
              <img
                src="./hero-tool.png"
                alt="Pilfil hero tool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Medical-Grade Stainless Steel</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
