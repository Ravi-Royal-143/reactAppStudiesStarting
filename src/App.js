import { useState } from 'react';
import InitialReactApp from './pages/InitialReactApp';
import { Context } from './state/dummy-context';

function App() {
  const [dummyArr, setDummyArr] = useState(['ravi', 'preethi']);
  let dummyContext = {
    dummyData: dummyArr // state variable is used here so the changes got reflected(refresh of app happened)
  }

  function changeContext() {
    setDummyArr([
      ...dummyContext.dummyData,
      "newText"
    ]);
  }

  return (
    <Context.Provider value={dummyContext}>
      <div className="App">
        <header className="App-header">
          Test
          <button onClick={changeContext}>change Context value</button>
          <InitialReactApp dataFromParent="SampleData"></InitialReactApp>
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
