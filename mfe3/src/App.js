import React from 'react';
const MFE2Button = React.lazy(
  () => import('MFE1/ButtonMfe2')
);
const MFE3Button = React.lazy(
  () => import('MFE1/ButtonMfe3')
);

function App() {
  return (
    <div>
      <h1>
        Micro-Frontend #3 Host
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
          Buttons from MFE1
        </h3>
        <React.Suspense fallback='Loading Button'>
          <MFE2Button />
          <MFE3Button />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
