import { ExternalLink } from 'lucide-react';
import { 
  NASA, CrwnClthing, EventManagement, 
  Portfolio, Ecommerce 
} from '../assets/images';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  liveDemo?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React, TypeScript, and MUI.",
    image: Portfolio,
    github: "https://github.com/Mochimucin/my-portfolio",
  },
  {
    title: "Mochishop — Full-Stack E-Commerce Marketplace",
    description: "A multi-seller marketplace with Next.js 16 and NestJS, featuring JWT auth with refresh-token rotation, guest-to-account cart merging, and real Billplz payment integration with HMAC-verified webhooks. PostgreSQL via Prisma, rate limiting, and Helmet for production-grade security.",
    image: Ecommerce,
    github: "https://github.com/Mochimucin/e-commerce",
    liveDemo: "https://mochishop-frontend.vercel.app/"
  },
  // {
  //   title: "NASA Project",
  //   description: "A mini project exploring outer space, featuring a React.js frontend with Arwes for immersive animations and sound effects, and a backend powered by Node.js and Express.js.",
  //   image: NASA,
  //   github: "https://github.com/Mochimucin/nasa-project",
  //   liveDemo: "https://nasa-app-nlcw.onrender.com"
  // },
  // {
  //   title: "Crown Clothing Store",
  //   description: "An e-commerce clothing store with a React frontend, using Firebase to manage product data and user authentication via Google, Facebook, and email login.",
  //   image: CrwnClthing,
  //   github: "https://github.com/Mochimucin/crwn-clothing-v2",
  //   liveDemo: "https://crwnclothing-chi.netlify.app/"
  // },
  // {
  //   title: "Event Management Website",
  //   description: "A website built specifically for event managers, featuring a React + TypeScript frontend, with a NestJS backend and PostgreSQL as the database.",
  //   image: EventManagement,
  //   github: "https://github.com/Mochimucin/event-management-app",
  // }
];

const Projects = () => {
  return (
    <section id="Projects" className="bg-bg-primary px-8 py-20 scroll-mt-20">
      <h2 className="mb-2 text-center text-4xl font-normal text-white">
        My Projects
      </h2>

      <p className="mt-4 text-center text-xl text-white">
        Explore projects built with React, Vue, Node.js, Express.js, NestJS, Java, Material-UI, JavaScript, TypeScript, SCSS, and HTML. 
        Showcasing clean UI, full-stack functionality, and performance-driven development.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] flex-[1_1_280px] rounded bg-bg-secondary text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="mb-2 text-[22px] font-medium">{project.title}</h3>
              <p className="line-clamp-4 min-h-[100px] text-base text-white">
                {project.description}
              </p>
            </div>
            <div className={`flex flex-row my-2.5 ${
              project.liveDemo ? 'justify-evenly mx-0' : 'justify-start mx-2.5'
            }`}>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1 rounded px-2 py-1 text-sm font-medium text-[#1976d2] hover:bg-[#1976d2]/10 ${
                  project.liveDemo ? '' : 'ml-[5px]'
                }`}
              >
                <GithubIcon /> GitHub
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded px-2 py-1 text-sm font-medium text-[#1976d2] hover:bg-[#1976d2]/10"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;