
const textCategories = ['Biography', 'History', 'Religion', 'Health & Fitness']

export default function HeaderOptions () {
    return (
        <ul className='categories'>
        { textCategories.map( text => (
          <li className='categorie'><p>{text}</p></li>
        ))}
      </ul>
    )
}