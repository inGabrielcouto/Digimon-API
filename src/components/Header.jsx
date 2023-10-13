
import { useState } from 'react';
import headerImage from './imgs/ca5ba7d121989a03a9e22518a3ccaab1.png';
import headerLopa from './imgs/pngtree-search-magnifier-icon-material-image_1338211.jpg';

const Header = ({onFilter}) => {

const [searchType, setSearchType] = useState('')


const heandleSearch = () =>{
  onFilter(searchType)
}

  return (
    <div className="Header">
      <img className="img-header" src={headerImage} alt="" />
      <div className="search">
        <input type="text" placeholder="Search Type" title="Procura o tipo do digimon"  value={searchType} onChange={(e)=>setSearchType(e.target.value)}/>
        <img className="lopa" src={headerLopa} alt="" onClick={heandleSearch} style={{cursor:'pointer'}} />
      </div>
    </div>
  );
};

export default Header;
