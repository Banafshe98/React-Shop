import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
    <App />
    </Layout>
  </StrictMode>,
)
