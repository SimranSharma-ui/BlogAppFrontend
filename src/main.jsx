import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BlogProvider } from './contaxt/BlogProvider.jsx';
import { AuthProvider } from './contaxt/AuthProvider.jsx';
import { ThemeProvider } from './contaxt/ThemeProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <BlogProvider>
      <AuthProvider>
        <ThemeProvider>
    <App />
    </ThemeProvider>
    </AuthProvider>
    </BlogProvider>
    </BrowserRouter>
  </StrictMode>,
)
