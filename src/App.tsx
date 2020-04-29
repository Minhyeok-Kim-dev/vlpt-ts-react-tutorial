import React from 'react';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(name);
  }

  return (
    <Greetings name='Jack' optional='야호' onClick={onClick} />
  );
}

export default App;
