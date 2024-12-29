import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BlogProvider } from './contaxt/BlogProvider.jsx';
import { AuthProvider } from './contaxt/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogProvider>
      <AuthProvider>
    <App />
    </AuthProvider>
    </BlogProvider>
  </StrictMode>,
)
