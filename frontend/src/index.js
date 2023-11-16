import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { restoreCSRF, csrfFetch } from './features/csrf/csrf';
import * as sessionActions from './features/session/session';
import { MediaQueryProvider } from './context/MediaQueries';
import App from './App';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();
  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MediaQueryProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MediaQueryProvider>
  </React.StrictMode>
);
