import React, { useState } from 'react';
import { Box, Input, Button, Text, VStack, Heading } from '@chakra-ui/react';

function TravelTimeCalculator({ distance, setDistance }) {
  const [speed, setSpeed] = useState('');
  const [travelTime, setTravelTime] = useState('');

  const calculateTravelTime = () => {
    if (speed <= 0) {
      alert('Please enter a valid speed greater than 0');
      return;
    }

    const time = distance / speed;
    setTravelTime(time.toFixed(2));
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Heading as="h4" size="md">
          Travel Time Calculator
        </Heading>

        <Text>Enter speed in km/h:</Text>
        <Input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          placeholder="Speed in km/h"
        />

        <Button colorScheme="blue" onClick={calculateTravelTime}>
          Calculate Travel Time
        </Button>

        {travelTime && <Text>Estimated Travel Time: {travelTime} hours</Text>}
      </VStack>
    </Box>
  );
}

export default TravelTimeCalculator;
