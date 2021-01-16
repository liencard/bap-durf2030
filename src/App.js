import React from 'react';
import Authentication from './components/Authentication';

function App() {
  return (
    // nu eerst authentication ipv onmiddelijk al content en sidebar
    <>
      <Authentication />
    </>
  );
}

export default App;
