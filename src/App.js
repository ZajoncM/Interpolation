import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Snackbar } from '@material-ui/core';
import Interpolation from './components/Interpolation';
import Table from './components/Table';
import Dropzone from './components/Dropzone';
import DataContext from './context/DataContext';
import GlobalStyle from './styles/globalStyles';

const StyledWrapper = styled(Grid)`
  min-height: 100vh;
  padding: 8rem 2rem 0 2rem;
  max-width: 100vw;
`;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  console.log(data);
  return (
    <DataContext.Provider value={{ data, setData, setError }}>
      <GlobalStyle />
      <StyledWrapper container spacing={2} className="App">
        {data.length ? (
          <>
            <Grid container justify="center" item xs={12} md={3}>
              <Table />
            </Grid>
            <Grid container justify="center" item xs={12} md={9}>
              <Interpolation />
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Dropzone />
          </Grid>
        )}
      </StyledWrapper>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={error}
        onClose={() => setError(false)}
        message="Błędny format danych"
      />
    </DataContext.Provider>
  );
}

export default App;
