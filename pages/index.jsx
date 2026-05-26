import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import CodingIllustration from "../components/CodingIllustration";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-28 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 xl:mb-4 mb-2"
          >
            Hi, My Name Is <br />
            <span className="text-accent">Abhishek</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-5 text-white/70 text-xs xl:text-sm leading-relaxed space-y-2 text-left"
          >
            <span className="block">
              I am a <strong className="text-white font-semibold">Java Full Stack Developer</strong> who focuses on building highly performant applications having an optimal design. Java, Spring Boot, Microservices, and advanced web technologies such as JavaScript are among the things that I specialize in with hands-on expertise in the banking and payments domain.
            </span>
            <span className="block">
              I enjoy working on complex backend problems, designing robust APIs, and ensuring that users have an enjoyable experience using full-stack development. My focus is always on building scalable microservices as well as responsive frontend applications that make an impact.
            </span>
            <span className="block font-medium text-accent">
              Please check out my portfolio and see what I{"'"}ve been up to recently.
            </span>
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="hidden xl:block w-[750px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* bg img */}
        <div
          role="img"
          style={{
            maskImage: "linear-gradient(to right, transparent 20%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 1) 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 20%, rgba(0, 0, 0, 0.45) 55%, rgba(0, 0, 0, 1) 100%)"
          }}
          className="bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-60"
          aria-hidden
        />
      </div>

      {/* particles and coding illustration container */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* particles */}
        <div className="w-full h-full absolute inset-0">
          <ParticlesContainer />
        </div>

        {/* coding illustration */}
        <div className="hidden xl:flex w-full h-full max-w-[440px] max-h-[440px] absolute top-[26%] right-[8%] items-center justify-center z-10 pointer-events-auto">
          <CodingIllustration />
        </div>
      </div>
    </div>
  );
};

export default Home;
