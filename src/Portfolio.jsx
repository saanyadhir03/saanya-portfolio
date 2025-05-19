import React, { useEffect, useState, useRef } from "react";
import { Mail, Linkedin, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import image from './Content/Photo.jpg'

// Animation variants
const sectionFade = {
	hidden: { opacity: 0, y: 60 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.15, duration: 0.8, type: "spring" },
	}),
};

const cardHover = {
	hover: { scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0, 180, 216, 0.15)" },
};

const staggerContainer = {
	visible: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const skillCategories = [
	{
		title: "Programming Languages",
		skills: ["Java", "Python", "C++"],
	},
	{
		title: "Testing & Automation",
		skills: [
			"Selenium",
			"Cypress",
			"TestNG",
			"JUnit",
			"Cucumber",
			"PageObjectModel (POM)",
			"Postman",
		],
	},
	{
		title: "Cloud Platform- AWS",
		skills: [
			"S3",
			"RDS",
			"CloudTrail",
			"CloudWatch",
			"KMS",
			"IAM",
			"WAF",
			"EKS",
			"ECS",
		],
	},
	{
		title: "Infrastructure Management & DevOps",
		skills: [
			"Docker",
			"Kubernetes",
			"Helm",
			"AWS CloudFormation",
			"GitHub Actions",
			"Jenkins",
			"Bitbucket",
		],
	},
	{
		title: "Database",
		skills: ["SQL", "MySQL", "MongoDB"],
	},
	{
		title: "Project Management",
		skills: ["Confluence", "JIRA", "Slack", "ALM", "qTest"],
	},
];

const projects = [
	{
		title: "UpSkilled LMS",
		description:
			"A corporate LMS with role-based dashboards, 90%+ test coverage using Jest/JMockit, and 95% automation coverage.",
		stack: ["React", "Java", "Selenium", "AWS"],
		image: "/upskilled-thumb.png",
	},
	{
		title: "Kubernetes Monitoring",
		description:
			"A production-grade deployment on AWS EKS with CI/CD via GitHub Actions and monitoring via Grafana and Prometheus.",
		stack: ["Kubernetes", "Helm", "Prometheus", "Grafana", "GitHub Actions"],
		image: "/kube-monitor-thumb.png",
	},
	{
		title: "E-Commerce Platform (AWS)",
		description:
			"Scalable infra using RDS, Load Balancer, CloudFront, and WAF. Load tested with Apache JMeter for 250 users.",
		stack: ["AWS", "CloudFront", "JMeter", "Load Balancer"],
		image: "/ecommerce-thumb.png",
	},
];

const experiences = [
	{
		company: "CATT Lab",
		title: "QA Intern",
		duration: "Dec 2024 – Present",
		points: [
			"Detected 50+ critical bugs in transportation platforms, improving product reliability by 15%.",
			"Reduced manual QA time by 40% via Cypress automation, expediting release cycles.",
			"Executed regression testing and debugged EKS pods via logs and Bitbucket integration.",
		],
	},
	{
		company: "Capgemini",
		title: "Software Engineer",
		duration: "Aug 2021 – Aug 2023",
		points: [
			"Automated 180+ Selenium test cases for RBC's Wealth Portal, cutting bugs by 40%.",
			"Led agile QA processes that improved deployment frequency and cut delivery time by 25%.",
			"Conducted API testing, resolved 95% backend issues, and mentored 4 QA engineers.",
		],
	},
	{
		company: "Tech Mahindra",
		title: "Software Engineering Intern",
		duration: "Mar 2021 – Jul 2021",
		points: [
			"Developed WordPress and JS-based client sites, boosting user engagement by 30%.",
			"Used AJAX and dynamic rendering to reduce data retrieval time by 30%.",
		],
	},
];

const NAV_SECTIONS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("home");
    const [showResume, setShowResume] = useState(false);
    //const sectionRefs = useRef({});

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120; // Offset for sticky header
            let current = "home";
            for (const { id } of NAV_SECTIONS) {
                const el = document.getElementById(id);
                if (el) {
                    const { top } = el.getBoundingClientRect();
                    const absTop = window.scrollY + top;
                    if (scrollPosition >= absTop) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

	return (
		<>
			{/* Header */}
			<header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
				<nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
					<div
						className="text-3xl font-extrabold text-teal-700 cursor-pointer tracking-tight"
						onClick={() => scrollToSection("top")}
					>
						Saanya Dhir
					</div>
					<ul className="flex space-x-8 text-gray-700 font-semibold text-lg">
						{NAV_SECTIONS.map(({ id, label }) => (
                            <li
                                key={id}
                                className={`cursor-pointer transition-colors duration-200 ${
                                    activeSection === id
                                        ? "text-blue-700 underline underline-offset-8"
                                        : "hover:text-teal-600"
                                }`}
                                onClick={() => scrollToSection(id)}
                            >
                                {label}
                            </li>
                        ))}
					</ul>
				</nav>
			</header>

			<main
				id="top"
				className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 text-gray-800 font-sans"
			>
				{/* Hero Section */}
				<motion.section
					id="home"
					className="flex flex-col md:flex-row items-center justify-center gap-16 py-32 px-6 bg-gradient-to-br from-white via-slate-50 to-gray-100"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={sectionFade}
				>
					<motion.div
						className="flex-shrink-0"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, type: "spring" }}
					>
						<motion.img 
                            src={image}
                            alt="Saanya Dhir"
                            className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-xl"
                            style={{ boxShadow: "0 0 0 8px #2563eb33, 0 8px 32px 0 #2563eb22" }}
                            whileHover={{ scale: 1.15, boxShadow: "0 0 0 12px #2563eb66, 0 12px 48px 0 #2563eb44" }}
                            whileTap={{ scale: 1.05 }}
                        />
					</motion.div>
					<motion.div
						className="max-w-2xl text-center md:text-left"
						initial={{ x: 80, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.3, duration: 1, type: "spring" }}
					>
						<h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg mb-4 leading-tight md:leading-[1.4]">
                            <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
                                className="inline-block bg-gradient-to-r from-teal-500 to-blue-400 text-transparent bg-clip-text"
                            >
                                Saanya Dhir
                            </motion.span>
                        </h1>
						<motion.p
							className="mt-2 text-2xl text-gray-600 font-medium"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7, duration: 0.7 }}
						>
							Software Engineering Master's Student{" "}
							<span className="hidden md:inline">|</span> QA Engineer{" "}
							<span className="hidden md:inline">|</span> Cloud Enthusiast
						</motion.p>
						<motion.div
							className="mt-8 flex justify-center md:justify-start gap-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.7 }}
						>
							<a
								href="#contact"
								className="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold shadow-lg hover:bg-teal-700 transition-all duration-200"
							>
								Contact Me
							</a>
							<button
                                type="button"
                                onClick={() => setShowResume(true)}
                                className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-semibold shadow hover:bg-blue-200 transition-all duration-200"
                            >
                                View Resume
                            </button>
						</motion.div>
					</motion.div>
				</motion.section>

				{/* Resume Popup */}
				<AnimatePresence>
                    {showResume && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="relative w-[96vw] max-w-3xl h-[90vh] bg-gradient-to-br from-blue-50 via-white to-blue-200 border-4 border-blue-400 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                                initial={{ scale: 0.7, opacity: 0, y: 100 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.7, opacity: 0, y: 100 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <button
                                    className="absolute top-4 right-4 text-blue-700 hover:text-teal-600 bg-white/80 rounded-full p-1 shadow transition z-20"
                                    onClick={() => setShowResume(false)}
                                    aria-label="Close Resume"
                                >
                                    <X size={28} />
                                </button>
                                <div className="flex-1 flex flex-col">
                                    <div className="text-center py-4 bg-gradient-to-r from-blue-100 via-white to-blue-200 font-bold text-xl text-blue-700 shadow-sm z-10">
                                        My Resume
                                    </div>
                                    <iframe
                                        src={require('./Content/QA.pdf')}
                                        title="Saanya Dhir Resume"
                                        className="w-full flex-1 rounded-b-3xl"
                                        style={{
                                            minHeight: "60vh",
                                            border: "none",
                                            background: "transparent",
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

				{/* About Section */}
				<motion.section
					id="about"
					className="max-w-5xl mx-auto py-24 px-6 md:px-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={sectionFade}
				>
					<motion.h2
						className="text-4xl font-bold text-teal-700 mb-8 text-center"
						variants={sectionFade}
					>
						About Me
					</motion.h2>
					<motion.p
						className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center"
						variants={sectionFade}
					>
						I'm a passionate Software QA Engineer with 3+ years of experience in
						ensuring application quality, automating testing workflows, and optimizing
						CI/CD pipelines. I specialize in Selenium, Cypress, and Postman, and have
						worked extensively with AWS, Docker, and Kubernetes. Currently pursuing my
						M.Eng. in Software Engineering at the University of Maryland, I love
						leveraging cloud-native technologies and DevOps practices to deliver robust,
						scalable solutions.
					</motion.p>
				</motion.section>

				{/* Projects Section */}
				<motion.section
					id="projects"
					className="bg-gradient-to-br from-white via-blue-50 to-sky-100 py-24"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={sectionFade}
				>
					<motion.h2
						className="text-4xl font-bold text-teal-700 text-center mb-16"
						variants={sectionFade}
					>
						Projects
					</motion.h2>
					<motion.div
						className="max-w-6xl mx-auto flex flex-col gap-16"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{projects.map((project, idx) => (
							<motion.div
								key={idx}
								className={`flex flex-col md:flex-row ${
									idx % 2 === 1 ? "md:flex-row-reverse" : ""
								} items-center gap-10 bg-white/90 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300`}
								variants={sectionFade}
								whileHover="hover"
								custom={idx}
							>
								<motion.img
									src={project.image}
									alt={project.title}
									className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-lg"
									variants={cardHover}
								/>
								<div className="flex-1 p-8 flex flex-col justify-center">
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{project.title}
									</h3>
									<p className="text-base text-gray-600 mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mt-auto">
										{project.stack.map((tech, i) => (
											<span
												key={i}
												className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full font-semibold shadow-sm"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Skills Section */}
				<motion.section
					id="skills"
					className="max-w-7xl mx-auto py-24 px-6 md:px-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={sectionFade}
				>
					<motion.h2
						className="text-4xl font-bold text-teal-700 text-center mb-16"
						variants={sectionFade}
					>
						Skills
					</motion.h2>
					<motion.div
						className="grid md:grid-cols-3 gap-10"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{skillCategories.map((category, idx) => (
							<motion.div
								key={idx}
								className="bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-2xl p-8 shadow-lg border border-blue-100 flex flex-col items-center"
								variants={sectionFade}
								whileHover={{
									scale: 1.03,
									boxShadow: "0 8px 32px 0 rgba(0, 180, 216, 0.12)",
								}}
							>
								<h3 className="text-xl font-bold text-gray-800 mb-4">
									{category.title}
								</h3>
								<div className="flex flex-wrap gap-3 justify-center">
									{category.skills.map((skill, i) => (
										<motion.span
											key={i}
											className="bg-white text-blue-700 px-4 py-1 rounded-full border border-blue-200 text-sm font-medium shadow-sm hover:bg-blue-50 transition"
											whileHover={{
												scale: 1.1,
												backgroundColor: "#e0f2fe",
											}}
										>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Experience Section */}
				<motion.section
					id="experience"
					className="bg-gradient-to-br from-blue-50 via-white to-sky-100 py-24"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={sectionFade}
				>
					<motion.h2
						className="text-4xl font-bold text-teal-700 text-center mb-16"
						variants={sectionFade}
					>
						Experience
					</motion.h2>
					<motion.div
						className="max-w-5xl mx-auto flex flex-col gap-10"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{experiences.map((exp, idx) => (
							<motion.div
								key={idx}
								className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-blue-500 flex flex-col"
								variants={sectionFade}
								whileHover={{
									scale: 1.02,
									boxShadow: "0 8px 32px 0 rgba(0, 180, 216, 0.10)",
								}}
							>
								<h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
								<p className="text-blue-600 font-medium mb-2">
									{exp.company} | {exp.duration}
								</p>
								<ul className="list-none space-y-2 text-gray-700">
									{exp.points.map((point, i) => (
										<li key={i} className="flex items-start gap-2">
											<CheckCircle size={18} className="text-teal-600 mt-1" />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Contact Section */}
				<motion.section
					id="contact"
					className="bg-gradient-to-br from-slate-800 to-gray-900 text-white py-24 px-6"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={sectionFade}
				>
					<motion.h2
						className="text-4xl font-bold text-center mb-12"
						variants={sectionFade}
					>
						Get In Touch
					</motion.h2>
					<motion.div
						className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-slate-800/80 rounded-2xl p-10 shadow-2xl"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div variants={sectionFade}>
							<h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
							<ul className="space-y-4">
								<li className="flex items-center space-x-4">
									<Mail className="w-6 h-6 text-blue-400" />
									<a
										href="mailto:saanya03dhir@gmail.com"
										className="hover:underline text-blue-200 transition"
									>
										saanya03dhir@gmail.com
									</a>
								</li>
								<li className="flex items-center space-x-4">
									<Linkedin className="w-6 h-6 text-blue-400" />
									<a
										href="https://linkedin.com/in/saanya-dhir"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline text-blue-200 transition"
									>
										linkedin.com/in/saanya-dhir
									</a>
								</li>
							</ul>
						</motion.div>
						<motion.div variants={sectionFade}>
							<h3 className="text-2xl font-semibold mb-4">
								Let's Build Something Amazing
							</h3>
							<p className="text-blue-100">
								I'm always open to discussing new projects, creative ideas or
								opportunities to be part of your vision.
							</p>
							<motion.div
								className="mt-8 text-center text-3xl"
								animate={{ y: [0, -10, 0] }}
								transition={{ repeat: Infinity, duration: 1.2 }}
							>
								<span role="img" aria-label="arrow">
									↓
								</span>
							</motion.div>
						</motion.div>
					</motion.div>
					<p className="text-center text-blue-200 mt-12 text-sm">
						© 2025{" "}
						<span className="font-semibold">Saanya Dhir</span>. All rights reserved.
					</p>
				</motion.section>
			</main>
		</>
	);
}
