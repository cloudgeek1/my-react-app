import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
(async () => {
const root = ReactDOM.createRoot(document.getElementById('root'));
const LDProvider = await asyncWithLDProvider({
  clientSideID: '63095938d0a919120221e6ea',
  user: {
      "key": "example_user",
      "name": "Example user",
      "email": "User@example.com"
  }
});

root.render(
  <React.StrictMode>
    <LDProvider>
    <App />
    </LDProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
})();