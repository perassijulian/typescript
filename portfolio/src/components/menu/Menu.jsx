import './menu.scss';


const Menu = ({ menuActive, setMenuActive }) => {
  return (
    <div className={`menu ${menuActive? "active" : ""}`}>
        <ul>
            <li onClick={() => {setMenuActive(false)}}>
                <a href='#intro'>home</a>
            </li>
            <li onClick={() => {setMenuActive(false)}}>
                <a href='#portfolio'>portfolio</a>
            </li>
            <li onClick={() => {setMenuActive(false)}}>
                <a href='#works'>works</a>
            </li>
            <li onClick={() => {setMenuActive(false)}}>
                <a href='#contact'>contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu