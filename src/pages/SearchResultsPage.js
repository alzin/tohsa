import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, CircularProgress } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

// Mock data for glycans
const mockGlycans = [
  { id: 1, name: "Glycan A", formula: "C6H12O6", description: "A simple monosaccharide" },
  { id: 2, name: "Glycan B", formula: "C12H22O11", description: "A common disaccharide" },
  { id: 3, name: "Glycan C", formula: "C18H32O16", description: "A complex trisaccharide" },
  { id: 4, name: "Glycan D", formula: "C24H42O21", description: "A branched tetrasaccharide" },
  { id: 5, name: "Glycan E", formula: "C30H52O26", description: "A high-mannose N-glycan" },
];

const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // In a real application, this would be an API call
    const searchTerm = new URLSearchParams(location.search).get('q');
    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const filteredResults = mockGlycans.filter(glycan => 
        glycan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        glycan.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
      setLoading(false);
    }, 1000);
  }, [location.search]);

  if (loading) {
    return (
      <Container maxWidth="md" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      <Paper>
        <List>
          {results.map((glycan) => (
            <ListItem button key={glycan.id} component={Link} to={`/glycan/${glycan.id}`}>
              <ListItemText 
                primary={glycan.name} 
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="textPrimary">
                      {glycan.formula}
                    </Typography>
                    {" — " + glycan.description}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      {results.length === 0 && (
        <Typography variant="body1" style={{ marginTop: '1rem' }}>
          No results found. Please try a different search term.
        </Typography>
      )}
    </Container>
  );
};

export default SearchResultsPage;