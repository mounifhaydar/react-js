import logo from './logo.svg';
import './App.css';
import React from 'react';
import CompareMainContainer from './components/compare/CompareMainContainer';
import Navigator from './nav/Navigator';
import ReactDOM from 'react-dom';
import backgroundJson from './assets/images/backgrounds/json-background.jpg';

const displayHellow = () => {
  return 'Welcome to Json Comparator'
}

function App() {
  return (
    <div className="App">
      <div id="global-nav" className="global-nav">
        <GlobalNav items={menuItems}/>
      </div>
      <header className="App-header">
        <div>
      {displayHellow()}
      </div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>

      <CompareMainContainer></CompareMainContainer>
      <Footer link_desc="Discover more apps" year={new Date().getFullYear()}></Footer>
    </div>
  );
}

const mainMenu = [["Try Pro","selected"],["nOVAS","not-selected"]];
const menuItems = mainMenu.map((item, i) => ({
  id: i,
  title: item[0],
  style: item[1]
}));

function GlobalNav(props){
  return(
    <div>
      <div className='global-nav__nav'>
            <ul className='global-nav__nav__primary-items'>
              {props.items.map( (item) => (
                <li key ={item.id} className='global-nav__primary-item'><Navigator name={item.title} style={item.style}></Navigator></li>
              ))}
            </ul>
          </div>
    </div>
  );
}

function Footer(props){
  return(
    <footer className="App-footer">
      <div className="footer-logo">
      <img className="footer-logo-img" src={backgroundJson}></img>
      </div>
        <a
          className="App-link"
          href=""
          target="_parent"
          rel="noopener noreferrer"
        >
          {props.link_desc}
        </a>
        <p>Copyright {props.year}</p>
      </footer>
  );
}

export default App;
