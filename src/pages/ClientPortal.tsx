import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, FileCheck, Clock, Download, ExternalLink, ChevronRight, MessageSquare, Send, Bell } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState<'projects' | 'messages' | 'files' | 'timeline' | 'feedback' | 'billing'>('projects');
  const [feedbackPoints, setFeedbackPoints] = useState<{ id: number; x: number; y: number; text: string }[]>([]);
  const [activeFeedbackImage, setActiveFeedbackImage] = useState('/src/assets/images/package-design.jpeg');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsLoggedIn(true);
  };

  const activeProjects = [
    { 
      name: "Urban Sculpture Installation", 
      status: "85%", 
      deadline: "Oct 12, 2024", 
      phase: "Fabrication",
      timeline: [
        { label: "Concept", complete: true },
        { label: "Design", complete: true },
        { label: "Fabrication", complete: false },
        { label: "Installation", complete: false }
      ]
    },
    { 
      name: "City Branding 2024", 
      status: "40%", 
      deadline: "Nov 05, 2024", 
      phase: "Prototyping",
      timeline: [
        { label: "Concept", complete: true },
        { label: "Strategy", complete: false },
        { label: "Execution", complete: false }
      ]
    }
  ];

  const documents = [
    { name: "Final_Brand_Guidelines.pdf", size: "12.4 MB", date: "Sep 20, 2024", category: "Branding" },
    { name: "Site_Survey_Photos.zip", size: "156 MB", date: "Sep 18, 2024", category: "Technical" },
    { name: "Phase_2_Invoice.pdf", size: "1.2 MB", date: "Sep 15, 2024", category: "Finance" },
    { name: "Structural_Blueprints_v3.dwg", size: "45.8 MB", date: "Sep 12, 2024", category: "Design" }
  ];

  const [notification, setNotification] = useState<string | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Studio', text: "Hello! We've just uploaded the final prototypes for the branding project. Please let us know if the yellow shade matches your hex requirements.", time: '10:24 AM' },
    { id: 2, sender: 'You', text: "Looking at them now. The contrast on the black background is perfect. Will finalize by EOD.", time: '11:05 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedProjectReport, setSelectedProjectReport] = useState<any>(null);

  const notifications = [
    { id: 1, text: "New design files uploaded for Urban Sculpture", time: "2 hours ago", unread: true },
    { id: 2, text: "Invoice for Phase 2 has been generated", time: "5 hours ago", unread: true },
    { id: 3, text: "Meeting scheduled for tomorrow at 10 AM", time: "1 day ago", unread: false },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const msg = {
      id: Date.now(),
      sender: 'You',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, msg]);
    setNewMessage('');
    
    // Simulate auto-reply
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: 'Studio',
        text: "Thanks for the message! Our team will get back to you shortly.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-[85vh] bg-base flex flex-col justify-center pt-32 pb-20 px-6 transition-colors duration-700">
      <AnimatePresence>
        {selectedProjectReport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-base/90 backdrop-blur-xl"
            onClick={() => setSelectedProjectReport(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-base border border-surface/10 w-full max-w-5xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-10 border-b border-surface/5 flex justify-between items-center bg-surface/5">
                <div>
                  <h2 className="text-4xl font-bold uppercase tracking-tighter">{selectedProjectReport.name}</h2>
                  <p className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mt-2">Comprehensive Progress Report</p>
                </div>
                <button 
                  onClick={() => setSelectedProjectReport(null)}
                  className="w-14 h-14 bg-surface text-base rounded-full flex items-center justify-center font-bold hover:bg-accent hover:text-surface transition-all"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex-grow p-10 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-surface/5 p-8 rounded-[2rem] border border-surface/5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">Design Maturity</p>
                    <div className="text-5xl font-black mb-2">94%</div>
                    <div className="h-1.5 bg-surface/10 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[94%]" />
                    </div>
                    <p className="text-xs text-surface/40 mt-4 leading-relaxed">Structural calculations and aesthetic approvals finalized.</p>
                  </div>
                  <div className="bg-surface/5 p-8 rounded-[2rem] border border-surface/5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">Material Sourcing</p>
                    <div className="text-5xl font-black mb-2">68%</div>
                    <div className="h-1.5 bg-surface/10 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[68%]" />
                    </div>
                    <p className="text-xs text-surface/40 mt-4 leading-relaxed">Premium grade aluminum secured; pending glass shipment.</p>
                  </div>
                  <div className="bg-surface/5 p-8 rounded-[2rem] border border-surface/5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">On-Site Prep</p>
                    <div className="text-5xl font-black mb-2">42%</div>
                    <div className="h-1.5 bg-surface/10 rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[42%]" />
                    </div>
                    <p className="text-xs text-surface/40 mt-4 leading-relaxed">Foundation work scheduled for next Monday morning.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-bold uppercase tracking-widest text-xs border-b border-surface/5 pb-4">Recent Milestones</h3>
                  {[
                    { date: "Feb 15", event: "Finalized color palette for outdoor components", status: "Done" },
                    { date: "Feb 12", event: "Completed 3D stress tests for the main arch", status: "Done" },
                    { date: "Feb 08", event: "Client review of the physical 1:10 scale model", status: "Done" }
                  ].map((m, i) => (
                    <div key={i} className="flex gap-6 items-center">
                      <div className="text-[10px] font-black uppercase text-surface/30 w-16">{m.date}</div>
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <div className="flex-grow text-sm font-medium">{m.event}</div>
                      <div className="text-[10px] font-black uppercase text-accent tracking-widest">{m.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-surface text-base flex justify-between items-center">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Estimated Completion: {selectedProjectReport.deadline}</p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-base text-surface rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-accent transition-all">Download PDF</button>
                  <button className="px-8 py-4 bg-accent text-surface rounded-2xl font-bold uppercase tracking-widest text-[10px]">Print Report</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 z-[60] bg-accent text-surface px-8 py-4 rounded-full font-bold shadow-2xl uppercase tracking-widest text-xs"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md mx-auto w-full"
          >
            <div className="text-center mb-10">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12"
              >
                <Lock className="text-surface" size={32} />
              </motion.div>
              <h1 className="text-5xl font-bold tracking-tighter uppercase mb-2">Studio Access</h1>
              <p className="text-surface/40 font-medium">Please enter your secure credentials to continue.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface/5 border border-surface/5 focus:border-accent focus:bg-base rounded-2xl p-6 outline-none transition-all font-medium text-lg" 
                  placeholder="Studio Email"
                  required
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="password" 
                  className="w-full bg-surface/5 border border-surface/5 focus:border-accent focus:bg-base rounded-2xl p-6 outline-none transition-all font-medium text-lg" 
                  placeholder="Access Key"
                  required
                />
              </div>
              <MagneticButton>
                <button className="w-full bg-surface text-base py-6 rounded-2xl font-black hover:bg-accent hover:text-surface transition-all uppercase tracking-widest shadow-2xl mt-4">
                  Sign In to Studio
                </button>
              </MagneticButton>
            </form>
            <div className="mt-12 p-6 bg-accent/5 rounded-2xl border border-accent/10">
              <p className="text-center text-xs text-surface/60 leading-relaxed">
                Problems signing in? Reach out to our technical support team at <br/>
                <span className="text-accent font-bold hover:underline cursor-pointer">support@akruticreations.com</span>
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-7xl mx-auto w-full"
          >
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
              <div>
                <div className="flex items-center gap-3 text-accent mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-black uppercase tracking-[0.3em] text-[10px]">Connected to Main Studio</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">DASHBOARD</h1>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 hover:bg-surface/5 rounded-full transition-colors"
                  >
                    <Bell className={`${showNotifications ? 'text-accent' : 'text-surface/40'} group-hover:text-accent transition-colors`} />
                    <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full border-2 border-base" />
                  </button>

                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-4 w-80 bg-base border border-surface/10 rounded-3xl shadow-2xl z-50 overflow-hidden"
                      >
                        <div className="p-6 border-b border-surface/5 flex justify-between items-center">
                          <h4 className="font-bold uppercase tracking-widest text-[10px]">Notifications</h4>
                          <span className="text-[10px] text-accent font-bold cursor-pointer hover:underline">Mark all read</span>
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                          {notifications.map((n) => (
                            <div key={n.id} className="p-6 border-b border-surface/5 hover:bg-surface/5 transition-colors cursor-pointer group">
                              <p className={`text-xs font-medium mb-1 ${n.unread ? 'text-surface' : 'text-surface/40'}`}>{n.text}</p>
                              <p className="text-[10px] text-surface/20 uppercase font-black tracking-widest">{n.time}</p>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 text-center">
                          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:underline">View All Activity</button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="h-12 w-px bg-surface/10 mx-2 hidden md:block" />
                <button onClick={() => setIsLoggedIn(false)} className="bg-surface text-base px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-surface transition-all">
                  Sign Out
                </button>
              </div>
            </header>

            {/* Navigation Tabs */}
            <div className="flex gap-8 mb-12 border-b border-surface/5 pb-4 overflow-x-auto no-scrollbar">
              {[
                { id: 'projects', label: 'Projects', icon: <Clock size={16} /> },
                { id: 'timeline', label: 'Timeline', icon: <Clock size={16} /> },
                { id: 'feedback', label: 'Design Feedback', icon: <MessageSquare size={16} /> },
                { id: 'billing', label: 'Billing', icon: <FileCheck size={16} /> },
                { id: 'messages', label: 'Message Center', icon: <MessageSquare size={16} /> },
                { id: 'files', label: 'Document Vault', icon: <FileCheck size={16} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 pb-4 px-2 font-bold uppercase tracking-widest text-[10px] transition-all relative ${
                    activeTab === tab.id ? "text-accent" : "text-surface/30 hover:text-surface"
                  }`}
                >
                  {tab.icon} {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'projects' && (
                    <motion.div 
                      key="projects-view"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-10"
                    >
                      {activeProjects.map((project, i) => (
                        <div key={i} className="group">
                          <div className="flex justify-between items-end mb-4">
                            <div>
                              <p className="text-[10px] font-black uppercase text-accent tracking-widest mb-1">{project.phase} Phase</p>
                              <h3 className="text-4xl font-bold uppercase tracking-tighter">{project.name}</h3>
                            </div>
                            <p className="text-xl font-black text-surface/20 italic">Due {project.deadline}</p>
                          </div>
                          
                          <div className="bg-surface/5 rounded-[2rem] p-10 hover:bg-surface/10 transition-colors border border-surface/5">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                              {project.timeline.map((step, idx) => (
                                <div key={idx} className="relative">
                                  <div className={`text-[10px] font-black uppercase tracking-widest mb-3 ${step.complete ? 'text-accent' : 'text-surface/20'}`}>
                                    {step.label}
                                  </div>
                                  <div className={`h-1.5 rounded-full ${step.complete ? 'bg-accent' : 'bg-surface/10'}`} />
                                  {idx < project.timeline.length - 1 && (
                                    <div className="hidden md:block absolute top-6 right-0 translate-x-1/2 text-surface/10">
                                      <ChevronRight size={14} />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                <div className="text-6xl font-black text-accent tracking-tighter leading-none">{project.status}</div>
                                <p className="text-sm font-medium text-surface/40 leading-tight uppercase tracking-widest">Global <br/> Completion</p>
                              </div>
                              <MagneticButton>
                                <button 
                                  onClick={() => setSelectedProjectReport(project)}
                                  className="bg-surface text-base px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-surface transition-all flex items-center gap-3 shadow-xl"
                                >
                                  Full Progress Report <ExternalLink size={14} />
                                </button>
                              </MagneticButton>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'timeline' && (
                    <motion.div 
                      key="timeline-view"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-surface/5 rounded-[2rem] p-10 border border-surface/5"
                    >
                      <h3 className="text-2xl font-bold uppercase mb-10 tracking-tighter">Project Roadmap 2024</h3>
                      <div className="relative overflow-x-auto pb-10 no-scrollbar">
                        <div className="min-w-[1000px]">
                          {/* Months Header */}
                          <div className="flex mb-8 border-b border-surface/10 pb-4">
                            {['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map(month => (
                              <div key={month} className="flex-1 text-[10px] font-black uppercase tracking-widest text-surface/30">{month}</div>
                            ))}
                          </div>
                          
                          {/* Timeline Bars */}
                          <div className="space-y-6">
                            {[
                              { label: 'Concept & Strategy', start: 0, width: '25%', color: 'bg-accent' },
                              { label: 'Technical Design', start: '20%', width: '35%', color: 'bg-accent/60' },
                              { label: 'Production Phase', start: '50%', width: '30%', color: 'bg-accent/30' },
                              { label: 'Quality Assurance', start: '75%', width: '20%', color: 'bg-accent/10' }
                            ].map((bar, i) => (
                              <div key={i} className="relative h-12 flex items-center">
                                <div 
                                  className={`absolute h-8 rounded-xl ${bar.color} flex items-center px-4 shadow-lg`}
                                  style={{ left: bar.start, width: bar.width }}
                                >
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-surface whitespace-nowrap">{bar.label}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Today Marker */}
                          <div className="absolute top-0 bottom-0 w-0.5 bg-accent/20 left-[35%] pointer-events-none">
                            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-accent text-surface text-[8px] font-black px-2 py-1 rounded-md">TODAY</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'feedback' && (
                    <motion.div 
                      key="feedback-view"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-2xl font-bold uppercase tracking-tighter">Design Feedback</h3>
                          <p className="text-xs text-surface/40 font-medium">Click anywhere on the prototype to leave a comment.</p>
                        </div>
                        <div className="flex gap-2">
                          {['/src/assets/images/package-design.jpeg', '/src/assets/images/printing.jpeg'].map((img, i) => (
                            <button 
                              key={i}
                              onClick={() => { setActiveFeedbackImage(img); setFeedbackPoints([]); }}
                              className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${activeFeedbackImage === img ? 'border-accent' : 'border-transparent'}`}
                            >
                              <img src={img} alt="Prototype" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="relative group">
                        <div 
                          className="relative rounded-[2rem] overflow-hidden cursor-crosshair border border-surface/5"
                          onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = ((e.clientX - rect.left) / rect.width) * 100;
                            const y = ((e.clientY - rect.top) / rect.height) * 100;
                            const text = prompt("Enter your feedback:");
                            if (text) {
                              setFeedbackPoints([...feedbackPoints, { id: Date.now(), x, y, text }]);
                            }
                          }}
                        >
                          <img src={activeFeedbackImage} alt="Feedback Prototype" className="w-full aspect-video object-cover" />
                          <div className="absolute inset-0 bg-surface/10 group-hover:bg-transparent transition-colors" />
                          
                          {feedbackPoints.map((point) => (
                            <div 
                              key={point.id}
                              className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 group/point"
                              style={{ left: `${point.x}%`, top: `${point.y}%` }}
                            >
                              <div className="w-full h-full bg-accent rounded-full flex items-center justify-center text-surface font-bold text-xs shadow-2xl animate-bounce">
                                <MessageSquare size={14} />
                              </div>
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-surface text-base p-4 rounded-xl text-[10px] font-medium opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none shadow-2xl">
                                {point.text}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'billing' && (
                    <motion.div 
                      key="billing-view"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-surface p-10 rounded-[2rem] text-base">
                          <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Total Contract Value</p>
                          <h4 className="text-5xl font-black tracking-tighter mb-8">$42,500.00</h4>
                          
                          <div className="space-y-6">
                            <div>
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                                <span>Paid to Date</span>
                                <span className="text-accent">$28,000.00</span>
                              </div>
                              <div className="h-2 bg-base/10 rounded-full overflow-hidden">
                                <div className="h-full bg-accent w-[65%]" />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                                <span>Remaining</span>
                                <span>$14,500.00</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-surface/5 border border-surface/5 p-10 rounded-[2rem]">
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-accent mb-6">Upcoming Installments</h4>
                          <div className="space-y-6">
                            {[
                              { label: 'Phase 3 Completion', amount: '$8,500', due: 'Oct 15' },
                              { label: 'Final Delivery', amount: '$6,000', due: 'Dec 01' }
                            ].map((inst, i) => (
                              <div key={i} className="flex justify-between items-center border-b border-surface/5 pb-4">
                                <div>
                                  <p className="font-bold text-sm">{inst.label}</p>
                                  <p className="text-[10px] font-black uppercase tracking-widest text-surface/30">Due {inst.due}</p>
                                </div>
                                <div className="text-lg font-black">{inst.amount}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-surface/5 border border-surface/5 rounded-[2rem] overflow-hidden">
                        <div className="p-8 border-b border-surface/5 flex justify-between items-center">
                          <h4 className="text-[10px] font-black uppercase tracking-widest">Invoicing History</h4>
                          <button className="text-[10px] font-black uppercase tracking-widest text-accent hover:underline">Download All Statements</button>
                        </div>
                        <div className="divide-y divide-surface/5">
                          {[
                            { id: 'INV-2024-001', date: 'Aug 12', amount: '$15,000', status: 'Paid' },
                            { id: 'INV-2024-004', date: 'Sep 20', amount: '$13,000', status: 'Paid' }
                          ].map((inv, i) => (
                            <div key={i} className="p-8 flex items-center justify-between hover:bg-surface/5 transition-colors">
                              <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-base rounded-2xl flex items-center justify-center text-accent">
                                  <FileCheck size={20} />
                                </div>
                                <div>
                                  <p className="font-bold">{inv.id}</p>
                                  <p className="text-[10px] font-black uppercase tracking-widest text-surface/30">{inv.date}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-8">
                                <div className="text-right">
                                  <p className="font-black">{inv.amount}</p>
                                  <p className="text-[10px] font-black uppercase tracking-widest text-accent">{inv.status}</p>
                                </div>
                                <button className="p-3 bg-base rounded-xl hover:bg-accent hover:text-surface transition-all">
                                  <Download size={14} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'messages' && (
                    <motion.div 
                      key="messages-view"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-surface/5 rounded-[2rem] h-[600px] flex flex-col border border-surface/5 overflow-hidden"
                    >
                      <div className="p-8 border-b border-surface/10 flex justify-between items-center bg-base/50 backdrop-blur-md">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-surface">AC</div>
                           <div>
                              <h4 className="font-bold uppercase tracking-tight">Project Team</h4>
                              <p className="text-[10px] text-accent font-black uppercase tracking-widest">Support Active</p>
                           </div>
                        </div>
                      </div>
                      <div className="flex-grow p-8 space-y-8 overflow-y-auto">
                        {messages.map((msg) => (
                          <motion.div 
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`max-w-[80%] ${msg.sender === 'You' ? 'ml-auto text-right' : ''}`}
                          >
                             <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${msg.sender === 'You' ? 'text-accent' : 'text-surface/30'}`}>
                                {msg.sender} • {msg.time}
                             </p>
                             <div className={`p-6 rounded-2xl font-medium leading-relaxed ${
                               msg.sender === 'You' 
                               ? 'bg-accent text-surface rounded-tr-none' 
                               : 'bg-surface text-base rounded-tl-none'
                             }`}>
                                {msg.text}
                             </div>
                          </motion.div>
                        ))}
                      </div>
                      <form onSubmit={handleSendMessage} className="p-6 bg-base/50 border-t border-surface/10">
                        <div className="relative flex items-center">
                          <input 
                            type="text" 
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="w-full bg-surface/5 border-none focus:ring-2 ring-accent/20 rounded-2xl p-6 pr-20 outline-none font-medium text-surface placeholder:text-surface/20"
                          />
                          <button 
                            type="submit"
                            disabled={!newMessage.trim()}
                            className="absolute right-4 p-4 bg-accent text-surface rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
                          >
                            <Send size={18} />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {activeTab === 'files' && (
                    <motion.div 
                      key="files-view"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      {documents.map((doc, i) => (
                        <div key={i} className="bg-surface/5 p-6 rounded-3xl border border-surface/5 flex items-center justify-between group hover:bg-surface/10 transition-all">
                          <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-base rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-surface transition-colors">
                              <FileCheck size={24} />
                            </div>
                            <div>
                              <h4 className="font-bold uppercase tracking-tight">{doc.name}</h4>
                              <p className="text-[10px] font-black uppercase tracking-widest text-surface/30">
                                {doc.category} • {doc.size} • {doc.date}
                              </p>
                            </div>
                          </div>
                          <button className="p-4 bg-base rounded-full hover:bg-accent hover:text-surface transition-all">
                            <Download size={18} />
                          </button>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase text-accent tracking-[0.3em] mb-6">Quick Actions</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <button 
                      onClick={() => triggerNotification("Meeting request sent to team")}
                      className="flex items-center justify-between p-6 bg-surface text-base rounded-2xl hover:bg-accent hover:text-surface transition-all group"
                    >
                      <span className="font-bold uppercase tracking-widest text-xs">Request Meeting</span>
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button 
                      onClick={() => triggerNotification("Emergency support ticket created")}
                      className="flex items-center justify-between p-6 bg-surface/5 border border-surface/5 rounded-2xl hover:border-accent transition-all group"
                    >
                      <span className="font-bold uppercase tracking-widest text-xs">Emergency Support</span>
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase text-accent tracking-[0.3em] mb-6">Your Studio Team</h4>
                  <div className="space-y-6">
                    {[
                      { name: "Kushal", role: "Creative Director" },
                      { name: "Megha", role: "Account Lead" }
                    ].map((member, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-surface/5 rounded-full" />
                        <div>
                          <p className="font-bold uppercase tracking-tight text-sm">{member.name}</p>
                          <p className="text-[10px] text-surface/40 font-black uppercase tracking-widest">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientPortal;
