import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'New Project Inquiry',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm({ name: '', email: '', subject: 'New Project Inquiry', message: '' });
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* Left — contact info */}
          <motion.div variants={itemVariants}>
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Get in Touch</span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mt-4 mb-8 md:mb-12 uppercase">
              LET'S START SOMETHING.
            </h1>

            <div className="space-y-12">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Our Studio',
                  content:
                    '82/2, 1st Floor, Byraveshwara Nagar,\nNagarabavi Main Road, Near Maruthi Nagar Bus Stop,\nBangalore - 560 072. Karnataka. India.',
                },
                { icon: <Phone className="w-6 h-6" />, title: 'Call Us',  content: '+91 998677 5656' },
                { icon: <Mail  className="w-6 h-6" />, title: 'Email',    content: 'team@akruticreations.com' },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-[#1A1A1A] transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <address className="not-italic text-lg text-foreground/70 leading-relaxed font-medium whitespace-pre-line">
                      {item.content}
                    </address>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={itemVariants}
            className="bg-surface p-6 md:p-12 rounded-2xl shadow-sm border border-foreground/5"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6"
              >
                <CheckCircle className="w-16 h-16 text-accent" />
                <h2 className="text-3xl font-bold uppercase tracking-tight">Message Sent!</h2>
                <p className="text-foreground/60 text-lg">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 transition-all outline-none text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 transition-all outline-none text-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 transition-all appearance-none cursor-pointer outline-none text-foreground"
                  >
                    <option className="bg-base">New Project Inquiry</option>
                    <option className="bg-base">Collaboration</option>
                    <option className="bg-base">Event Production</option>
                    <option className="bg-base">Print Requirements</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-base border-none focus:ring-2 focus:ring-accent rounded-lg p-4 h-40 transition-all resize-none outline-none text-foreground"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-400 text-sm font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  className="w-full bg-accent text-[#1A1A1A] py-6 rounded-lg font-bold hover:bg-[#1A1A1A] hover:text-accent transition-all flex items-center justify-center gap-3 shadow-lg uppercase disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
