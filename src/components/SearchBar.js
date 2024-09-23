import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, CircularProgress } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search the HGA database"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <IconButton onClick={handleSearch} disabled={isLoading}>
                <SearchIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && !isLoading) {
          handleSearch();
        }
      }}
      disabled={isLoading}
    />
  );
};

export default SearchBar;