import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routing/Routing'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
