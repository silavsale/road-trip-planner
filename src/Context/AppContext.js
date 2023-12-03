import React, { createContext, useState, useContext } from 'react';

// Create Context
const AppContext = createContext();

// Provider Component
export function AppProvider({ children }) {
  const [sharedState, setSharedState] = useState({
    pricePerLitreUSD: 0,
    pricePerLitreCAD: 0,
    distance: '',
    averageFuelConsumptionPerLitre: 10,
    litresPerGallon: 0,
    usdPerGallon: '',
    // Add other shared state variables as needed
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
