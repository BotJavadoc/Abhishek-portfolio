import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/why-hire-me"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <svg
          viewBox="0 0 148 148"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        >
          <defs>
            <path
              id="circlePath"
              d="M 74, 74 m -54, 0 a 54,54 0 1,1 108,0 a 54,54 0 1,1 -108,0"
              fill="none"
            />
          </defs>
          <text className="font-sora font-extrabold uppercase fill-white text-[11px] tracking-[1.5px]">
            <textPath xlinkHref="#circlePath" startOffset="0%" textLength="334" lengthAdjust="spacing">
              • WHY HIRE ME • WHY HIRE ME • WHY HIRE ME 
            </textPath>
          </text>
        </svg>
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
