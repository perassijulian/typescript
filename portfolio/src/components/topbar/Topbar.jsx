import './topbar.scss';
import {Person, Mail} from '@material-ui/icons';

const Topbar = ({ menuActive, setMenuActive }) => {
  return (
    <div className={`topbar ${menuActive? "active" : ""}`}>
      <div className='topbar--wrapper'>
        <div className='topbar--wrapper--left'>
          <h2>perassi .</h2>
          <div className='topbar--wrapper--left--itemContainer'>
            <Person className='topbar--wrapper--left--itemContainer--icon' />
            <span>+54 9 341 376 0355</span>
          </div>
          <div className='topbar--wrapper--left--itemContainer'>
            <Mail className='topbar--wrapper--left--itemContainer--icon' />
            <span>perassijulian@gmail.com</span>
          </div>
        </div>
        <div className='topbar--wrapper--right'>
          <div className='hamburguer' onClick={() => setMenuActive(!menuActive)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar