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
            I'm Muhsin, a frontend developer with a passion for crafting clean, user-friendly interfaces. I specialize in building interactive web applications using modern technologies like React, Vue, and JavaScript.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I hold a Bachelor's degree in Computer Science (Software Engineering) and have 1 year of experience at the National Registration Department in Putrajaya.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Outside of coding, I enjoy learning new technologies, solving UI challenges, and continuously improving my skills.
          </Typography>

          <Divider sx={{ bgcolor: 'gray', mb: 2 }} />

          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="React" color="primary" />
            <Chip label="Vue.js" color="primary" />
            <Chip label="JavaScript" color="primary" />
            <Chip label="HTML" color="primary" />
            <Chip label="CSS" color="primary" />
            <Chip label="Express.js" color="primary" />
            <Chip label="Nest.js" color="primary" />
            <Chip label="Git" color="primary" />
          </Stack>
        </motion.div>
      </Box>

      {/* Right Avatar */}
      <Box flex={0.5} textAlign="center" sx={{ display: { xs: "none", md: "block"} }}>
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