import { FC } from 'react';
import { Box, Typography, Avatar, Stack, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Muhsin from '../assets/Muhsin.png';

const About: FC = () => {
  return (
    <Box
      id="About"
      sx={{
        minHeight: { xs: '75vh', md: '80vh' },
        bgcolor: '#1c1c2b',
        color: 'white',
        px: { xs: 3, md: 13 },
        py: { xs: 5, md: 8 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 5,
      }}
    >
      {/* Left Content */}
      <Box flex={1}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I'm Muhsin, a full-stack web developer with a strong focus on building scalable, maintainable, and responsive applications. I specialize in frontend development using React.js, Vue.js, Material-UI and Bootstrap, and have solid experience with backend technologies including Node.js, Express.js, and NestJS.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            With a Bachelor's degree in Computer Science (Software Engineering) and 1 year of hands-on experience at the National Registration Department in Putrajaya, I’ve worked on real-world systems that demand reliability and performance.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            I’m passionate about clean architecture, performance optimization, and delivering seamless user experiences. Outside of development, I enjoy exploring new frameworks, tackling UI/UX challenges, and sharpening my skills through continuous learning.
          </Typography>

          <Divider sx={{ bgcolor: 'gray', mb: 2 }} />

          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            <Chip label="React.js" color="primary" />
            <Chip label="Vue.js" color="primary" />
            <Chip label="Material-UI" color="primary" />
            <Chip label="Bootstrap" color="primary" />
            <Chip label="Node.js" color="primary" />
            <Chip label="Express.js" color="primary" />
            <Chip label="Nest.js" color="primary" />
            <Chip label="Java" color="primary" />
            <Chip label="HTML" color="primary" />
            <Chip label="SCSS/CSS" color="primary" />
            <Chip label="JavaScript" color="primary" />
            <Chip label="TypeScript" color="primary" />
          </Stack>
        </motion.div>
      </Box>

      {/* Right Avatar */}
      <Box flex={0.5} textAlign="center" sx={{ display: { md: "none", lg: "block" } }}>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Avatar
            alt="Muhsin Avatar"
            src={Muhsin}
            sx={{
              width: { xs: 180, md: 250 },
              height: { xs: 180, md: 250 },
              mx: 'auto',
              border: '4px solid #90caf9',
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default About;