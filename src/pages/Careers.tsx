import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X, MapPin, Clock, Briefcase, ChevronDown, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const openings: Job[] = [
  {
    id: 'senior-graphic-designer',
    title: 'Senior Graphic Designer',
    department: 'Design',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3–5 years',
    description: 'Lead visual design across print, digital, and large-format projects for some of India\'s most ambitious brands.',
    responsibilities: [
      'Create compelling brand identities and visual systems',
      'Design for large-format print: flex, hoardings, vehicle wraps',
      'Collaborate with production team on material feasibility',
      'Present concepts to clients and incorporate feedback',
      'Maintain design quality across all deliverables',
    ],
    requirements: [
      'Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign)',
      'Strong understanding of print production and colour science',
      'Portfolio demonstrating brand and print work',
      'Ability to manage multiple projects under deadline',
      'Eye for typography and layout',
    ],
  },
  {
    id: 'production-executive',
    title: 'Production Executive',
    department: 'Production',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2–4 years',
    description: 'Oversee end-to-end production of large-format prints, fabrication, and installation across events and retail.',
    responsibilities: [
      'Coordinate with vendors and printing partners',
      'Manage material procurement and quality checks',
      'Supervise on-site installation of displays and signage',
      'Track project timelines and flag delays proactively',
      'Maintain production logs and cost sheets',
    ],
    requirements: [
      'Experience in print production or event fabrication',
      'Knowledge of large-format printing technologies',
      'Strong vendor management and negotiation skills',
      'Willingness to travel to client sites',
      'Attention to detail in quality control',
    ],
  },
  {
    id: 'client-servicing-manager',
    title: 'Client Servicing Manager',
    department: 'Business Development',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3–6 years',
    description: 'Own client relationships from brief to delivery, ensuring every touchpoint reflects Akruti\'s commitment to excellence.',
    responsibilities: [
      'Serve as the primary point of contact for key accounts',
      'Understand client briefs and translate them into actionable project scopes',
      'Coordinate between design, production, and logistics teams',
      'Identify upsell and cross-sell opportunities',
      'Conduct post-project reviews and maintain client satisfaction scores',
    ],
    requirements: [
      'Prior experience in advertising, events, or print industry',
      'Excellent communication and presentation skills',
      'Ability to manage high-pressure situations with composure',
      'Strong organisational and multitasking abilities',
      'Proficiency in project management tools',
    ],
  },
  {
    id: 'digital-marketing-executive',
    title: 'Digital Marketing Executive',
    department: 'Marketing',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '1–3 years',
    description: 'Drive Akruti\'s digital presence through compelling content, campaigns, and performance marketing.',
    responsibilities: [
      'Manage social media channels (Instagram, LinkedIn)',
      'Create content briefs and work with design team',
      'Run Google Ads and Meta campaigns',
      'Track analytics and report on campaign performance',
      'Grow organic reach through SEO and content strategy',
    ],
    requirements: [
      'Experience with Meta Business Suite and Google Ads',
      'Strong copywriting skills in English',
      'Basic knowledge of Canva or Adobe tools',
      'Analytical mindset with data-driven decision-making',
      'Passion for design, branding, and visual storytelling',
    ],
  },
];

const values = [
  {
    number: '01',
    title: 'Craft Over Speed',
    desc: 'We believe the best work takes the time it deserves. Quality is non-negotiable at every stage.',
  },
  {
    number: '02',
    title: 'Ownership Mentality',
    desc: 'Every team member takes full responsibility for their output — from first sketch to final install.',
  },
  {
    number: '03',
    title: 'Push the Medium',
    desc: 'We challenge what print and fabrication can do. Constraints are invitations to innovate.',
  },
  {
    number: '04',
    title: 'Grow Together',
    desc: "We invest in our people's skills, careers, and wellbeing because great teams build great work.",
  },
];

