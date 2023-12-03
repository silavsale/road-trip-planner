import React, { useState } from 'react';
import { Box, Input, Button, Text, VStack, Heading } from '@chakra-ui/react';
import { useAppContext } from '../Context/AppContext';

function FuelCostCalculator({ pricePerLitre, distance, setDistance }) {
  const { sharedState, updateState } = useAppContext();

  const [averageFuelConsumptionPerLitre, setAverageFuelConsumptionPerLitre] =
    useState(10); // Default value set to 10
  const [totalCost, setTotalCost] = useState('');

  const calculateTotalCost = () => {
    const cost = (distance / averageFuelConsumptionPerLitre) * pricePerLitre;
    setTotalCost(cost.toFixed(2));
  };

  console.log('FuelCostCalculator sharedState', sharedState.pricePerLitreUSD);

  return (
    <Box>
      <VStack spacing={4}>
        <Heading as="h4" size="md">
          Fuel Cost Calculator
        </Heading>

        <Text>Enter average fuel consumption (km/litre):</Text>
        <Input
          type="number"
          value={averageFuelConsumptionPerLitre}
          onChange={(e) => setAverageFuelConsumptionPerLitre(e.target.value)}
          placeholder="Average fuel consumption"
        />

        <Text>Enter distance in km:</Text>
        <Input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Distance in km"
        />

        <Button colorScheme="blue" onClick={calculateTotalCost}>
          Calculate Cost
        </Button>

        {totalCost && <Text>Total Fuel Cost CAD: ${totalCost}</Text>}
      </VStack>
    </Box>
  );
}

export default FuelCostCalculator;
