import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';

// Design System Constants
const colors = {
  teal: '#2F7F89',
  tealHover: '#4B9AA3',
  graphite: '#2A2A2A',
  graphiteLight: '#3A3A3A',
  almond: '#F4EEE7',
  almondDeep: '#E8E0D9',
  black: '#0E0E0E',
};

// Navigation Component
const Navigation = ({ currentPage, onNavigate }) => {
  const links = [
    { name: 'Home', path: 'home' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6" style={{ backgroundColor: colors.almond }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-xl font-bold cursor-pointer" 
          style={{ color: colors.graphite }}
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
              style={{ 
                color: colors.graphite,
              }}
            >
              {link.name}
              {currentPage === link.path && (
                <div 
                  className="absolute bottom-[-4px] left-0 right-0 h-[2px]"
                  style={{ backgroundColor: colors.teal }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Button Components
const PrimaryButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 text-base font-semibold"
    style={{
      backgroundColor: colors.teal,
      color: colors.almond,
      borderRadius: '8px',
    }}
    onMouseEnter={(e) => e.target.style.backgroundColor = colors.tealHover}
    onMouseLeave={(e) => e.target.style.backgroundColor = colors.teal}
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
      color: colors.teal,
      border: `1.5px solid ${colors.teal}`,
      borderRadius: '8px',
    }}
  >
    {children}
  </button>
);

// Section Header Component
const SectionHeader = ({ title, centered = false }) => (
  <div className={`flex items-center gap-4 mb-12 ${centered ? 'justify-center' : ''}`}>
    <div 
      className="w-1 h-8"
      style={{ backgroundColor: colors.teal }}
    />
    <h2 
      className="text-4xl font-bold"
      style={{ color: colors.graphite }}
    >
      {title}
    </h2>
  </div>
);

// Home Page with integrated About
const HomePage = ({ onNavigate }) => (
  <div style={{ backgroundColor: colors.almond, minHeight: '100vh' }}>
    {/* Hero Section */}
    <div className="pt-32 pb-24 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 
          className="text-7xl font-bold mb-4"
          style={{ color: colors.graphite }}
        >
          Abhinav Pentani
        </h1>
        <p 
          className="text-3xl mb-8"
          style={{ color: colors.graphite, opacity: 0.7 }}
        >
          Early-Stage Ops & Product Management
        </p>
        <p 
          className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ color: colors.graphite }}
        >
          I help early-stage teams turn raw ideas into structured growth, sharper positioning, and real traction. From 0 → 3,000+ users, from chaos → workflows, from concepts → pitches that get investor attention.
        </p>
        <div className="flex gap-4 justify-center">
          <PrimaryButton onClick={() => onNavigate('projects')}>
            View My Work
          </PrimaryButton>
          <SecondaryButton onClick={() => onNavigate('contact')}>
            Get in Touch
          </SecondaryButton>
        </div>
      </div>
    </div>

    {/* What I Do Section */}
    <div className="px-8 py-24" style={{ backgroundColor: colors.almondDeep }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="What I Do" centered />
        <div className="grid grid-cols-4 gap-8">
          {[
            {
              title: 'Growth Thinking',
              desc: 'User funnels, community-led traction, positioning, experimentation.',
            },
            {
              title: 'Narrative & Storytelling',
              desc: 'Brand voice, pitch decks, founder narratives, content systems.',
            },
            {
              title: 'Early-Stage Operations',
              desc: 'Team workflows, execution frameworks, cross-functional coordination.',
            },
            {
              title: 'Strategy & Analysis',
              desc: 'Market research, competitive mapping, GTM clarity, startup feasibility.',
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: colors.graphite }}
              >
                {item.title}
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: colors.graphite }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* About Section */}
    <div className="px-8 py-24" style={{ backgroundColor: colors.almond }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="About Me — Builder at Heart, Strategist by Practice" centered />
        <div className="space-y-6 text-lg leading-relaxed text-center" style={{ color: colors.graphite }}>
          <p>
            I've spent the last few years working inside very young companies — the messy, high-velocity, figure-it-out stage. My work typically sits at the intersection of growth, product sense, storytelling, and early-stage operations.
          </p>
          <p>
            At Vectr, the content-tech startup I co-founded, I helped shape everything from brand positioning to community-led traction. We crossed 3,000+ Play Store pre-registrations in weeks and built a 30+ member team without burning out the vision.
          </p>
          <p>
            Since then, I've contributed to teams across mobility, edtech, gaming, and venture scouting — usually brought in to solve ambiguous problems:
          </p>
          <div className="flex flex-col items-center gap-2">
            <p>• How do we launch?</p>
            <p>• How do we position ourselves?</p>
            <p>• Is this market even viable?</p>
            <p>• What story will investors believe?</p>
          </div>
          <p>
            I enjoy the grind before the spotlight. The zero-to-something phase.
          </p>
        </div>
      </div>
    </div>

    {/* CTA to Projects */}
    <div className="px-8 py-16" style={{ backgroundColor: colors.almondDeep }}>
      <div className="max-w-5xl mx-auto text-center">
        <PrimaryButton onClick={() => onNavigate('projects')}>
          My Work
        </PrimaryButton>
      </div>
    </div>
  </div>
);

// Projects Page with Rounded Cards
const ProjectsPage = ({ onSelectProject }) => {
  const projects = [
    {
      id: 'vectr',
      position: 'Co-Founder',
      company: 'Vectr',
      highlights: [
        'Built traction engine → 3,000+ preregistrations',
        'Drove 400,000+ LinkedIn impressions',
        'Built & led 30+ member team',
        'Pre-seed VC conversations initiated',
      ],
    },
    {
      id: 'netts',
      position: 'Growth & Strategy',
      company: 'Netts Mobility',
      highlights: [
        'Created foundational growth & content workflows',
        'Strengthened early fundraising narrative',
        'Streamlined early-stage operations',
      ],
    },
    {
      id: 'trovia',
      position: 'Founder\'s Office',
      company: 'Trovia',
      highlights: [
        'Led market research for platform positioning',
        'Directed pilot-phase ops & compliance',
      ],
    },
    {
      id: 'quicklaunchr',
      position: 'Venture Analyst',
      company: 'Quick Launchr',
      highlights: [
        'Evaluated 100+ early-stage startups',
        'Strengthened deal flow with institute partnerships',
      ],
    },
    {
      id: 'marketing',
      position: 'Marketing & Community Lead',
      company: 'Various Organizations',
      highlights: [
        'Scoped growth strategies, content systems',
        'Led event operations & sponsorship efforts',
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: colors.graphite, minHeight: '100vh' }}>
      <div className="pt-32 pb-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div 
              className="w-1 h-8"
              style={{ backgroundColor: colors.teal }}
            />
            <h2 
              className="text-4xl font-bold"
              style={{ color: colors.almond }}
            >
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
                  borderLeft: `4px solid ${colors.teal}`,
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
                    <li 
                      key={idx} 
                      className="text-base"
                      style={{ color: colors.almond, opacity: 0.8 }}
                    >
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

// Case Study Page
const CaseStudyPage = ({ projectId, onBack }) => {
  const caseStudies = {
    vectr: {
      title: 'Vectr',
      summary: 'Co-founded a content-tech startup focused on democratizing video editing. Led growth strategy, brand positioning, and operations from concept to 3,000+ pre-registrations and 30+ team members.',
      metrics: [
        '3,000+ Play Store Pre-registrations',
        '400,000+ LinkedIn Impressions',
        '30+ Team Members Built & Led',
      ],
      sections: [
        {
          title: 'Context & Problem',
          content: 'Vectr emerged from recognizing a gap in accessible video editing tools for content creators. The market was dominated by complex professional tools or oversimplified mobile apps. We aimed to build something in between — powerful yet intuitive, with AI assistance that felt helpful rather than limiting.',
        },
        {
          title: 'What I Did',
          content: 'As co-founder, I wore multiple hats: defined our positioning strategy, built community-led pre-launch traction systems, established content workflows that generated 400K+ impressions, recruited and coordinated a 30+ member team across product, design, and marketing, and structured our narrative for early investor conversations.',
        },
        {
          title: 'Execution & Systems',
          content: 'Built a LinkedIn-first content engine that converted thought leadership into measurable interest. Created systematic workflows for team coordination despite distributed operations. Established clear OKRs and sprint structures that kept momentum without burning out the team. Designed our pre-launch strategy to validate demand before heavy product investment.',
        },
        {
          title: 'Impact & Result',
          content: '3,000+ pre-registrations in first few weeks validated product-market fit signals. Generated significant organic reach and brand recognition in target creator communities. Successfully assembled and led a passionate team that believed in the vision. Initiated conversations with pre-seed VCs based on traction metrics.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content: 'The zero-to-something phase requires different muscles than scaling. Community-led traction beats paid acquisition in early stages. Clear positioning is your best growth lever. Team motivation comes from clarity of vision and consistent wins. Investor conversations become easier when metrics tell a story.',
        },
      ],
    },
    netts: {
      title: 'Netts Mobility',
      summary: 'Joined an early-stage mobility startup to establish foundational growth systems, refine fundraising narratives, and streamline operations during their critical pre-launch phase.',
      metrics: [
        'Growth Framework Established',
        'Fundraising Narrative Strengthened',
        'Operations Streamlined',
      ],
      sections: [
        {
          title: 'Context & Problem',
          content: 'Netts was building in the competitive mobility space with ambitious goals but lacked structured growth thinking and operational clarity. They needed someone to bridge strategy and execution while preparing for fundraising.',
        },
        {
          title: 'What I Did',
          content: 'Developed comprehensive growth and content workflows from scratch. Worked closely with founders to sharpen their fundraising story and positioning. Established operational systems that brought predictability to a chaotic early-stage environment.',
        },
        {
          title: 'Execution & Systems',
          content: 'Created documented processes for content creation, distribution, and measurement. Built frameworks for tracking growth metrics and setting realistic targets. Structured internal communication systems that improved cross-functional alignment.',
        },
        {
          title: 'Impact & Result',
          content: 'Transformed ad-hoc activities into repeatable systems. Gave founders confidence and clarity in investor conversations. Reduced operational friction, allowing the team to focus on high-impact work.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content: 'Early-stage companies often confuse motion with progress. Systems create leverage. A strong narrative is as important as a strong product. Operational clarity is a competitive advantage.',
        },
      ],
    },
    trovia: {
      title: 'Trovia',
      summary: 'Embedded in the founder\'s office to lead market research, platform positioning strategy, and pilot-phase operations for an emerging edtech platform.',
      metrics: [
        'Market Research Conducted',
        'Positioning Strategy Defined',
        'Pilot Operations Managed',
      ],
      sections: [
        {
          title: 'Context & Problem',
          content: 'Trovia was entering a crowded edtech market and needed clarity on positioning, target segments, and go-to-market approach. The pilot phase required careful operational coordination and compliance attention.',
        },
        {
          title: 'What I Did',
          content: 'Led comprehensive market research to identify white space opportunities. Directed positioning strategy based on competitive analysis and user insights. Managed pilot-phase operations including compliance, user onboarding, and feedback loops.',
        },
        {
          title: 'Execution & Systems',
          content: 'Conducted systematic analysis of competitors, user segments, and market trends. Created positioning frameworks that guided product and marketing decisions. Established operational processes for pilot program execution.',
        },
        {
          title: 'Impact & Result',
          content: 'Provided strategic clarity that informed product roadmap decisions. Successfully navigated pilot phase with attention to compliance requirements. Generated actionable insights from early users that shaped iteration priorities.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content: 'Market research should inform positioning, not just validate assumptions. Compliance matters from day one. Early user feedback is gold when structured properly.',
        },
      ],
    },
    quicklaunchr: {
      title: 'Quick Launchr',
      summary: 'Served as venture analyst, evaluating early-stage startups, strengthening deal flow quality, and building partnerships with academic institutions to source promising founders.',
      metrics: [
        '100+ Startups Evaluated',
        'Institute Partnerships Established',
        'Deal Flow Quality Improved',
      ],
      sections: [
        {
          title: 'Context & Problem',
          content: 'Quick Launchr needed to scale their deal flow while maintaining quality. They wanted stronger connections with academic institutions and better evaluation frameworks for early-stage opportunities.',
        },
        {
          title: 'What I Did',
          content: 'Evaluated 100+ early-stage startups across sectors using structured frameworks. Built partnerships with academic institutions to source high-potential founders. Refined evaluation criteria to improve deal flow quality.',
        },
        {
          title: 'Execution & Systems',
          content: 'Created systematic evaluation rubrics covering market opportunity, team strength, traction signals, and scalability. Established relationships with university entrepreneurship cells. Documented patterns in successful vs unsuccessful pitches.',
        },
        {
          title: 'Impact & Result',
          content: 'Significantly improved deal flow quality through institutional partnerships. Developed pattern recognition for early-stage potential. Contributed to investment decision frameworks used by the team.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content: 'Most early-stage startups fail on execution, not ideas. Team quality and adaptability matter more than initial traction. Academic institutions are underutilized sources of technical founding talent.',
        },
      ],
    },
    marketing: {
      title: 'Marketing & Community Roles',
      summary: 'Led various marketing, growth, and community initiatives across multiple organizations, focusing on content strategy, event operations, and sponsorship management.',
      metrics: [
        'Growth Strategies Scoped',
        'Content Systems Built',
        'Events Successfully Executed',
      ],
      sections: [
        {
          title: 'Context & Problem',
          content: 'Various organizations needed support in defining growth strategies, building content systems, and executing high-impact events with limited resources.',
        },
        {
          title: 'What I Did',
          content: 'Scoped and implemented growth strategies tailored to each organization\'s stage and resources. Built content systems that balanced quality and consistency. Led event operations from planning through execution, including sponsorship negotiations.',
        },
        {
          title: 'Execution & Systems',
          content: 'Created content calendars, distribution strategies, and measurement frameworks. Established event workflows covering logistics, partnerships, and post-event follow-up. Built sponsorship decks and negotiation strategies.',
        },
        {
          title: 'Impact & Result',
          content: 'Delivered measurable growth through systematic content and community efforts. Successfully executed events that strengthened brand positioning and community engagement. Secured sponsorships that made events financially sustainable.',
        },
        {
          title: 'Learnings / Strategic Insight',
          content: 'Community-building compounds over time. Events create moments but systems create movements. Sponsorships work when value exchange is clear and authentic.',
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

          <h1 
            className="text-6xl font-bold mb-8"
            style={{ color: colors.almond }}
          >
            {study.title}
          </h1>

          <p 
            className="text-xl mb-12 leading-relaxed"
            style={{ color: colors.almond, opacity: 0.8 }}
          >
            {study.summary}
          </p>

          <div className="mb-16 p-8" style={{ backgroundColor: colors.graphiteLight, borderRadius: '16px' }}>
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ color: colors.teal }}
            >
              Impact Metrics
            </h3>
            <div className="grid grid-cols-3 gap-8">
              {study.metrics.map((metric, idx) => (
                <div key={idx}>
                  <p 
                    className="text-lg font-semibold"
                    style={{ color: colors.almond }}
                  >
                    {metric}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {study.sections.map((section, idx) => (
            <div key={idx} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-1 h-8"
                  style={{ backgroundColor: colors.teal }}
                />
                <h2 
                  className="text-3xl font-bold"
                  style={{ color: colors.almond }}
                >
                  {section.title}
                </h2>
              </div>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: colors.almond, opacity: 0.8 }}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Page
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
          <h1 
            className="text-5xl font-bold mb-6"
            style={{ color: colors.graphite }}
          >
            Let's Build Something That Deserves to Exist
          </h1>
          <p 
            className="text-xl mb-12"
            style={{ color: colors.graphite }}
          >
            Whether you're validating an idea, preparing to launch, or refining your story — I can help you think it through.
          </p>

          <div className="space-y-6 mb-16">
            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.graphite }}
              >
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
                onFocus={(e) => e.target.style.borderColor = colors.teal}
                onBlur={(e) => e.target.style.borderColor = colors.almondDeep}
              />
            </div>

            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.graphite }}
              >
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
                onFocus={(e) => e.target.style.borderColor = colors.teal}
                onBlur={(e) => e.target.style.borderColor = colors.almondDeep}
              />
            </div>

            <div>
              <label 
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.graphite }}
              >
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
                onFocus={(e) => e.target.style.borderColor = colors.teal}
                onBlur={(e) => e.target.style.borderColor = colors.almondDeep}
              />
            </div>

            <PrimaryButton onClick={handleSubmit}>
              {submitted ? 'Message Sent!' : 'Send Message'}
            </PrimaryButton>
          </div>

          <div 
            className="pt-8"
            style={{ borderTop: `1px solid ${colors.almondDeep}` }}
          >
            <h3 
              className="text-2xl font-bold mb-6"
              style={{ color: colors.graphite }}
            >
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} style={{ color: colors.teal }} />
                <a 
                  href="mailto:abhinav.vectr@gmail.com"
                  className="text-base"
                  style={{ color: colors.graphite }}
                >
                  abhinav.vectr@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={20} style={{ color: colors.teal }} />
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
                <MapPin size={20} style={{ color: colors.teal }} />
                <span 
                  className="text-base"
                  style={{ color: colors.graphite }}
                >
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

// Main App Component
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