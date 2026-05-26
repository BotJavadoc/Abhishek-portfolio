const Circles = () => {
  return (
    <div className="absolute right-0 bottom-0 mix-blend-color-dodge z-0 w-[200px] xl:w-[380px] h-[200px] xl:h-[380px] opacity-25 pointer-events-none select-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="cyberGrad" x1="400" y1="400" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#0066ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <filter id="neonBlueGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric Tech Radar/Rings centered at bottom-right corner (400, 400) */}
        <circle cx="400" cy="400" r="120" stroke="url(#cyberGrad)" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.5" />
        <circle cx="400" cy="400" r="80" stroke="url(#cyberGrad)" strokeWidth="1" opacity="0.6" />
        <circle cx="400" cy="400" r="40" stroke="url(#cyberGrad)" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.4" />
        
        {/* Radar Crosshairs */}
        <line x1="400" y1="200" x2="400" y2="400" stroke="url(#cyberGrad)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />
        <line x1="200" y1="400" x2="400" y2="400" stroke="url(#cyberGrad)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.3" />

        {/* Database Schema Table: transaction */}
        <rect
          x="30"
          y="70"
          width="180"
          height="125"
          rx="6"
          fill="#131424"
          fillOpacity="0.85"
          stroke="#00b4ff"
          strokeWidth="1.2"
          filter="url(#neonBlueGlow)"
          opacity="0.9"
        />
        <rect
          x="30"
          y="70"
          width="180"
          height="26"
          rx="6"
          fill="#00b4ff"
          fillOpacity="0.2"
          stroke="#00b4ff"
          strokeWidth="1"
          opacity="0.9"
        />
        <text
          x="40"
          y="87"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="10"
          fontWeight="bold"
          letterSpacing="0.5"
        >
          TABLE: transaction
        </text>
        <g fontFamily="Consolas, Monaco, monospace" fontSize="8.5" fill="#ffffff" opacity="0.75">
          <text x="40" y="110">id: VARCHAR [PK]</text>
          <text x="40" y="125" fill="#00b4ff">payload_iso: ISO8583</text>
          <text x="40" y="140">amount: DECIMAL</text>
          <text x="40" y="155">status: VARCHAR</text>
          <text x="40" y="170">completed_at: TIMESTAMP</text>
        </g>

        {/* Relational Database Schema Table: account */}
        <rect
          x="240"
          y="30"
          width="130"
          height="65"
          rx="4"
          fill="#131424"
          fillOpacity="0.85"
          stroke="#00b4ff"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <rect
          x="240"
          y="30"
          width="130"
          height="20"
          rx="4"
          fill="#00b4ff"
          fillOpacity="0.1"
          stroke="#00b4ff"
          strokeWidth="0.6"
          opacity="0.6"
        />
        <text
          x="248"
          y="43"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="8"
          fontWeight="bold"
          opacity="0.8"
        >
          TABLE: account
        </text>
        <g fontFamily="Consolas, Monaco, monospace" fontSize="8" fill="#ffffff" opacity="0.55">
          <text x="248" y="62">acc_no: VARCHAR [PK]</text>
          <text x="248" y="77">balance: DECIMAL</text>
        </g>

        {/* FK Relational Line connecting tables */}
        <path
          d="M 210 110 L 225 110 L 225 62 L 240 62"
          stroke="#00b4ff"
          strokeWidth="0.75"
          strokeDasharray="2 2"
          fill="none"
          opacity="0.7"
          filter="url(#neonBlueGlow)"
        />

        {/* Backend Services Coding Logic */}
        <text
          x="30"
          y="235"
          fill="#00d2ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="12"
          fontWeight="bold"
          opacity="0.9"
        >
          @Service
        </text>
        <text
          x="30"
          y="255"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="11.5"
          fontWeight="500"
          opacity="0.85"
        >
          class PaymentFlow &#123;
        </text>
        <text
          x="30"
          y="275"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="11.5"
          fontWeight="500"
          opacity="0.75"
        >
          &nbsp;&nbsp;void process() &#123;
        </text>
        <text
          x="30"
          y="295"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="11.5"
          fontWeight="bold"
          opacity="0.9"
          filter="url(#neonBlueGlow)"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;iso.pack();
        </text>
        <text
          x="30"
          y="315"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="11.5"
          fontWeight="500"
          opacity="0.75"
        >
          &nbsp;&nbsp;&#125;
        </text>
        <text
          x="30"
          y="335"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="11.5"
          fontWeight="500"
          opacity="0.85"
        >
          &#125;
        </text>

        {/* Binary Stream Indicators */}
        <text
          x="270"
          y="150"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="9"
          opacity="0.3"
        >
          01101001
        </text>
        <text
          x="240"
          y="220"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="10"
          opacity="0.4"
          filter="url(#neonBlueGlow)"
        >
          10010110
        </text>
        <text
          x="180"
          y="360"
          fill="#00b4ff"
          fontFamily="Consolas, Monaco, monospace"
          fontSize="9.5"
          opacity="0.25"
        >
          ISO8583_PACK
        </text>

        {/* Glowing Microservice Network Nodes */}
        <circle cx="225" cy="110" r="3.5" fill="#00b4ff" filter="url(#neonBlueGlow)" />
        <circle cx="160" cy="291" r="2.5" fill="#00b4ff" opacity="0.85" filter="url(#neonBlueGlow)" />
        <circle cx="310" cy="180" r="2" fill="#00b4ff" opacity="0.4" />
        <circle cx="260" cy="300" r="3" fill="#00b4ff" opacity="0.5" />
      </svg>
    </div>
  );
};

export default Circles;
