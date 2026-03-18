import { motion } from 'motion/react';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Design', 'Systems & Automation', 'Social Media'];

  const projects = [
    {
      title: "Technical Architecture",
      category: "Systems & Automation",
      desc: "Deep infrastructure overhaul to reduce latency and automate internal reporting structures.",
      stats: ["+15% Speed", "99.9% Uptime"],
      color: "bg-gradient-to-br from-brand-pastel-orange to-brand-pink"
    },
    {
      title: "Social Media Ecosystems",
      category: "Social Media",
      desc: "Comprehensive content strategy and automated distribution for multi-platform brand presence.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKE07i2cBqG6e18ES3GQDqN3-XtC34KavGfzJwxH2GbslMyErA3XfveAzzccyHXh8k9HbEbziyPQHQIOlsbm50eeT6mYXoGlV58SMkvp6qSPBaJMjKTjaNEdIZu3yZUveRIuECVpF4r-UEvQ9XVN7c0j_G7HzctRGUPcFtPTzBwWQ9ey_9_pvZkQmdCoyneUMMCj7tjANBJbFPimT2wxWtxktysp-VJrZgyONn0G9UqKBUyRDbPgg_GMMayb5usw2pyZKoUJ5vEFMu",
      color: "bg-brand-pastel-orange"
    },
    {
      title: "Zoho CRM Architecture",
      category: "Systems & Automation",
      desc: "Customizing Zoho environments to mirror complex sales cycles and B2B workflows.",
      tags: ["WORKFLOWS", "API INTEGRATION", "ANALYTICS"],
      color: "bg-brand-orange"
    },
    {
      title: "Custom CMS Development",
      category: "Web Design",
      desc: "A tailor-made content management system for high-volume publishing and asset tracking.",
      color: "bg-brand-pink"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative bg-brand-light-orange py-20 px-6 overflow-hidden water-drop-texture">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-brand-pink font-bold tracking-[0.2em] text-sm uppercase block mb-4">Portfolio</span>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-pink leading-tight">Sample Works</h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">Exploring the intersection of aesthetic design and high-performance systems architecture.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pastel-orange/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-pink/10 rounded-full blur-2xl -ml-24 -mb-24"></div>
      </header>

      {/* Filters */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-2 rounded-full border border-brand-pink font-bold text-sm transition-all ${
                  activeFilter === filter ? 'bg-brand-pink text-white' : 'text-brand-pink hover:bg-brand-pink hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-brand-light-orange">
            <div className="relative h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                alt="Featured Project" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2-GN32JzKicEAly5Z5CA-iL54Ie8HanVr99FtKh_tm8f-2Wz4-CX8LSX__GFLZkFrAl55jA6Xr5I5DL8ty8Q6XeuwysFFsStlTg5B7fjPY9cAa7pQNAs_a6RStmqunHIcn1xRORFKt2-0EwmVX3TDp5bbewpclNpLxgROwrUkaFuokOTNW32gzhoBIN-gLd4-ek3Wcg5K5Kz7LB1qsI31wvwlUtY-NOxD6qM3LQd1xpNNB_kc3v4CbJed1VMFTj4SgotRMOeZNvj" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="font-serif text-4xl mb-2">Outreach Digital Partners</h2>
                <p className="uppercase tracking-widest text-sm font-bold text-brand-pastel-orange">Full-Scale Digital Transformation</p>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h3 className="font-serif text-2xl text-brand-pink mb-4">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">Fragmented communication channels and manual lead tracking resulted in a 30% drop-off rate for potential high-ticket clients.</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-brand-pink mb-4">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed">Implemented a unified CRM ecosystem with automated follow-up sequences and a high-conversion landing page design.</p>
                </div>
                <div className="bg-brand-light-orange/30 p-6 rounded-2xl border border-brand-pastel-orange/50">
                  <h3 className="font-serif text-2xl text-brand-pink mb-2">The Result</h3>
                  <div className="text-4xl font-bold text-brand-pink mb-2">40% Growth</div>
                  <p className="text-gray-600 text-sm">Increase in operational efficiency and client retention within the first quarter post-launch.</p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-brand-light-orange flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap gap-3">
                  {["GHL", "Zapier", "Figma", "Stripe"].map(tool => (
                    <span key={tool} className="px-4 py-1 bg-gray-100 text-gray-500 rounded text-xs font-bold uppercase">{tool}</span>
                  ))}
                </div>
                <button className="px-10 py-3 bg-brand-pink text-white font-bold rounded-full hover:bg-brand-orange transition-all shadow-lg">View Case Study</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 px-6 bg-brand-light-orange/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-brand-pink transition-all shadow-md group"
              >
                <div className={`h-64 ${project.color} p-8 flex flex-col justify-end relative overflow-hidden`}>
                  {project.image && <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />}
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase mb-2">{project.category}</span>
                    <h3 className="font-serif text-3xl text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{project.desc}</p>
                  {project.stats && (
                    <div className="flex gap-4">
                      {project.stats.map(stat => (
                        <div key={stat} className="bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-lg text-sm font-bold border border-brand-pink/20">{stat}</div>
                      ))}
                    </div>
                  )}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-brand-orange font-bold">{tag}</span>
                      ))}
                    </div>
                  )}
                  {!project.stats && !project.tags && (
                    <button className="text-brand-pink font-bold flex items-center group">
                      Explore Details <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Featured Web Design (Full Width) */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-brand-pink transition-all shadow-md md:col-span-2">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-80 bg-brand-pastel-orange overflow-hidden">
                  <img 
                    alt="Business Website" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0WOtS_yRW8MAbtDXtWzz02fPOymSA8q5FwMAN5W5CGbdcUSmuOJOfglg2HMvh0Ok6_73zJq2qxFCJYVNhEzdoKwNmAMoTHCLF2XEIYofHBPMW3ssTtOma2ahx5dbEx_YlcrUTyYt9L18AQPKNSVjXxC038wZCCmMFiRylmdKgVvhut7_nvV73p3zzCTt0Vf5oZpjc9I2GB0y0BHxw-hgy8YPoEJp4XsLrD29ntczqU_BfWmfjLFWPOjz38C1S9PSdlgpPr-9ZQrE0" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">Featured Web Design</span>
                  <h3 className="font-serif text-4xl text-brand-pink mb-4">Elevated Business Presence</h3>
                  <p className="text-gray-600 mb-6">A conversion-optimized website for a leading consulting firm, focusing on storytelling and lead generation.</p>
                  <button className="w-fit px-8 py-3 border-2 border-brand-pink text-brand-pink font-bold rounded-full hover:bg-brand-pink hover:text-white transition-all">Launch Website</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">Ready for your own systems transformation?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-12 py-5 bg-brand-pink text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-xl">Start Your Project</button>
            <button className="px-12 py-5 border-2 border-brand-pink text-brand-pink font-bold text-lg rounded-full hover:bg-brand-pink/5 transition-all">Book a Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}
