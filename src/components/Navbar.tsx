import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Button, ListItemButton } from "@mui/material";
import { HomeIcon, InfoIcon, WorkIcon, ContactMailIcon, CloseIcon, MenuIcon, SchoolIcon } from '../assets/icons';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("Home");

  const navItems = [
    { text: 'Home', icon: <HomeIcon sx={{ color: 'white' }} /> },
    { text: 'About', icon: <InfoIcon sx={{ color: 'white' }} /> },
    { text: 'Projects', icon: <WorkIcon sx={{ color: 'white' }} /> },
    { text: 'Education', icon: <SchoolIcon sx={{ color: 'white' }} /> },
    { text: 'Contact', icon: <ContactMailIcon sx={{ color: 'white' }} /> },
  ];

  // useEffect for Navbar becomes thinner and smaller.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // useEffect for Active Link in Navbar.
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let item of navItems) {
        const id = item.text;
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  }

  return(
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // slight white transparency
          backdropFilter: 'blur(10px)', // the frosted glass effect
          WebkitBackdropFilter: 'blur(10px)', // for Safari support
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // soft shadow
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)', // optional bottom border
          transition: 'all 0.3s ease',
          paddingY: isScrolled ? 0 : 1,
        }}
      >
        <Toolbar>
          {/* Logo or Name */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              fontSize: isScrolled ? '1.0rem' : '1.3rem',
              transition: 'font-size 0.3s ease'
            }}
          >
            Mochi Portfolio
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item.text} 
                color="inherit" 
                onClick={() => {
                  const section = document.getElementById(item.text);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                sx={{ 
                  marginLeft: 2,
                  color: activeSection === item.text ? "#90caf9" : "white",
                  fontWeight: activeSection === item.text ? "bold" : "normal",
                  borderBottom: activeSection === item.text ? "2px solid #90caf9" : "none",
                  position: "relative",
                  overflow: "hidden",
                  '&:after': {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "white",
                    transition: "width 0.3s ease"
                  },
                  '&:hover:after': {
                    width: "100%",
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              width: 250,
              background: '#1c1c2b',
              color: 'white'
            }
          }
        }}
      >
        <Box
          sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}
        >
          <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navItems.map(({ text, icon }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  const section = document.getElementById(text);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                  setDrawerOpen(false);
                }}
                sx={{
                  backgroundColor: activeSection === text ? 'rgba(255,255,255,0.1)' : '#1c1c2b',
                  px: 3,
                  py: 1.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {icon}
                  <ListItemText
                    primary={text}
                    sx={{ ml: 2 }}
                    slotProps={{
                      primary: {
                        sx: {
                          fontWeight: activeSection === text ? 'bold' : 'normal',
                          color: activeSection === text ? '#90caf9' : 'white',
                        }
                      }
                    }}
                  />
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Navbar;