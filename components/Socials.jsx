import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiFileDownloadLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@abhishekg2766",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_0_abhi_0._/",
    Icon: RiInstagramLine,
  },
  {
    name: "Github",
    link: "https://github.com/BotJavadoc",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-g-2001-profile/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Resume",
    link: "/resume/Abhishek_Resume.pdf",
    Icon: RiFileDownloadLine,
    isDownload: true,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name === "Resume" ? "Download Resume" : social.name}
          href={social.link}
          download={social.isDownload ? "Abhishek_G_Resume.pdf" : undefined}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : social.name === "Resume"
              ? "bg-white/10 hover:bg-accent text-accent hover:text-white rounded-full p-[6px] flex items-center justify-center scale-105 hover:scale-115 shadow-sm hover:shadow-accent/40"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
