import './App.css';
import Decrementer from './components/decrementer';
import Incrementer from './components/incrementer';
import CounterContextProvider from './context/CounterContextProvider';
import Result from './components/result';

function App() {
  return (
      <div className="w-100">
          <CounterContextProvider>
              <Decrementer />
              <Incrementer />
              <Result />
          </CounterContextProvider>
      </div>
  );
}

export default App;
