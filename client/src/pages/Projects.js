import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button, 
  Chip,
  Stack
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Wanderlust',
      description: 'A full-stack web application for travelers to discover, review, and share their favorite destinations. Features include user authentication, interactive maps, and a review system.',
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Bootstrap'],
      github: 'https://github.com/chaitanya-rathod/wanderlust'
    },
    {
      id: 2,
      title: 'Trading Web App',
      description: 'A real-time stock trading platform with market data visualization, portfolio management, and paper trading functionality. Integrates with financial APIs for live market data.',
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/chaitanya-rathod/TradingWebApp'
    },
    {
      id: 3,
      title: 'Doctor Consulting web App',
      description: 'A comprehensive online platform that allows patients to connect with doctors for virtual consultations. The app provides features such as secure patient record management, appointment scheduling and virtual therapy sessions. Doctors can generate and share digital prescriptions, while patients can access personalized health recommendations. The app ensures a smooth, responsive user experience, enabling seamless communication between patients and healthcare providers, all in a secure environment.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['JavaScript', 'HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'WebRTC'],
      github: 'https://github.com/chaitanya-rathod/MedConsultation'
    },
    {
      id: 4,
      title: ' Air Traffic Control',
      description: 'Developed a multi-threaded simulation to manage aircraft landings and takeoffs, optimizing runway usage with deadlock prevention and synchronization mechanisms.',
      image: 'https://images.unsplash.com/photo-1591669570514-346f58fc6f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      technologies: ['Java', 'Multithreading', 'Synchronization'],
      github: 'https://github.com/chaitanya-rathod/Air-Traffic-Control'
    }
  ];

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          My Projects
        </Typography>
        
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          Here are some of the key projects I've worked on, showcasing my skills in both mechanical engineering and software development. Each project represents a unique challenge and learning opportunity.
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <Card 
                elevation={3} 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                    {project.technologies.map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    size="small" 
                    startIcon={<GitHubIcon />} 
                    href={project.github} 
                    target="_blank"
                  >
                    Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Want to see more?
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            startIcon={<GitHubIcon />}
            href="https://github.com/chaitanya-rathod" 
            target="_blank"
            sx={{ mt: 2 }}
          >
            Visit My GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 