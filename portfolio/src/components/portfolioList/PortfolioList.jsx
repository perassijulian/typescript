import './portfolioList.scss';

const PortfolioList = ({ title, id, active, setSelected }) => {
  return (
    <li 
        className={`portfolioList ${active? "active" : ""}`}
        id={id}
        onClick={() => {setSelected(id)}}
    >
        {title}
    </li>
  )
}

export default PortfolioList