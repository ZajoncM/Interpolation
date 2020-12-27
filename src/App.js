import React, { useState } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
import Dropzone from './components/Dropzone';
import DataContext from './context/DataContext';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  return (
    <DataContext.Provider value={{ data, setData, setError }}>
      <GlobalStyle />
      <Grid item xs={12}>
        <Dropzone />
      </Grid>
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
