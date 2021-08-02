import Form from './Components/Form';
import { ChakraProvider} from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
    <div className="App">
      <Form />
    </div>
    </ChakraProvider>
  );
}

export default App;
