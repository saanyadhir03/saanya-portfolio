import React from "react";
import { Mail, Linkedin, CheckCircle } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Python"]
  },
  {
    title: "Database",
    skills: ["SQL", "MySQL", "SQLite", "MongoDB"]
  },
  {
    title: "Testing & Automation",
    skills: ["Selenium", "JUnit", "TestNG", "POM", "Cucumber", "Cypress", "Postman", "Testingggggg"]
  },
  {
    title: "Cloud & Security",
    skills: ["AWS S3", "RDS", "CloudTrail", "CloudWatch", "KMS", "IAM", "WAF", "EKS", "ECS"]
  },
  {
    title: "Infrastructure Management & DevOps",
    skills: ["Docker", "Kubernetes", "Helm", "AWS CloudFormation", "GitHub Actions", "Jenkins", "Bitbucket"]
  },
  {
    title: "Project Management",
    skills: ["Confluence", "JIRA", "Slack", "ALM", "qTest"]
  }
];

const projects = [
  {
    title: "UpSkilled LMS",
    description: "A corporate LMS with role-based dashboards, 90%+ test coverage using Jest/JMockit, and 95% automation coverage.",
    stack: ["React", "Java", "Selenium", "AWS"],
    image: "/upskilled-thumb.png"
  },
  {
    title: "Kubernetes Monitoring",
    description: "A production-grade deployment on AWS EKS with CI/CD via GitHub Actions and monitoring via Grafana and Prometheus.",
    stack: ["Kubernetes", "Helm", "Prometheus", "Grafana", "GitHub Actions"],
    image: "/kube-monitor-thumb.png"
  },
  {
    title: "E-Commerce Platform (AWS)",
    description: "Scalable infra using RDS, Load Balancer, CloudFront, and WAF. Load tested with Apache JMeter for 250 users.",
    stack: ["AWS", "CloudFront", "JMeter", "Load Balancer"],
    image: "/ecommerce-thumb.png"
  }
];

const experiences = [
  {
    company: "CATT Lab",
    title: "QA Intern",
    duration: "Dec 2024 – Present",
    points: [
      "Detected 50+ critical bugs in transportation platforms, improving product reliability by 15%.",
      "Reduced manual QA time by 40% via Cypress automation, expediting release cycles.",
      "Executed regression testing and debugged EKS pods via logs and Bitbucket integration."
    ]
  },
  {
    company: "Capgemini",
    title: "Software Engineer",
    duration: "Aug 2021 – Aug 2023",
    points: [
      "Automated 180+ Selenium test cases for RBC's Wealth Portal, cutting bugs by 40%.",
      "Led agile QA processes that improved deployment frequency and cut delivery time by 25%.",
      "Conducted API testing, resolved 95% backend issues, and mentored 4 QA engineers."
    ]
  },
  {
    company: "Tech Mahindra",
    title: "Software Engineering Intern",
    duration: "Mar 2021 – Jul 2021",
    points: [
      "Developed WordPress and JS-based client sites, boosting user engagement by 30%.",
      "Used AJAX and dynamic rendering to reduce data retrieval time by 30%."
    ]
  }
];

export default function Portfolio() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
          <div className="text-xl font-bold text-teal-700 cursor-pointer" onClick={() => scrollToSection('top')}>
            Saanya Dhir
          </div>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
              <li key={section} className="cursor-pointer hover:text-teal-600" onClick={() => scrollToSection(section)}>
                {section === 'home' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 text-gray-800 font-sans">
        <section id="home" className="text-center py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-gray-100">
          <div className="max-w-3xl mx-auto">
            <img src="/profile.jpg" alt="Saanya Dhir" className="mx-auto w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-teal-300" />
            <h1 className="mt-6 text-5xl font-extrabold text-gray-900 tracking-tight">Saanya Dhir</h1>
            <p className="mt-3 text-xl text-gray-600">Software Engineering Master's Student | QA Engineer | Cloud Enthusiast</p>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto py-16 px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold text-teal-700 text-center mb-12">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m a passionate Software QA Engineer with over 3 years of experience in ensuring application quality,
            automating testing workflows, and optimizing CI/CD pipelines. I specialize in tools like Selenium, Cypress,
            and Postman, and have worked extensively with AWS, Docker, and Kubernetes. I'm currently pursuing my M.Eng.
            in Software Engineering at the University of Maryland, and I’m enthusiastic about leveraging cloud-native
            technologies and DevOps practices to deliver robust and scalable solutions.
          </p>
        </section>

        <section id="projects" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-teal-700 text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto py-16 px-6 md:px-12 bg-transparent">
          <h2 className="text-3xl font-semibold text-teal-700 text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="bg-white text-blue-700 px-3 py-1 rounded-full border border-blue-200 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="max-w-6xl mx-auto py-16 px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-teal-700 text-center mb-12">Experience</h2>
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{exp.company} | {exp.duration}</p>
                <ul className="list-none space-y-2 text-gray-700">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-teal-600 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-slate-800 to-gray-900 text-white py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-slate-800 rounded-xl p-8 shadow-lg">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <a href="mailto:saanya03dhir@gmail.com" className="hover:underline text-blue-200">saanya03dhir@gmail.com</a>
                </li>
                <li className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <a href="https://linkedin.com/in/saanya-dhir" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-200">linkedin.com/in/saanya-dhir</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Build Something Amazing</h3>
              <p className="text-blue-100">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              <div className="mt-8 text-center text-2xl">«</div>
            </div>
          </div>
          <p className="text-center text-blue-200 mt-12 text-sm">© 2025 <span className="font-semibold">Saanya Dhir</span>. All rights reserved.</p>
        </section>
      </main>
    </>
  );
}
