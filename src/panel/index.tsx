import React from 'react';
import ReactDOM from 'react-dom/client';

function Panel() {
  console.log('Hello from the panel!');

  return (
    <div>
      <img src="/icon-with-shadow.svg" />
      <h1>vite-plugin-web-extension</h1>
      <p>
        Template: <code>react-ts</code>
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <Panel />
  </React.StrictMode>
);
