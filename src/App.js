import './App.css';
import Logo from './components/Logo/index.js'
import HeaderOptions from './components/HeaderOptions';
import HeaderIcons from './components/HeaderIcons';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <HeaderOptions></HeaderOptions>
        <HeaderIcons></HeaderIcons>
        <HeaderIcons></HeaderIcons>
      </header>
    </div>
  );
}

export default App;
