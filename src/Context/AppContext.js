import React, { createContext, useState, useContext } from 'react';

// Create Context
const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [sharedState, setSharedState] = useState({
    pricePerGallonUSD: 0,
    pricePerGallonCAD: 0,
    pricePerLitreUSD: 0,
    pricePerLitreCAD: 0,
    expenceCadPerDistance: 0,
    expenceUsdPerDistance: 0,
    distance: '',
    litresPer100Km: 10,
    litresPerGallon: 3.78541,
    usdToCadExchangeRate: 1.372,
  });

  // Method to update the state
  const updateState = (key, value) => {
    setSharedState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <AppContext.Provider value={{ sharedState, updateState }}>
      {children}
    </AppContext.Provider>
  );
}

// Hook to use the context
export function useAppContext() {
  return useContext(AppContext);
}
