'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SessionContextProps {
  isTranslated: boolean;
  translateOn: () => void;
  translateOff: () => void;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export function useTranslate() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  const [isTranslated, setIsTranslated] = useState(false);

  const translateOn = () => {
    setIsTranslated(true);
  };

  const translateOff = () => {
    setIsTranslated(false);
  };

  const contextValue: SessionContextProps = {
    isTranslated,
    translateOn,
    translateOff,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
}
