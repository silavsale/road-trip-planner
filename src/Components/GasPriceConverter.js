import React, { useState } from 'react';
import { Box, Input, Button, Text, VStack, Heading } from '@chakra-ui/react';
import { useAppContext } from '../Context/AppContext';

function GasPriceConverter() {
  const { sharedState, updateState } = useAppContext();
  const [usdPerGallon, setUsdPerGallon] = useState('');

  const convertPrice = () => {
    const litresPerGallon = 3.78541; // Conversion factor
    const pricePerLitreUSD = (usdPerGallon / litresPerGallon).toFixed(2);
    updateState('pricePerLitreUSD', pricePerLitreUSD); // Update context
  };

  console.log('GasPriceConverter sharedState', sharedState.pricePerLitreUSD);

  return (
    <Box>
      <VStack spacing={4}>
        {/* ...other components... */}
        <Input
          type="number"
          value={usdPerGallon}
          onChange={(e) => setUsdPerGallon(e.target.value)}
          placeholder="Price per gallon in USD"
        />
        <Button colorScheme="blue" onClick={convertPrice}>
          Convert
        </Button>
      </VStack>
    </Box>
  );
}

export default GasPriceConverter;
