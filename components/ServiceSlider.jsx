import { useState, useEffect } from "react";
import {
  FaServer,
  FaUniversity,
  FaReact,
  FaCloud,
} from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: FaServer,
    title: "Scalable Backend Systems",
    description: "Building high-performance microservices, REST APIs, multithreaded applications, and enterprise backend architectures using Java & Spring Boot.",
    type: "backend",
    modalDescription: "I design and develop scalable backend systems focused on performance, maintainability, and reliability. My experience includes building enterprise microservices, REST APIs, multithreaded applications, and distributed systems for banking and fintech platforms.",
    bullets: [
      "Built 5+ scalable microservices using Java & Spring Boot",
      "Optimized API response time by 30%",
      "Supported 500+ concurrent users",
      "Developed secure REST APIs for enterprise banking systems",
      "Worked on multithreading and backend performance optimization",
      "Resolved critical production issues and system bottlenecks",
      "Applied SOLID principles and clean architecture practices",
      "Built scalable onboarding, retail banking & corporate banking modules"
    ]
  },
  {
    Icon: FaUniversity,
    title: "Banking & Payment Solutions",
    description: "Developing secure ISO8583 payment integrations, onboarding systems, retail banking, and corporate banking platforms handling high-volume transactions reliably.",
    type: "payments",
    modalDescription: "Experienced in building secure and reliable banking and payment solutions with hands-on expertise in ISO8583 integrations, payment transaction workflows, onboarding systems, and enterprise banking operations.",
    bullets: [
      "Integrated ISO8583 payment systems",
      "Handled 10K+ daily transactions",
      "Improved payment reliability and transaction flow efficiency",
      "Worked on onboarding, retail banking & corporate banking systems",
      "Implemented secure payment processing workflows",
      "Automated banking reporting and backend workflows",
      "Delivered multiple client change requests and enhancements",
      "Resolved production payment and transaction-related issues"
    ]
  },
  {
    Icon: FaReact,
    title: "Modern UI & Full Stack Development",
    description: "Creating responsive and seamless user interfaces using React.js and modern frontend technologies for payment integration and enterprise applications.",
    type: "frontend",
    modalDescription: "Building modern, responsive, and seamless frontend experiences using React.js and modern web technologies for enterprise applications and payment integration platforms.",
    bullets: [
      "Built React.js-based payment integration applications",
      "Developed responsive and user-friendly enterprise UIs",
      "Integrated frontend applications with backend REST APIs",
      "Improved UI performance and workflow usability",
      "Worked with reusable components and scalable frontend architecture",
      "Created seamless transaction and onboarding experiences",
      "Focused on responsive design and smooth user interactions"
    ]
  },
  {
    Icon: FaCloud,
    title: "Cloud & DevOps Engineering",
    description: "Deploying scalable applications using Docker, Kubernetes, OpenShift, CI/CD workflows, and modern cloud-native infrastructure.",
    type: "devops",
    modalDescription: "Deploying and managing scalable cloud-native applications with Docker, Kubernetes, OpenShift, and modern DevOps practices focused on performance, scalability, and deployment efficiency.",
    bullets: [
      "Containerized applications using Docker",
      "Managed deployments with Kubernetes & OpenShift",
      "Improved deployment scalability and reliability",
      "Worked on CI/CD workflows and environment management",
      "Monitored production deployments and issue resolution",
      "Optimized infrastructure for enterprise applications",
      "Supported scalable cloud-ready banking systems"
    ]
  },
];

const ServiceSlider = ({ onCardClick }) => {
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
            
            for (let idx = 0; idx < serviceData.length; idx++) {
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
    for (let idx = 0; idx < serviceData.length; idx++) {
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
        @keyframes diagonal-shake {
          0%, 100% { transform: rotate(45deg) translate(0, 0); }
          25% { transform: rotate(45deg) translate(-2px, -2px); }
          75% { transform: rotate(45deg) translate(2px, 2px); }
        }
        .animate-diagonal-shake {
          animation: diagonal-shake 0.4s ease-in-out infinite;
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
        className="h-[340px] sm:h-[450px] z-10 relative"
      >
        {serviceData.map((item, i) => {
          const isActive = i === activeHighlightIdx;
          const isCardShaking = isActive && isShaking;
          return (
            <SwiperSlide key={i}>
              <div
                onClick={() => onCardClick && onCardClick(item)}
                className="bg-[rgba(65,47,123,0.15)] h-[290px] sm:h-[390px] rounded-lg px-6 py-6 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 relative z-20"
              >
                {/* top half: icon and text */}
                <div>
                  {/* icon */}
                  <div className="text-3xl sm:text-4xl text-accent mb-4">
                    <item.Icon aria-hidden />
                  </div>

                  {/* title & description */}
                  <div className="mb-4">
                    <div className="mb-2 text-base sm:text-[17px] font-semibold text-white group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </div>
                    <p className="max-w-[350px] leading-relaxed text-white/60 text-xs sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* arrow at the bottom */}
                <div className="text-2xl sm:text-3xl self-end mt-auto flex items-center gap-1.5">
                  <span className={`text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-300 select-none
                    ${isCardShaking 
                      ? "opacity-100 scale-100 bg-accent/20 text-accent" 
                      : "opacity-0 group-hover:opacity-100 bg-accent/20 text-accent scale-90 group-hover:scale-100"
                    }
                  `}>
                    View Service
                  </span>
                  <RxArrowTopRight
                    className={`transition-all duration-300 
                      ${isCardShaking 
                        ? "text-accent animate-diagonal-shake" 
                        : "group-hover:rotate-45 group-hover:text-accent"
                      }
                    `}
                    aria-hidden
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ServiceSlider;
