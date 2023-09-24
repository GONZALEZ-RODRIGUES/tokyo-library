import userIcon from '../../images/japanese.png'
import cartIcon from '../../images/furoshiki.png'

const iconsHeader = [userIcon, cartIcon];

export default function HeaderIcons () {
    return (
        <ul className='icons-header'>
        { iconsHeader.map( iconSrc => (
          <li><img src={iconSrc} alt='img logo top' className='icon-header'></img></li>
        ))}
      </ul>
    )
}