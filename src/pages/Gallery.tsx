import { Play } from "lucide-react";

const Gallery = () => {
    return (
        <div className="pt-20">
            <section id="gallery" className="bg-bg-white min-h-[80vh] flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold">See pilfiloffical in Action</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 aspect-video md:aspect-auto">
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl shadow-soft">
                            <img 
                                src="./gallery-main.png" 
                                alt="Action 1" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80";
                                }}
                            />
                            <div className="absolute inset-0 bg-primary-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Play className="w-12 h-12 text-white fill-white shadow-xl" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-soft h-[300px] md:h-auto">
                            <img 
                                src="./gallery-action-1.png" 
                                alt="Action 2" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800";
                                }}
                            />
                        </div>
                        <div className="relative group overflow-hidden rounded-xl shadow-soft h-[300px] md:h-auto">
                            <img 
                                src="./gallery-action-2.png" 
                                alt="Action 3" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1587854692152-cbe668df9762?auto=format&fit=crop&q=80&w=800";
                                }}
                            />
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        {[
                            { name: "./gallery-grid-1.png", fb: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=600" },
                            { name: "./gallery-grid-2.png", fb: "https://images.unsplash.com/photo-1631549911780-87c04df0a996?auto=format&fit=crop&q=80&w=600" },
            { name: "./gallery-grid-3.jpg", fb: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=600" },
                            { name: "./gallery-grid-4.png", fb: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" }
            { name: "./gallery-grid-5.jpg", fb: "https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=600" },
            { name: "./gallery-grid-6.jpg", fb: "https://images.unsplash.com/photo-1631549911780-87c04df0a996?auto=format&fit=crop&q=80&w=600" },
            { name: "./gallery-grid-7.jpg", fb: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" },
                        ].map((img, i) => (
                            <div key={i} className="aspect-square relative group overflow-hidden rounded-xl shadow-soft">
                                <img 
                                    src={img.name} 
                                    alt={`Grid Image ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => e.currentTarget.src = img.fb}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
