import React from 'react';
import Hello from './component/Hello'
import {Provider} from 'react-redux';
import {store} from './store'
function App() {
  return (
    <div className="App">
        <Provider store={store}>
                  <Hello/>
        </Provider>
    </div>
  );
}

export default App;
