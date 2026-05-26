import { motion } from "framer-motion";
import { useState } from "react";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDiagramExpanded, setIsDiagramExpanded] = useState(false);

  // XML Serialization SVG Download Trigger
  const handleDownloadSvg = (title, svgId) => {
    const svgElement = document.getElementById(svgId);
    if (!svgElement) return;

    try {
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement("a");
      
      // Normalize title to filename friendly format
      const fileName = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-architecture.svg";
      
      downloadLink.href = svgUrl;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    } catch (error) {
      console.error("Failed to serialize and download SVG diagram:", error);
    }
  };

  // Custom high-fidelity interactive SVGs representing system architecture diagrams
  const renderProjectSvg = (type) => {
    switch (type) {
      case "iso8583":
        return (
          <svg 
            id="banking-architecture-svg"
            viewBox="0 0 1200 680" 
            className="w-full h-full fill-none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="reqGrad" x1="0" y1="0" x2="1200" y2="680" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#001845" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="resGrad" x1="1200" y1="680" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f138c5" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#8a2be2" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#240046" stopOpacity="0.1" />
              </linearGradient>
              <filter id="reqGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="resGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="statusGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <style>{`
              @keyframes flowReq {
                to { stroke-dashoffset: -24; }
              }
              @keyframes flowRes {
                to { stroke-dashoffset: 24; }
              }
              @keyframes nodePulse {
                0%, 100% { opacity: 0.4; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.08); }
              }
              .flow-req-line {
                stroke-dasharray: 8 4;
                animation: flowReq 1.8s linear infinite;
              }
              .flow-res-line {
                stroke-dasharray: 8 4;
                animation: flowRes 1.8s linear infinite;
              }
              .pulse-green {
                transform-origin: center;
                animation: nodePulse 2s infinite ease-in-out;
              }
            `}</style>

            {/* Glowing connection lines */}
            {/* Request flow path */}
            <path
              d="M 140 110 H 180 M 300 160 H 340 M 460 160 H 530 M 760 195 Q 785 195, 810 195 M 950 195 H 1010"
              stroke="url(#reqGrad)"
              strokeWidth="2.5"
              className="flow-req-line"
              filter="url(#reqGlow)"
            />
            {/* Response flow path */}
            <path
              d="M 1010 205 H 950 M 810 205 Q 785 205, 760 205 M 530 175 H 460 M 340 175 H 300 M 180 120 H 140"
              stroke="url(#resGrad)"
              strokeWidth="2.5"
              className="flow-res-line"
              filter="url(#resGlow)"
            />

            {/* Dynamic vertical connection link pathways */}
            <path d="M 400 240 V 300" stroke="#00d2ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <path d="M 400 405 V 435" stroke="#00d2ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            <path d="M 640 330 V 360" stroke="#f138c5" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.65" />

            {/* 1. Client Channels Layer (Web, Mobile) */}
            <g transform="translate(10,50)">
              <rect x="0" y="0" width="130" height="125" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="65" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLIENT CHANNELS</text>
              <line x1="10" y1="22" x2="120" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Mobile App */}
              <rect x="10" y="30" width="110" height="36" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="65" y="52" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Mobile Banking</text>

              {/* Web App */}
              <rect x="10" y="76" width="110" height="36" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="65" y="98" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Web Application</text>
            </g>

            {/* 2. Frontend Validation Layer */}
            <g transform="translate(180,50)">
              <rect x="0" y="0" width="120" height="270" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="60" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">UI VALIDATION</text>
              <line x1="10" y1="22" x2="110" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              <g fontSize="7.5" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="12" y="45">✓ Form Validation</text>
                <text x="12" y="70">✓ Tokenization</text>
                <text x="12" y="95">✓ Input Sanitizer</text>
                <text x="12" y="120">✓ Device Check</text>
                <text x="12" y="145">✓ Session Token</text>
                <text x="12" y="170">✓ CAPTCHA Risk</text>
                <text x="12" y="195">✓ Secure HTTPS</text>
              </g>
              <text x="60" y="235" fill="#00d2ff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">React.js Core</text>
              <circle cx="105" cy="232" r="3" fill="#27c93f" className="pulse-green" filter="url(#statusGlow)" />
            </g>

            {/* 3. API Gateway / Main Banking Server */}
            <g transform="translate(340,50)">
              {/* Animated protective shield overlay behind API GW */}
              <path d="M -5 -10 Q 60 -30, 125 -10 V 120 Q 60 190, -5 220 Z" fill="none" stroke="#00d2ff" strokeWidth="2.5" opacity="0.22" filter="url(#reqGlow)" />

              <rect x="0" y="0" width="120" height="230" rx="8" fill="#111326" fillOpacity="0.9" stroke="#00d2ff" strokeWidth="1.5" filter="url(#reqGlow)" />
              <text x="60" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">API GATEWAY</text>
              <line x1="10" y1="22" x2="110" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="12" y="45">✓ Payload Validation</text>
                <text x="12" y="65">✓ Request Sanitizer</text>
                <text x="12" y="85">✓ JWT Token Gen</text>
                <text x="12" y="105">✓ Correlation ID</text>
                <text x="12" y="125">✓ Rate Throttler</text>
                <text x="12" y="145">✓ TLS Decryption</text>
                <text x="12" y="165">✓ Request Loggers</text>
              </g>
              <text x="60" y="200" fill="#00d2ff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Spring Boot 3</text>
              <circle cx="105" cy="198" r="3.5" fill="#27c93f" className="pulse-green" filter="url(#statusGlow)" />
            </g>

            {/* 4. Authentication & Security Layer */}
            <g transform="translate(340,300)">
              <rect x="0" y="0" width="120" height="105" rx="6" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="0.8" />
              <text x="60" y="16" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SECURITY LAYER</text>
              <line x1="10" y1="22" x2="110" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.75">
                <text x="12" y="40">✓ JWT / OAuth2</text>
                <text x="12" y="55">✓ HMAC Checking</text>
                <text x="12" y="70">✓ RBAC Roles</text>
                <text x="12" y="85">✓ Vault Secrets</text>
              </g>
              {/* Lock Icon */}
              <rect x="98" y="32" width="10" height="8" rx="1" fill="#00d2ff" />
              <path d="M 100 32 V 29 A 3 3 0 0 1 106 29 V 32" stroke="#00d2ff" strokeWidth="0.8" fill="none" />
            </g>

            {/* 4b. Redis Cache & DB Layer */}
            <g transform="translate(340,425)">
              <rect x="0" y="0" width="120" height="85" rx="6" fill="#111326" fillOpacity="0.85" stroke="#ff007f" strokeWidth="0.8" />
              <text x="60" y="16" fill="#ff007f" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DATA STACK</text>
              <line x1="10" y1="22" x2="110" y2="22" stroke="#ff007f" strokeWidth="0.5" opacity="0.4" />
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.7">
                <text x="12" y="40">✓ Redis Session</text>
                <text x="12" y="55">✓ DB Clusters</text>
                <text x="12" y="70">✓ Replication</text>
              </g>
              {/* Small Database cylinder mockup */}
              <ellipse cx="102" cy="35" rx="6" ry="2.5" fill="none" stroke="#ff007f" strokeWidth="0.75" />
              <path d="M 96 35 V 45 A 6 2.5 0 0 0 108 45 V 35" fill="none" stroke="#ff007f" strokeWidth="0.75" />
              <ellipse cx="102" cy="40" rx="6" ry="2.5" fill="none" stroke="#ff007f" strokeWidth="0.75" />
              <ellipse cx="102" cy="45" rx="6" ry="2.5" fill="none" stroke="#ff007f" strokeWidth="0.75" opacity="0.6" filter="url(#resGlow)" />
            </g>

            {/* 5. Internal Banking Microservices Layer */}
            <g transform="translate(500,50)">
              <rect x="0" y="0" width="260" height="290" rx="10" fill="#0c0d1b" fillOpacity="0.95" stroke="#00d2ff" strokeWidth="1.2" />
              <text x="130" y="16" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BANKING MICROSERVICES GRID</text>
              <line x1="15" y1="22" x2="245" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Transaction Processing */}
              <rect x="15" y="32" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.8" />
              <text x="70" y="48" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Transaction Svc</text>
              <text x="70" y="58" fill="#00d2ff" fontSize="6" fontFamily="monospace" textAnchor="middle">Direct Booking Core</text>
              <circle cx="115" cy="53" r="2" fill="#27c93f" className="pulse-green" />

              {/* Balance Validation */}
              <rect x="135" y="32" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="190" y="48" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Balance Svc</text>
              <text x="190" y="58" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.6">Deducts Cleared Funds</text>

              {/* Limit Validation */}
              <rect x="15" y="82" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="70" y="98" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Limit Validator</text>
              <text x="70" y="108" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.6">Daily Limits & Ledger</text>

              {/* Beneficiary Validation */}
              <rect x="135" y="82" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="190" y="98" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Beneficiary Svc</text>
              <text x="190" y="108" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.6">Accounts Handshake</text>

              {/* Fraud Detection Engine */}
              <rect x="15" y="132" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.8" filter="url(#reqGlow)" />
              <text x="70" y="148" fill="#00d2ff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Fraud & Risk Svc</text>
              <text x="70" y="158" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.7">Risk Scoring & AML</text>
              <circle cx="115" cy="153" r="2" fill="#27c93f" className="pulse-green" />

              {/* AML/KYC Validation */}
              <rect x="135" y="132" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="190" y="148" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">AML & KYC Svc</text>
              <text x="190" y="158" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.6">Compliance Webhook</text>

              {/* Notification Service */}
              <rect x="15" y="182" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="70" y="198" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Notification Svc</text>
              <text x="70" y="208" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.6">SMS & Mail Alerts</text>

              {/* Reconciliation & Retry */}
              <rect x="135" y="182" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="190" y="198" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Reconciliation Svc</text>
              <text x="190" y="208" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.6">Audit & Retry Engine</text>

              {/* Reporting & Audit */}
              <rect x="75" y="232" width="110" height="42" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="130" y="248" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Audit Log Service</text>
              <text x="130" y="258" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.6">Write audit ledger logs</text>
            </g>

            {/* 5b. Kafka Event Bus (Event-Driven Stream) */}
            <g transform="translate(500,360)">
              <rect x="0" y="0" width="260" height="28" rx="6" fill="#120c24" stroke="#f138c5" strokeWidth="1" filter="url(#resGlow)" opacity="0.85" />
              <text x="130" y="17" fill="#f138c5" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">KAFKA EVENT PROCESSOR STREAM</text>
              {/* Event nodes moving inside bus */}
              <circle cx="20" cy="14" r="3" fill="#f138c5" className="pulse-green" />
              <circle cx="70" cy="14" r="3" fill="#00d2ff" />
              <circle cx="190" cy="14" r="3" fill="#f138c5" />
              <circle cx="240" cy="14" r="3" fill="#00d2ff" className="pulse-green" />
            </g>

            {/* 6. ISO8583 Processing Engine (dedicated payment switch) */}
            <g transform="translate(810,50)">
              <rect x="0" y="0" width="140" height="290" rx="8" fill="#111326" fillOpacity="0.9" stroke="#00d2ff" strokeWidth="1.5" filter="url(#reqGlow)" />
              <text x="70" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ISO8583 ENGINE</text>
              <line x1="10" y1="22" x2="130" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              <g fontSize="7.5" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="12" y="45">✓ MTI Generation</text>
                <text x="12" y="65">✓ Bitmap Processing</text>
                <text x="12" y="85">✓ Field Mapping</text>
                <text x="12" y="105">✓ MAC Key Generator</text>
                <text x="12" y="125">✓ Packet Serializer</text>
                <text x="12" y="145">✓ Switch Router</text>
              </g>
              <circle cx="125" cy="40" r="3" fill="#27c93f" className="pulse-green" filter="url(#statusGlow)" />
              {/* Packet mock display */}
              <rect x="10" y="170" width="120" height="100" rx="3" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="70" y="185" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ISO8583 MESSAGE</text>
              <g fontSize="5.5" fontFamily="monospace" fill="#ffffff" opacity="0.6">
                <text x="15" y="202">MTI : 0200</text>
                <text x="15" y="214">F003: 310000</text>
                <text x="15" y="226">F004: USD 12,500</text>
                <text x="15" y="238">F011: 902812</text>
                <text x="15" y="250">F039: 00 (Approved)</text>
                <text x="15" y="262">F127: OGB_SECURE</text>
              </g>
            </g>

            {/* 7. External Financial Systems (Clearing Ecosystem) */}
            <g transform="translate(1000,50)">
              <rect x="0" y="0" width="180" height="290" rx="10" fill="#0c0d1b" fillOpacity="0.95" stroke="#f138c5" strokeWidth="1.2" />
              <text x="90" y="16" fill="#f138c5" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">FINANCIAL ECOSYSTEM</text>
              <line x1="15" y1="22" x2="165" y2="22" stroke="#f138c5" strokeWidth="0.5" opacity="0.4" />
              
              {/* Core Banking */}
              <rect x="15" y="32" width="150" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="90" y="54" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Core Banking System</text>

              {/* Interbank Network */}
              <rect x="15" y="78" width="150" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="90" y="100" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Interbank Switched Net</text>

              {/* UPI/IMPS Network */}
              <rect x="15" y="124" width="150" height="42" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="1" filter="url(#resGlow)" />
              <text x="90" y="146" fill="#f138c5" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">UPI/IMPS/NEFT Rail</text>
              <circle cx="150" cy="145" r="2" fill="#27c93f" className="pulse-green" />

              {/* Clearing & Settlement */}
              <rect x="15" y="176" width="150" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="90" y="198" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Clearing House Net</text>

              {/* Settlement System */}
              <rect x="15" y="222" width="150" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="90" y="244" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Central Settlement switch</text>
            </g>

            {/* 8. Infrastructure & DevOps Layer */}
            <g transform="translate(10,530)">
              <rect x="0" y="0" width="1170" height="110" rx="10" fill="#111326" fillOpacity="0.9" stroke="#00d2ff" strokeWidth="1" />
              <text x="585" y="20" fill="#00d2ff" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">INFRASTRUCTURE & DEVOPS PLATFORM DEPLOYMENT LAYER</text>
              <line x1="20" y1="28" x2="1150" y2="28" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Docker & K8s Container cluster */}
              <g transform="translate(40, 42)">
                <rect x="0" y="0" width="180" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" />
                <text x="90" y="20" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Docker & Kubernetes</text>
                <text x="90" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">OpenShift Container Orchestration</text>
              </g>

              {/* CI/CD Automated Pipelines */}
              <g transform="translate(250, 42)">
                <rect x="0" y="0" width="180" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                <text x="90" y="20" fill="#ffffff" fontSize="8.5" fontFamily="monospace" textAnchor="middle">CI/CD Pipeline</text>
                <text x="90" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Automated Clearing Verification</text>
              </g>

              {/* Distributed Tracing & Central Log */}
              <g transform="translate(460, 42)">
                <rect x="0" y="0" width="220" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                <text x="110" y="20" fill="#ffffff" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Distributed Tracing</text>
                <text x="110" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Apigee Correlation ID loggers</text>
              </g>

              {/* Prometheus & Grafana Monitoring */}
              <g transform="translate(710, 42)">
                <rect x="0" y="0" width="190" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" filter="url(#reqGlow)" />
                <text x="95" y="20" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Prometheus & Grafana</text>
                <text x="95" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.7">Real-time alerts & Metrics dashboard</text>
              </g>

              {/* ELK Centralized Logging Stack */}
              <g transform="translate(930, 42)">
                <rect x="0" y="0" width="190" height="48" rx="4" fill="#0c0d1b" stroke="#ff007f" strokeWidth="0.8" />
                <text x="95" y="20" fill="#ff007f" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ELK Log Stack</text>
                <text x="95" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">ElasticSearch + Logstash + Kibana</text>
              </g>
            </g>

            {/* Floating Labels */}
            {/* Real-Time Transaction Processing */}
            <g transform="translate(10, 360)">
              <rect x="0" y="0" width="140" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="70" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Real-Time Txn Processing</text>
            </g>

            {/* ISO8583 Financial Messaging */}
            <g transform="translate(820, 20)">
              <rect x="0" y="0" width="130" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="65" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ISO8583 Financial Msg</text>
            </g>

            {/* Event Driven Microservices */}
            <g transform="translate(560, 20)">
              <rect x="0" y="0" width="140" height="18" rx="4" fill="#f138c5" fillOpacity="0.12" stroke="#f138c5" strokeWidth="0.5" />
              <text x="70" y="11" fill="#f138c5" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Event Driven Microservices</text>
            </g>

            {/* Highly Secure Banking Infrastructure */}
            <g transform="translate(180, 20)">
              <rect x="0" y="0" width="160" height="18" rx="4" fill="#27c93f" fillOpacity="0.12" stroke="#27c93f" strokeWidth="0.5" />
              <text x="80" y="11" fill="#27c93f" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Highly Secure Infrastructure</text>
            </g>

            {/* PCI-DSS Ready */}
            <g transform="translate(1025, 20)">
              <rect x="0" y="0" width="100" height="18" rx="4" fill="#f138c5" fillOpacity="0.12" stroke="#f138c5" strokeWidth="0.5" />
              <text x="50" y="11" fill="#f138c5" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PCI-DSS Ready</text>
            </g>

            {/* Scalable Enterprise Architecture */}
            <g transform="translate(485, 500)">
              <rect x="0" y="0" width="220" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="110" y="11" fill="#00d2ff" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Scalable Enterprise Architecture</text>
            </g>
          </svg>
        );
      case "corporate":
        return (
          <svg 
            id="corporate-architecture-svg"
            viewBox="0 0 1200 680" 
            className="w-full h-full fill-none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="corpReqGrad" x1="0" y1="0" x2="1200" y2="680" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#001845" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="corpResGrad" x1="1200" y1="680" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f138c5" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#8a2be2" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#240046" stopOpacity="0.1" />
              </linearGradient>
              <filter id="corpReqGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="corpResGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="corpShieldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <style>{`
              @keyframes flowCorpReq {
                to { stroke-dashoffset: -24; }
              }
              @keyframes flowCorpRes {
                to { stroke-dashoffset: 24; }
              }
              @keyframes pulseCircle {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 0.85; transform: scale(1.05); }
              }
              .flow-corp-req {
                stroke-dasharray: 8 4;
                animation: flowCorpReq 1.8s linear infinite;
              }
              .flow-corp-res {
                stroke-dasharray: 8 4;
                animation: flowCorpRes 1.8s linear infinite;
              }
              .glowing-server-hub {
                transform-origin: center;
                animation: pulseCircle 3s infinite ease-in-out;
              }
            `}</style>

            {/* Glowing lines request/response flow */}
            {/* Request line (Cyan) */}
            <path
              d="M 170 120 H 220 M 340 160 H 400 M 580 230 H 635 M 885 240 H 940"
              stroke="url(#corpReqGrad)"
              strokeWidth="2.5"
              className="flow-corp-req"
              filter="url(#corpReqGlow)"
            />
            {/* Response line (Magenta) */}
            <path
              d="M 940 250 H 885 M 635 240 H 580 M 400 170 H 340 M 220 130 H 170"
              stroke="url(#corpResGrad)"
              strokeWidth="2.5"
              className="flow-corp-res"
              filter="url(#corpResGlow)"
            />

            {/* Microservice to Event bus channels */}
            <path d="M 760 170 V 275" stroke="#f138c5" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            
            {/* Microservice to Database channels */}
            <path d="M 690 245 V 340" stroke="#00d2ff" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />
            <path d="M 820 245 V 340" stroke="#00d2ff" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />

            {/* Connections from Server Hub outwards to Microservices grid */}
            <path d="M 520 140 L 635 80 M 520 140 L 635 140 M 520 140 L 635 200" stroke="#00d2ff" strokeWidth="1" opacity="0.35" />

            {/* 1. Client Applications Layer */}
            <g transform="translate(10,50)">
              <rect x="0" y="0" width="150" height="150" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="75" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLIENT APPLICATION</text>
              <line x1="10" y1="22" x2="140" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Web banking */}
              <rect x="10" y="32" width="130" height="42" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="75" y="47" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Web Application</text>
              <text x="75" y="57" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.5">React.js Dashboard</text>

              {/* Mobile banking */}
              <rect x="10" y="88" width="130" height="42" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="75" y="103" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Mobile Application</text>
              <text x="75" y="113" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.5">Biometrics / Payments</text>
            </g>

            {/* Floating Label: Corporate Banking Platform */}
            <g transform="translate(10, 15)">
              <rect x="0" y="0" width="150" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="75" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Corporate Banking Platform</text>
            </g>

            {/* 2. Security & Validation Layer */}
            <g transform="translate(190,50)">
              {/* Glowing shield overlay */}
              <path d="M -5 -8 Q 45 -22, 95 -8 V 85 Q 45 140, -5 160 Z" fill="none" stroke="#27c93f" strokeWidth="2" opacity="0.3" filter="url(#corpReqGlow)" />

              <rect x="0" y="0" width="90" height="175" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="45" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SECURITY</text>
              <line x1="10" y1="22" x2="80" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="10" y="42">✓ SSL/TLS</text>
                <text x="10" y="58">✓ Captcha</text>
                <text x="10" y="74">✓ Sanitizer</text>
                <text x="10" y="90">✓ Validation</text>
                <text x="10" y="106">✓ Device Ver</text>
                <text x="10" y="122">✓ Token Mask</text>
                <text x="10" y="138">✓ Session GW</text>
              </g>
              <circle cx="78" cy="155" r="2.5" fill="#27c93f" className="pulse-green" />
            </g>

            {/* Floating Label: Secure JWT Communication */}
            <g transform="translate(180, 15)">
              <rect x="0" y="0" width="110" height="18" rx="4" fill="#27c93f" fillOpacity="0.12" stroke="#27c93f" strokeWidth="0.5" />
              <text x="55" y="11" fill="#27c93f" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Secure JWT Comm</text>
            </g>

            {/* 3. Central Internal Banking Server (Core Orchestrator) */}
            <g transform="translate(300,50)">
              {/* Giant glowing background hub */}
              <circle cx="100" cy="120" r="85" fill="#0c0d1b" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="2.5" className="glowing-server-hub" filter="url(#corpShieldGlow)" />
              <circle cx="100" cy="120" r="65" fill="#111326" stroke="#00d2ff" strokeWidth="1" opacity="0.25" />
              
              <text x="100" y="90" fill="#00d2ff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">INTERNAL BANKING</text>
              <text x="100" y="102" fill="#00d2ff" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SERVER HUB</text>
              
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.85" textAnchor="middle">
                <text x="100" y="122">Spring Boot API Gateway</text>
                <text x="100" y="134">JWT / Auth Validator</text>
                <text x="100" y="146">Granular RBAC Check</text>
                <text x="100" y="158">Correlation Tracing</text>
                <text x="100" y="170">Database Load Balancer</text>
              </g>

              {/* Server mini database / security nodes */}
              <rect x="92" y="180" width="16" height="12" rx="2" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="100" y="188" fill="#00d2ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle">REST</text>
              <circle cx="145" cy="85" r="3.5" fill="#27c93f" className="pulse-green" filter="url(#statusGlow)" />
            </g>

            {/* Floating Label: Enterprise Banking Infrastructure */}
            <g transform="translate(310, 15)">
              <rect x="0" y="0" width="180" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="90" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Enterprise Banking Infra</text>
            </g>

            {/* 4. Internal Microservices Architecture */}
            <g transform="translate(630,50)">
              <rect x="0" y="0" width="250" height="270" rx="10" fill="#0c0d1b" fillOpacity="0.95" stroke="#00d2ff" strokeWidth="1.2" />
              <text x="125" y="16" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MICROSERVICES ARCHITECTURE</text>
              <line x1="15" y1="22" x2="235" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Account Service */}
              <rect x="15" y="32" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.75" />
              <text x="67.5" y="47" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Account Svc</text>
              <text x="67.5" y="57" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Clearing & Balances</text>

              {/* Transaction Service */}
              <rect x="130" y="32" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.75" filter="url(#corpReqGlow)" />
              <text x="182.5" y="47" fill="#00d2ff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Transaction Svc</text>
              <text x="182.5" y="57" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.7">Ledger Entries</text>
              <circle cx="225" cy="51" r="2.5" fill="#27c93f" className="pulse-green" />

              {/* Balance Validation */}
              <rect x="15" y="78" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="67.5" y="93" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Balance Svc</text>
              <text x="67.5" y="103" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Ledger Checks</text>

              {/* Beneficiary Management */}
              <rect x="130" y="78" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="182.5" y="93" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Beneficiary Svc</text>
              <text x="182.5" y="103" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Recipient Handshake</text>

              {/* Corporate User Management */}
              <rect x="15" y="124" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="67.5" y="139" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Corp User Svc</text>
              <text x="67.5" y="149" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Approval Hierarchy</text>

              {/* Limit Validator */}
              <rect x="130" y="124" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="182.5" y="139" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Limit Validator</text>
              <text x="182.5" y="149" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Approval Thresholds</text>

              {/* Risk Assessment Engine */}
              <rect x="15" y="170" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.8" filter="url(#corpReqGlow)" />
              <text x="67.5" y="185" fill="#00d2ff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Risk Svc Engine</text>
              <text x="67.5" y="195" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.7">AML / Fraud checking</text>
              <circle cx="110" cy="189" r="2" fill="#27c93f" className="pulse-green" />

              {/* Audit Logging & Scheduler */}
              <rect x="130" y="170" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="182.5" y="185" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Audit & Scheduler</text>
              <text x="182.5" y="195" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Reconciliation Batch</text>

              {/* Notification & Reports */}
              <rect x="72.5" y="216" width="105" height="38" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.6" />
              <text x="125" y="231" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Statement Svc</text>
              <text x="125" y="241" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">JasperReports Generation</text>
            </g>

            {/* Floating Label: Microservices Architecture */}
            <g transform="translate(630, 15)">
              <rect x="0" y="0" width="140" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="70" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Microservices Architecture</text>
            </g>

            {/* Layer 4b: Kafka Event Stream Bus */}
            <g transform="translate(630,340)">
              <rect x="0" y="0" width="250" height="26" rx="6" fill="#120c24" stroke="#f138c5" strokeWidth="1" filter="url(#corpResGlow)" opacity="0.85" />
              <text x="125" y="16" fill="#f138c5" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">KAFKA BANKING ASYNC BUS</text>
              {/* Event nodes moving inside bus */}
              <circle cx="20" cy="13" r="3" fill="#f138c5" className="pulse-green" />
              <circle cx="90" cy="13" r="3" fill="#00d2ff" />
              <circle cx="230" cy="13" r="3" fill="#f138c5" className="pulse-green" />
            </g>

            {/* 5. Database Layer (Highly Available Database Clusters) */}
            <g transform="translate(630,390)">
              <rect x="0" y="0" width="250" height="120" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="125" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DATABASE LAYER (HA CLUSTERS)</text>
              <line x1="15" y1="22" x2="235" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Customer DB Cylinder */}
              <g transform="translate(20, 32)">
                <ellipse cx="25" cy="12" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" />
                <path d="M 10 12 V 32 A 15 4 0 0 0 40 32 V 12" fill="none" stroke="#00d2ff" strokeWidth="0.75" />
                <ellipse cx="25" cy="22" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" />
                <ellipse cx="25" cy="32" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" opacity="0.6" filter="url(#corpReqGlow)" />
                <text x="25" y="47" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Customer DB</text>
              </g>

              {/* Transaction DB Cylinder */}
              <g transform="translate(85, 32)">
                <ellipse cx="25" cy="12" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="1" filter="url(#corpReqGlow)" />
                <path d="M 10 12 V 32 A 15 4 0 0 0 40 32 V 12" fill="none" stroke="#00d2ff" strokeWidth="1" />
                <ellipse cx="25" cy="22" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" />
                <ellipse cx="25" cy="32" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" opacity="0.6" />
                <text x="25" y="47" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Ledger DB</text>
              </g>

              {/* Reporting DB Cylinder */}
              <g transform="translate(150, 32)">
                <ellipse cx="25" cy="12" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" />
                <path d="M 10 12 V 32 A 15 4 0 0 0 40 32 V 12" fill="none" stroke="#00d2ff" strokeWidth="0.75" />
                <ellipse cx="25" cy="22" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" />
                <ellipse cx="25" cy="32" rx="15" ry="4" fill="none" stroke="#00d2ff" strokeWidth="0.75" opacity="0.6" />
                <text x="25" y="47" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Report DB</text>
              </g>

              {/* Audit DB Cylinder */}
              <g transform="translate(205, 32)">
                <ellipse cx="15" cy="12" rx="10" ry="3" fill="none" stroke="#ff007f" strokeWidth="0.75" />
                <path d="M 5 12 V 32 A 10 3 0 0 0 25 32 V 12" fill="none" stroke="#ff007f" strokeWidth="0.75" />
                <ellipse cx="15" cy="22" rx="10" ry="3" fill="none" stroke="#ff007f" strokeWidth="0.75" />
                <ellipse cx="15" cy="32" rx="10" ry="3" fill="none" stroke="#ff007f" strokeWidth="0.75" opacity="0.6" filter="url(#corpResGlow)" />
                <text x="15" y="47" fill="#ff007f" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Audit DB</text>
              </g>
            </g>

            {/* 6. External Financial Integrations */}
            <g transform="translate(930,50)">
              <rect x="0" y="0" width="160" height="270" rx="10" fill="#0c0d1b" fillOpacity="0.95" stroke="#f138c5" strokeWidth="1.2" />
              <text x="80" y="16" fill="#f138c5" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">FINANCIAL ECOSYSTEM</text>
              <line x1="10" y1="22" x2="150" y2="22" stroke="#f138c5" strokeWidth="0.5" opacity="0.4" />
              
              {/* Core Banking System */}
              <rect x="10" y="32" width="140" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="80" y="54" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Core Banking Switch</text>

              {/* Payment Gateway */}
              <rect x="10" y="78" width="140" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="80" y="100" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Payment Gateway API</text>

              {/* Interbank UPI/IMPS */}
              <rect x="10" y="124" width="140" height="42" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="1" filter="url(#corpResGlow)" />
              <text x="80" y="146" fill="#f138c5" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">UPI/NEFT/RTGS switch</text>
              <circle cx="140" cy="145" r="2" fill="#27c93f" className="pulse-green" />

              {/* External Banking API */}
              <rect x="10" y="176" width="140" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="80" y="198" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">External Banking API</text>

              {/* Settlement Systems */}
              <rect x="10" y="222" width="140" height="36" rx="4" fill="#111326" stroke="#f138c5" strokeWidth="0.6" />
              <text x="80" y="244" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle">Clearing Settlement Switch</text>
            </g>

            {/* Floating Label: Real-Time Transaction Processing */}
            <g transform="translate(800, 15)">
              <rect x="0" y="0" width="120" height="18" rx="4" fill="#f138c5" fillOpacity="0.12" stroke="#f138c5" strokeWidth="0.5" />
              <text x="60" y="11" fill="#f138c5" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Real-Time Txn Routing</text>
            </g>

            {/* Floating Label: Highly Scalable System */}
            <g transform="translate(940, 15)">
              <rect x="0" y="0" width="130" height="18" rx="4" fill="#27c93f" fillOpacity="0.12" stroke="#27c93f" strokeWidth="0.5" />
              <text x="65" y="11" fill="#27c93f" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Highly Scalable Switch</text>
            </g>

            {/* 8. Infrastructure & DevOps Layer */}
            <g transform="translate(10,530)">
              <rect x="0" y="0" width="1170" height="110" rx="10" fill="#111326" fillOpacity="0.9" stroke="#00d2ff" strokeWidth="1" />
              <text x="585" y="20" fill="#00d2ff" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PLATFORM INFRASTRUCTURE & DEVOPS DEPLOYMENT LAYER</text>
              <line x1="20" y1="28" x2="1150" y2="28" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Docker containers */}
              <g transform="translate(30, 42)">
                <rect x="0" y="0" width="190" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" />
                <text x="95" y="20" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Docker containerization</text>
                <text x="95" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Isolated clean execution stacks</text>
              </g>

              {/* Kubernetes Orchestrator */}
              <g transform="translate(250, 42)">
                <rect x="0" y="0" width="190" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                <text x="95" y="20" fill="#ffffff" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Kubernetes Cluster</text>
                <text x="95" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Automatic Scaling replica sets</text>
              </g>

              {/* CI/CD pipelines */}
              <g transform="translate(470, 42)">
                <rect x="0" y="0" width="190" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                <text x="95" y="20" fill="#ffffff" fontSize="8.5" fontFamily="monospace" textAnchor="middle">CI/CD Pipeline</text>
                <text x="95" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Build, lint, test & deploy switch</text>
              </g>

              {/* Prometheus & Grafana */}
              <g transform="translate(690, 42)">
                <rect x="0" y="0" width="220" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" filter="url(#corpReqGlow)" />
                <text x="110" y="20" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Prometheus & Grafana Alerting</text>
                <text x="110" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.7">Real-time CPU and database logs</text>
              </g>

              {/* ELK centralized logging stack */}
              <g transform="translate(940, 42)">
                <rect x="0" y="0" width="200" height="48" rx="4" fill="#0c0d1b" stroke="#ff007f" strokeWidth="0.8" />
                <text x="100" y="20" fill="#ff007f" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ELK Log Stack</text>
                <text x="100" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Centralized elastic loggers</text>
              </g>
            </g>

            {/* Floating Label: Scalable Enterprise Architecture */}
            <g transform="translate(485, 500)">
              <rect x="0" y="0" width="220" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="110" y="11" fill="#00d2ff" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Scalable Enterprise Architecture</text>
            </g>
          </svg>
        );
      case "react":
        return (
          <svg viewBox="0 0 360 280" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="reactGrad" x1="0" y1="0" x2="360" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00b4ff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </linearGradient>
              <filter id="neoReact" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Browser wireframe mockup */}
            <rect x="40" y="40" width="280" height="200" rx="8" fill="#131424" fillOpacity="0.8" stroke="#00b4ff" strokeWidth="1.2" filter="url(#neoReact)" />
            
            {/* Header controls bar */}
            <rect x="40" y="40" width="280" height="24" rx="8" fill="#00b4ff" fillOpacity="0.1" stroke="#00b4ff" strokeWidth="0.5" />
            <circle cx="52" cy="52" r="2.5" fill="#ff5f56" />
            <circle cx="60" cy="52" r="2.5" fill="#ffbd2e" />
            <circle cx="68" cy="52" r="2.5" fill="#27c93f" />
            <text x="180" y="55" fill="#00b4ff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">https://checkout.abhishek-g.dev</text>

            {/* Glassmorphism checkout panel wire */}
            <rect x="55" y="75" width="120" height="150" rx="6" fill="#000" fillOpacity="0.3" stroke="#00b4ff" strokeWidth="0.6" opacity="0.8" />
            <text x="115" y="93" fill="#00b4ff" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PAYMENT PORTAL</text>
            
            {/* Credit Card Mock */}
            <rect x="65" y="105" width="100" height="55" rx="4" fill="#131424" stroke="#00b4ff" strokeWidth="1" filter="url(#neoReact)" />
            <rect x="75" y="115" width="20" height="12" rx="2" fill="#00b4ff" opacity="0.3" />
            <line x1="75" y1="140" x2="155" y2="140" stroke="#fff" strokeWidth="1" opacity="0.5" />
            <text x="75" y="152" fill="#00b4ff" fontSize="5" fontFamily="monospace">Abhishek G</text>

            {/* Input mock lines */}
            <rect x="65" y="175" width="100" height="12" rx="3" fill="#000" stroke="#00b4ff" strokeWidth="0.5" />
            <rect x="65" y="195" width="100" height="12" rx="3" fill="#00b4ff" fillOpacity="0.2" stroke="#00b4ff" strokeWidth="0.5" />
            <text x="115" y="203" fill="#ffffff" fontSize="5" fontFamily="monospace" textAnchor="middle">SUBMIT TRANSACTION</text>

            {/* Checkout Analytics chart */}
            <rect x="185" y="75" width="120" height="150" rx="6" fill="#000" fillOpacity="0.2" stroke="#00b4ff" strokeWidth="0.5" opacity="0.8" />
            <text x="245" y="93" fill="#ffffff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" opacity="0.8">Checkout Status</text>
            
            {/* Circular Success gauge */}
            <circle cx="245" cy="140" r="22" stroke="#00b4ff" strokeWidth="3.5" strokeDasharray="100 30" fill="none" filter="url(#neoReact)" />
            <text x="245" y="143" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">99.8%</text>

            {/* Success logs */}
            <g stroke="#00b4ff" strokeWidth="0.8" opacity="0.5">
              <line x1="195" y1="180" x2="295" y2="180" />
              <line x1="195" y1="195" x2="275" y2="195" />
              <line x1="195" y1="210" x2="290" y2="210" />
            </g>
          </svg>
        );
      case "cloud":
        return (
          <svg 
            id="cloud-architecture-svg"
            viewBox="0 0 1200 680" 
            className="w-full h-full fill-none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cloudReqGrad" x1="0" y1="0" x2="1200" y2="680" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#0066ff" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#001845" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cloudResGrad" x1="1200" y1="680" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f138c5" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#8a2be2" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#240046" stopOpacity="0.1" />
              </linearGradient>
              <filter id="cloudGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="shieldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static packet flow lines connecting Client -> Security -> Gateway -> K8s */}
            <path
              d="M 170 140 H 220 M 340 180 H 400 M 580 230 H 635"
              stroke="url(#cloudReqGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 4"
              filter="url(#cloudGlow)"
            />
            <path
              d="M 635 240 H 580 M 400 190 H 340 M 220 150 H 170"
              stroke="url(#cloudResGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 4"
              filter="url(#cloudGlow)"
            />

            {/* Ingress to DevOps Pipeline pathways */}
            <path d="M 520 280 V 360" stroke="#00d2ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            {/* K8s Pods to Databases */}
            <path d="M 760 340 V 390" stroke="#f138c5" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.6" />
            {/* Observability paths */}
            <path d="M 885 180 H 940" stroke="#00d2ff" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />

            {/* 1. Client Access Layer */}
            <g transform="translate(10,50)">
              <rect x="0" y="0" width="150" height="260" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="75" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CLIENT ACCESS LAYER</text>
              <line x1="10" y1="22" x2="140" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Web Application Browser Mockup */}
              <g transform="translate(10, 30)">
                <rect x="0" y="0" width="130" height="50" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
                <circle cx="8" cy="8" r="1.5" fill="#ff5f56" />
                <circle cx="14" cy="8" r="1.5" fill="#ffbd2e" />
                <circle cx="20" cy="8" r="1.5" fill="#27c93f" />
                <text x="65" y="24" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Web Onboarding App</text>
                <text x="65" y="34" fill="#00d2ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">React.js Dashboard</text>
              </g>

              {/* Mobile Onboarding Application */}
              <g transform="translate(10, 95)">
                <rect x="0" y="0" width="130" height="50" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
                {/* Smartphone ear speaker */}
                <line x1="60" y1="5" x2="70" y2="5" stroke="#00d2ff" strokeWidth="0.5" />
                <text x="65" y="24" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Mobile Onboarding</text>
                <text x="65" y="34" fill="#00d2ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Android & iOS Native</text>
              </g>

              {/* Admin Approval Portal */}
              <g transform="translate(10, 160)">
                <rect x="0" y="0" width="130" height="50" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.5" />
                <text x="65" y="24" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Admin Portal</text>
                <text x="65" y="34" fill="#00d2ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Ops & KYC Approvals</text>
              </g>

              {/* Feature checkboxes list */}
              <g fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.5" transform="translate(12, 222)">
                <text x="0" y="0">✓ Onboard Customers</text>
                <text x="0" y="10">✓ Upload Documents</text>
                <text x="0" y="20">✓ Track App Status</text>
                <text x="0" y="30">✓ Perform Approvals</text>
              </g>
            </g>

            {/* Floating Label: Cloud Native Platform */}
            <g transform="translate(10, 15)">
              <rect x="0" y="0" width="150" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="75" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Cloud Native Platform</text>
            </g>

            {/* 2. Security Edge Layer */}
            <g transform="translate(190,50)">
              {/* Shield visual overlay */}
              <path d="M -5 -8 Q 45 -22, 95 -8 V 160 Q 45 220, -5 240 Z" fill="none" stroke="#27c93f" strokeWidth="2.5" opacity="0.25" filter="url(#shieldGlow)" />

              <rect x="0" y="0" width="90" height="260" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="45" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SECURITY</text>
              <line x1="10" y1="22" x2="80" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="10" y="42">✓ OAuth2 JWT</text>
                <text x="10" y="58">✓ Secrets Vault</text>
                <text x="10" y="74">✓ SSL/TLS Edge</text>
                <text x="10" y="90">✓ RBAC Roles</text>
                <text x="10" y="106">✓ WAF Firewalls</text>
                <text x="10" y="122">✓ IP Whitelist</text>
                <text x="10" y="138">✓ Rate Limiter</text>
                <text x="10" y="154">✓ Secure Mesh</text>
                <text x="10" y="170">✓ Image Scan</text>
                <text x="10" y="186">✓ Compliance</text>
                <text x="10" y="202">✓ Audit Trails</text>
              </g>
              <circle cx="78" cy="235" r="2.5" fill="#27c93f" />
            </g>

            {/* Floating Label: Secure Cloud Deployment */}
            <g transform="translate(180, 15)">
              <rect x="0" y="0" width="110" height="18" rx="4" fill="#27c93f" fillOpacity="0.12" stroke="#27c93f" strokeWidth="0.5" />
              <text x="55" y="11" fill="#27c93f" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Secure Cloud Deploy</text>
            </g>

            {/* 3. API Gateway / Application Layer */}
            <g transform="translate(300,50)">
              {/* Central server hub circle */}
              <circle cx="70" cy="130" r="62" fill="#0c0d1b" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="2" filter="url(#shieldGlow)" />
              <circle cx="70" cy="130" r="50" fill="#111326" stroke="#00d2ff" strokeWidth="0.8" opacity="0.3" />
              
              <text x="70" y="100" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">API GATEWAY</text>
              <text x="70" y="110" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ORCHESTRATOR</text>
              
              <g fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.8" textAnchor="middle">
                <text x="70" y="130">✓ Spring Boot GW</text>
                <text x="70" y="140">✓ Request Routing</text>
                <text x="70" y="150">✓ JWT Validator</text>
                <text x="70" y="160">✓ SSL Handshake</text>
                <text x="70" y="170">✓ Throttler Active</text>
              </g>

              {/* Technologies logos mockup */}
              <rect x="0" y="210" width="140" height="50" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.8" />
              <text x="70" y="222" fill="#00d2ff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Spring Boot & Java</text>
              <text x="70" y="234" fill="#ffffff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" opacity="0.5">REST APIs & Gateway</text>
              <text x="70" y="244" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.4">SSL/TLS Secure Channels</text>
            </g>

            {/* Floating Label: Enterprise DevOps Pipeline */}
            <g transform="translate(310, 15)">
              <rect x="0" y="0" width="150" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="75" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Enterprise DevOps Rail</text>
            </g>

            {/* 4. Containerization Layer (Docker Platform) */}
            <g transform="translate(460,50)">
              <rect x="0" y="0" width="155" height="160" rx="8" fill="#111326" fillOpacity="0.85" stroke="#00d2ff" strokeWidth="1" />
              <text x="77.5" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DOCKER WORKSPACE</text>
              <line x1="10" y1="22" x2="145" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              <g fontSize="6.5" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="12" y="42">✓ Container Platform</text>
                <text x="12" y="56">✓ Dockerized Services</text>
                <text x="12" y="70">✓ Secure Image Scan</text>
                <text x="12" y="84">✓ Isolated Execution</text>
                <text x="12" y="98">✓ Registry Server</text>
              </g>

              {/* Immutable Infrastructure label */}
              <text x="77.5" y="125" fill="#00d2ff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Immutable Infrastructure</text>

              {/* Drawing small floating docker containers cubes */}
              <g transform="translate(45, 134)" stroke="#00d2ff" strokeWidth="0.5" fill="none">
                <rect x="0" y="0" width="12" height="10" rx="1" fill="#0c0d1b" />
                <line x1="4" y1="0" x2="4" y2="10" />
                <line x1="8" y1="0" x2="8" y2="10" />
                <rect x="18" y="4" width="12" height="10" rx="1" fill="#0c0d1b" />
                <line x1="22" y1="4" x2="22" y2="14" />
                <line x1="26" y1="4" x2="26" y2="14" />
                <circle cx="50" cy="8" r="2" fill="#27c93f" />
              </g>
            </g>

            {/* Floating Label: Containerized Microservices */}
            <g transform="translate(470, 15)">
              <rect x="0" y="0" width="140" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="70" y="11" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Containerized Microservices</text>
            </g>

            {/* 5. CI/CD DevOps Pipeline Flow */}
            <g transform="translate(460,225)">
              <rect x="0" y="0" width="155" height="285" rx="8" fill="#111326" fillOpacity="0.85" stroke="#f138c5" strokeWidth="1" />
              <text x="77.5" y="16" fill="#f138c5" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">AUTOMATED DEVOPS FLOW</text>
              <line x1="10" y1="22" x2="145" y2="22" stroke="#f138c5" strokeWidth="0.5" opacity="0.4" />
              
              {/* Flow Steps boxes */}
              <g transform="translate(10, 32)" fontSize="6.5" fontFamily="monospace" fill="#ffffff">
                {/* 1. Developer Commit */}
                <rect x="0" y="0" width="135" height="30" rx="3" fill="#0c0d1b" stroke="#f138c5" strokeWidth="0.5" />
                <text x="10" y="12" fontWeight="bold">1. Dev Code Commit</text>
                <text x="10" y="22" fill="#f138c5" opacity="0.7">Git Repository Push</text>

                {/* 2. Jenkins/GitHub Build */}
                <rect x="0" y="40" width="135" height="30" rx="3" fill="#0c0d1b" stroke="#f138c5" strokeWidth="0.5" />
                <text x="10" y="52" fontWeight="bold">2. CI Pipeline Build</text>
                <text x="10" y="62" opacity="0.6">Jenkins Actions trigger</text>

                {/* 3. Docker Image Build */}
                <rect x="0" y="80" width="135" height="30" rx="3" fill="#0c0d1b" stroke="#f138c5" strokeWidth="0.5" />
                <text x="10" y="92" fontWeight="bold">3. Container Registry</text>
                <text x="10" y="102" opacity="0.6">Docker Image Compiling</text>

                {/* 4. Security Scan */}
                <rect x="0" y="120" width="135" height="35" rx="3" fill="#0c0d1b" stroke="#27c93f" strokeWidth="0.8" />
                <text x="10" y="132" fill="#27c93f" fontWeight="bold">4. Security Scanning</text>
                <text x="10" y="142" opacity="0.6">SonarQube Vulnerabilities</text>
                <circle cx="120" cy="138" r="2" fill="#27c93f" />

                {/* 5. Kubernetes Deployment */}
                <rect x="0" y="165" width="135" height="30" rx="3" fill="#0c0d1b" stroke="#f138c5" strokeWidth="0.5" />
                <text x="10" y="177" fontWeight="bold">5. Kubernetes Orchestration</text>
                <text x="10" y="187" opacity="0.6">Rolling upgrade triggered</text>

                {/* 6. OpenShift Governance Release */}
                <rect x="0" y="205" width="135" height="35" rx="3" fill="#0c0d1b" stroke="#f138c5" strokeWidth="0.8" filter="url(#cloudGlow)" />
                <text x="10" y="217" fill="#f138c5" fontWeight="bold">6. OpenShift Switch</text>
                <text x="10" y="227" opacity="0.7">Namespace Route Rollout</text>
              </g>

              <text x="77.5" y="275" fill="#f138c5" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Automated CI/CD</text>
            </g>

            {/* Floating Label: Automated CI/CD */}
            <g transform="translate(630, 15)">
              <rect x="0" y="0" width="120" height="18" rx="4" fill="#f138c5" fillOpacity="0.12" stroke="#f138c5" strokeWidth="0.5" />
              <text x="60" y="11" fill="#f138c5" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Automated CI/CD</text>
            </g>

            {/* 6. Kubernetes Cluster Layer */}
            <g transform="translate(630,50)">
              <rect x="0" y="0" width="260" height="290" rx="10" fill="#0c0d1b" fillOpacity="0.95" stroke="#00d2ff" strokeWidth="1.5" filter="url(#cloudGlow)" />
              <text x="130" y="16" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">KUBERNETES DEPLOYMENT CLUSTER</text>
              <line x1="15" y1="22" x2="245" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              {/* Master Control Plane */}
              <g transform="translate(15, 30)">
                <rect x="0" y="0" width="230" height="46" rx="4" fill="#111326" stroke="#00d2ff" strokeWidth="0.8" />
                <text x="115" y="14" fill="#00d2ff" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Master Control Node</text>
                <text x="10" y="30" fill="#ffffff" fontSize="6.5" fontFamily="monospace">✓ Ingress Controller</text>
                <text x="90" y="30" fill="#ffffff" fontSize="6.5" fontFamily="monospace">✓ Dynamic Load Balancer</text>
                <text x="180" y="30" fill="#ffffff" fontSize="6.5" fontFamily="monospace">✓ Config & Secrets</text>
                <circle cx="218" cy="12" r="3" fill="#27c93f" />
              </g>

              {/* Worker Nodes with Pod Auto Scaling */}
              <g transform="translate(15, 86)">
                <rect x="0" y="0" width="230" height="190" rx="6" fill="#111326" fillOpacity="0.6" stroke="#00d2ff" strokeWidth="0.5" />
                <text x="115" y="14" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Worker Nodes Grid (Pods Auto-Scaling)</text>
                
                {/* Pod A: Onboarding Service */}
                <g transform="translate(10, 24)">
                  <rect x="0" y="0" width="100" height="46" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" />
                  <text x="50" y="16" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Customer Pod</text>
                  <text x="50" y="28" fill="#00d2ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle">Customer Onboarding</text>
                  <text x="50" y="38" fill="#27c93f" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RUNNING (3 Replicas)</text>
                  <circle cx="90" cy="10" r="2.5" fill="#27c93f" />
                </g>

                {/* Pod B: Document Processing */}
                <g transform="translate(120, 24)">
                  <rect x="0" y="0" width="100" height="46" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                  <text x="50" y="16" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Document Pod</text>
                  <text x="50" y="28" fill="#ffffff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Document Processing</text>
                  <text x="50" y="38" fill="#27c93f" fontSize="5" fontFamily="monospace" textAnchor="middle">ACTIVE (2 Replicas)</text>
                </g>

                {/* Pod C: Workflow Engine */}
                <g transform="translate(10, 78)">
                  <rect x="0" y="0" width="100" height="46" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" />
                  <text x="50" y="16" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Workflow Engine</text>
                  <text x="50" y="28" fill="#00d2ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle">State Orchestrator</text>
                  <text x="50" y="38" fill="#27c93f" fontSize="5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RUNNING (4 Replicas)</text>
                  <circle cx="90" cy="10" r="2.5" fill="#27c93f" />
                </g>

                {/* Pod D: Support & Services (User Management, Audit, Verification, Notifications) */}
                <g transform="translate(120, 78)">
                  <rect x="0" y="0" width="100" height="46" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                  <text x="50" y="16" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle">Support Pods</text>
                  <text x="50" y="28" fill="#ffffff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" opacity="0.6">User, Notification, Audit</text>
                  <text x="50" y="38" fill="#27c93f" fontSize="5" fontFamily="monospace" textAnchor="middle">ACTIVE (5 Replicas)</text>
                </g>

                {/* Self Healing & Auto Scaling Labels */}
                <g fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.6" transform="translate(10, 138)">
                  <text x="0" y="0">✓ Self-Healing Containers</text>
                  <text x="0" y="10">✓ Automated Pod Scale Sets</text>
                  <text x="0" y="20">✓ Dynamic Workload Balancer</text>
                </g>
                <g fontSize="6" fontFamily="monospace" fill="#ffffff" opacity="0.6" transform="translate(120, 138)">
                  <text x="0" y="0">✓ Replica Sets Controller</text>
                  <text x="0" y="10">✓ High-Availability Pods</text>
                  <text x="0" y="20">✓ ConfigMaps & Secrets</text>
                </g>
                
                {/* Horizontal scale indicators */}
                <line x1="10" y1="172" x2="220" y2="172" stroke="#00d2ff" strokeWidth="0.5" opacity="0.3" />
                <text x="115" y="182" fill="#00d2ff" fontSize="6.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Horizontal Pod Autoscaling (HPA) Active</text>
              </g>
            </g>

            {/* Floating Label: Kubernetes Orchestration */}
            <g transform="translate(630, 514)">
              <rect x="0" y="0" width="125" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="62.5" y="11" fill="#00d2ff" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">K8s Orchestration</text>
            </g>

            {/* 7. OpenShift Enterprise Platform Manager */}
            <g transform="translate(630,355)">
              <rect x="0" y="0" width="260" height="135" rx="8" fill="#120c24" stroke="#f138c5" strokeWidth="1.2" opacity="0.9" />
              <text x="130" y="16" fill="#f138c5" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RED HAT OPENSHIFT MANAGEMENT</text>
              <line x1="15" y1="22" x2="245" y2="22" stroke="#f138c5" strokeWidth="0.5" opacity="0.4" />
              
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.8" transform="translate(15, 36)">
                <text x="0" y="0">✓ Central control plane monitoring</text>
                <text x="0" y="14">✓ CI/CD Integration & Pipelines</text>
                <text x="0" y="28">✓ Route isolation & Namespace manager</text>
                <text x="0" y="42">✓ Governance dashboard & Alerts</text>
                <text x="0" y="56">✓ Secure deployment policy enforcement</text>
                <text x="0" y="70">✓ Enterprise policy compliance controller</text>
              </g>
              <circle cx="240" cy="115" r="3" fill="#27c93f" filter="url(#shieldGlow)" />
            </g>

            {/* Floating Label: OpenShift Deployment */}
            <g transform="translate(765, 514)">
              <rect x="0" y="0" width="125" height="18" rx="4" fill="#f138c5" fillOpacity="0.12" stroke="#f138c5" strokeWidth="0.5" />
              <text x="62.5" y="11" fill="#f138c5" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">OpenShift Deploy</text>
            </g>

            {/* 8. Monitoring & Observability Layer */}
            <g transform="translate(910,50)">
              <rect x="0" y="0" width="130" height="215" rx="10" fill="#0c0d1b" fillOpacity="0.95" stroke="#00d2ff" strokeWidth="1.2" />
              <text x="65" y="16" fill="#00d2ff" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">OBSERVABILITY</text>
              <line x1="10" y1="22" x2="120" y2="22" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="12" y="42">✓ Prometheus</text>
                <text x="12" y="56">✓ Grafana Dash</text>
                <text x="12" y="70">✓ ELK Logging</text>
                <text x="12" y="84">✓ Distributed Trace</text>
                <text x="12" y="98">✓ System Alerts</text>
              </g>

              {/* Dynamic graph visualisation */}
              <g transform="translate(10, 115)">
                <rect x="0" y="0" width="110" height="70" rx="3" fill="#111326" stroke="#00d2ff" strokeWidth="0.5" />
                <text x="55" y="10" fill="#00d2ff" fontSize="5.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">GRAFANA LIVE CORE</text>
                
                {/* Wave diagram */}
                <path d="M 5 50 Q 25 20, 45 40 T 85 25 T 105 45" fill="none" stroke="#27c93f" strokeWidth="1.2" filter="url(#shieldGlow)" />
                <path d="M 5 55 Q 25 35, 45 45 T 85 35 T 105 50" fill="none" stroke="#f138c5" strokeWidth="0.8" opacity="0.7" />
                
                <text x="5" y="65" fill="#ffffff" fontSize="5" fontFamily="monospace" opacity="0.5">CPU: 42%</text>
                <text x="65" y="65" fill="#ffffff" fontSize="5" fontFamily="monospace" opacity="0.5">RAM: 5.2GB</text>
              </g>
              <circle cx="115" cy="40" r="2.5" fill="#27c93f" />
            </g>

            {/* Floating Label: Highly Scalable Infrastructure */}
            <g transform="translate(900, 15)">
              <rect x="0" y="0" width="150" height="18" rx="4" fill="#27c93f" fillOpacity="0.12" stroke="#27c93f" strokeWidth="0.5" />
              <text x="75" y="11" fill="#27c93f" fontSize="6.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Highly Scalable Infra</text>
            </g>

            {/* 9. Storage & Data Layer */}
            <g transform="translate(910,285)">
              <rect x="0" y="0" width="130" height="205" rx="8" fill="#111326" fillOpacity="0.85" stroke="#f138c5" strokeWidth="1" />
              <text x="65" y="16" fill="#f138c5" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DATA STACK</text>
              <line x1="10" y1="22" x2="120" y2="22" stroke="#f138c5" strokeWidth="0.5" opacity="0.4" />
              
              <g fontSize="7" fontFamily="monospace" fill="#ffffff" opacity="0.8">
                <text x="12" y="42">✓ PostgreSQL DB</text>
                <text x="12" y="56">✓ Redis Cache</text>
                <text x="12" y="70">✓ Persistent Vol</text>
                <text x="12" y="84">✓ Object Store</text>
                <text x="12" y="98">✓ Encrypted Connection</text>
              </g>

              {/* Cylindrical cluster visuals */}
              <g transform="translate(45, 115)">
                <ellipse cx="20" cy="10" rx="14" ry="4" fill="none" stroke="#f138c5" strokeWidth="0.75" />
                <path d="M 6 10 V 26 A 14 4 0 0 0 34 26 V 10" fill="none" stroke="#f138c5" strokeWidth="0.75" />
                <ellipse cx="20" cy="18" rx="14" ry="4" fill="none" stroke="#f138c5" strokeWidth="0.75" />
                <ellipse cx="20" cy="26" rx="14" ry="4" fill="none" stroke="#f138c5" strokeWidth="0.75" opacity="0.6" filter="url(#cloudGlow)" />
                <text x="20" y="38" fill="#ffffff" fontSize="6" fontFamily="monospace" textAnchor="middle" opacity="0.7">PostgreSQL</text>
              </g>
              
              {/* Redis cylindrical visual */}
              <g transform="translate(15, 115)">
                <ellipse cx="10" cy="10" rx="8" ry="2.5" fill="none" stroke="#00d2ff" strokeWidth="0.5" />
                <path d="M 2 10 V 20 A 8 2.5 0 0 0 18 20 V 10" fill="none" stroke="#00d2ff" strokeWidth="0.5" />
                <ellipse cx="10" cy="15" rx="8" ry="2.5" fill="none" stroke="#00d2ff" strokeWidth="0.5" />
                <ellipse cx="10" cy="20" rx="8" ry="2.5" fill="none" stroke="#00d2ff" strokeWidth="0.5" opacity="0.6" />
                <text x="10" y="30" fill="#ffffff" fontSize="5" fontFamily="monospace" textAnchor="middle" opacity="0.6">Redis</text>
              </g>
            </g>

            {/* 10. Platform Infrastructure Layer */}
            <g transform="translate(10,540)">
              <rect x="0" y="0" width="1180" height="100" rx="10" fill="#111326" fillOpacity="0.9" stroke="#00d2ff" strokeWidth="1" />
              <text x="590" y="20" fill="#00d2ff" fontSize="9.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RED HAT ENTERPRISE LINUX COREOS & CLOUD-NATIVE DEPLOYMENT INFRASTRUCTURE</text>
              <line x1="20" y1="28" x2="1160" y2="28" stroke="#00d2ff" strokeWidth="0.5" opacity="0.4" />
              
              <g transform="translate(40, 42)">
                <rect x="0" y="0" width="200" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" />
                <text x="100" y="20" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Linux OS Core Kernel</text>
                <text x="100" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">RHEL CoreOS host systems</text>
              </g>

              <g transform="translate(265, 42)">
                <rect x="0" y="0" width="200" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                <text x="100" y="20" fill="#ffffff" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Network Router Mesh</text>
                <text x="100" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Istio Service Mesh routing systems</text>
              </g>

              <g transform="translate(490, 42)">
                <rect x="0" y="0" width="200" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.6" />
                <text x="100" y="20" fill="#ffffff" fontSize="8.5" fontFamily="monospace" textAnchor="middle">Persistent Volume Store</text>
                <text x="100" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">RedHat OpenShift Local Volume sets</text>
              </g>

              <g transform="translate(715, 42)">
                <rect x="0" y="0" width="200" height="48" rx="4" fill="#0c0d1b" stroke="#00d2ff" strokeWidth="0.8" filter="url(#cloudGlow)" />
                <text x="100" y="20" fill="#00d2ff" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Grafana Observability</text>
                <text x="100" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.7">Real-time alerts, graphs, logs stack</text>
              </g>

              <g transform="translate(940, 42)">
                <rect x="0" y="0" width="200" height="48" rx="4" fill="#0c0d1b" stroke="#ff007f" strokeWidth="0.8" />
                <text x="100" y="20" fill="#ff007f" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CI/CD Deploy Pipeline</text>
                <text x="100" y="34" fill="#ffffff" fontSize="7" fontFamily="monospace" textAnchor="middle" opacity="0.6">Automated clear verification build</text>
              </g>
            </g>

            {/* Floating Label: Scalable Enterprise Architecture */}
            <g transform="translate(460, 514)">
              <rect x="0" y="0" width="155" height="18" rx="4" fill="#00d2ff" fillOpacity="0.12" stroke="#00d2ff" strokeWidth="0.5" />
              <text x="77.5" y="11" fill="#00d2ff" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Scalable Architecture</text>
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  const getSvgElementId = (type) => {
    switch (type) {
      case "iso8583":
        return "banking-architecture-svg";
      case "corporate":
        return "corporate-architecture-svg";
      case "cloud":
        return "cloud-architecture-svg";
      default:
        return "banking-architecture-svg";
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
              className="h2 xl:mt-12"
            >
              My projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] xl:max-w-[480px] mx-auto lg:mx-0 text-white/70 text-xs xl:text-sm leading-relaxed text-left"
            >
              From secure banking gateways and high-throughput ISO8583 payment engines to scalable Kubernetes cloud infrastructure and sleek full-stack client dashboards. Explore my featured portfolio below.
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
            <WorkSlider onProjectClick={(item) => setSelectedProject(item)} />
          </motion.div>
        </div>
      </div>
      <Bulb />

      {/* Project Details & Architecture Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in pointer-events-auto">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)} />
          
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-[850px] bg-[#101224]/95 border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row pointer-events-auto max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden"
          >
            {/* Close Cross button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-accent/20 text-white hover:text-accent flex items-center justify-center font-bold text-lg transition-all duration-300"
            >
              &times;
            </button>

            {/* Left side: Context details & Structural SVG */}
            <div className="w-full md:w-[38%] bg-black/30 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 text-left shrink-0">
              <span className="text-[10px] text-accent uppercase font-mono tracking-widest font-semibold mb-2 block animate-pulse">
                System Architecture
              </span>
              <h3 className="text-lg font-bold text-white leading-snug mb-3">
                {selectedProject.title}
              </h3>
              
              {/* Custom SVG Architecture Illustration - Click to expand */}
              {(selectedProject.type === "iso8583" || selectedProject.type === "corporate" || selectedProject.type === "cloud") ? (
                <div 
                  onClick={() => setIsDiagramExpanded(true)}
                  className="relative w-full rounded-lg overflow-hidden border border-white/10 shadow-lg mb-4 bg-black/40 flex items-center justify-center cursor-pointer group/diag hover:border-accent/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/diag:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] uppercase font-mono tracking-widest font-semibold z-10 select-none">
                    Click to Expand Map ⛶
                  </div>
                  {renderProjectSvg(selectedProject.type)}
                </div>
              ) : (
                <div className="relative w-full rounded-lg overflow-hidden border border-white/10 shadow-lg mb-4 bg-black/40 flex items-center justify-center">
                  {renderProjectSvg(selectedProject.type)}
                </div>
              )}

              <div className="space-y-3 text-[11px] text-white/55 border-t border-white/5 pt-4">
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Focus:</span>
                  {selectedProject.metric}
                </div>
                <div>
                  <span className="font-semibold text-white/70 block uppercase tracking-wider text-[9px] text-accent mb-0.5">Core Tech Stack:</span>
                  {selectedProject.tech.join(" • ")}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 px-4 py-2 bg-accent hover:bg-accent/80 text-white font-medium text-[10px] uppercase tracking-wider rounded-lg transition-all duration-300 self-start"
              >
                Close View
              </button>
            </div>

            {/* Right side: Project Deliverables and Details */}
            <div className="flex-1 p-6 xl:p-8 flex flex-col justify-start md:max-h-[480px] overflow-y-auto text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-white/10 pb-2">
                Project Overview
              </h4>
              
              <p className="text-xs text-white/80 leading-relaxed mb-5 font-light">
                {selectedProject.description}
              </p>

              <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                Technical Highlights & Scope
              </h4>
              
              <ul className="space-y-3 pr-2">
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

      {/* Fullscreen SVG Architecture Diagram Overlay */}
      {isDiagramExpanded && selectedProject && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fade-in pointer-events-auto">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsDiagramExpanded(false)} />
          
          <div className="relative w-full max-w-[1280px] h-[90vh] bg-[#0c0d1b]/98 border border-white/10 rounded-2xl shadow-2xl z-10 flex flex-col p-6 pointer-events-auto">
            
            {/* Styles for Gentle Pulse Glow without neon */}
            <style>{`
              @keyframes gentle-pulse-glow {
                0%, 100% { box-shadow: 0 0 8px rgba(0, 180, 255, 0.25); border-color: rgba(0, 180, 255, 0.4); }
                50% { box-shadow: 0 0 18px rgba(0, 180, 255, 0.5); border-color: rgba(0, 180, 255, 0.8); }
              }
              .animate-pulse-glow {
                animation: gentle-pulse-glow 2s infinite ease-in-out;
              }
            `}</style>

            {/* Header info */}
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] text-accent uppercase font-mono tracking-widest font-semibold block">
                  Enterprise Architecture Blueprint
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {selectedProject.title} — System Flow Map
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Download Button with Gentle Glow */}
                <button
                  onClick={() => handleDownloadSvg(selectedProject.title, getSvgElementId(selectedProject.type))}
                  className="px-4 py-2 bg-accent/25 hover:bg-accent border border-accent text-accent hover:text-white rounded-lg font-mono text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer select-none animate-pulse-glow flex items-center gap-1.5"
                >
                  Download Diagram ⭳
                </button>

                <button
                  onClick={() => setIsDiagramExpanded(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent/20 text-white hover:text-accent flex items-center justify-center font-bold text-xl transition-all duration-300"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Massive Diagram Display Container */}
            <div className="flex-1 w-full bg-black/40 rounded-xl overflow-hidden border border-white/5 shadow-inner flex items-center justify-center p-4">
              {renderProjectSvg(selectedProject.type)}
            </div>

            {/* Footer metrics */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10 text-white/50 text-[10px] sm:text-xs font-mono">
              <div>System Model: Direct Execution Flow Path</div>
              <div className="text-accent uppercase font-semibold tracking-wider">PCI-DSS Ready • High Availability Banking Switch</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
