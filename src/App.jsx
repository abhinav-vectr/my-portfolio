import React, { useState } from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

// ------------------------
// DESIGN SYSTEM COLORS
// ------------------------
const colors = {
  navDark: '#0F2A2C',     
  heroStart: '#184F52',   
  heroEnd: '#ff6f00ff',     
  sectionDark: '#152426',
  almond: '#F4EEE7',
  almondDeep: '#E8E0D9',
  graphite: '#2A2A2A',
  graphiteLight: '#3A3A3A',
  black: '#0E0E0E',
};

// ------------------------
// NAVIGATION
// ------------------------
const Navigation = ({ currentPage, onNavigate }) => {
  const links = [
    { name: 'Home', path: 'home' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)",   // translucent black
  backdropFilter: "blur(12px)",           // blur effect
  WebkitBackdropFilter: "blur(12px)",     // Safari support
  borderBottom: "1px solid rgba(255,255,255,0.15)", }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-xl font-bold cursor-pointer" 
          style={{ color: colors.almond }}
          onClick={() => onNavigate('home')}
        >
          AP
        </div>

        <div className="flex gap-8">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => onNavigate(link.path)}
              className="text-base font-medium relative"
              style={{ color: colors.almond }}
            >
              {link.name}

              {currentPage === link.path && (
                <div className="absolute bottom-[-4px] left-0 right-0 h-[2px]"
                  style={{ backgroundColor: colors.heroEnd }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// ------------------------
// BUTTONS
// ------------------------
const PrimaryButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 text-base font-semibold"
    style={{
      backgroundColor: colors.heroEnd,
      color: colors.almond,
      borderRadius: '8px',
    }}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 text-base font-semibold"
    style={{
      backgroundColor: 'transparent',
      color: colors.heroEnd,
      border: `1.5px solid ${colors.heroEnd}`,
      borderRadius: '8px',
    }}
  >
    {children}
  </button>
);

// ------------------------
// SECTION HEADER
// ------------------------
const SectionHeader = ({ title, centered = false }) => (
  <div className={`flex items-center gap-4 mb-12 ${centered ? 'justify-center' : ''}`}>
    <div 
      className="w-1 h-8"
      style={{ backgroundColor: colors.heroEnd }}
    />
    <h2 className="text-4xl font-bold" style={{ color: colors.graphite }}>
      {title}
    </h2>
  </div>
);

// ------------------------
// HOME PAGE
// ------------------------
const HomePage = ({ onNavigate }) => (
  <div style={{ backgroundColor: colors.almond, minHeight: '100vh' }}>

    {/* ===== HERO SECTION ===== */}
    <div 
      className="pt-32 pb-24 px-8"
      style={{
        background: `linear-gradient(180deg, ${colors.heroStart} 0%, ${colors.heroEnd} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}>
        <img
          src="/assets/image.webp"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'rgba(0,0,0,0.45)',
      }} />

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center"
        style={{ position: 'relative', zIndex: 2, color: colors.almond }}
      >
        <h1 className="text-7xl font-bold mb-4">
          Abhinav Pentani
        </h1>

        <p className="text-3xl mb-8" style={{ opacity: 0.9 }}>
          Early-Stage Ops & Product Management
        </p>

        <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0.95 }}>
          I help early-stage teams turn raw ideas into structured growth, sharper positioning,
          and real traction. From 0 → 3,000+ users, from chaos → workflows, from concepts →
          pitches that get investor attention.
        </p>

        <div className="flex gap-4 justify-center">
          <PrimaryButton onClick={() => onNavigate('projects')}>View My Work</PrimaryButton>
          <SecondaryButton onClick={() => onNavigate('contact')}>Get in Touch</SecondaryButton>
        </div>
      </div>
    </div>
    {/* ===== END HERO ===== */}

    {/* What I Do */}
    <div className="px-8 py-24" style={{ backgroundColor: colors.almondDeep }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="What I Do" centered />

        <div className="grid grid-cols-4 gap-8">
          {[
            { title: 'Growth Thinking', desc: 'User funnels, community-led traction, positioning, experimentation.' },
            { title: 'Narrative & Storytelling', desc: 'Brand voice, pitch decks, founder narratives, content systems.' },
            { title: 'Early-Stage Operations', desc: 'Team workflows, execution frameworks, cross-functional coordination.' },
            { title: 'Strategy & Analysis', desc: 'Market research, competitive mapping, GTM clarity, startup feasibility.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.graphite }}>{item.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: colors.graphite }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

{/* ====== ABOUT SECTION (fixed final with hover + link) ====== */}
<div className="px-8 py-24" style={{ backgroundColor: colors.almond }}>
  <div className="max-w-5xl mx-auto">

    {/* Title (left aligned) */}
    <div className="mb-8">
      <h2 className="text-4xl font-bold" style={{ color: colors.graphite, textAlign: 'left' }}>
        About Me
      </h2>
    </div>

    {/* Two-column area: image (left) + intro text (right) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* LEFT: image container (keeps image a fixed max width so text sits to its right) */}
      <div className="flex items-start md:items-start pl-10">
        <div>
          <a
            href="https://www.linkedin.com/in/abhinav-pentani/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Abhinav Pentani's LinkedIn (opens in new tab)"
          >
            <img
              src="/assets/abhinavweb.webp"
              alt="Abhinav Pentani"
              className="block rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{
                width: '100%',
                maxWidth: 460,        // constrains image width on larger screens
                height: 360,          // fixed rectangle look
                objectFit: 'cover',
              }}
            />
          </a>
        </div>
      </div>

{/* RIGHT: intro text — left aligned, vertically centered on taller image screens */} 
<div className="flex items-center "> 
  <p className="text-lg leading-relaxed" style={{ color: colors.graphite }}> I've spent the last few years working inside very young companies — the messy, high-velocity, figure-it-out stage. My work typically sits at the intersection of growth, product sense, storytelling, and early-stage operations. 
    <br /><br /> 
    If you're a Founder bugged with questions like How do we launch? How do we position ourselves? Is this market even viable? What story will investors believe? - 
    <br /><br /> Dont waste time and get in touch <br /><br /> I'll turn ambiguity into clarity, and ideas into actionable plans. Also I'll recomend you movies that will blow your mind lol/s. 
    </p> </div> </div> {/* BELOW: additional paragraph, bullets, and closing line (full width, centered for readability) */} 
    <div className="mt-10 text-center max-w-3xl mx-auto" style={{ color: colors.graphite }}> 
      <p className="mb-6"> </p> <ul className="mb-6 list-none space-y-3" style={{ lineHeight: 1.9, textAlign: 'left', marginLeft: 'calc(50% - 12rem)' }}> 
        {/* Using left-aligned bullets but keeping the block centered visually. If you prefer strictly centered bullets, remove the marginLeft style above. */} </ul> 
        </div> 
        </div> 
        </div> 
        {/* ====== END ABOUT SECTION ====== */}


  </div>
);

// ------------------------
// MAIN APP
// ------------------------
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans">
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}
    </div>
  );
}
