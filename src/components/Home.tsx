import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Muhsin from "../assets/Muhsin.png";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Home = () => {
  return (
    <section id="Home" className="flex min-h-[80vh] flex-col items-center justify-between gap-0 bg-bg-darkest px-3 py-5 text-white md:flex-row md:gap-4 md:px-[104px] md:py-0">
      {/* Right Side - Avatar or Illustration (First on mobile) */}
      <div className="order-1 flex-[0.5] text-center md:order-2">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Muhsin}
            alt="Muhsin Avatar"
            className="mx-auto my-5 h-[250px] w-[250px] rounded-full border-4 border-accent-blue object-cover md:my-0 md:h-[300px] md:w-[300px]"
          />
        </motion.div>
      </div>

      {/* Left Side - Text (Second on mobile) */}
      <div className="order-2 flex-1 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-2 text-4xl font-normal">
            Hi, I'm <span className="text-accent-blue">Muhsin</span>
          </h1>
          <h2 className="mb-2 text-2xl font-normal">
            Frontend, Backend or Fullstack Developer
          </h2>
          <p className="mb-6 leading-normal">
            Proficient in building full-stack web applications using React.js and Vue.js on the frontend, and Node.js (Express.js, NestJS) on the backend.
            Experienced in crafting modular, maintainable code with JavaScript, TypeScript, Java, HTML, SCSS/CSS, Material-UI and Bootstrap.
            Focused on scalable architecture, performance optimization, and delivering robust, production-ready solutions.
          </p>

          {/* Button */}
          <div className="mb-6 flex flex-row gap-4">
            <a
              href="/Muhammad Muhsin(Resume).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[20px] border border-[#1976d2] bg-[#1976d2] px-[15px] py-[5px] text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-black"
            >
              View Resume
            </a>
            <a
              href="#Projects"
              className="rounded-[20px] border border-white px-[15px] py-[5px] text-sm font-medium uppercase tracking-wide text-white transition-colors hover:border-transparent hover:bg-[#1976d2]"
            >
              View Projects
            </a>
          </div>

          {/* Social Icon */}
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/Mochimucin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-muhsin-c6341r/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:muhammadmuhsin67@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home;