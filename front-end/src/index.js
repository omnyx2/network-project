import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MatinerTheme } from './theme/ThemeObject';

import reportWebVitals from './reportWebVitals';
import RecoilRootProvider from './recoils/RecoilRootProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MatinerTheme>
      <RecoilRootProvider>
        <App />
      </RecoilRootProvider>
       
    </MatinerTheme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
