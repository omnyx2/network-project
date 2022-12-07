import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { MatinerTheme } from "./theme/ThemeObject";

import reportWebVitals from "./reportWebVitals";
import RecoilRootProvider from "./recoils/RecoilRootProvider";


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MatinerTheme>
    <QueryClientProvider client={queryClient}>
      <RecoilRootProvider>
        <App />
      </RecoilRootProvider>
    </QueryClientProvider>
  </MatinerTheme>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
