import { motion } from "framer-motion";
import { useState } from "react";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // High-fidelity custom SVG illustrations for each service card modal
  const renderServiceSvg = (type) => {
    switch (type) {
      case "backend":
        return (
          <svg viewBox="0 0 360 280" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bkGrad" x1="0" y1="0" x2="360" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#0066ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <filter id="neonBlue" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Radar concentric circular grid */}
            <circle cx="180" cy="140" r="110" stroke="url(#bkGrad)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />
            <circle cx="180" cy="140" r="70" stroke="url(#bkGrad)" strokeWidth="0.5" opacity="0.25" />

            {/* Connection Lines from API Gateway to Services */}
            <path d="M 60 140 L 140 70 M 60 140 L 140 140 M 60 140 L 140 210" stroke="#00b4ff" strokeWidth="1" opacity="0.5" />
            <path d="M 220 70 L 290 140 M 220 140 L 290 140 M 220 210 L 290 140" stroke="#00b4ff" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

            {/* API Gateway Node */}
            <rect x="20" y="125" width="50" height="30" rx="4" fill="#131424" stroke="#00b4ff" strokeWidth="1.2" filter="url(#neonBlue)" />
            <text x="45" y="143" fill="#00b4ff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">API GW</text>

            {/* Service Nodes */}
            {/* Auth Svc */}
            <rect x="140" y="55" width="80" height="30" rx="4" fill="#131424" stroke="#00b4ff" strokeWidth="1" />
            <text x="180" y="73" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.8">Auth-Svc</text>

            {/* Payment Svc */}
            <rect x="140" y="125" width="80" height="30" rx="4" fill="#131424" stroke="#00b4ff" strokeWidth="1.2" filter="url(#neonBlue)" />
            <text x="180" y="143" fill="#00b4ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Payment-Svc</text>

            {/* Core Svc */}
            <rect x="140" y="195" width="80" height="30" rx="4" fill="#131424" stroke="#00b4ff" strokeWidth="1" />
            <text x="180" y="213" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle" opacity="0.8">Core-Svc</text>

            {/* Master DB Cylinder */}
            <ellipse cx="310" cy="125" rx="20" ry="8" fill="#131424" stroke="#00b4ff" strokeWidth="1" />
            <path d="M 290 125 L 290 155 A 20 8 0 0 0 330 155 L 330 125" fill="#131424" stroke="#00b4ff" strokeWidth="1" />
            <ellipse cx="310" cy="155" rx="20" ry="8" fill="#131424" stroke="#00b4ff" strokeWidth="1" filter="url(#neonBlue)" opacity="0.6" />
            <text x="310" y="143" fill="#00b4ff" fontSize="7" fontFamily="monospace" textAnchor="middle">DB</text>
          </svg>
        );
      case "payments":
        return (
          <svg viewBox="0 0 360 280" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="payGrad" x1="0" y1="0" x2="360" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <filter id="neonPay" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Tech network circles */}
            <circle cx="180" cy="140" r="100" stroke="url(#payGrad)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3" />

            {/* ISO8583 Message Box */}
            <rect x="50" y="45" width="260" height="180" rx="8" fill="#131424" fillOpacity="0.9" stroke="#00b4ff" strokeWidth="1.2" filter="url(#neonPay)" />
            <rect x="50" y="45" width="260" height="30" rx="8" fill="#00b4ff" fillOpacity="0.15" stroke="#00b4ff" strokeWidth="0.8" />
            
            {/* Header Text */}
            <text x="180" y="64" fill="#00b4ff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
              ISO8583 NETWORK PACKET
            </text>

            {/* Field Rows */}
            <g fontFamily="Consolas, monospace" fontSize="8" fill="#ffffff" opacity="0.85">
              <text x="65" y="95" fill="#00b4ff" fontWeight="bold">MTI : 0200 (Acquirer Req)</text>
              <text x="65" y="112">F003 (Processing Code)  : 310000</text>
              <text x="65" y="129">F004 (Transaction Amt)  : USD 12,500.00</text>
              <text x="65" y="146" fill="#00b4ff">F011 (System Trace No)  : 902812</text>
              <text x="65" y="163">F039 (Action Code)      : 00 (Approved)</text>
              <text x="65" y="180">F048 (Private Data)     : API_SYNC_OK</text>
              <text x="65" y="197" fill="#00b4ff">F127 (Private Token)    : OGB_SECURE_AUTH</text>
            </g>

            {/* Binary transmission code on sides */}
            <text x="10" y="145" fill="#00b4ff" fontSize="8" fontFamily="monospace" opacity="0.15" transform="rotate(-90 10 145)">01011001</text>
            <text x="340" y="145" fill="#00b4ff" fontSize="8" fontFamily="monospace" opacity="0.15" transform="rotate(90 340 145)">11001101</text>
          </svg>
        );
      case "frontend":
        return (
          <svg viewBox="0 0 360 280" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="feGrad" x1="0" y1="0" x2="360" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0055ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <filter id="neonFe" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glassmorphism Browser Wireframe */}
            <rect x="35" y="35" width="290" height="210" rx="8" fill="#131424" fillOpacity="0.85" stroke="#00b4ff" strokeWidth="1" opacity="0.9" />
            
            {/* Browser Header Bar */}
            <rect x="35" y="35" width="290" height="26" rx="8" fill="#00b4ff" fillOpacity="0.1" stroke="#00b4ff" strokeWidth="0.5" />
            
            {/* Browser control dots */}
            <circle cx="50" cy="48" r="3" fill="#ff5f56" />
            <circle cx="60" cy="48" r="3" fill="#ffbd2e" />
            <circle cx="70" cy="48" r="3" fill="#27c93f" />

            {/* URL Search bar wire */}
            <rect x="90" y="42" width="180" height="12" rx="4" fill="#000000" fillOpacity="0.4" stroke="#00b4ff" strokeWidth="0.4" opacity="0.7" />
            <text x="180" y="51" fill="#00b4ff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">https://bank.abhishek-g.dev/payments</text>

            {/* Page Dashboard Layout Mock */}
            {/* Sidebar mock */}
            <rect x="45" y="70" width="45" height="165" rx="3" fill="#000" fillOpacity="0.2" stroke="#00b4ff" strokeWidth="0.5" opacity="0.6" />
            <line x1="50" y1="85" x2="80" y2="85" stroke="#00b4ff" strokeWidth="1" opacity="0.4" />
            <line x1="50" y1="100" x2="80" y2="100" stroke="#00b4ff" strokeWidth="1" opacity="0.4" />
            <line x1="50" y1="115" x2="80" y2="115" stroke="#00b4ff" strokeWidth="1" opacity="0.4" />

            {/* Main Area: Charts */}
            {/* Card 1: Balance chart */}
            <rect x="100" y="70" width="215" height="75" rx="4" fill="#131424" stroke="#00b4ff" strokeWidth="0.8" />
            <text x="110" y="85" fill="#00b4ff" fontSize="8" fontFamily="monospace" fontWeight="bold">Transaction Volume Analytics</text>
            
            {/* Chart line path */}
            <path d="M 110 130 Q 140 90, 170 120 T 230 90 T 290 100" stroke="#00b4ff" strokeWidth="1.5" fill="none" filter="url(#neonFe)" />
            <circle cx="170" cy="120" r="2.5" fill="#00b4ff" filter="url(#neonFe)" />
            <circle cx="230" cy="90" r="2.5" fill="#00b4ff" filter="url(#neonFe)" />

            {/* Card 2: Bottom Grid */}
            <rect x="100" y="155" width="100" height="80" rx="4" fill="#000" fillOpacity="0.15" stroke="#00b4ff" strokeWidth="0.5" opacity="0.8" />
            <circle cx="150" cy="195" r="20" stroke="#00b4ff" strokeWidth="3" strokeDasharray="90 30" fill="none" filter="url(#neonFe)" />
            <text x="150" y="198" fill="#fff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">75%</text>

            <rect x="210" y="155" width="105" height="80" rx="4" fill="#000" fillOpacity="0.15" stroke="#00b4ff" strokeWidth="0.5" opacity="0.8" />
            <g stroke="#00b4ff" strokeWidth="0.8" opacity="0.6">
              <line x1="220" y1="175" x2="300" y2="175" />
              <line x1="220" y1="190" x2="280" y2="190" />
              <line x1="220" y1="205" x2="295" y2="205" />
              <line x1="220" y1="220" x2="260" y2="220" />
            </g>
          </svg>
        );
      case "devops":
        return (
          <svg viewBox="0 0 360 280" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="doGrad" x1="0" y1="0" x2="360" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0055ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <filter id="neonDo" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Radar Grid */}
            <circle cx="180" cy="140" r="110" stroke="url(#doGrad)" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />

            {/* Pipeline Workflow Path */}
            <path d="M 40 140 C 90 60, 150 60, 180 140 C 210 220, 270 220, 320 140" stroke="url(#doGrad)" strokeWidth="1.5" opacity="0.75" />
            
            {/* Git node */}
            <circle cx="40" cy="140" r="10" fill="#131424" stroke="#00b4ff" strokeWidth="1" filter="url(#neonDo)" />
            <text x="40" y="143" fill="#00b4ff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">GIT</text>

            {/* Docker node */}
            <circle cx="120" cy="98" r="10" fill="#131424" stroke="#00b4ff" strokeWidth="1" />
            <text x="120" y="101" fill="#fff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.7">BUILD</text>

            {/* Kubernetes master node */}
            <circle cx="180" cy="140" r="14" fill="#131424" stroke="#00b4ff" strokeWidth="1.5" filter="url(#neonDo)" />
            <text x="180" y="143" fill="#00b4ff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">K8S</text>

            {/* Pod replication boxes */}
            <rect x="250" y="70" width="30" height="20" rx="3" fill="#131424" stroke="#00b4ff" strokeWidth="0.8" />
            <text x="265" y="82" fill="#fff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" opacity="0.8">POD 1</text>
            <path d="M 194 140 C 210 120, 230 90, 250 80" stroke="#00b4ff" strokeWidth="0.5" opacity="0.5" />

            <rect x="265" y="130" width="30" height="20" rx="3" fill="#131424" stroke="#00b4ff" strokeWidth="1" filter="url(#neonDo)" />
            <text x="280" y="142" fill="#00b4ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">POD 2</text>
            <path d="M 194 140 L 265 140" stroke="#00b4ff" strokeWidth="0.5" opacity="0.5" />

            <rect x="250" y="190" width="30" height="20" rx="3" fill="#131424" stroke="#00b4ff" strokeWidth="0.8" />
            <text x="265" y="202" fill="#fff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" opacity="0.8">POD 3</text>
            <path d="M 194 140 C 210 160, 230 190, 250 200" stroke="#00b4ff" strokeWidth="0.5" opacity="0.5" />

            {/* Deploy target */}
            <circle cx="320" cy="140" r="10" fill="#131424" stroke="#00b4ff" strokeWidth="1" />
            <text x="320" y="143" fill="#fff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.8">LIVE</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full bg-primary/30 py-20 xl:py-0 flex items-center overflow-y-auto xl:overflow-hidden">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] xl:max-w-[480px] mx-auto lg:mx-0 text-white/70 text-xs xl:text-sm leading-relaxed text-left"
            >
              I specialize in building secure, scalable, and high-performance enterprise applications with expertise across backend engineering, payment systems, and modern frontend experiences. From ISO8583 payment integrations and banking workflows to responsive React-based applications and cloud deployments, I build solutions focused on performance, reliability, scalability, and seamless user experience.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider onCardClick={(item) => setSelectedService(item)} />
          </motion.div>
        </div>
      </div>
      <Bulb />

      {/* Services Details Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in pointer-events-auto">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedService(null)} />
          
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
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-accent/20 text-white hover:text-accent flex items-center justify-center font-bold text-lg transition-all duration-300"
            >
              &times;
            </button>

            {/* Left side: Context details and Custom SVG */}
            <div className="w-full md:w-[38%] bg-black/30 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 text-left shrink-0">
              <span className="text-[10px] text-accent uppercase font-mono tracking-widest font-semibold mb-2 block animate-pulse">
                Enterprise Service
              </span>
              <h3 className="text-lg font-bold text-white leading-snug mb-3">
                {selectedService.title}
              </h3>
              
              {/* Custom SVG Architecture Illustration */}
              <div className="relative w-full rounded-lg overflow-hidden border border-white/10 shadow-lg mb-4 bg-black/40 flex items-center justify-center">
                {renderServiceSvg(selectedService.type)}
              </div>

              <div className="space-y-3.5 text-[11px] text-white/55 border-t border-white/5 pt-4">
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Service Focus:</span>
                  Performance, Reliability & Scalability
                </div>
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Domain:</span>
                  Enterprise FinTech & Backend Architectures
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="mt-6 px-4 py-2 bg-accent hover:bg-accent/80 text-white font-medium text-[10px] uppercase tracking-wider rounded-lg transition-all duration-300 self-start"
              >
                Close View
              </button>
            </div>

            {/* Right side: Description & Bullet Accomplishments */}
            <div className="flex-1 p-6 xl:p-8 flex flex-col justify-start md:max-h-[480px] overflow-y-auto text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-2">
                Service Scope & Capabilities
              </h4>
              
              <p className="text-xs text-white/80 leading-relaxed mb-5 font-light">
                {selectedService.modalDescription}
              </p>

              <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3.5">
                Key Highlights & Deliverables
              </h4>
              
              <ul className="space-y-3 pr-2">
                {selectedService.bullets.map((bullet, bulletI) => (
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

export default Services;
