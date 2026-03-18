import { motion } from 'motion/react';
import { Mail, Linkedin, MessageCircle, Download, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen water-drop-texture">
      <header className="py-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-serif text-5xl md:text-7xl text-brand-pink mb-4"
        >
          Get in Touch
        </motion.h1>
        <p className="text-brand-orange font-bold uppercase tracking-widest text-sm">Let's build something extraordinary</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Bio & Info */}
          <div className="lg:col-span-5 space-y-12">
            <section className="bg-white p-10 rounded-3xl shadow-xl border border-brand-light-orange relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pastel-orange/10 rounded-full -mr-16 -mt-16"></div>
              <h2 className="font-serif text-3xl text-brand-pink mb-6">Gemma Lawangen</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                I’m a Virtual Assistant dedicated to helping entrepreneurs and business leaders reclaim their time. With a background in executive support and digital marketing, I provide the strategic backbone your business needs to scale.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold border border-emerald-100">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  AVAILABLE FOR NEW CLIENTS
                </div>
                <div className="flex items-center gap-2 bg-brand-pink/5 text-brand-pink px-4 py-2 rounded-full text-xs font-bold border border-brand-pink/10">
                  <CheckCircle size={14} />
                  EST TIMEZONE
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-brand-light-orange flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Me</p>
                    <p className="text-gray-800 font-medium">gemma.lawangen@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-brand-light-orange flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">LinkedIn</p>
                    <p className="text-gray-800 font-medium">linkedin.com/in/gemmalawangen</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-brand-light-orange flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Chat</p>
                    <p className="text-gray-800 font-medium">Schedule a Zoom Call</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-galaxy-gradient p-10 rounded-3xl text-white shadow-2xl">
              <h3 className="font-serif text-2xl mb-4">Need my full credentials?</h3>
              <p className="text-white/80 mb-8 leading-relaxed">Download my detailed resume for a comprehensive look at my experience, certifications, and technical proficiencies.</p>
              <button className="w-full bg-white text-brand-pink font-bold py-4 rounded-full flex items-center justify-center gap-3 hover:bg-brand-light-orange transition-all shadow-lg">
                <Download size={20} />
                DOWNLOAD RESUME (PDF)
              </button>
            </section>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-brand-light-orange">
              <h2 className="font-serif text-4xl text-brand-pink mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-brand-light-orange/30 border-2 border-transparent focus:border-brand-pink focus:bg-white rounded-xl px-6 py-4 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="hello@company.com" className="w-full bg-brand-light-orange/30 border-2 border-transparent focus:border-brand-pink focus:bg-white rounded-xl px-6 py-4 outline-none transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Service Interested In</label>
                  <select className="w-full bg-brand-light-orange/30 border-2 border-transparent focus:border-brand-pink focus:bg-white rounded-xl px-6 py-4 outline-none transition-all appearance-none">
                    <option>Virtual / Executive Assistant</option>
                    <option>Social Media Management</option>
                    <option>Website & SEO Support</option>
                    <option>Other / Custom Project</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea rows={6} placeholder="Tell me about your project or needs..." className="w-full bg-brand-light-orange/30 border-2 border-transparent focus:border-brand-pink focus:bg-white rounded-xl px-6 py-4 outline-none transition-all resize-none"></textarea>
                </div>

                <button className="w-full bg-brand-pink text-white font-bold py-5 rounded-full hover:bg-brand-orange transition-all shadow-xl shadow-brand-pink/20 uppercase tracking-widest">
                  Send Message
                </button>
              </form>
              
              <div className="mt-12 pt-8 border-t border-brand-light-orange flex items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <div className="w-2 h-2 bg-brand-pastel-orange rounded-full"></div>
                  SECURE FORM
                </div>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <div className="w-2 h-2 bg-brand-pastel-orange rounded-full"></div>
                  24H RESPONSE TIME
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
