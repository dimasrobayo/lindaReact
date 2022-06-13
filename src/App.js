import React from 'react';
import './App.css';
import Store from './Store/Store';
import { Provider } from 'react-redux';
import Navigation from './routes/Navigation';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}