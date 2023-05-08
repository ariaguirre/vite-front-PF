import styles from './navigation.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
//svg's
import searchBtn from "../../utils/svg/search-outline.svg";
import closeBtn from "../../utils/svg/close-outline.svg";
import menuBtn from "../../utils/svg/menu-outline.svg";
import BasicMenu from '../drop-down/drop-down';
//components
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { changePag, startPagination } from '../../utils/firebase/firebaseClient';
import { useDispatch } from 'react-redux';
import { ProductsActions, setPagesActions } from '../../features/productsPagination/productsPaginationSlice';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isToggleCartOn, setIsToggleCartOn] = useState(false);
  const [search, setSearch] = useState('')
  const navigation = useNavigate()
  const { userCredentials } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch()
  const handleClickSearchBtn = () => {
    setIsOpen(true);
    setIsToggleOn(false);
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const handleClickCloseBtn = () => {
    setIsOpen(false);
  }

  const handleClickHeader = () => {
    setIsToggleOn(!isToggleOn);
    setIsOpen(false);
  }

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  }
  const handleClickCart = ()=> {
    setIsToggleCartOn(!isToggleCartOn);
  }

  const handlerSearchBar = (e) =>{
    const { value } = e.target;
    setSearch({
      ...search,
      value
    })
    if(!value) setSearch('')
  }

  const handlerBuscar = async () =>{
    const valueSearch = search.value.trim()
    const searchDoc = {
      name: valueSearch,
      orderBy :"name",
      orderType :"asc",
      filter : "",
      itemsPage: 8
    }
    const { docs } = 
    await changePag(1, searchDoc )
    const {collectionSize} = await startPagination(searchDoc);
    dispatch(ProductsActions(docs))
    dispatch(setPagesActions(Math.ceil( collectionSize / searchDoc.itemsPage)))
    navigation('/shop')
  }
 
  return (
    <>
      <header className={`${isToggleOn ? styles.open : ""} ${styles.header}`}>
        <Link to="/" className={styles.logo} >MB&H</Link>
        <div className={styles.group}>
          <ul className={styles.navigation}>
            <li><Link to="/shop" onClick={handleClick}>Tienda</Link></li>
            {
              userCredentials
                ? <li><Link to="#" onClick={handleClick}><BasicMenu /></Link></li>
                : <li><Link to="/auth" onClick={handleClick}>Login</Link></li>
            }
            <li onClick={handleClickCart}><CartIcon/></li>
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
            placeholder="Busca algo para tu bebé..."
            onChange={(e)=>{handlerSearchBar(e)}}
            />
            <div className={styles.buscar}>
              {isOpen && search ? <button onClick={handlerBuscar}>Buscar</button> : null}
            </div>
        </div>
        <CartDropdown isToggleCartOn={isToggleCartOn} />
      </header>
    </>
  );
}

export default Navigation
