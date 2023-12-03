import { AppProvider } from './Context/AppContext';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';

import GasPriceConverter from './Components/GasPriceConverter';
import FuelCostCalculator from './Components/FuelCostCalculator';
import TravelTimeCalculator from './Components/TravelTimeCalculator';

function App() {
  return (
    <AppProvider>
      <ChakraProvider>
        <Box p={5}>
          <VStack spacing={8}>
            <GasPriceConverter />
            <FuelCostCalculator />
            <TravelTimeCalculator />
          </VStack>
        </Box>
      </ChakraProvider>
    </AppProvider>
  );
}

export default App;
