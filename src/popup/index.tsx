import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import db from '@/store/db';
import { useLiveQuery } from 'dexie-react-hooks';

function Popup() {
  const count = useLiveQuery(() => db.links.count());
  return (
    <div>
      <img src="/icon-with-shadow.svg" />
      <h1>vite-plugin-web-extension</h1>
      <p>
        Template: <code>react-ts</code>
      </p>
      <p>{count}</p>
    </div>
  );
}

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
