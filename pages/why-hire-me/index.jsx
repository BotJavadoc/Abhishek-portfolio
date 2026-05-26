import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  HiServer,
  HiShieldCheck,
  HiBanknotes,
  HiCpuChip,
} from "react-icons/hi2";

import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";

const WhyHireMe = () => {
  const highlights = [
    {
      title: "Scalable Engineering",
      description: "Building high-performance systems designed for scalability, reliability, and long-term maintainability.",
      Icon: HiServer,
    },
    {
      title: "Production Problem Solver",
      description: "Experienced in resolving critical production issues, optimizing workflows, and improving system stability in live enterprise environments.",
      Icon: HiShieldCheck,
    },
    {
      title: "Banking & Fintech Expertise",
      description: "Hands-on experience with ISO8583 payment integrations, onboarding systems, retail banking, and corporate banking platforms.",
      Icon: HiBanknotes,
    },
    {
      title: "Full Stack Development",
      description: "Developing seamless backend services and responsive React.js applications with clean architecture and modern UI experiences.",
      Icon: HiCpuChip,
    },
  ];

  const stats = [
    {
      value: 10,
      suffix: "K+",
      label: "Daily Transactions Processed",
    },
    {
      value: 30,
      suffix: "%",
      label: "Faster API Response Time",
    },
    {
      value: 40,
      suffix: "%",
      label: "Workflow Automation Improved",
    },
    {
      value: 5,
      suffix: "+",
      label: "Enterprise Microservices Built",
    },
    {
      value: 500,
      suffix: "+",
      label: "Concurrent Users Supported",
    },
    {
      value: 15,
      suffix: "+",
      label: "Production Issues Resolved",
    },
  ];

  return (
    <div className="h-full bg-primary/30 pt-24 pb-12 xl:py-0 flex items-center overflow-y-auto xl:overflow-hidden">
      <Circles />
      <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-8 justify-center items-center py-2 xl:py-0">
        
        {/* Left Side (Narrative & Stats Grid) */}
        <div className="flex-1 flex flex-col justify-center text-center xl:text-left z-10">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-[26px] xl:text-[40px] xl:leading-[1.2] mb-4 mt-2 xl:mt-0"
          >
            Why Hire <span className="text-accent">Me .</span>
          </motion.h2>
          
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] xl:max-w-none mx-auto xl:mx-0 mb-8 text-white/70 text-xs xl:text-sm leading-relaxed text-left space-y-4 font-light"
          >
            <p>
              I bring a strong combination of backend engineering, fintech expertise, and real-world production experience. From building scalable microservices and ISO8583 payment systems to resolving critical production issues and delivering enterprise banking modules, I focus on creating reliable, high-performance solutions that make an impact.
            </p>
            <p>
              With hands-on experience in Java, Spring Boot, React, Kubernetes, and cloud-native deployments, I consistently deliver scalable applications with clean architecture, optimized performance, and seamless user experiences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 xl:gap-4 max-w-[500px] xl:max-w-none mx-auto xl:mx-0 mb-8 xl:mb-0"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center items-center xl:items-start backdrop-blur-sm hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="text-xl xl:text-2xl font-extrabold text-accent group-hover:scale-105 transition-transform duration-300">
                  <CountUp start={0} end={stat.value} duration={3} suffix={stat.suffix} />
                </div>
                <div className="text-[9px] xl:text-[10px] text-white/50 uppercase tracking-[0.5px] leading-tight text-center xl:text-left mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side (Highlight Cards Grid) */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 w-full xl:max-w-[48%] z-10 flex items-center mb-8 xl:mb-0"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {highlights.map((card, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 hover:border-accent/40 rounded-2xl p-5 xl:p-6 flex flex-col text-left backdrop-blur-sm transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,180,255,0.08)]"
              >
                <div className="text-2xl xl:text-3xl text-accent mb-3 xl:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.Icon aria-hidden />
                </div>
                <h3 className="text-white text-sm xl:text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      <Bulb />
    </div>
  );
};

export default WhyHireMe;
