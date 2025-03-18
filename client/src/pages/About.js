import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Card,
  CardContent
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Mechanical Engineering',
      institution: 'Vishwakarma Institute of Technology, Pune',
      year: '2021 - 2025',
      description: 'Pursuing BTech with strong passion for developing software skills alongside my core engineering knowledge.'
    }
  ];

  const coursework = [
    'Object-Oriented Programming (OOP)',
    ' Data Structures and Algorithms',
    ' Database Management',
    'Operating Systems',
    'Computer Network',
    'Computer-Aided Design',
    'Web Development',
    ' Internet of Things (IoT)',
    'Data Science'
  ];

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          About Me
        </Typography>

        {/* Introduction */}
        <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
          <Typography variant="h5" gutterBottom>
          Software Developer with a Mechanical Engineering Background
          </Typography>
          <Typography variant="body1" paragraph>
          I am a final-year Mechanical Engineering student at Vishwakarma Institute of Technology, Pune, with a strong passion for software development. My diverse background integrates mechanical engineering principles with advanced programming skills, enabling me to tackle problems from both technical and digital perspectives.          </Typography>
          <Typography variant="body1" paragraph>
          Throughout my academic journey, I have focused on developing software solutions that address real-world engineering challenges. This interdisciplinary approach has allowed me to work on projects that merge mechanical systems with digital technologies, from simulation tools to data-driven automation processes.          </Typography>
          <Typography variant="body1">
          I am proficient in multiple programming languages and frameworks, including Java, Python, JavaScript, and the MERN stack (MongoDB, Express.js, React, Node.js). Additionally, I have experience with Docker for containerization and AWS for cloud-based deployments. I am committed to continuously learning and keeping up with the latest technologies and industry trends to deliver innovative, scalable solutions.

</Typography>
        </Paper>

        {/* Education */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 3 }}>
          Education
        </Typography>
        <Grid container spacing={3}>
          {education.map((edu, index) => (
            <Grid item xs={12} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <SchoolIcon fontSize="large" color="primary" />
                    </Grid>
                    <Grid item xs={12} md={11}>
                      <Typography variant="h6" component="h3">
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {edu.year}
                      </Typography>
                      <Typography variant="body1">
                        {edu.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Coursework */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 3 }}>
          Relevant Coursework
        </Typography>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <BookIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item xs={12} md={11}>
              <List>
                <Grid container spacing={2}>
                  {coursework.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <CheckCircleIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={course} />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
            </Grid>
          </Grid>
        </Paper>

        {/* Career Goals */}
        <Typography variant="h4" gutterBottom sx={{ mt: 6, mb: 3 }}>
          Career Goals
        </Typography>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <WorkIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item xs={12} md={11}>
              <Typography variant="body1" paragraph>
              My goal is to leverage my unique blend of mechanical engineering expertise and software development skills to drive innovation and solve complex, real-world challenges. I am particularly focused on:              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Developing software solutions that enhance and optimize engineering applications" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Collaborating on interdisciplinary projects that integrate mechanical systems with cutting-edge digital technologies" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Committing to continuous learning and growth in both engineering and software development to stay at the forefront of industry advancements" />
                </ListItem>
                {/* <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary="Continuous learning and professional growth in both engineering and software development" />
                </ListItem> */}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default About; 