import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Paper,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Avatar,
  Divider,
  IconButton
} from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Home = () => {
  const theme = useTheme();

  const skills = [
    'Java', 'Python', 'JavaScript', 'React', 'Node.js', 
    'Express', 'MongoDB', 'Material UI', 'HTML/CSS'
  ];

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
          backgroundSize: '200% 200%',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(90deg, #ffffff 0%, #e0e0e0 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                Mechanical Engineer & Full-Stack Developer
              </Typography>
              <Typography 
                variant="h5" 
                paragraph
                sx={{ mb: 4, opacity: 0.95, fontWeight: 300, color: '#fff' }}
              >
                BTech student at Vishwakarma Institute of Technology, Pune
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  component={Link}
                  to="/projects"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 500, px: 3, py: 1.5 }}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  component={Link}
                  to="/contact"
                  sx={{ 
                    fontWeight: 500, 
                    px: 3, 
                    py: 1.5,
                    borderColor: 'rgba(255,255,255,0.9)',
                    color: '#fff',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,1)',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                    }
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href="/resume.pdf"
                  target="_blank"
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    background: 'linear-gradient(90deg, #ff8a00 0%, #e52e71 100%)',
                    boxShadow: '0 4px 20px rgba(229,46,113,0.2)',
                    borderRadius: '30px',
                    px: 4,
                    py: 1.5,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.07)',
                      boxShadow: '0 8px 32px rgba(229,46,113,0.25)',
                      background: 'linear-gradient(90deg, #e52e71 0%, #ff8a00 100%)',
                    },
                  }}
                >
                  Resume
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box 
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  position: 'relative',
                }}
              >
                <Paper 
                  elevation={16}
                  sx={{ 
                    p: 4, 
                    borderRadius: 4,
                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                    transform: 'rotate(-3deg)',
                    maxWidth: '90%',
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 2 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 70, height: 70 }}>
                      <EngineeringIcon sx={{ fontSize: 40 }} />
                    </Avatar>
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main, width: 70, height: 70 }}>
                      <CodeIcon sx={{ fontSize: 40 }} />
                    </Avatar>
                  </Box>
                  <Typography variant="h5" align="center" color="text.primary" gutterBottom fontWeight={600}>
                    Bridging Engineering & Software
                  </Typography>
                  <Typography variant="body1" align="center" color="text.secondary">
                    Combining mechanical engineering principles with modern software development to create innovative solutions.
                  </Typography>
                </Paper>
                <Box 
                  sx={{ 
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    borderRadius: 4,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'rotate(3deg) translateY(10px)',
                    zIndex: 1,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Overview */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          align="center" 
          sx={{ 
            mb: 1,
            fontWeight: 600,
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: theme.palette.secondary.main,
              borderRadius: '2px',
            }
          }}
        >
          Technical Skills
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          color="text.secondary" 
          sx={{ mb: 6, maxWidth: 700, mx: 'auto', mt: 3 }}
        >
          A diverse skill set spanning both mechanical engineering and software development
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
          {skills.map((skill) => (
            <Chip 
              key={skill} 
              label={skill} 
              color="primary" 
              variant="outlined"
              sx={{ 
                m: 0.5, 
                fontSize: '1rem', 
                py: 2.5,
                px: 1,
                borderRadius: '16px',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(44, 62, 80, 0.1)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Education & Experience */}
      <Box sx={{ bgcolor: 'rgba(44, 62, 80, 0.03)', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 1,
              fontWeight: 600,
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: theme.palette.secondary.main,
                borderRadius: '2px',
              }
            }}
          >
            Education & Experience
          </Typography>
          <Typography 
            variant="body1" 
            align="center" 
            color="text.secondary" 
            sx={{ mb: 6, maxWidth: 700, mx: 'auto', mt: 3 }}
          >
            My academic journey and professional experience
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                      <SchoolIcon />
                    </Avatar>
                    <Typography variant="h5" component="h3" fontWeight={600}>
                      Education
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom fontWeight={500}>
                      B.Tech in Mechanical Engineering
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Vishwakarma Institute of Technology, Pune
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      2020 - 2024
                    </Typography>
                    <Typography variant="body2">
                      Pursuing BTech with strong passion for developing software skills alongside my core engineering knowledge.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ bgcolor: theme.palette.secondary.main, mr: 2 }}>
                      <WorkIcon />
                    </Avatar>
                    <Typography variant="h5" component="h3" fontWeight={600}>
                      Experience
                    </Typography>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom fontWeight={500}>
                      Web Development Projects
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      Self-directed & Academic Projects
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      2021 - Present
                    </Typography>
                    <Typography variant="body2">
                      Developed multiple web applications using modern technologies like React, Node.js, and MongoDB, focusing on creating intuitive user experiences.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Quick About */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 1,
              fontWeight: 600,
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: theme.palette.secondary.main,
                borderRadius: '2px',
              }
            }}
          >
            About Me
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            align="center" 
            sx={{ mb: 4, mt: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            I'm a Mechanical Engineering student with a passion for software development. 
            I combine my engineering background with programming skills to create innovative solutions 
            that bridge the gap between mechanical systems and digital technologies.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary"
              component={Link}
              to="/about"
              endIcon={<ArrowForwardIcon />}
              size="large"
              sx={{ px: 4 }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Scroll-to-top Button */}
      <Box sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1200 }}>
        <IconButton
          color="primary"
          size="large"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            bgcolor: 'rgba(44,62,80,0.8)',
            color: '#fff',
            boxShadow: '0 2px 8px rgba(44,62,80,0.2)',
            '&:hover': { bgcolor: 'primary.main' },
          }}
        >
          <KeyboardArrowUpIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Home; 