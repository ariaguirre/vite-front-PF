import styles from './navigation.module.css';
import { useState } from 'react';
import { Link, } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
//svg's
import searchBtn from "../../utils/svg/search-outline.svg";
import closeBtn from "../../utils/svg/close-outline.svg";
import menuBtn from "../../utils/svg/menu-outline.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isToggleOn, setIsToggleOn] = useState(false);
  
  const {userCredentials} =  useSelector((state)=>state.currentUser);
  console.log(userCredentials)

  const handleClickSearchBtn =()=> {
    setIsOpen(true);
    setIsToggleOn(false);
    if(isOpen) {      
      setIsOpen(false);      
    }
  } 
  
  const handleClickCloseBtn =()=> {  
    setIsOpen(false);    
  }

  const handleClickHeader = ()=> {
    setIsToggleOn(!isToggleOn);
    setIsOpen(false);
  }

  const handleClick = ()=>{
    setIsToggleOn(!isToggleOn);
  }

  return (
    <header className={ `${isToggleOn? styles.open : ""} ${styles.header}`}>
      <a href="/" className={styles.logo} >MOM BABY & HOME </a>
      <div className={styles.group}>
        <ul className={styles.navigation}>
          <li><Link to="/Shop" onClick={handleClick}>Tienda</Link></li>
          {
            userCredentials? <li><Link to="/auth" onClick={handleClick}>{userCredentials.displayName || "Usuario" }</Link></li> : <li><Link to="/auth" onClick={handleClick}>Login</Link></li>
          }
          
        </ul>
        <div className={styles.search}>
          <span className={styles.icon}>
            <img 
              src={searchBtn}
              alt="SearchBtn" 
              name="search-outline" 
              className={`${styles.searchBtn} ${isOpen ? styles.active : ""}`}              
              onClick={handleClickSearchBtn}          
            />
            <img 
              src={closeBtn} 
              alt="CloseBtn" 
              name="close-outline" 
              className={`${styles.closeBtn}  ${isOpen ? styles.active : ""}`}
              onClick={handleClickCloseBtn}
            />
          </span>
        </div>
        <img 
          src={menuBtn} 
          alt="MenuBtn" 
          className={`${styles.menuToggle}  ${isOpen ? styles.hide : ""}`}
          onClick={handleClickHeader}
        />
      </div>
      <div className={`${styles.searchBox}  ${isOpen ? styles.active : ""}`}>
        <input 
          type="text" 
          name="searchBox"
          placeholder="look for your recipe..."           
        />
      </div>
    </header>
  );
}

export default Navigation
