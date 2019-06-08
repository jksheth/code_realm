import * as React from 'react';

// Ref - https://kentcdodds.com/blog/how-to-use-react-context-effectively
const AppContext = React.createContext();

export function AppProvider(props) {
  // Will manage through useState/useReducer hook
  const [appState, setAppState] = React.useState({
    selectedUser: ''
  });
  const value = React.useMemo(() => [appState, setAppState], [appState]);

  return <AppContext.Provider value={value} {...props} />;
}

export function useAppState() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
