import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const quaryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={quaryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
