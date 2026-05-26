import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CodingIllustration = () => {
  const [currentLength, setCurrentLength] = useState(0);

  const tokens = [
    { text: "// Spring Boot REST API\n", type: "comment" },
    { text: "@RestController\n", type: "keyword" },
    { text: "@RequestMapping", type: "keyword" },
    { text: "(", type: "operator" },
    { text: "\"/api/v1\"", type: "string" },
    { text: ")\n", type: "operator" },
    { text: "public class ", type: "keyword" },
    { text: "PortfolioController ", type: "variable" },
    { text: "{\n\n", type: "operator" },
    
    { text: "    @Autowired\n", type: "keyword" },
    { text: "    private ", type: "keyword" },
    { text: "DataService ", type: "variable" },
    { text: "service;\n\n", type: "operator" },

    { text: "    @PostMapping", type: "keyword" },
    { text: "(", type: "operator" },
    { text: "\"/send-data\"", type: "string" },
    { text: ")\n", type: "operator" },
    { text: "    public ", type: "keyword" },
    { text: "ResponseEntity ", type: "variable" },
    { text: "sendData(\n", type: "operator" },
    { text: "        @RequestBody ", type: "keyword" },
    { text: "Portfolio ", type: "variable" },
    { text: "data\n", type: "operator" },
    { text: "    ) {\n", type: "operator" },
    { text: "        // Sync to portfolio webpage\n", type: "comment" },
    { text: "        boolean ", type: "keyword" },
    { text: "ok ", type: "variable" },
    { text: "= ", type: "operator" },
    { text: "service.", type: "variable" },
    { text: "sync", type: "method" },
    { text: "(data);\n", type: "operator" },
    { text: "        return ", type: "keyword" },
    { text: "ResponseEntity.", type: "variable" },
    { text: "ok", type: "method" },
    { text: "(ok);\n", type: "operator" },
    { text: "    }\n", type: "operator" },
    { text: "}", type: "operator" }
  ];

  const totalLength = tokens.reduce((acc, curr) => acc + curr.text.length, 0);

  useEffect(() => {
    let timeoutId;
    let incrementSpeed = 30;

    const runTyping = () => {
      setCurrentLength((prev) => {
        if (prev < totalLength) {
          return prev + 1;
        } else {
          clearInterval(timeoutId);
          timeoutId = setTimeout(() => {
            setCurrentLength(0);
          }, 4000);
          return prev;
        }
      });
    };

    const intervalId = setInterval(runTyping, incrementSpeed);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [totalLength, currentLength]);

  const getVisibleTokens = () => {
    let count = 0;
    const visible = [];
    for (const token of tokens) {
      if (count >= currentLength) break;
      const remaining = currentLength - count;
      if (token.text.length <= remaining) {
        visible.push(token);
        count += token.text.length;
      } else {
        visible.push({ ...token, text: token.text.slice(0, remaining) });
        count += remaining;
        break;
      }
    }
    return visible;
  };

  const visibleTokens = getVisibleTokens();

  const tokenColors = {
    comment: "text-gray-500 italic",
    keyword: "text-rose-400 font-semibold drop-shadow-[0_0_6px_rgba(244,63,94,0.4)]",
    variable: "text-amber-300 drop-shadow-[0_0_6px_rgba(252,211,77,0.4)]",
    operator: "text-white/60",
    property: "text-sky-300 drop-shadow-[0_0_6px_rgba(125,211,252,0.4)]",
    string: "text-emerald-300 font-medium drop-shadow-[0_0_6px_rgba(110,231,183,0.4)]",
    method: "text-purple-400 drop-shadow-[0_0_6px_rgba(192,132,252,0.4)]",
  };

  return (
    <div className="relative w-full max-w-[440px] h-full flex flex-col justify-center select-none font-mono text-xs leading-[20px] p-6 z-10">
      {/* Background Soft Glow (hologram look) */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-[3px] rounded-3xl -z-10" />
      
      {/* Code Area Wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex gap-4 text-left"
      >
        {/* Line Numbers */}
        <div className="text-white/20 select-none text-right flex flex-col font-light pr-2 border-r border-white/5 text-[10px] leading-[20px]">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i}>{String(i + 1).padStart(2, "0")}</span>
          ))}
        </div>

        {/* Code Lines */}
        <div className="flex-1 whitespace-pre relative min-h-[290px] font-mono tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-xs leading-[20px]">
          {visibleTokens.map((token, i) => (
            <span key={i} className={tokenColors[token.type] || "text-white"}>
              {token.text}
            </span>
          ))}
          {/* Blinking cursor */}
          <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-accent animate-pulse align-middle" />
        </div>
      </motion.div>
    </div>
  );
};

export default CodingIllustration;