type AppStatus = 'idle' | 'sending' | 'success' | 'error';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [applyFor, setApplyFor] = useState<Job | null>(null);
  const [status, setStatus] = useState<AppStatus>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', portfolio: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Job Application — ${applyFor?.title}`,
          message: `Phone: ${form.phone}\nPortfolio: ${form.portfolio}\n\n${form.message}`,
        }),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const openApply = (job: Job) => {
    setApplyFor(job);
    setStatus('idle');
    setForm({ name: '', email: '', phone: '', portfolio: '', message: '' });
    setSelectedJob(null);
  };

  return (
    <div>
      {/* Block 1 — yellow hero */}
      <header className="pt-32 pb-20 md:pb-40 px-6 section-yellow">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">We're Hiring</span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mt-8 mb-8 uppercase leading-none">
              BUILD WITH <br /><span className="italic text-accent">US.</span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/60 max-w-3xl font-medium leading-relaxed">
              Akruti Creations is looking for bold, craft-obsessed people who want to turn ideas into physical reality — at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-12 border-t border-foreground/20 pt-12"
          >
            {[
              { label: 'Open Positions', value: `${openings.length}` },
              { label: 'Studio Location', value: 'Bangalore, India' },
              { label: 'Team Size', value: '20+ Creatives' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-black tracking-tighter">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-foreground/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Block 2 — base: open positions */}
      <section className="py-20 md:py-40 px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '100px' }}
            className="mb-16"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Open Roles</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 uppercase">
              FIND YOUR <span className="italic text-accent">FIT.</span>
            </h2>
          </motion.div>

          <div className="divide-y divide-foreground/10 border-t border-foreground/10">
            {openings.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '80px' }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                {/* Row */}
                <button
                  className="w-full text-left py-8 md:py-10 group flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                  onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent border border-accent/30 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-6 text-foreground/50 text-sm font-medium">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{job.type}</span>
                    <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" />{job.experience}</span>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedId === job.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-foreground/40 group-hover:text-accent transition-colors"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                {/* Expanded */}
                <AnimatePresence>
                  {expandedId === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                          <p className="text-foreground/60 leading-relaxed mb-8">{job.description}</p>
                          <h4 className="text-xs font-black uppercase tracking-widest text-accent mb-4">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground/70">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-accent mb-4">Requirements</h4>
                          <ul className="space-y-2 mb-10">
                            {job.requirements.map((r, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground/70">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => openApply(job)}
                            className="inline-flex items-center gap-3 bg-accent text-[#1A1A1A] px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-foreground hover:text-accent transition-all shadow-lg"
                          >
                            APPLY NOW <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 3 — yellow: values */}
      <section className="py-20 md:py-40 px-6 section-yellow">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '100px' }}
            className="mb-16"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Culture</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 uppercase">
              HOW WE <span className="italic text-accent">WORK.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-3xl overflow-hidden">
            {values.map((v, idx) => (
              <motion.div
                key={v.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '80px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-surface p-8 md:p-12 group hover:bg-accent/10 transition-colors"
              >
                <span className="text-5xl font-black text-foreground/10 group-hover:text-accent/30 transition-colors block mb-6">
                  {v.number}
                </span>
                <h3 className="text-2xl font-bold tracking-tighter mb-4">{v.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4 — base: general CTA */}
      <section className="py-20 md:py-40 px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Don't see your role?</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 mb-6 uppercase">
                SEND A <span className="italic text-accent">WILDCARD.</span>
              </h2>
              <p className="text-lg text-foreground/60 font-medium leading-relaxed mb-10">
                We're always on the lookout for exceptional talent. If you believe you can add something special to Akruti Creations, drop us a note — we'd love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-accent text-[#1A1A1A] px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-foreground hover:text-accent transition-all shadow-xl text-sm"
              >
                GET IN TOUCH <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-surface rounded-3xl p-8 md:p-12 border border-foreground/5">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-8">What to include</h3>
              <ul className="space-y-5">
                {[
                  'A brief intro and the role you\'re interested in',
                  'Your portfolio or relevant work samples',
                  'Why Akruti Creations — be specific',
                  'Your availability and expected CTC',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-black shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyFor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={() => setApplyFor(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-base w-full md:max-w-2xl rounded-t-3xl md:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-start justify-between p-8 border-b border-foreground/10 shrink-0">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Apply for</span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mt-1">{applyFor.title}</h2>
                </div>
                <button
                  onClick={() => setApplyFor(null)}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-foreground hover:bg-accent hover:text-[#1A1A1A] transition-colors shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal body */}
              <div className="overflow-y-auto p-8 flex-1">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center min-h-[300px] text-center gap-6"
                  >
                    <CheckCircle className="w-16 h-16 text-accent" />
                    <h3 className="text-2xl font-bold uppercase tracking-tight">Application Sent!</h3>
                    <p className="text-foreground/60">We'll review your profile and get back to you within 5 business days.</p>
                    <button
                      onClick={() => setApplyFor(null)}
                      className="mt-2 border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Full Name</label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange} required
                          className="w-full bg-surface border-none focus:ring-2 focus:ring-accent rounded-lg p-4 outline-none text-foreground"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Email Address</label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange} required
                          className="w-full bg-surface border-none focus:ring-2 focus:ring-accent rounded-lg p-4 outline-none text-foreground"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Phone Number</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full bg-surface border-none focus:ring-2 focus:ring-accent rounded-lg p-4 outline-none text-foreground"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Portfolio / LinkedIn</label>
                        <input
                          type="url" name="portfolio" value={form.portfolio} onChange={handleChange}
                          className="w-full bg-surface border-none focus:ring-2 focus:ring-accent rounded-lg p-4 outline-none text-foreground"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/50">Why Akruti?</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required
                        className="w-full bg-surface border-none focus:ring-2 focus:ring-accent rounded-lg p-4 h-36 resize-none outline-none text-foreground"
                        placeholder="Tell us why you want to join and what you'll bring to the team..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-3 text-red-400 text-sm font-medium">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        Something went wrong. Please try again or email us at team@akruticreations.com
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                      className="w-full bg-accent text-[#1A1A1A] py-5 rounded-lg font-bold hover:bg-foreground hover:text-accent transition-all flex items-center justify-center gap-3 shadow-lg uppercase disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <><Loader className="w-4 h-4 animate-spin" /> Sending...</>
                      ) : (
                        <>SUBMIT APPLICATION <Send className="w-4 h-4" /></>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
