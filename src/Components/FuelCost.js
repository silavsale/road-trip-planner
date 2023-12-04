import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Heading,
  Stack,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Flex,
  Spacer,
  Divider,
} from '@chakra-ui/react';
import { useAppContext } from '../Context/AppContext';

const FuelCost = () => {
  const { sharedState, updateState } = useAppContext();

  const [usdPerGallon, setUsdPerGallon] = useState('');
  const [litresPer100Km, setLitresPer100Km] = useState('');
  const [distance, setDistance] = useState('');

  const convertPrice = () => {
    const litresPerGallon = sharedState.litresPerGallon;
    const pricePerLitreUSD = (usdPerGallon / litresPerGallon).toFixed(2);
    const pricePerLitreCAD = (
      pricePerLitreUSD * sharedState.usdToCadExchangeRate
    ).toFixed(2);

    const pricePerGallonCAD = (
      usdPerGallon * sharedState.usdToCadExchangeRate
    ).toFixed(2);

    const expenceCadPerDistance = (
      (distance * (litresPer100Km * pricePerLitreCAD)) /
      100
    ).toFixed(2);

    const expenceUsdPerDistance = (
      (distance * (litresPer100Km * pricePerLitreUSD)) /
      100
    ).toFixed(2);

    updateState('pricePerLitreUSD', pricePerLitreUSD);
    updateState('pricePerGallonUSD', usdPerGallon);
    updateState('pricePerLitreCAD', pricePerLitreCAD);
    updateState('averageFuelConsumptionPerLitre', litresPer100Km);
    updateState('pricePerGallonCAD', pricePerGallonCAD);
    updateState('distance', distance);
    updateState('expenceCadPerDistance', expenceCadPerDistance);
    updateState('expenceUsdPerDistance', expenceUsdPerDistance);
  };

  return (
    <Box backgroundColor={'darkcyan'} borderRadius={10} p={10}>
      <VStack spacing={4}>
        <Flex width="full" alignItems="center">
          <InputGroup
            flex="1"
            backgroundColor={'white'}
            borderRadius={10}
            style={{ display: 'flex' }}
          >
            <InputLeftAddon
              style={{ width: '50%' }}
              children="Price per gallon in USD"
            />
            <Input
              style={{ width: '50%' }}
              onChange={(e) => setUsdPerGallon(e.target.value)}
              type="number"
              placeholder="Enter amount"
            />
          </InputGroup>
        </Flex>
        <Flex width="full" alignItems="center">
          <InputGroup
            flex="1"
            style={{ display: 'flex' }}
            backgroundColor={'white'}
            borderRadius={10}
          >
            <InputLeftAddon
              style={{ width: '50%' }}
              children="L/100 km Fuel Consumption"
            />
            <Input
              style={{ width: '50%' }}
              onChange={(e) => setLitresPer100Km(e.target.value)} // Update the handler if needed
              type="number"
              placeholder="Enter amount"
            />
          </InputGroup>
        </Flex>
        <Flex width="full">
          <InputGroup
            flex="1"
            backgroundColor={'white'}
            borderRadius={10}
            style={{ display: 'flex' }}
          >
            <InputLeftAddon style={{ width: '50%' }} children="Distance" />
            <Input
              style={{ width: '50%' }}
              onChange={(e) => setDistance(e.target.value)} // Update the handler if needed
              type="number"
              placeholder="Enter number"
            />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue" onClick={convertPrice}>
          Convert
        </Button>
      </VStack>

      <VStack bg={'white'} borderRadius={10} p={2} m={5} spacing={4}>
        {Object.entries(sharedState).map(([key, value]) => (
          <Box key={key}>
            <Text>{`${key}: ${value}`}</Text>
            <Divider />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default FuelCost;
