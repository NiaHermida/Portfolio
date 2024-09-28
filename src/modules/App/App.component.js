'use client';
import { useMemo, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import AppContext from './App.context';

const App = ({ children, serverAppData = {} }) => {
  const { colorMode } = useColorMode();

  const [appData, setAppData] = useState({
    isLoading: false,
    ...serverAppData,
  });

  const updateAppData = (data = {}) => {
    setAppData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const appContextValue = useMemo(
    () => ({
      appData,
      updateAppData,
    }),
    [appData]
  );
  // ? There seems to be a div containing this and I don't know where it's coming from.
  return (
    <div className={`PortfolioApp PortfolioApp--${colorMode}`}>
      <AppContext.Provider value={appContextValue}>
        {children}
      </AppContext.Provider>
    </div>
  );
};
export default App;
