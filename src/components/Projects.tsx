import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { GitHub, Launch } from '../assets/icons';
import { NASA, CrwnClthing, EventManagement, Portfolio } from '../assets/images';

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
    title: "NASA Project",
    description: "A mini project exploring outer space, featuring a React.js frontend with Arwes for immersive animations and sound effects, and a backend powered by Node.js and Express.js.",
    image: NASA,
    github: "https://github.com/Mochimucin/nasa-project",
    liveDemo: "https://nasa-app-nlcw.onrender.com"
  },
  {
    title: "Crown Clothing Store",
    description: "An e-commerce clothing store with a React frontend, using Firebase to manage product data and user authentication via Google, Facebook, and email login.",
    image: CrwnClthing,
    github: "https://github.com/Mochimucin/crwn-clothing-v2",
    liveDemo: "https://crwnclothing-chi.netlify.app/"
  },
  {
    title: "Event Management Website",
    description: "A website built specifically for event managers, featuring a React + TypeScript frontend, with a NestJS backend and PostgreSQL as the database.",
    image: EventManagement,
    github: "https://github.com/Mochimucin/event-management-app",
  }
];

const Projects = () => {
  return (
    <Box id="Projects" sx={{ px: 4, py: 10, backgroundColor: '#0d0d1a' }}>
      <Typography variant="h4" align="center" color="white" gutterBottom>
        My Projects
      </Typography>

      <Typography variant="h6" align="center" color="white" sx={{ mt: 2, fontSize: "20px" }}>
        Explore projects built with React, Vue, Node.js, Express.js, NestJS, Java, Material-UI, JavaScript, TypeScript, SCSS, and HTML. Showcasing clean UI, full-stack functionality, and performance-driven development.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mt: 4
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: '#1a1a2e',
              color: 'white',
              maxWidth: 320,
              width: '100%',
              flex: '1 1 280px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6
              }
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: 22, mb: 1 }}>{project.title}</Typography>
              <Typography variant="body2" sx={{ fontSize: 16, height: '100px' }}>{project.description}</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: project.liveDemo ? 'space-evenly' : 'start',
                my: '10px',
                mx: project.liveDemo ? 0 : '10px'
              }}
            >
              <Button
                size="small"
                color="primary"
                href={project.github}
                target="_blank"
                startIcon={<GitHub />}
                sx={{
                  ml: project.liveDemo ? 0 : '5px'
                }}
              >
                GitHub
              </Button>
              {project.liveDemo && (
                <Button
                  size="small"
                  color="primary"
                  href={project.liveDemo}
                  target="_blank"
                  startIcon={<Launch />}
                >
                  Live Demo
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Projects;