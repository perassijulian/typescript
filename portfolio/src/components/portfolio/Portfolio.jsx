import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import {
  fullstackData,
  web3Data,
  frontendData,
} from '../../data';
import './portfolio.scss';

const Portfolio = () => {
  const [selected, setSelected] = useState("fullstack")
  const [data, setData] = useState([])

  const list = [
    {
      id: "fullstack",
      title: "fullstack"
    },   
    {
      id: "frontEnd",
      title: "front end"
    },   
    {
      id: "web3",
      title: "crypto (web3)"
    },   
  ]

  useEffect(() => {
    switch (selected) {
      case 'fullstack':
        setData(fullstackData)
        break;
      case 'web3':
        setData(web3Data)
        break;
      case 'frontend':
        setData(frontendData)
        break;
      default:
        setData(fullstackData)
        break;
    }
  }, [selected])
  
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>
          <PortfolioList 
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
          )}
      </ul>
      <div className='wrapper'>
        {data.map(d=>{ return(
          <div key={d.id} className='item'>
            <img src={d.img} alt={d.title}></img>
            <h3>{d.title}</h3>
          </div>
        )})}
      </div>
    </div>
  )
}

export default Portfolio