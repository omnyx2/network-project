// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MantineProvider } from '@mantine/core';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {/* devtools */}
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
 