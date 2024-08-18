import logo from './logo.svg';
import './App.css';
import CompareMainContainer from './components/compare/CompareMainContainer';
import Navigator from './nav/Navigator';

const displayHellow = () => {
  return 'Welcome to Json Comparator'
}

function App() {
  return (
    <div className="App">
      <div className="global-nav">
          <div className='global-nav__nav'>
            <ul className='global-nav__nav__primary-items'>
            <li className='global-nav__primary-item'><Navigator name="Try Pro" style="selected"></Navigator></li>
            <li className='global-nav__primary-item'><Navigator name="nOVAS" style="not-selected"></Navigator></li>
            </ul>
          </div>
      </div>
      <header className="App-header">
      {displayHellow()}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <a
          className="App-link"
          href=""
          target="_parent"
          rel="noopener noreferrer"
        >
          go to compare
        </a>
      </header>

      <CompareMainContainer></CompareMainContainer>
    </div>
  );
}

export default App;
