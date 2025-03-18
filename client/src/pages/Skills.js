import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  LinearProgress, 
  Divider,
  Card,
  CardContent,
  CardHeader,
  Avatar
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChatIcon from '@mui/icons-material/Chat';

const Skills = () => {
  const programmingSkills = [
    { name: 'Java', level: 90, icon: <DataObjectIcon sx={{ mr: 1, color: '#007396' }} /> },
    { name: 'Python', level: 85, icon: <DataObjectIcon sx={{ mr: 1, color: '#3776AB' }} /> },
    { name: 'JavaScript', level: 88, icon: <JavascriptIcon sx={{ mr: 1, color: '#F7DF1E' }} /> },
    { name: 'HTML/CSS', level: 85, icon: <HtmlIcon sx={{ mr: 1, color: '#E34F26' }} /> },
    { name: 'C/C++', level: 75, icon: <DataObjectIcon sx={{ mr: 1, color: '#00599C' }} /> }
  ];

  const webDevelopmentSkills = [
    { name: 'React', level: 85, icon: <DataObjectIcon sx={{ mr: 1, color: '#61DAFB' }} /> },
    { name: 'Node.js', level: 80, icon: <DataObjectIcon sx={{ mr: 1, color: '#339933' }} /> },
    { name: 'Express.js', level: 82, icon: <DataObjectIcon sx={{ mr: 1, color: '#000000' }} /> },
    { name: 'Material UI', level: 85, icon: <DesignServicesIcon sx={{ mr: 1, color: '#0081CB' }} /> },
    { name: 'Bootstrap', level: 80, icon: <DesignServicesIcon sx={{ mr: 1, color: '#7952B3' }} /> },
    { name: 'Docker', level: 80, icon: <StorageOutlinedIcon sx={{ mr: 1, color: '#2496ED' }} /> },
    { name: 'AWS', level: 75, icon: <CloudIcon sx={{ mr: 1, color: '#FF9900' }} /> }
  ];

  const databaseSkills = [
    { name: 'MongoDB', level: 85, icon: <StorageIcon sx={{ mr: 1, color: '#47A248' }} /> },
    { name: 'MySQL', level: 80, icon: <StorageIcon sx={{ mr: 1, color: '#4479A1' }} /> },
    { name: 'Firebase', level: 75, icon: <StorageIcon sx={{ mr: 1, color: '#FFCA28' }} /> }
  ];

  const engineeringSkills = [
    { name: 'CAD Design', level: 90, icon: <DesignServicesIcon sx={{ mr: 1, color: '#FF3C00' }} /> },
    { name: 'Project Management', level: 85, icon: <ManageAccountsIcon sx={{ mr: 1, color: '#0052CC' }} /> },
    { name: 'CFD (Computational Fluid Dynamics) Simulation', level: 80, icon: <DataObjectIcon sx={{ mr: 1, color: '#00B4E4' }} /> }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90, icon: <PsychologyIcon sx={{ mr: 1, color: '#4CAF50' }} /> },
    { name: 'Team Collaboration', level: 90, icon: <GroupsIcon sx={{ mr: 1, color: '#2196F3' }} /> },
    { name: 'Project Management', level: 80, icon: <ManageAccountsIcon sx={{ mr: 1, color: '#9C27B0' }} /> },
    { name: 'Communication', level: 85, icon: <ChatIcon sx={{ mr: 1, color: '#FF5722' }} /> },
    { name: 'Time Management', level: 85, icon: <AccessTimeIcon sx={{ mr: 1, color: '#607D8B' }} /> }
  ];

  const renderSkillBars = (skills) => {
    return skills.map((skill, index) => (
      <Box key={index} sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {skill.icon}
            <Typography variant="body1">{skill.name}</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={skill.level} 
          sx={{ 
            height: 8, 
            borderRadius: 5,
            backgroundColor: 'rgba(0,0,0,0.1)',
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
            }
          }} 
        />
      </Box>
    ));
  };

  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          My Skills
        </Typography>
        
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          As a Mechanical Engineering student with a passion for software development, I've developed a diverse set of skills that span both disciplines. Here's an overview of my technical and soft skills.
        </Typography>
        
        <Grid container spacing={4}>
          {/* Programming Languages */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <CodeIcon />
                  </Avatar>
                }
                title={<Typography variant="h5">Programming Languages</Typography>}
              />
              <Divider />
              <CardContent>
                {renderSkillBars(programmingSkills)}
              </CardContent>
            </Card>
          </Grid>
          
          {/* Web Development */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <DesignServicesIcon />
                  </Avatar>
                }
                title={<Typography variant="h5">Web Development</Typography>}
              />
              <Divider />
              <CardContent>
                {renderSkillBars(webDevelopmentSkills)}
              </CardContent>
            </Card>
          </Grid>
          
          {/* Database */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'error.main' }}>
                    <StorageIcon />
                  </Avatar>
                }
                title={<Typography variant="h5">Database Technologies</Typography>}
              />
              <Divider />
              <CardContent>
                {renderSkillBars(databaseSkills)}
              </CardContent>
            </Card>
          </Grid>
          
          {/* Engineering Skills */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'warning.main' }}>
                    <BuildIcon />
                  </Avatar>
                }
                title={<Typography variant="h5">Engineering Skills</Typography>}
              />
              <Divider />
              <CardContent>
                {renderSkillBars(engineeringSkills)}
              </CardContent>
            </Card>
          </Grid>
          
          {/* Soft Skills */}
          <Grid item xs={12}>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'success.main' }}>
                    <SchoolIcon />
                  </Avatar>
                }
                title={<Typography variant="h5">Soft Skills</Typography>}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {softSkills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.level} 
                          color="success"
                          sx={{ 
                            height: 8, 
                            borderRadius: 5,
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 5,
                            }
                          }} 
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 8, p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h5" gutterBottom align="center">
            Continuous Learning
          </Typography>
          <Typography variant="body1" paragraph align="center">
          I’m continually expanding my skill set and staying current with emerging technologies and industry trends. At present, I’m focusing on deepening my expertise in cloud computing, artificial intelligence, and advanced simulation techniques for engineering applications.          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 