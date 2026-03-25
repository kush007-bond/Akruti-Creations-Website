import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-24"
        >
          
          <motion.div variants={itemVariants}>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Get in Touch</span>
            <h1 className="text-7xl font-bold tracking-tighter mt-4 mb-12 uppercase">LET'S START SOMETHING.</h1>
            
            <div className="space-y-12">
              {[
                { 
                  icon: <MapPin className="w-6 h-6" />, 
                  title: "Our Studio", 
                  content: "82/2, 1st Floor, Byraveshwara Nagar,\nNagarabavi Main Road, Near Maruthi Nagar Bus Stop,\nBangalore - 560 072. Karnataka. India." 
                },
                { 
                  icon: <Phone className="w-6 h-6" />, 
                  title: "Call Us", 
                  content: "+91 998677 5656" 
                },
                { 
                  icon: <Mail className="w-6 h-6" />, 
                  title: "Email", 
                  content: "team@akruticreations.com" 
                }
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-[#1A1A1A] transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-accent transition-colors uppercase">{item.title}</h3>
                    <address className="not-italic text-lg text-foreground/70 leading-relaxed font-medium whitespace-pre-line">
                      {item.content}
                    </address>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-surface p-12 rounded-2xl shadow-sm border border-foreground/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Full Name</label>
                  <input type="text" className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 transition-all outline-none text-foreground" placeholder="John Doe" />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Email Address</label>
                  <input type="email" className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 transition-all outline-none text-foreground" placeholder="john@example.com" />
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Subject</label>
                <select className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 transition-all appearance-none cursor-pointer outline-none text-foreground">
                  <option className="bg-base">New Project Inquiry</option>
                  <option className="bg-base">Collaboration</option>
                  <option className="bg-base">Event Production</option>
                  <option className="bg-base">Print Requirements</option>
                </select>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Project Details</label>
                <textarea className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 h-40 transition-all resize-none outline-none text-foreground" placeholder="Tell us about your project..."></textarea>
              </motion.div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-[#1A1A1A] py-6 rounded-lg font-bold hover:bg-foreground hover:text-base transition-all flex items-center justify-center gap-3 shadow-lg uppercase"
              >
                SEND MESSAGE <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
