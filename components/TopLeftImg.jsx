const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[380px] h-[200px] xl:h-[380px] opacity-45 pointer-events-none select-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="blueGrad" x1="0" y1="0" x2="350" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#0066ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Diagonal Tech Grid Lines */}
        <path
          d="M0,30 L30,0 M0,60 L60,0 M0,90 L90,0 M0,120 L120,0 M0,150 L150,0 M0,180 L180,0 M0,210 L210,0 M0,240 L240,0 M0,270 L270,0 M0,300 L300,0 M0,330 L330,0"
          stroke="url(#blueGrad)"
          strokeWidth="0.75"
          strokeDasharray="4 8"
          opacity="0.8"
        />
        <path
          d="M0,0 L350,350 M0,80 L270,350 M80,0 L350,270 M0,160 L190,350 M160,0 L350,190"
          stroke="url(#blueGrad)"
          strokeWidth="0.5"
          opacity="0.25"
        />

        {/* Tech Coordinate Radar Circle */}
        <circle cx="60" cy="60" r="50" stroke="url(#blueGrad)" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.6" />
        <circle cx="60" cy="60" r="20" fill="url(#blueGrad)" opacity="0.15" />
        <line x1="60" y1="0" x2="60" y2="120" stroke="url(#blueGrad)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />
        <line x1="0" y1="60" x2="120" y2="60" stroke="url(#blueGrad)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.4" />

        {/* Neon Coding Symbols & Tags */}
        <text
          x="30"
          y="230"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, 'Andale Mono', monospace"
          fontSize="24"
          fontWeight="bold"
          opacity="0.9"
          filter="url(#neonGlow)"
        >
          &lt;/&gt;
        </text>
        
        <text
          x="140"
          y="65"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, 'Andale Mono', monospace"
          fontSize="12"
          opacity="0.6"
        >
          @RestController
        </text>

        <text
          x="230"
          y="150"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, 'Andale Mono', monospace"
          fontSize="20"
          fontWeight="bold"
          opacity="0.85"
          filter="url(#neonGlow)"
        >
          &#123; &#125;
        </text>

        <text
          x="45"
          y="155"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, 'Andale Mono', monospace"
          fontSize="10"
          opacity="0.4"
        >
          01011001
        </text>

        <text
          x="125"
          y="180"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, 'Andale Mono', monospace"
          fontSize="11"
          fontWeight="500"
          opacity="0.5"
        >
          Java / Spring
        </text>

        <text
          x="280"
          y="85"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, 'Andale Mono', monospace"
          fontSize="12"
          opacity="0.5"
          filter="url(#neonGlow)"
        >
          Microservices
        </text>

        {/* Glowing Network Nodes */}
        <circle cx="160" cy="160" r="3.5" fill="#00b4ff" filter="url(#neonGlow)" />
        <circle cx="280" cy="220" r="2.5" fill="#00b4ff" opacity="0.6" />
        <circle cx="45" cy="285" r="2" fill="#00b4ff" opacity="0.5" />
      </svg>
    </div>
  );
};

export default TopLeftImg;
