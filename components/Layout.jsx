import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Abhishek G | Portfolio</title>
        <meta
          name="description"
          content="Abhishek G is a Java Full Stack Developer specializing in Java, Spring Boot, Microservices, and advanced web technologies."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, java, spring boot, microservices, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Abhishek G" />
        <meta name="theme-color" content="#00b4ff" />
        <link rel="icon" href="/abhishek-favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/abhishek-favicon.png" type="image/png" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
