import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Moon, Sun } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    setFormStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xkooygdp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const techStack = [
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', logo: 'https://cdn.simpleicons.org/express/000000' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'Prisma', logo: 'https://cdn.simpleicons.org/prisma/2D3748' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' }
  ];

  const projects = [
  {
    title: 'DevFocus',
    icon: faStopwatch,
    description: 'AI-powered productivity app with Pomodoro technique, task management, and intelligent work breakdown',
    tech: ['React', 'Node.js', 'MongoDB', 'Groq AI', 'Auth'],
    points: [
      'Integrated Groq AI to analyze tasks and suggest optimal Pomodoro breakdown with time estimates',
      'Built secure authentication system with Gmail OTP verification and password reset functionality',
      'Implemented streak tracking and intelligent break suggestions after 25-minute focus sessions'
    ],
    github: 'https://github.com/PEEKING-web/devfocus',
    live: 'https://devfocus-8oim.vercel.app'
  },
  {
    title: 'BrawlStats',
    icon: faGamepad,
    description: 'Competitive gaming tracker for Brawlhalla showing global rankings, player statistics, and profile comparisons',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Steam Auth /API'],
    points: [
      'Built leaderboard system displaying top 50-100 players globally and per region with real-time rankings',
      'Implemented Steam OAuth login and Brawlhalla account linking for personalized profile tracking',
      'Created player comparison tool and favorites/watchlist feature to track ELO changes and stats'
    ],
    github: 'https://github.com/PEEKING-web/brawlhalla-stats-backend',
    live: 'https://brawlhalla-stats-frontend.vercel.app'
  },
  {
    title: 'Steam Tracker',
    icon: faSteam,
    description: 'Full-stack Steam game library manager with AI-powered game recommendations and session tracking',
    tech: ['React', 'Node.js', 'Express', 'Groq AI', 'Steam Auth/API'],
    points: [
      "Built AI recommendation system using Groq's Llama 3.3 70B analyzing mood, time, and gaming preferences",
      'Integrated Steam Web API for real-time game data, achievements, and friends list management',
      'Developed custom game categorization system and session tracking with mood logging'
    ],
    github: 'https://github.com/PEEKING-web/steam-tracker',
    live: 'https://steam-tracker-peach.vercel.app'
  }
];


  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h1 className={`text-5xl font-light ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              Dipanshu Dubey
            </h1>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          <p className={`text-xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Georgia, serif' }}>
            Full-Stack Developer
          </p>
          
          <p className={`flex items-center gap-2 mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <MapPin className="w-4 h-4" />
            Mumbai
          </p>
          
          {/* Social Links with Hover Animation */}
          <div className="flex gap-6">
            <a
              href="https://github.com/PEEKING-web"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 transition-all duration-300 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <div className="relative">
                <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="absolute -inset-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></span>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dipanshu-dubey-5b204b167"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 transition-all duration-300 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <div className="relative">
                <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="absolute -inset-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></span>
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
            <div
              className={`group flex items-center gap-2 transition-all duration-300 cursor-default ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              <div className="relative">
                <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <span className="absolute -inset-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></span>
              </div>
              <span className="font-medium">dipanshudubey61@gmail.com</span>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className={`text-3xl font-light mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Georgia, serif' }}>
            About
          </h2>
          <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', fontSize: '17px' }}>
           Full-stack developer with experience building web applications 
            using modern technologies. Passionate about creating efficient, 
            scalable solutions and learning new technologies.
          </p>
          <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', fontSize: '17px' }}>
            Currently focused on React, Node.js, and AI integration. Always 
            exploring new tools and best practices. Open to full-time 
            opportunities where I can contribute and grow.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className={`text-3xl font-light mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Georgia, serif' }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="w-5 h-5"
                />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className={`text-3xl font-light mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Georgia, serif' }}>
            Projects
          </h2>
          
          <div className="space-y-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`border-l-2 pl-6 transition-colors duration-300 ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                {/* Project Header with Icon and Animated Links */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                        <span className={`text-3xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          <FontAwesomeIcon icon={project.icon} />
                        </span>

                    <h3 className={`text-2xl font-light ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Georgia, serif' }}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3 ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-2 rounded-lg transition-all duration-300 ${
                          darkMode 
                            ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                            : 'hover:bg-gray-100 text-gray-500 hover:text-black'
                        }`}
                        title="View Code"
                      >
                        <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                        <span className="absolute -inset-2 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-2 rounded-lg transition-all duration-300 ${
                          darkMode 
                            ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                            : 'hover:bg-gray-100 text-gray-500 hover:text-black'
                        }`}
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                        <span className="absolute -inset-2 bg-green-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                      </a>
                    )}
                  </div>
                </div>

                <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Georgia, serif', fontSize: '16px' }}>
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode 
                          ? 'bg-gray-800 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Points */}
                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className={`text-sm flex items-start gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif' }}>
                      <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className={`text-3xl font-light mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Georgia, serif' }}>
            Get in Touch
          </h2>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Georgia, serif', fontSize: '17px' }}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="name" 
                className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-gray-500'
                } focus:outline-none`}
                style={{ fontFamily: 'Georgia, serif' }}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-gray-500'
                } focus:outline-none`}
                style={{ fontFamily: 'Georgia, serif' }}
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-2 rounded-lg border transition-colors duration-300 resize-none ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-gray-500' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-gray-500'
                } focus:outline-none`}
                style={{ fontFamily: 'Georgia, serif' }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={formStatus === 'sending'}
              className={`inline-block px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                darkMode 
                  ? 'bg-white text-gray-900 hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <p className="text-green-500 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-500 text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                Failed to send message. Please try again or email me directly.
              </p>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-8 border-t text-center text-sm ${
          darkMode 
            ? 'border-gray-800 text-gray-500' 
            : 'border-gray-200 text-gray-500'
        }`}>
          <p style={{ fontFamily: 'Georgia, serif' }}>Thanks for stopping by · © 2026.</p>
        </footer>
      </div>
    </div>
  );
}