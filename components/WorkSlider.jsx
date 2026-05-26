import { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const projectData = [
  {
    title: "ISO8583 Payment Processing System",
    description: "High-throughput financial message switch engineered for secure, low-latency transaction routing and database execution.",
    tech: ["Java", "Spring Boot", "ISO8583", "Multithreading"],
    metric: "10K+ daily transactions",
    type: "iso8583",
    bullets: [
      "Integrated secure ISO8583-based messaging channels handling 10K+ daily payment transactions.",
      "Optimized database connection pools and query runtimes to handle high transaction concurrency.",
      "Developed multithreaded transaction consumers to prevent processing queues and bottlenecks.",
      "Improved overall transaction reliability and payment flow execution by 30%.",
      "Created automated accounting reconciliation report builders reducing manual auditing effort."
    ]
  },
  {
    title: "Corporate Banking Platform",
    description: "Robust B2B digital banking solution featuring onboarding, structured REST APIs, and granular access control protocols.",
    tech: ["Java", "Spring Boot", "REST APIs", "Apigee", "MySQL"],
    metric: "Enterprise REST APIs",
    type: "corporate",
    bullets: [
      "Designed and developed 10+ REST APIs for onboarding corporate accounts and financial transactions.",
      "Integrated services with Apigee API Gateway to manage service request logging, traffic throttling, and OAuth2 authentication.",
      "Resolved complex client change requests and customized workflow triggers within tight schedules.",
      "Upgraded core services to JDK 17 and latest Spring Boot frameworks, improving request performance by 20%.",
      "Ensured high availability and data integrity using custom MySQL database constraints and index tuning."
    ]
  },
  {
    title: "React Payment Integration App",
    description: "Responsive glassmorphism dashboard providing checkout flows, API connection monitors, and dynamic metric visualizations.",
    tech: ["React.js", "TailwindCSS", "Framer Motion", "REST APIs"],
    metric: "Sleek Responsive UI",
    type: "react",
    bullets: [
      "Developed highly responsive payment checkout modules and dynamic vendor dashboards using React.js.",
      "Designed glassmorphic visual layouts and smooth framer-motion micro-animations to enhance user experience.",
      "Integrated frontend views with secure REST API backend services for seamless real-time operations.",
      "Configured robust client-side validation logic and secure transaction state handlers.",
      "Optimized React build bundle sizes and component rendering structures to achieve high LCP scores."
    ]
  },
  {
    title: "Cloud Native Deployment Platform",
    description: "Container orchestration pipeline and production monitoring cluster built for high scalability and secure infrastructure management.",
    tech: ["Docker", "Kubernetes", "OpenShift", "CI/CD", "Prometheus"],
    metric: "High Availability",
    type: "cloud",
    bullets: [
      "Containerized microservices using Docker files optimized for low footprint size.",
      "Configured Kubernetes and OpenShift replica configurations to support automatic scaling under spikes.",
      "Built automated CI/CD pipeline triggers to streamline environment validation and container deployments.",
      "Monitored live environment pod instances, database query lockups, and resolved platform bottlenecks.",
      "Applied strict role-based access policies and networking rules to safeguard infrastructure assets."
    ]
  }
];

const WorkSlider = ({ onProjectClick }) => {
  const [activeHighlightIdx, setActiveHighlightIdx] = useState(0);
  const [isShaking, setIsShaking] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    let timeoutId;

    const runCycle = () => {
      // 1. Shaking phase (2 seconds)
      setIsShaking(true);

      timeoutId = setTimeout(() => {
        // 2. Idle phase (4 seconds)
        setIsShaking(false);

        timeoutId = setTimeout(() => {
          // Increment index to the next visible card
          setActiveHighlightIdx((prev) => {
            const visibleIndices = [];
            const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
            const slidesPerView = isMobile ? 1 : 3;
            const activeIdx = swiperInstance ? swiperInstance.realIndex : 0;
            
            for (let idx = 0; idx < projectData.length; idx++) {
              if (idx >= activeIdx && idx < activeIdx + slidesPerView) {
                visibleIndices.push(idx);
              }
            }

            if (visibleIndices.length === 0) return 0;
            
            const currentPos = visibleIndices.indexOf(prev);
            if (currentPos === -1) {
              return visibleIndices[0];
            } else {
              const nextPos = (currentPos + 1) % visibleIndices.length;
              return visibleIndices[nextPos];
            }
          });

          // Run next cycle
          runCycle();
        }, 4000); // 4 seconds idle/wait

      }, 2000); // 2 seconds shaking
    };

    runCycle();

    return () => clearTimeout(timeoutId);
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const slidesPerView = isMobile ? 1 : 3;
    const activeIdx = swiper.realIndex;
    
    const visibleIndices = [];
    for (let idx = 0; idx < projectData.length; idx++) {
      if (idx >= activeIdx && idx < activeIdx + slidesPerView) {
        visibleIndices.push(idx);
      }
    }
    
    if (visibleIndices.length > 0 && !visibleIndices.includes(activeHighlightIdx)) {
      setActiveHighlightIdx(visibleIndices[0]);
      setIsShaking(true);
    }
  };

  return (
    <>
      <style>{`
        @keyframes project-diagonal-shake {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2px, -2px); }
          75% { transform: translate(2px, 2px); }
        }
        .animate-project-shake {
          animation: project-diagonal-shake 0.4s ease-in-out infinite;
        }
      `}</style>
      <Swiper
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        freeMode
        className="h-[380px] sm:h-[490px] z-10 relative"
      >
        {projectData.map((item, i) => {
          const isActive = i === activeHighlightIdx;
          const isCardShaking = isActive && isShaking;
          return (
            <SwiperSlide key={i}>
              <div
                onClick={() => onProjectClick && onProjectClick(item)}
                className="bg-[rgba(19,20,36,0.5)] backdrop-blur-md border border-white/10 h-[330px] sm:h-[420px] rounded-2xl px-6 py-6 flex flex-col justify-between group cursor-pointer hover:border-accent/45 hover:shadow-[0_0_20px_rgba(0,180,255,0.12)] transition-all duration-300 relative z-20 overflow-hidden"
              >
                {/* Background Tech Mesh lines */}
                <div className="absolute inset-0 bg-cyber-grid bg-[size:16px_16px] opacity-[0.03] pointer-events-none" aria-hidden />

                {/* Top: Tech Badges & Text */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {item.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[8px] sm:text-[9px] bg-white/5 border border-white/10 text-white/80 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider scale-95"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base sm:text-[17px] font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3 font-light">
                    {item.description}
                  </p>
                </div>

                {/* Middle: Highlighted Metric Box */}
                <div className="bg-accent/5 border border-accent/20 rounded-xl px-4 py-2.5 flex items-center justify-between w-full max-w-[240px] mx-auto my-auto shadow-[inset_0_0_12px_rgba(0,180,255,0.03)]">
                  <span className="text-[8.5px] uppercase tracking-wider text-accent/80 font-mono font-semibold">System Focus</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white font-mono">{item.metric}</span>
                </div>

                {/* Bottom: View Architecture */}
                <div className="text-2xl sm:text-3xl self-end mt-auto flex items-center gap-1.5 w-full justify-between pt-2">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onProjectClick && onProjectClick(item);
                    }}
                    className={`px-3 py-1.5 border border-accent/30 hover:border-accent hover:bg-accent text-accent hover:text-white text-[10px] uppercase font-bold tracking-wider rounded-lg transition-all duration-300 flex items-center gap-1.5 z-30 cursor-pointer shadow-md select-none
                      ${isCardShaking ? "bg-accent/20 text-accent" : ""}
                    `}
                  >
                    <span>View Architecture</span>
                    <BsArrowRight className={`text-sm transition-transform ${isCardShaking ? "translate-x-0.5" : "group-hover:translate-x-1"}`} />
                  </div>

                  <div className="text-2xl">
                    <BsArrowRight
                      className={`text-white/20 transition-all duration-300 
                        ${isCardShaking 
                          ? "text-accent animate-project-shake" 
                          : "group-hover:translate-x-1 group-hover:text-accent"
                        }
                      `}
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default WorkSlider;
