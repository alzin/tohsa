import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link } from '@material-ui/core';

const ontologies = [
  {
    name: 'GlycoRDF',
    description: 'A standard representation for storing Glycomics data in RDF format.',
    url: 'https://github.com/glycoinfo/GlycoRDF'
  },
  // Add more ontologies here as needed
];

const OntologiesPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Ontologies
      </Typography>
      <Typography paragraph>
        This page serves as a resource for standardized representations of glycomics data, offering access to various ontologies that facilitate the understanding and integration of glycoconjugate data.
      </Typography>
      <List>
        {ontologies.map((ontology, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={
                <Link href={ontology.url} target="_blank" rel="noopener noreferrer">
                  <Typography variant="h6">{ontology.name}</Typography>
                </Link>
              }
              secondary={ontology.description}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default OntologiesPage;