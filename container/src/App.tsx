import React from 'react';
import CounterAppOne from 'app1/CounterAppOne';
import CounterAppTwo from 'app2/TodoApp';

export default () => (
  <div style={{ margin: '20px' }}>
    <React.Suspense fallback="Loading header...">
      <div
        style={{
          border: '1px dashed black',
          height: '70vh',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>Main Application Container</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              marginRight: '2rem',
              padding: '2rem',
              border: '1px dashed black',
            }}
          >
            <h2>Application - 1</h2>
            <CounterAppOne />
          </div>

          <div style={{ border: '1px dashed black', padding: '2rem' }}>

          <h2>Application - 2</h2>
            <CounterAppTwo />
          </div>
        </div>
      </div>
    </React.Suspense>
  </div>
);
