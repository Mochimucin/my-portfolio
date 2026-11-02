import { FC } from "react";
import { motion } from "framer-motion";
import Muhsin from '../assets/Muhsin.png';

const skills = [
  'React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Bootstrap',
  'Node.js', 'Express.js', 'Nest.js', 'Java', 'HTML', 'SCSS/CSS',
  'JavaScript', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT Authentication', 'Docker',
]

const About: FC = () => {
  return (
    <section id="About" className="flex min-h-[75vh] scroll-mt-20 flex-col items-center gap-10 bg-bg-tertiary px-6 py-10 text-white md:min-h-[80vh] md:flex-row md:px-[104px] md:py-16">
      {/* Left Content */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-2 text-4xl font-normal">About Me</h2>

          <p className="mb-4 leading-normal">
            I'm Muhsin, a full-stack web developer with a strong focus on building scalable, maintainable, and responsive applications. 
            I specialize in frontend development using React.js, Next.js, Vue.js, Tailwind CSS and Material-UI, and have solid experience with backend technologies including Node.js, 
            Express.js, and NestJS — building RESTful APIs backed by PostgreSQL and Prisma, with JWT-based authentication and secure payment integrations.
          </p>
          <p className="mb-4 leading-normal">
            I also have growing expertise in Docker, currently advancing my skills in containerization 
            and DevOps workflows to build and deploy applications more efficiently.
          </p>
          <p className="mb-4 leading-normal">
            With a Bachelor's degree in Computer Science (Software Engineering) and 3 years of hands-on experience 
            at the National Registration Department in Putrajaya, I've worked on real-world systems that demand reliability and performance.
          </p>
          <p className="mb-6 leading-normal">
            I'm passionate about clean architecture, performance optimization, and delivering seamless user experiences. 
            Outside of development, I enjoy exploring new frameworks, tackling UI/UX challenges, and sharpening my skills through continuous learning.
          </p>

          <hr className="mb-4 border-gray-500" />

          <h3 className="mb-2 text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#1976d2] px-3 py-1 text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Avatar */}
      <div className="hidden flex-[0.5] text-center lg:block">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Muhsin}
            alt="Muhsin Avatar"
            className="mx-auto h-[250px] w-[250px] rounded-full border-4 border-accent-blue object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About;