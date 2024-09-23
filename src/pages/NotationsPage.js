import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link } from '@material-ui/core';

const notations = [
  {
    name: 'GlycoCT',
    description: 'A common format used in many glycan structure databases.',
    url: 'https://github.com/glycoinfo/GLIC/blob/master/documentation/carbohydrate_sequence/GlycoCT_V3.pdf'
  },
  // Add more notations here as needed
];

const NotationsPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Notations
      </Typography>
      <Typography paragraph>
        This page introduces standardized formats and symbols used in glycobiology. These notations ensure consistency and clarity in representing complex glycan structures and related information.
      </Typography>
      <List>
        {notations.map((notation, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={
                <Link href={notation.url} target="_blank" rel="noopener noreferrer">
                  <Typography variant="h6">{notation.name}</Typography>
                </Link>
              }
              secondary={notation.description}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default NotationsPage;