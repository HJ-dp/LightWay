import { createContext } from "react";

/**
 * headerHeight
 * footerHeight
 * maxWidth
 */
export const StyleContext = createContext(null);

export default function StyleProvider({ children }) {
  const layoutValue = {
    headerHeight: 50,
    footerHeight: 100,
    maxWidth: 1024,
  };

  return (
    <StyleContext.Provider value={{ layoutValue }}>
      {children}
    </StyleContext.Provider>
  );
}
