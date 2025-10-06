import { createContext, useState } from "react";

export const SmoothScrollContext = createContext({
  scroll: null,
  setScroll: () => {},
});

export const SmoothScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState(null);

  return (
    <SmoothScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}; 