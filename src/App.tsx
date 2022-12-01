import { Box } from '@mui/material';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Menu from './components/menu';
import Search from './components/search';

const App: React.FC = () => {
  return (
    <Box sx={{
      bgcolor: 'background.paper'
    }}>
      <BrowserRouter basename='/'>
            <Switch>
              <Route
                path={'/search/:step'}
                component={Search}
              />
              <Route
                path={'/'}
                component={Menu}
              />
            </Switch>
          </BrowserRouter>
    </Box>
  );
};

export default App;
