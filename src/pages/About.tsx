import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  Clock,
  Users,
  Lightbulb,
  CheckCircle,
  Star,
  Zap,
  HeartHandshake,
} from 'lucide-react';

const milestones = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '12+', label: 'Years of Excellence' },
  { value: '300+', label: 'Satisfied Clients' },
  { value: '6', label: 'Core Service Verticals' },
];

const reasons = [
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    body: 'Every project we undertake is treated as an opportunity for innovation. Our team pushes the boundaries of conventional design to deliver work that is distinctive, memorable, and purposeful.',
  },
  {
    icon: Award,
    title: 'End-to-End Capability',
    body: 'From initial concept and brand strategy to production, printing, and on-site installation, we manage the entire creative lifecycle under one roof — eliminating the need for multiple vendors.',
  },
  {
    icon: Star,
    title: 'Premium Print Quality',
    body: 'We employ best-in-class printing hardware and premium substrates to ensure that every piece leaving our facility meets the highest standards of colour fidelity, finish, and durability.',
  },
  {
    icon: Clock,
    title: 'Reliable Turnaround',
    body: 'We understand that time is a critical resource for your business. Our streamlined production workflow is designed to meet deadlines without compromising on the quality of output.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    body: 'We invest time in understanding your brand, your audience, and your objectives. Every decision — creative or strategic — is made with your business goals at the centre.',
  },
  {
    icon: Zap,
    title: 'Diverse Expertise',
    body: 'Our portfolio spans design and branding, packaging, large-format printing, outdoor branding, stage production, and video animation — giving you access to a full spectrum of creative services.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnerships',
    body: 'We do not simply complete projects — we build relationships. Many of our clients have partnered with us across years and multiple engagements, a testament to the trust we earn through consistent delivery.',
  },
  {
    icon: CheckCircle,
    title: 'Attention to Detail',
    body: 'Precision is embedded in our process. From typographic accuracy and colour calibration to structural integrity in stage and packaging builds, we hold ourselves to an exacting standard at every stage.',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-base text-foreground">

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-bold tracking-tighter leading-[0.8] mb-8 md:mb-12 uppercase">
              WHO <span className="text-accent italic">WE</span> ARE
            </h1>
            <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-medium">
              A full-service creative studio dedicated to transforming ideas into impactful visual experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section className="py-20 md:py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">About Us</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-8 uppercase">
              Crafting Brands.<br />
              <span className="text-accent italic">Printing Legacies.</span>
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                Akruti Creations is a full-service design and print studio with over a decade of experience in building brands that endure. We combine strategic thinking with creative craftsmanship to produce work that not only looks exceptional but also delivers measurable impact for our clients.
              </p>
              <p>
                Founded on the belief that great design is both an art and a discipline, our studio brings together a multidisciplinary team of designers, strategists, and production specialists. Whether you are a startup establishing your identity or an established enterprise refreshing your brand presence, we have the expertise to guide you through every stage of the creative process.
              </p>
              <p>
                Our work spans corporate identity, packaging, large-format printing, outdoor and indoor branding, stage design, and video animation — making us a singular creative partner for businesses across industries.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-2 gap-6"
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '100px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-base border border-foreground/10 rounded-2xl p-8 flex flex-col justify-between"
              >
                <span className="text-4xl md:text-5xl font-bold text-accent tracking-tighter">{m.value}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-foreground/50 mt-4">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '100px' }}
            transition={{ duration: 0.7 }}
            className="border-t-2 border-accent pt-8"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Mission</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 uppercase">
              Design With Purpose
            </h3>
            <p className="text-foreground/60 text-lg leading-relaxed">
              To empower businesses with creative solutions that communicate with clarity, resonate with audiences, and stand the test of time. We measure our success by the impact our work creates for the brands we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border-t-2 border-foreground/20 pt-8"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Our Vision</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 uppercase">
              Redefine Creative Standards
            </h3>
            <p className="text-foreground/60 text-lg leading-relaxed">
              To be the most trusted creative studio in the region — known not only for the quality of our work, but for the integrity of our partnerships, the reliability of our delivery, and our relentless pursuit of innovation in design and production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 md:py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '100px' }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-24"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.95] uppercase">
              The Akruti<br />
              <span className="text-accent italic">Difference</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '100px' }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                  className="bg-base border border-foreground/10 rounded-2xl p-8 flex flex-col gap-5 hover:border-accent/40 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight mb-3">{r.title}</h4>
                    <p className="text-foreground/55 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95]">
              Ready to Build<br />
              <span className="text-accent italic">Something Great?</span>
            </h2>
            <p className="text-foreground/60 text-xl max-w-xl mx-auto">
              Let us help you craft a brand presence that commands attention and earns trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-accent text-black font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-accent/90 transition-colors text-sm"
              >
                Start a Project
              </Link>
              <Link
                to="/projects"
                className="inline-block border border-foreground/30 text-foreground font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:border-accent hover:text-accent transition-colors text-sm"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
