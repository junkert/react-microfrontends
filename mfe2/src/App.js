import React from 'react';
const Menu = React.lazy(
  () => import('MFE1/Menu')
);

function App() {
  return (
    <div>
      <h1>
        Micro-Frontend #2 Host
      </h1>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border:
            '4px solid black',
        }}>
        <h3>
          Menu from MFE1
        </h3>
        <React.Suspense fallback='Loading Menu'>
          <Menu />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
