import './styles.scss';

const BooksForm = () => {
  return (
    <div className='booksForm'>
      <h3>Add book</h3>
      <form className='booksForm--form'>
        <input type="text" placeholder="Title"></input>
        <input type="text" placeholder="Author"></input>
        <input type="text" placeholder="ISBN"></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default BooksForm