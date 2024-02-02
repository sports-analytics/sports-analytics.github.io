import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
