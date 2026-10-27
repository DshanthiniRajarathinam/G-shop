import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Provider } from 'react-redux';
import store from './redux/store';

import { ClerkProvider } from '@clerk/clerk-react';

const clerkKey =
  process.env.REACT_APP_CLERK_PUBLISHABLE_KEY ||
  process.env.REACT_APP_CLERK_FRONTEND_API ||
  "pk_test_Y2hhcm1pbmctY2ljYWRhLTMyLmNsZXJrLmFjY291bnRzLmRldiQ";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkKey}
      clerkJSUrl="https://cdn.jsdelivr.net/npm/@clerk/clerk-js@5/dist/clerk.browser.js"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
