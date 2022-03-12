import './styles.scss';
import BooksDisplay from '../../BooksDisplay'
import BooksForm from '../../BooksForm'

const Books = () => {
  return (
    <div className='books'>
      <h1>Here you can find the best books in our collection</h1>
      <div className='books--body'>
        <BooksForm />
        <BooksDisplay />
      </div>  
    </div>
  )
}

export default Books