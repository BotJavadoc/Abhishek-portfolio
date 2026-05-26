import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaUniversity,
  FaCogs,
  FaRegCreditCard,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Backend Engineering",
        stage: "Java • Spring Boot • Microservices • REST APIs • Multithreading • Distributed Systems",
        icons: [FaJava, SiSpringboot, FaDatabase],
      },
      {
        title: "Frontend Development",
        stage: "React • JavaScript • HTML5 • CSS3 • Responsive UI",
        icons: [FaReact, FaJs, FaHtml5, FaCss3],
      },
      {
        title: "Cloud & DevOps",
        stage: "Docker • Kubernetes • CI/CD • Git",
        icons: [FaDocker, SiKubernetes, FaGitAlt],
      },
      {
        title: "Banking & Fintech",
        stage: "ISO8583 • Payment Systems • Retail & Corporate Banking",
        icons: [FaUniversity, FaRegCreditCard],
      },
      {
        title: "Database & Tools",
        stage: "MySQL • PostgreSQL • Apigee • JasperReports",
        icons: [SiMysql, SiPostgresql, FaDatabase],
      },
      {
        title: "Engineering Practices",
        stage: "Agile Scrum • SOLID Principles • Production Support • Optimization",
        icons: [FaCogs],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Most Promising Newcomer - I-exceed",
        stage: "2025",
        image: "/i-exceed-certificate.jpg",
        description: "Recognized for quickly adapting to complex banking and fintech systems while delivering high-impact solutions with strong ownership and consistency. Played a key role in integrating ISO8583-based payment modules, ensuring secure, seamless, and reliable transaction processing across banking applications. Contributed to improving payment flow efficiency, handling transaction workflows, resolving production challenges, and delivering scalable solutions with a focus on security, integrity, and system performance.",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software Engineer — I-exceed Technology Solutions",
        stage: "Oct 2024 — Present",
        location: "Bengaluru, India",
        isExperience: true,
        bullets: [
          "Developed and deployed scalable microservices using Java, Spring Boot, and REST APIs for enterprise banking and payment platforms.",
          "Integrated ISO8583-based payment systems for secure and seamless financial transaction processing, improving transaction reliability and payment flow efficiency.",
          "Worked across multiple banking domains including Onboarding Systems, Retail Banking, Corporate Banking, and Payment Processing Modules.",
          "Designed and optimized backend workflows that handled 10K+ daily transactions with improved performance and stability.",
          "Built multithreaded services and optimized API execution, reducing response times by 30% and supporting 500+ concurrent users.",
          "Delivered multiple enterprise modules and critical features within deadlines while maintaining high-quality engineering standards and clean architecture practices.",
          "Resolved numerous production issues and live environment challenges, ensuring smooth application performance and uninterrupted business operations.",
          "Automated backend workflows and reporting systems, reducing manual effort by 40% and improving operational efficiency.",
          "Containerized and deployed applications using Docker, Kubernetes, and OpenShift to improve scalability, deployment reliability, and infrastructure efficiency.",
          "Integrated services with Apigee API Gateway to enhance API security, monitoring, and management.",
          "Upgraded applications to JDK 17 and latest Spring Boot versions, improving maintainability, performance, and long-term scalability.",
          "Collaborated in Agile teams, actively contributing to architecture discussions, debugging, optimization, and continuous system improvements.",
          "Recognized with the “Most Promising Newcomer” Award for impactful contributions, ownership, and quick adaptation to complex enterprise banking systems."
        ]
      }
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Odisha Gramya Bank — Retail Banking Payments",
        stage: "Java • Spring Boot • ISO8583",
        image: "/odisha-gramya-bank.png",
        isProject: true,
        bullets: [
          "Developed and integrated ISO8583-based payment processing systems handling 10K+ daily financial transactions with secure and reliable transaction flow.",
          "Built scalable backend services using Java, Spring Boot, and Microservices, improving overall transaction processing efficiency by 30%.",
          "Implemented multithreaded services that reduced redundant API calls and improved response times for high-volume banking operations.",
          "Developed automated account statement and reporting modules using JasperReports, reducing manual operational effort by 40%.",
          "Resolved multiple production issues related to payment processing, transaction failures, and banking workflows to ensure uninterrupted customer operations.",
          "Worked closely with clients and business teams to deliver multiple change requests, feature enhancements, and critical production fixes within deadlines."
        ]
      },
      {
        title: "VALT — Corporate Banking Platform",
        stage: "Java • Spring Boot • REST APIs",
        image: "/valt-bank.jpg",
        isProject: true,
        bullets: [
          "Designed and developed 10+ REST APIs using Java and Spring Boot for enterprise corporate banking workflows and integrations.",
          "Built scalable backend modules supporting onboarding systems, transaction workflows, and enterprise banking operations.",
          "Improved backend workflow efficiency and API performance by optimizing service architecture and request handling mechanisms.",
          "Delivered multiple client-driven change requests and banking feature enhancements with strong focus on scalability and maintainability.",
          "Collaborated with cross-functional teams in Agile environments to ensure timely feature delivery and smooth production releases."
        ]
      },
      {
        title: "Deutsche Bank — Enterprise Banking Services",
        stage: "Java • Apigee • Kubernetes",
        image: "/deutsche-bank.png",
        isProject: true,
        bullets: [
          "Integrated enterprise microservices with Apigee API Gateway, improving API security, monitoring, traffic management, and service reliability.",
          "Managed and delivered numerous client change requests, production enhancements, and API modifications for enterprise banking applications.",
          "Upgraded legacy applications to JDK 17 and latest Spring Boot versions, improving application maintainability and backend performance by 20%.",
          "Containerized and deployed applications using Docker, Kubernetes, and OpenShift, improving deployment efficiency and scalability across environments.",
          "Built and optimized multithreaded API integrations, reducing response times and improving concurrent request handling capabilities.",
          "Handled critical production issues, performance bottlenecks, deployment failures, and backend optimizations in high-priority banking systems."
        ]
      },
      {
        title: "Société Générale — Banking Automation Platform",
        stage: "Java • Microservices • Scheduler",
        image: "/societe-generale.png",
        isProject: true,
        bullets: [
          "Developed scheduler-based microservices for automated account statement generation and backend banking workflows.",
          "Automated reporting and operational processes, reducing manual effort by 40% and improving workflow efficiency.",
          "Built scalable backend integrations and optimized service execution for better system performance and reliability.",
          "Supported production environments by resolving backend issues, optimizing workflows, and improving operational stability.",
          "Delivered multiple enhancements and client-requested changes while maintaining high-quality engineering standards and on-time delivery."
        ]
      }
    ]
  },
  {
    title: "education",
    info: [
      {
        title: "Bachelor of Engineering (B.E.) — Computer Science & Engineering",
        stage: "2020 — 2024",
        subtitle: "AMC College of Engineering | Bengaluru, Karnataka",
        cgpa: "CGPA: 8.52",
        isEducation: true,
      }
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [selectedAward, setSelectedAward] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="h-full bg-primary/30 pt-24 xl:pt-44 pb-20 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-[26px] xl:text-[38px] xl:leading-[1.2] mb-4"
          >
            Building powerful <span className="text-accent">backend systems</span> with modern full stack experiences.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-8 px-2 xl:px-0 text-white/70 text-xs xl:text-sm leading-relaxed text-left space-y-3"
          >
            <span className="block">
              I build scalable and high-performance applications focused on reliability, efficiency, and clean architecture. With experience in onboarding systems, retail banking, corporate banking, and payment platforms, I’ve delivered multiple enterprise modules and resolved critical production issues in fast-paced environments.
            </span>
            <span className="block">
              Skilled in Java, Spring Boot, Microservices, React, Docker, and Kubernetes, I focus on optimizing system performance, improving workflows, and building maintainable solutions that scale efficiently.
            </span>
          </motion.p>

          {/* resume buttons */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            className="flex justify-center xl:justify-start gap-x-4 mb-8"
          >
            <a
              href="/resume/Abhishek_Resume.pdf"
              download="Abhishek_G_Resume.pdf"
              className="px-5 py-3 border border-accent bg-accent/10 hover:bg-accent text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-accent/30 active:scale-95 cursor-pointer z-10"
            >
              <FaDownload className="text-sm" />
              <span>Download Resume</span>
            </a>
            <a
              href="/resume/Abhishek_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-white/30 hover:border-white hover:bg-white/5 text-white/80 hover:text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer z-10"
            >
              <FaEye className="text-sm" />
              <span>View Resume</span>
            </a>
          </motion.div>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1.5} decimals={1} duration={4} suffix="+" />
                </div>
                <div className="text-[10px] uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                  Years Experience
                </div>
              </div>

              {/* transactions */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={4} suffix="K+" />
                </div>
                <div className="text-[10px] uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                  Daily Transactions
                </div>
              </div>

              {/* response time */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={4} suffix="%" />
                </div>
                <div className="text-[10px] uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                  Faster Response Time
                </div>
              </div>

              {/* microservices */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={4} suffix="+" />
                </div>
                <div className="text-[10px] uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                  Microservices Built
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-auto lg:h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-4 flex flex-col gap-y-3 w-full items-center xl:items-start max-w-[650px] mx-auto xl:mx-0">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row w-full gap-y-1.5 md:gap-y-0 md:gap-x-6 items-start md:items-center text-white/60 pb-3 border-b border-white/5 last:border-0"
              >
                {/* Skills Tab Layout */}
                {index === 0 ? (
                  <>
                    {/* Category Title */}
                    <div className="font-semibold text-white md:w-[170px] shrink-0 text-left">
                      {item.title}
                    </div>
                    {/* Skills Details */}
                    <div className="flex-1 text-left text-white/70 text-xs xl:text-[13px] leading-relaxed">
                      {item.stage}
                    </div>
                    {/* Icons */}
                    {item.icons && (
                      <div className="flex gap-x-2.5 mt-2 md:mt-0 shrink-0">
                        {item.icons.map((Icon, iconI) => (
                          <div key={iconI} className="text-xl text-accent hover:scale-110 transition-all duration-300">
                            <Icon />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    onClick={() => {
                      if (item.isProject) {
                        setSelectedProject(item);
                      } else if (item.image) {
                        setSelectedAward(item);
                      } else if (item.isExperience) {
                        setSelectedExperience(item);
                      }
                    }}
                    className={`flex-1 flex flex-col md:flex-row w-full justify-between items-start md:items-center ${
                      (item.isProject || item.image || item.isExperience)
                        ? "cursor-pointer group hover:text-accent transition-all duration-300"
                        : ""
                    }`}
                  >
                    {/* Experience / Education / Awards Title */}
                    <div className="flex-1 flex flex-col text-left">
                      <div className="font-medium text-white text-sm xl:text-[15px] leading-snug group-hover:text-accent transition-colors flex items-center gap-2">
                        {item.title}
                        {item.image && !item.isProject && (
                          <span className="text-[9px] bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider scale-90 select-none animate-pulse">
                            View Cert
                          </span>
                        )}
                        {item.isProject && (
                          <span className="text-[9px] bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider scale-90 select-none animate-pulse">
                            View Project
                          </span>
                        )}
                        {item.isExperience && (
                          <span className="text-[9px] bg-accent/20 text-accent font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider scale-90 select-none animate-pulse">
                            View Details
                          </span>
                        )}
                      </div>
                      {item.subtitle && (
                        <div className="text-xs text-white/50 font-light mt-1.5 flex flex-col sm:flex-row sm:justify-between sm:items-center pr-6">
                          <span>{item.subtitle}</span>
                          {item.cgpa && <span className="text-accent font-mono text-[11px] mt-0.5 sm:mt-0">{item.cgpa}</span>}
                        </div>
                      )}
                    </div>
                    {/* Stage / Date (Right-aligned on desktop) */}
                    <div className="md:w-[130px] shrink-0 text-left md:text-right text-xs text-white/40 font-mono tracking-wider group-hover:text-white/60 transition-colors">
                      {item.stage}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal Overlay */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedAward(null)} />
          
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[820px] bg-[#1a1c35]/95 border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row pointer-events-auto max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden"
          >
            {/* Close Cross button */}
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-accent/20 text-white hover:text-accent flex items-center justify-center font-bold text-lg transition-all duration-300"
            >
              &times;
            </button>

            {/* Left side: Certificate Image */}
            <div className="w-full md:w-[48%] bg-black/30 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
              <div className="relative w-full rounded-lg overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="w-full h-auto object-contain max-h-[380px] md:max-h-[460px] mx-auto"
                />
              </div>
            </div>

            {/* Right side: Detailed Description */}
            <div className="flex-1 p-6 xl:p-8 flex flex-col justify-center text-left">
              <span className="text-[10px] text-accent uppercase font-mono tracking-widest font-semibold mb-2 block">
                Certificate Awarded
              </span>
              <h3 className="text-lg xl:text-xl font-bold text-white leading-tight mb-2 pr-6">
                {selectedAward.title}
              </h3>
              <div className="text-[11px] text-white/40 font-mono tracking-wider mb-5">
                Q4 {selectedAward.stage} • i-exceed Technology
              </div>
              <p className="text-white/70 text-xs leading-[1.8] font-light border-l-2 border-accent/40 pl-4 bg-white/2 py-3 rounded-r-lg">
                {selectedAward.description}
              </p>
              
              <button
                onClick={() => setSelectedAward(null)}
                className="mt-6 px-4 py-2 bg-accent hover:bg-accent/80 text-white font-medium text-[10px] uppercase tracking-wider rounded-lg transition-all duration-300 self-start"
              >
                Close View
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Experience Details Modal Overlay */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedExperience(null)} />
          
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[850px] bg-[#1a1c35]/95 border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row pointer-events-auto max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden"
          >
            {/* Close Cross button */}
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-accent/20 text-white hover:text-accent flex items-center justify-center font-bold text-lg transition-all duration-300"
            >
              &times;
            </button>

            {/* Left side: Context details */}
            <div className="w-full md:w-[38%] bg-black/30 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 text-left shrink-0">
              <span className="text-[10px] text-accent uppercase font-mono tracking-widest font-semibold mb-2 block animate-pulse">
                Professional Role
              </span>
              <h3 className="text-xl font-bold text-white leading-snug mb-1">
                Software Engineer
              </h3>
              <div className="text-accent font-medium text-sm mb-4">
                I-exceed Technology Solutions
              </div>
              
              <div className="space-y-4 text-[11px] text-white/55 border-t border-white/5 pt-4">
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Timeline:</span>
                  Oct 2024 — Present
                </div>
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Location:</span>
                  Bengaluru, India
                </div>
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Tech Stack:</span>
                  Java, Spring Boot, Microservices, REST APIs, Docker, Kubernetes, OpenShift, Apigee
                </div>
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Banking Domains:</span>
                  Onboarding, Retail, Corporate, Payments (ISO8583)
                </div>
              </div>

              <button
                onClick={() => setSelectedExperience(null)}
                className="mt-6 px-4 py-2 bg-accent hover:bg-accent/80 text-white font-medium text-[10px] uppercase tracking-wider rounded-lg transition-all duration-300 self-start"
              >
                Close View
              </button>
            </div>

            {/* Right side: Bullet accomplishments */}
            <div className="flex-1 p-6 xl:p-8 flex flex-col justify-start md:max-h-[480px] overflow-y-auto text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Key Accomplishments & Impact
              </h4>
              
              <ul className="space-y-3.5 pr-2">
                {selectedExperience.bullets.map((bullet, bulletI) => (
                  <li key={bulletI} className="flex gap-x-3 text-xs text-white/70 leading-relaxed items-start">
                    <span className="text-accent font-bold mt-0.5 shrink-0">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}

      {/* Project Details Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)} />
          
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[850px] bg-[#1a1c35]/95 border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row pointer-events-auto max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden"
          >
            {/* Close Cross button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-accent/20 text-white hover:text-accent flex items-center justify-center font-bold text-lg transition-all duration-300"
            >
              &times;
            </button>

            {/* Left side: Context details */}
            <div className="w-full md:w-[38%] bg-black/30 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 text-left shrink-0">
              <span className="text-[10px] text-accent uppercase font-mono tracking-widest font-semibold mb-2 block animate-pulse">
                Enterprise Project
              </span>
              <h3 className="text-lg font-bold text-white leading-snug mb-3">
                {selectedProject.title.split(" — ")[0]}
              </h3>
              
              {/* Project Image */}
              <div className="relative w-full rounded-lg overflow-hidden border border-white/10 shadow-lg mb-4 bg-black/40">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[120px] object-cover mx-auto"
                />
              </div>

              <div className="space-y-3.5 text-[11px] text-white/55 border-t border-white/5 pt-4">
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Technology Stack:</span>
                  {selectedProject.stage}
                </div>
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Domain:</span>
                  {selectedProject.title.split(" — ")[1] || "Banking & Fintech"}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 px-4 py-2 bg-accent hover:bg-accent/80 text-white font-medium text-[10px] uppercase tracking-wider rounded-lg transition-all duration-300 self-start"
              >
                Close View
              </button>
            </div>

            {/* Right side: Bullet accomplishments */}
            <div className="flex-1 p-6 xl:p-8 flex flex-col justify-start md:max-h-[480px] overflow-y-auto text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Project Contributions & Impact
              </h4>
              
              <ul className="space-y-3.5 pr-2">
                {selectedProject.bullets.map((bullet, bulletI) => (
                  <li key={bulletI} className="flex gap-x-3 text-xs text-white/70 leading-relaxed items-start">
                    <span className="text-accent font-bold mt-0.5 shrink-0">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default About;
