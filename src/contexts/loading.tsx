import React, { useState, createContext, FC } from "react";

export interface IErrorContext {
  loading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const LoadingContext = createContext<IErrorContext>({
  loading: false,
  showLoading: () => {},
  hideLoading: () => {},
});

const LoadingProvider: FC<React.ReactNode> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const contextValue = {
    loading,
    showLoading: () => setLoading(true),
    hideLoading: () => setLoading(false),
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
