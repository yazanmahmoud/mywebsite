import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; 
import App from './App.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("⚠️ 'root' element not found in your index.html");
}
