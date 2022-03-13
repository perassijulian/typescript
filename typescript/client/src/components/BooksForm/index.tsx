import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { addBook } from '../../features/bookSlice';
import { BookType } from '../../interfaces';
import './styles.scss';

const BooksForm = () => {
  const emptyBook: BookType = {
    title: "",
    author: "",
    isbn: "",
  }

  const [formData, setFormData] = useState(emptyBook)
  
  const dispatch: AppDispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    dispatch(addBook(formData))
  }

  return (
    <div className='booksForm'>
      <h3>Add book</h3>
      <form className='booksForm--form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder="Title" onChange={handleChange}></input>
        <input name='author' type="text" placeholder="Author" onChange={handleChange}></input>
        <input name='isbn' type="text" placeholder="ISBN" onChange={handleChange}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default BooksForm