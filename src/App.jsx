import React, { useState } from 'react';
import './index.css';
import { Mail, Linkedin, Github, Briefcase, Code, Cpu, ChevronsRight, Building, GraduationCap, Award, Menu, X } from 'lucide-react';

// Custom SVG Icon for Stack Overflow as it's not in lucide-react
const StackOverflowIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
        <path fill="#F48024" d="M113.2,89.6l-9.8,2.1l-2.1,9.8l20.8,4.4l4.4-20.8l-9.8-2.1L113.2,89.6z M89.6,113.2l-2.1-9.8 l-9.8-2.1l-6.5,30.8l30.8-6.5L89.6,113.2z M65.9,26.5l30.8,6.5l2.1-9.8l-30.8-6.5L65.9,26.5z M42.3,50.2l30.8,6.5l4.4-20.8 l-30.8-6.5L42.3,50.2z M25.2,78.3l28.7,12.9l6.5-30.8l-28.7-12.9L25.2,78.3z"/>
        <path fill="#BCBBBB" d="M10.4,104h83.2v-20.8H10.4V104z"/>
    </svg>
);


// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    languagesFrameworks: ["JavaScript", "TypeScript", "Java", "JSON", "React", "Angular", "Spring Boot", "Express", "Node.js", "Python"],
    toolsTechnologies: ["GraphQL", "REST APIs", "Linux", "MySQL", "noSQL", "JUnit", "Groovy", "Grails", "Tomcat", "Eclipse", "Spring Tool Suite", "VS Code"],
    architecturePractices: ["Micro-services", "MVC", "Test-Driven Development (TDD)", "Agile", "Scrum", "UML", "Design Patterns"],
    currentFocus: ["Cloud platforms", "AI development workflows", "IoT firmware", "Workflow automation", "Full-stack modernization"]
  };

  const experiences = [
    {
      role: "Senior Full Stack Engineer (Front-End Focused)",
      company: "Powin Energy",
      date: "June 2022 - February 2025 | Remote",
      points: [
        "Designed and implemented a React-based front-end interface to display real-time data and controls from diverse energy system sources, integrated with a Java Spring Boot back-end, improving operator efficiency by 20%.",
        "Developed testing software for HVAC firmware validation at the Mexico factory, reducing validation time by 15% and ensuring 100% compliance with firmware standards.",
        "Spearheaded modernization initiatives, transitioning from REST APIs to GraphQL, resulting in a 30% reduction in data retrieval latency.",
        "Replaced outdated libraries with modern, secure alternatives, enhancing application performance and reducing security vulnerabilities by 25%."
      ]
    },
    {
      role: "Principal Full Stack Engineer",
      company: "ICF",
      date: "October 2019 - January 2022 | Remote",
      points: [
        "Engineered new features for gsa.gov using Angular, TypeScript, and Java, delivering secure and user-friendly solutions for government stakeholders.",
        "Implemented unit testing strategies, increasing code coverage by 35% and reducing production bugs by 20%.",
        "Collaborated with cross-functional teams to ensure seamless integration of front-end and back-end components, meeting strict federal compliance standards."
      ]
    },
    {
      role: "Senior Java Developer",
      company: "Department of Justice",
      date: "May 2018 - August 2019 | Portland, OR",
      points: [
        "Developed and maintained secure worker/customer portals for the Oregon Department of Justice Child Support Division, improving user satisfaction by 15% through enhanced usability and reliability.",
        "Optimized enterprise software solutions, reducing page load times by 10% through efficient Java-based back-end enhancements."
      ]
    },
    {
        role: "Java Trainer & Courseware Developer",
        company: "nTier Training",
        date: "February 2015 - May 2018 | Remote",
        points: [
            "Trained Fortune 50 developers in Core Java, Advanced Java, Spring, JavaScript, and Agile methodologies, up-skilling over 200 professionals across 10+ cohorts.",
            "Designed courseware covering UML, TDD, Scrum, MVC, micro-services, and design patterns, achieving a 95% satisfaction rate from trainees.",
            "Contributed to open-source projects and developed training modules for technologies including MySQL, noSQL, JSP, Servlets, and Linux."
        ]
    }
  ];

  const education = {
    degree: "B.S., City and Regional Planning",
    university: "Cal Poly, San Luis Obispo, CA"
  };

  const certifications = [
      "Cloud Platforms (AWS, Azure, Vercel, Cloudflare)",
      "AI Development Workflows",
      "IoT Firmware & Sensor Integration",
      "Full-Stack Architecture Modernization",
      "Linux Operations & Workflow Automation"
  ];

  const contributions = [
    {
      platform: "GitHub",
      username: "jessewriter",
      url: "https://github.com/jessewriter",
      description: "Contributes to open-source projects and maintains personal repositories with proof-of-concept sketches.",
      icon: <Github className="w-6 h-6 text-gray-300" />
    },
    {
      platform: "Stack Overflow",
      username: "jesseboyd",
      url: "https://stackoverflow.com/users/5369132/jesseboyd",
      description: "Active contributor with solutions for Java, JavaScript, and React challenges.",
      icon: <StackOverflowIcon className="w-6 h-6" />
    }
  ];

  const navLinks = [
    { href: "#summary", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contributions", label: "Contributions" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="bg-gray-950 min-h-screen font-sans text-gray-500">
      <header className="bg-gray-900 shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-300">
            Jesse Boyd
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{link.label}</a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900 py-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-center py-2 px-4 text-gray-300 hover:bg-gray-800">{link.label}</a>
            ))}
          </nav>
        )}
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="hero" className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-300 leading-tight">
            Jesse Boyd
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-teal-500 font-semibold">
            Senior Full Stack Engineer | Front-End Architecture & Modernization Specialist
          </p>
          <div className="mt-8 flex justify-center items-center space-x-6">
            <a href="mailto:jesseboydconsulting@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors duration-300" aria-label="Email"><Mail size={28} /></a>
            <a href="https://linkedin.com/in/mriesseboyd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300" aria-label="LinkedIn"><Linkedin size={28} /></a>
            <a href="https://github.com/jessewriter" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300" aria-label="GitHub"><Github size={28} /></a>
            <a href="https://stackoverflow.com/users/5369132/jesseboyd" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors duration-300" aria-label="Stack Overflow"><StackOverflowIcon className="w-7 h-7" /></a>
          </div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="py-16">
          <div className="max-w-4xl mx-auto bg-gray-900 p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-300 mb-6">Professional Summary</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Results-driven Senior Full Stack Engineer with over 10 years of experience specializing in front-end architecture, modernization, and scalable web applications. Proficient in JavaScript, TypeScript, React, Angular, and Java Spring Boot, with a proven track record of delivering intuitive, high-performance solutions that minimize technical debt and align with stakeholder objectives. Adept at leading proof-of-concept (POC) projects, optimizing development workflows, and mentoring teams in modern development practices.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-900 -mx-6 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">Core Competencies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillCard title="Languages & Frameworks" icon={<Code className="w-8 h-8 text-blue-600" />} skills={skills.languagesFrameworks} />
                    <SkillCard title="Tools & Technologies" icon={<Briefcase className="w-8 h-8 text-blue-600" />} skills={skills.toolsTechnologies} />
                    <SkillCard title="Architecture & Practices" icon={<Cpu className="w-8 h-8 text-blue-600" />} skills={skills.architecturePractices} />
                    <SkillCard title="Current Focus" icon={<ChevronsRight className="w-8 h-8 text-blue-600" />} skills={skills.currentFocus} />
                </div>
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
            <h2 className="text-3xl font-bold text-gray-300 mb-12 text-center">Professional Experience</h2>
            <div className="max-w-4xl mx-auto relative border-l-2 border-blue-200 pl-8">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </section>

        {/* Education & Certs Section */}
        <section id="education" className="py-16 bg-gray-900 -mx-6 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-300 mb-12">Education & Training</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-left">
                        <div className="flex items-center mb-4">
                            <GraduationCap className="w-10 h-10 text-blue-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
                        </div>
                        <p className="text-lg font-medium text-gray-300">{education.degree}</p>
                        <p className="text-md text-gray-300">{education.university}</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-left">
                        <div className="flex items-center mb-4">
                            <Award className="w-10 h-10 text-blue-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-gray-800">Additional Training</h3>
                        </div>
                        <ul className="space-y-2">
                           {certifications.map(cert => (
                               <li key={cert} className="flex items-start">
                                   <ChevronsRight className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                   <span className="text-gray-300">{cert}</span>
                               </li>
                           ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        {/* Contributions Section */}
        <section id="contributions" className="py-16">
            <h2 className="text-3xl font-bold text-gray-300 mb-12 text-center">Professional Contributions</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {contributions.map((contrib) => (
                    <ContributionCard key={contrib.platform} {...contrib} />
                ))}
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-600 text-gray-400 -mx-6 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">I'm actively seeking new contract opportunities and collaborations. If you have a project in mind or want to discuss how I can help your team, please get in touch.</p>
                <a href="mailto:jesseboydconsulting@gmail.com" className="bg-gray-800 text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-all duration-300 text-lg shadow-lg">
                    Contact Me
                </a>
            </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-500 py-6">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Jesse Boyd. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Sub-components for better organization

const SkillCard = ({ title, icon, skills }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-semibold text-gray-100 ml-3">{title}</h3>
        </div>
        <ul className="space-y-2">
            {skills.map(skill => (
                <li key={skill} className="text-gray-200">{skill}</li>
            ))}
        </ul>
    </div>
);

const ExperienceItem = ({ role, company, date, points }) => (
    <div className="mb-12">
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[2.5rem] mt-1.5 border-4 border-gray-500"></div>
        <h3 className="text-2xl font-semibold text-gray-300">{role}</h3>
        <p className="text-lg font-medium text-blue-600 mb-1">{company}</p>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <ul className="space-y-2">
            {points.map((point, i) => (
                <li key={i} className="flex items-start">
                    <ChevronsRight className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ContributionCard = ({ platform, username, url, description, icon }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center mb-3">
            {icon}
            <h3 className="text-2xl font-semibold text-gray-400 ml-3">{platform}</h3>
        </div>
        <p className="text-teal-300 mb-2">@{username}</p>
        <p className="text-gray-300">{description}</p>
    </a>
);


export default App;