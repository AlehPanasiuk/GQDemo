/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import SearchResults from './searchResults';
import useIsolations from './useIsolations';
import { useParams } from 'react-router-dom';

interface SearchParams {
  step: string
}

const Search: React.FC = () => {
  const { step } = useParams<SearchParams>();
  const { loading, data, error } = useIsolations();

  console.log(step);
  return (
        <Box className="App">
        {loading && (<Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>)}
        {!loading && (data != null) && <SearchResults data={data}/>}
      </Box>
  );
};

export default Search;
