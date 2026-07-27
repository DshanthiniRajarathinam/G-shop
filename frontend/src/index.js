import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Provider } from 'react-redux';
import store from './redux/store';

import { ClerkProvider } from '@clerk/clerk-react';

const clerkKey = "pk_test_Y2hhcm1pbmctY2ljYWRhLTMyLmNsZXJrLmFjY291bnRzLmRldiQ"; // 👈 from Clerk dashboard

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <Provider store={store}>
        <App />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
