import logo from '../../images/books.png'
import './styles.css'

function Logo() {
  return (
    <div className="logo">
      <img 
        src={logo} 
        alt="logo" 
        className="img-logo">
      </img>
      <p>本で未来を築く</p>
    </div>
  );
}

export default Logo;