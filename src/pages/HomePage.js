// import React, { useState } from 'react';
// import { 
//   Container, 
//   Typography, 
//   Grid, 
//   Paper, 
//   List, 
//   ListItem, 
//   ListItemText,
//   Snackbar
// } from '@mui/material';
// import { Alert } from '@mui/material';
// import SearchBar from '../components/SearchBar';

// // Mock data for search results
// const mockSearchResults = [
//   { id: 1, name: "Glycan A", description: "A complex N-linked glycan" },
//   { id: 2, name: "Glycan B", description: "An O-linked glycan" },
//   { id: 3, name: "Glycan C", description: "A hybrid glycan structure" },
// ];

// const HomePage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSearch = async (searchTerm) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Simulate an API call with setTimeout
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // In a real application, this would make an API call to the backend
//       // For now, we'll just filter our mock data
//       const results = mockSearchResults.filter(
//         result => result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   result.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//       setSearchResults(results);

//       // Simulate a random error (1 in 4 chance)
//       if (Math.random() < 0.25) {
//         throw new Error("An error occurred while searching. Please try again.");
//       }
//     } catch (err) {
//       setError(err.message);
//       setSearchResults([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCloseError = () => {
//     setError(null);
//   };

//   return (
//     <Container maxWidth="lg">
//       <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '20px' }}>
//         Human Glycome Atlas - TOHSA Homepage
//       </Typography>
      
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <SearchBar onSearch={handleSearch} isLoading={isLoading} />
//         </Grid>
        
//         {searchResults.length > 0 && (
//           <Grid item xs={12}>
//             <Paper>
//               <Typography variant="h6" style={{ padding: '10px' }}>Search Results</Typography>
//               <List>
//                 {searchResults.map((result) => (
//                   <ListItem key={result.id}>
//                     <ListItemText 
//                       primary={result.name}
//                       secondary={result.description}
//                     />
//                   </ListItem>
//                 ))}
//               </List>
//             </Paper>
//           </Grid>
//         )}

//         {searchResults.length === 0 && !isLoading && !error && (
//           <Grid item xs={12}>
//             <Paper style={{ padding: '10px' }}>
//               <Typography>No results found. Try a different search term.</Typography>
//             </Paper>
//           </Grid>
//         )}
        
//         <Grid item xs={12} md={3}>
//           <Paper>
//             <Typography variant="h6">Categories in TOHSA</Typography>
//             <List>
//               {['Resources', 'Tools', 'Standards'].map((text) => (
//                 <ListItem button key={text}>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>
//           </Paper>
//         </Grid>
        
//         <Grid item xs={12} md={9}>
//           <Paper>
//             <Typography variant="h6">Visual Elements</Typography>
//             {/* Placeholder for visual elements */}
//             <Typography>Human Sugar Chain Precision Map</Typography>
//             <Typography>Human Disease-Related Sugar Chain Catalog</Typography>
//             <Typography>Glycolytic Biosynthesis Atlas</Typography>
//           </Paper>
//         </Grid>
        
//         <Grid item xs={12}>
//           <Paper>
//             <Typography variant="h6">News and Topics</Typography>
//             <Typography>Glycan Profile Project</Typography>
//             <Typography>Latest Updates</Typography>
//           </Paper>
//         </Grid>
//       </Grid>

//       <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
//         <Alert onClose={handleCloseError} severity="error">
//           {error}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default HomePage;

import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const history = useNavigate();

  const handleSearch = (searchTerm) => {
    history(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '20px' }}>
        Human Glycome Atlas - TOHSA Homepage
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBar onSearch={handleSearch} />
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Paper>
            <Typography variant="h6">Categories in TOHSA</Typography>
            <List>
              {['Resources', 'Tools', 'Standards'].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={9}>
          <Paper>
            <Typography variant="h6">Visual Elements</Typography>
            {/* Placeholder for visual elements */}
            <Typography>Human Sugar Chain Precision Map</Typography>
            <Typography>Human Disease-Related Sugar Chain Catalog</Typography>
            <Typography>Glycolytic Biosynthesis Atlas</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h6">News and Topics</Typography>
            <Typography>Glycan Profile Project</Typography>
            <Typography>Latest Updates</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
