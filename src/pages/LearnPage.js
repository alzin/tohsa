import React from 'react';
import { Container, Typography, Grid, Paper, List, ListItem, ListItemText, Link } from '@material-ui/core';

const studyMaterial = [
  { question: "What are Glycans?", url: "https://www.glytech-inc.com/hello_glycan/what-are-glycans/" },
  // Add more study material questions here
];

const dataResources = [
  { name: "UniProt", description: "A comprehensive protein sequence and functional information database.", url: "https://www.uniprot.org/" },
  // Add more data resources here
];

const LearnPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Learn
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Study Material
            </Typography>
            <List>
              {studyMaterial.map((item, index) => (
                <ListItem key={index} button component="a" href={item.url} target="_blank" rel="noopener noreferrer">
                  <ListItemText primary={item.question} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Data Resources
            </Typography>
            <List>
              {dataResources.map((resource, index) => (
                <ListItem key={index}>
                  <ListItemText 
                    primary={
                      <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                        <Typography variant="subtitle1"><strong>{resource.name}</strong></Typography>
                      </Link>
                    }
                    secondary={resource.description}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Video Tutorial
            </Typography>
            <Typography>
              Coming Soon
            </Typography>
            {/* You can add a placeholder image or icon here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LearnPage;