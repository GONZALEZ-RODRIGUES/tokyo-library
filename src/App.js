import './App.css';
import Logo from './components/Logo/index.js'
import userIcon from './images/japanese.png'
import cartIcon from './images/furoshiki.png'

const textCategories = ['Biography', 'History', 'Religion', 'Health & Fitness']
const iconsHeader = [userIcon, cartIcon]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='categories'>
          { textCategories.map( text => (
            <li className='categorie'><p>{text}</p></li>
          ))}
        </ul>
        <ul className='icons-header'>
          { iconsHeader.map( iconSrc => (
            <li><img src={iconSrc} className='icon-header'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
