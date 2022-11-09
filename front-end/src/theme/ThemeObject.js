import { MantineProvider } from '@mantine/core';

export function MatinerTheme({ children }) {
  return (
    <MantineProvider>
      { children }  
    </MantineProvider>
  );
}


