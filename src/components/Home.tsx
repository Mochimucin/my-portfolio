import { Box, Typography, Button, Avatar, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '../assets/icons';
import { motion } from 'framer-motion';
import Muhsin from '../assets/Muhsin.png';

const Home = () => {
  return (
    <Box
      id="Home"
      sx={{
        minHeight: '80vh',
        bgcolor: '#0e0e1a',
        color: 'white',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 3, md: 13 },
        py: { xs: 5, md: 0 },
        gap: { xs: 0, md: 4 },
      }}
    >
      {/* Right Side - Avatar or Illustration (First on mobile) */}
      <Box 
        flex={0.5} 
        textAlign="center"
        sx={{ order: { xs: 1, md: 2 } }}
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Avatar
            alt="Muhsin Avatar"
            src={Muhsin}
            sx={{
              width: { xs: 250, md: 300 },
              height: { xs: 250, md: 300 },
              mx: 'auto',
              border: '4px solid #90caf9',
            }}
          />
        </motion.div>
      </Box>

      {/* Left Side - Text (Second on mobile) */}
      <Box 
        flex={1}
        sx={{ order: { xs: 2, md: 1 } }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant='h4' component='h1' gutterBottom>
            Hi, I'm <span style={{ color: '#90caf9' }}>Muhsin</span>
          </Typography>
          <Typography variant='h5' component='h2' gutterBottom>
            Frontend Developer
          </Typography>
          <Typography variant='body1' sx={{ mb: 3 }}>
            I craft interactive and responsive websites using React, Vue, and modern tools.
            Passionate about clean code, UI/UX, and performance optimization.
          </Typography>

          {/* Button */}
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button
              variant='outlined'
              color='primary'
              href='/Muhammad Muhsin(Resume).pdf'
              // download
              target='_blank'
              rel='noopener noreferrer'
              sx={{ 
                borderRadius: '20px',
                color: 'white', 
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'black',
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              View Resume
            </Button>
            <Button
              variant='outlined'
              color='primary'
              href='#Projects'
              sx={{ 
                borderRadius: '20px', 
                color: 'white', 
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  borderColor: 'transparent',
                  color: 'white',
                },
              }}
            >
              View Projects
            </Button>
          </Stack>

          {/* Social Icon */}
          <Stack direction='row' spacing={2}>
            <IconButton href='https://github.com/yourusername' target='_blank' sx={{ color: 'white' }}>
            <GitHub />
            </IconButton>
            <IconButton href='https://linkedin.com/in/yourusername' target='_blank' sx={{ color: 'white' }}>
            <LinkedIn />
            </IconButton>
            <IconButton href='mailto:youremail@example.com' target='_blank' sx={{ color: 'white' }}>
            <Email />
            </IconButton>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;