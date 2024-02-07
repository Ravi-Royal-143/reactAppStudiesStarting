import InitialReactApp from './pages/InitialReactApp';
import { Context } from './state/dummy-context';

function App() {
  const dummyContext = {
      dummyData: ['ravi', "preethi"]
    }
  return (
    <Context.Provider value={dummyContext}>
      <div className="App">
        <header className="App-header">
          Test
          <InitialReactApp dataFromParent="SampleData"></InitialReactApp>
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
