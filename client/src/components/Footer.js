import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Chaitanya Rathod
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, maxWidth: 300 }}>
              Mechanical Engineering student with a passion for software development, combining engineering principles with programming skills.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
              <IconButton 
                color="inherit" 
                aria-label="LinkedIn" 
                component={Link} 
                href="https://www.linkedin.com/in/chaitanya-rathod-94835a235/" 
                target="_blank"
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="GitHub" 
                component={Link} 
                href="https://github.com/chaitanya-rathod" 
                target="_blank"
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="Email" 
                component={Link} 
                href="mailto:chaitanya.rathod811@gmail.com"
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link href="/" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                About
              </Link>
              <Link href="/projects" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Projects
              </Link>
              <Link href="/skills" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Skills
              </Link>
              <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Contact
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1.5, color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Pune, Maharashtra, India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1.5, color: 'secondary.main' }} />
                <Link 
                  href="mailto:chaitanya.rathod811@gmail.com" 
                  color="inherit" 
                  underline="hover"
                  sx={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  chaitanya.rathod811@gmail.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1.5, color: 'secondary.main' }} />
                <Link 
                  href="tel:+917796807582" 
                  color="inherit" 
                  underline="hover"
                  sx={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  +91 7796807582
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} Chaitanya Rathod. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mt: { xs: 1, sm: 0 } }}>
            Built with React, Material UI, Express.js, and MongoDB
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 