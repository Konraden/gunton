import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';

async function enableMocking() {
  if (process.env.GUNTON_ENV === 'localhost') {
    return;
  }

  const { service } = await import('./mockServiceWorker/service');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return service.start({
    onUnhandledRequest: 'bypass'
  });
}

async function startClient() {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

async function init() {
  await enableMocking();
  await startClient();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
init();
reportWebVitals();
