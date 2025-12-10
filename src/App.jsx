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
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
      }}
    >
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
                <div
                  className="absolute bottom-[-4px] left-0 right-0 h-[2px]"
                  style={{ backgroundColor: colors.heroEnd }}
                />
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
    <div className="w-1 h-8" style={{ backgroundColor: colors.heroEnd }} />
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
    {/* HERO */}
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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <img
          src="/assets/image.webp"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'rgba(0,0,0,0.45)',
        }}
      />

      {/* Content */}
      <div
        className="max-w-5xl mx-auto text-center"
        style={{ position: 'relative', zIndex: 2, color: colors.almond }}
      >
        <h1 className="text-7xl font-bold mb-4">Abhinav Pentani</h1>

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

    {/* WHAT I DO */}
    <div className="px-8 py-24" style={{ backgroundColor: colors.almondDeep }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="What I Do" centered />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: 'Growth Thinking', desc: 'User funnels, community-led traction, positioning, experimentation.' },
            { title: 'Narrative & Branding', desc: 'Brand voice, Pitch decks, Founder narratives, content systems.' },
            { title: 'Early-Stage Operations', desc: 'Team workflows, execution frameworks, Cross-functional coordination.' },
            { title: 'Strategy & Analysis', desc: 'Market Research, Competitive mapping, GTM clarity, Startup feasibility.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.graphite }}>{item.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: colors.graphite }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ABOUT */}
    <div className="px-8 py-24" style={{ backgroundColor: colors.almond }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <div className="w-1 h-8" style={{ backgroundColor: colors.heroEnd }} />
          <h2 className="text-4xl font-bold" style={{ color: colors.graphite }}>
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                    maxWidth: 460,
                    height: 360,
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
// PROJECTS PAGE & CASE STUDIES
// ------------------------
const ProjectsPage = ({ onSelectProject }) => {
  const projects = [
    {
      id: 'vectr',
      position: 'Co-Founder',
      company: 'Vectr',
      highlights: [
        'Spearheaded growth, GTM and investor relations for a content-tech EdTech startup',
        '3,000+ Play Store pre-registrations within weeks via community-led campaigns',
        '400,000+ LinkedIn impressions through a LinkedIn-first content engine',
        'Built & led a 30+ cross-functional team (Design, Eng, Ops, Content)',
        'Initiated pre-seed conversations with Indian and international VCs',
      ],
    },
    {
      id: 'netts',
      position: 'Growth & Strategy',
      company: 'Netts Mobility',
      highlights: [
        'Built early growth and GTM frameworks for India’s universal battery-swap network',
        'Streamlined pilot operations and retrofitting workflows for EV adoption',
        'Shaped fundraising narrative and investor-facing materials',
        'Established repeatable processes for partner on-boarding and field rollout',
      ],
    },
    {
      id: 'trovia',
      position: "Founder's Office",
      company: 'Trovia',
      highlights: [
        'Led product strategy, market research and pilot operations for a campus rental platform',
        'Built supplier and campus partnerships to validate inventory and demand',
        'Designed onboarding and compliance flows for student pilots',
        'Turned early user feedback into prioritized roadmap items',
      ],
    },
    {
      id: 'quicklaunchr',
      position: 'Venture Analyst',
      company: 'Quick Launchr',
      highlights: [
        'Evaluated 100+ early-stage startups across sectors using structured rubrics',
        'Built institutional partnerships with colleges to improve deal flow',
        'Introduced pattern-recognition heuristics for founder and team assessment',
        'Helped improve pipeline quality for partner investors and programs',
      ],
    },
    {
      id: 'marketing',
      position: 'Marketing & Community Lead',
      company: 'Various Organizations',
      highlights: [
        'Scoped and implemented growth strategies and content systems for early-stage teams',
        'Led large event operations including sponsorship outreach and execution',
        'Built repeatable content workflows that scaled organic reach',
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: colors.graphite, minHeight: '100vh' }}>
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-8" style={{ backgroundColor: colors.heroEnd }} />
            <h2 className="text-4xl font-bold" style={{ color: colors.almond }}>
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="p-8 cursor-pointer"
                style={{
                  backgroundColor: colors.graphiteLight,
                  borderRadius: '16px',
                  borderLeft: `4px solid ${colors.heroEnd}`,
                }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: colors.almond }}>
                  {project.position}
                </h3>
                <p className="text-lg mb-6" style={{ color: colors.almond, opacity: 0.6 }}>
                  {project.company}
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-base" style={{ color: colors.almond, opacity: 0.8 }}>
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudyPage = ({ projectId, onBack }) => {
  const caseStudies = {
    vectr: {
      title: 'Vectr',
      summary:
        'Co-founded Vectr, a content-tech platform built to help test-prep students beat distraction through structured focus modes, community accountability and creator distribution.',
      metrics: [
        '3,000+ Play Store pre-registrations',
        '400,000+ LinkedIn impressions',
        '30+ cross-functional team members built & led',
      ],
      sections: [
        {
          title: 'Context & Problem',
          content:
            '90% of learners report distraction as their single biggest obstacle. Most EdTech focuses on content; Vectr focused on the session-level experience—structure, accountability and distribution that actually improves study outcomes.',
        },
        {
          title: 'What I Did',
          content:
            'Led growth, positioning and investor relations. Built a LinkedIn-first demand engine, designed community acquisition flows and coordinated cross-functional delivery across product, design and ops.',
        },
        {
          title: 'Execution & Systems',
          content:
            'Created community-driven pre-launch campaigns, systematic content workflows, and OKR-driven sprint processes. Implemented creator partnerships and measurement frameworks to evaluate activation and retention.',
        },
        {
          title: 'Impact & Result',
          content:
            'Achieved 3,000+ pre-registrations in weeks and generated significant organic reach. Assembled a 30+ member team and opened pre-seed conversations with multiple VCs based on clear traction metrics.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content:
            'Early traction is about systems, not hacks. Community-led distribution outperforms paid channels for proof-of-demand. Clear positioning accelerates investor conversations and reduces friction in hiring early talent.',
        },
      ],
    },
    netts: {
      title: 'Netts Mobility',
      summary:
        'Joined Netts to operationalize and scale early pilot work for India’s universal battery swapping and retrofitting ecosystem.',
      metrics: ['Growth frameworks established', 'Pilot ops streamlined', 'Fundraising narrative improved'],
      sections: [
        {
          title: 'Context & Problem',
          content:
            'Range anxiety and slow charging infrastructure are major barriers to EV adoption. Netts’ universal swapping model aims to make EVs usable immediately across vehicle types.',
        },
        {
          title: 'What I Did',
          content:
            'Worked with founders to define GTM for pilot cities, created partner onboarding steps, and built content and outreach flows to recruit pilot fleets and stations.',
        },
        {
          title: 'Execution & Systems',
          content:
            'Established operational handoffs for retrofitting, created partner playbooks, and implemented measurement frameworks to track swap throughput and partner conversion.',
        },
        {
          title: 'Impact & Result',
          content:
            'Turned ad-hoc operations into repeatable processes, enabling smoother pilot rollouts and clearer investor updates. Strengthened the narrative used in early fundraising conversations.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content:
            'Complex hardware-software businesses require early process discipline — repeatable partner onboarding and clear pilot success metrics are key to scaling.',
        },
      ],
    },
    trovia: {
      title: 'Trovia',
      summary:
        "Embedded in the Founder’s Office to lead product, market research and pilot operations for a campus-focused rental platform.",
      metrics: ['Pilot operations managed', 'Supplier & campus partnerships established', 'Positioning defined'],
      sections: [
        {
          title: 'Context & Problem',
          content:
            'Students need access to items without ownership or storage overhead. Trovia positioned itself as the campus-first rental marketplace solving convenience and sustainability.',
        },
        {
          title: 'What I Did',
          content:
            'Owned product strategy, user research, supplier partnerships and pilot execution. Designed onboarding flows and compliance checks for campus pilots.',
        },
        {
          title: 'Execution & Systems',
          content:
            'Built supplier playbooks, curated item catalogs for campuses, and set up operations to handle logistics, returns and quality checks during pilots.',
        },
        {
          title: 'Impact & Result',
          content:
            'Validated demand across partner campuses, surfaced pricing and catalog insights, and delivered a prioritized roadmap informed by real student behaviour.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content:
            'Pilot learning beats speculation. Close loops with users and partners rapidly to de-risk catalog, pricing and logistics decisions.',
        },
      ],
    },
    quicklaunchr: {
      title: 'Quick Launchr',
      summary:
        'Served as a Venture Analyst building institutional deal flow and screening early-stage startups across sectors.',
      metrics: ['100+ startups evaluated', 'College partnerships established', 'Deal flow quality improved'],
      sections: [
        {
          title: 'Context & Problem',
          content:
            'Boutique VC programs need reliable, high-quality deal flow and repeatable evaluation criteria to make fast, confident allocation decisions.',
        },
        {
          title: 'What I Did',
          content:
            'Evaluated startups using a standardized rubric, created partnerships with colleges to surface early talent, and summarized patterns that differentiated founders likely to execute.',
        },
        {
          title: 'Execution & Systems',
          content:
            'Built evaluation templates, ran founder diligence calls, and documented signal patterns (team quality, early traction, domain expertise) to improve screening speed.',
        },
        {
          title: 'Impact & Result',
          content:
            'Improved pipeline quality through institutional channels and helped the team surface higher-probability opportunities for investment consideration.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content:
            'Pattern recognition in early-stage investing is often more valuable than single datapoints. Consistency in evaluation reduces bias and speeds decision-making.',
        },
      ],
    },
    marketing: {
      title: 'Marketing & Community Roles',
      summary:
        'Led marketing, growth and community initiatives across events, student ecosystems and early-stage startups.',
      metrics: ['Growth systems built', 'Events executed', 'Sponsorships secured'],
      sections: [
        {
          title: 'Context & Problem',
          content:
            'Organizations needed predictable ways to scale community engagement and monetize events without sacrificing authenticity.',
        },
        {
          title: 'What I Did',
          content:
            'Built content calendars, sponsorship decks, event playbooks and growth experiments tailored to resource-constrained teams.',
        },
        {
          title: 'Execution & Systems',
          content:
            'Ran sponsorship outreach at scale, designed event operations for 1,000+ attendees, and implemented content systems that sustained audience engagement.',
        },
        {
          title: 'Impact & Result',
          content:
            'Delivered measurable growth through repeatable systems, secured multi-partner sponsorships and executed high-attendance community events.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content:
            'Events create moments; systems create movement. Sponsorships work when value transfer is explicit and audience fit is proven.',
        },
      ],
    },
  };

  const study = caseStudies[projectId];

  return (
    <div style={{ backgroundColor: colors.graphite, minHeight: '100vh' }}>
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-12 text-base font-medium flex items-center gap-2"
            style={{ color: colors.almond }}
          >
            ← Back to Projects
          </button>

          <h1 className="text-6xl font-bold mb-8" style={{ color: colors.almond }}>
            {study.title}
          </h1>

          <p className="text-xl mb-12 leading-relaxed" style={{ color: colors.almond, opacity: 0.8 }}>
            {study.summary}
          </p>

          <div className="mb-16 p-8" style={{ backgroundColor: colors.graphiteLight, borderRadius: '16px' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.heroEnd }}>
              Impact Metrics
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {study.metrics.map((metric, idx) => (
                <div key={idx}>
                  <p className="text-lg font-semibold" style={{ color: colors.almond }}>
                    {metric}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {study.sections.map((section, idx) => (
            <div key={idx} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8" style={{ backgroundColor: colors.heroEnd }} />
                <h2 className="text-3xl font-bold" style={{ color: colors.almond }}>
                  {section.title}
                </h2>
              </div>
              <p className="text-lg leading-relaxed" style={{ color: colors.almond, opacity: 0.8 }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// ------------------------
// CONTACT PAGE
// ------------------------
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div style={{ backgroundColor: colors.almond, minHeight: '100vh' }}>
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6" style={{ color: colors.graphite }}>
            Let's Build Something That Deserves to Exist
          </h1>
          <p className="text-xl mb-12" style={{ color: colors.graphite }}>
            Whether you're validating an idea, preparing to launch, or refining your story — I can help you think it through.
          </p>

          <div className="space-y-6 mb-16">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.graphite }}>
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 text-base"
                style={{
                  backgroundColor: 'white',
                  color: colors.black,
                  border: `2px solid ${colors.almondDeep}`,
                  borderRadius: '6px',
                }}
                onFocus={(e) => (e.target.style.borderColor = colors.heroEnd)}
                onBlur={(e) => (e.target.style.borderColor = colors.almondDeep)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.graphite }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 text-base"
                style={{
                  backgroundColor: 'white',
                  color: colors.black,
                  border: `2px solid ${colors.almondDeep}`,
                  borderRadius: '6px',
                }}
                onFocus={(e) => (e.target.style.borderColor = colors.heroEnd)}
                onBlur={(e) => (e.target.style.borderColor = colors.almondDeep)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: colors.graphite }}>
                Message
              </label>
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 text-base"
                style={{
                  backgroundColor: 'white',
                  color: colors.black,
                  border: `2px solid ${colors.almondDeep}`,
                  borderRadius: '6px',
                }}
                onFocus={(e) => (e.target.style.borderColor = colors.heroEnd)}
                onBlur={(e) => (e.target.style.borderColor = colors.almondDeep)}
              />
            </div>

            <PrimaryButton onClick={handleSubmit}>
              {submitted ? 'Message Sent!' : 'Send Message'}
            </PrimaryButton>
          </div>

          <div className="pt-8" style={{ borderTop: `1px solid ${colors.almondDeep}` }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: colors.graphite }}>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} style={{ color: colors.heroEnd }} />
                <a href="mailto:abhinav.vectr@gmail.com" className="text-base" style={{ color: colors.graphite }}>
                  abhinav.vectr@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={20} style={{ color: colors.heroEnd }} />
                <a
                  href="https://linkedin.com/in/abhinav-pentani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base"
                  style={{ color: colors.graphite }}
                >
                  linkedin.com/in/abhinav-pentani
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} style={{ color: colors.heroEnd }} />
                <span className="text-base" style={{ color: colors.graphite }}>
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
    setCurrentPage('projects');
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setCurrentPage('projects');
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans">
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />

      {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}

      {currentPage === 'projects' && !selectedProject && (
        <ProjectsPage onSelectProject={handleSelectProject} />
      )}

      {currentPage === 'projects' && selectedProject && (
        <CaseStudyPage projectId={selectedProject} onBack={handleBackToProjects} />
      )}

      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}
