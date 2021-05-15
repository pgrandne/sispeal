import { createContext } from 'react';

export const GranularityContext = createContext({
  isRegion: true,
  change: () => {}
});