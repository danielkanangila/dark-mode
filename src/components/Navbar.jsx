import React, { useState } from 'react';
import { useDarMode } from './../hooks/useDarkMode';
import { Link } from 'react-router-dom';

const Navbar = ({coinData}) => {
  const [darkMode, setDarkMode] = useDarMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="navbar__right">
        <Link className="navbar__item" to="/">Home</Link>
        <Dropdown coinData={coinData} />
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

const Dropdown = ({coinData}) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setIsToggled(!isToggled);
    document.querySelector('.dropdown__content').classList.toggle('show');
  }
  return(
    <div className="navbar__item dropdown">
      <Link 
        onClick={handleClick} 
        to="/coins">
          Coins 
          {!isToggled ? <span>&#x25BC;</span> : <span>&#x25B2;</span>}
      </Link>
      <div className="dropdown__content">
        {coinData.map(coin => <DropdownItem key={coin.id} {...coin} />)}
      </div>
    </div>
  )
}

const DropdownItem = ({id, name}) => {
  return <Link to={`coins/${id}`}>{name}</Link>
}

export default Navbar;
