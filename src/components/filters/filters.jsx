import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductsActions, prodFilterCopy, productsFilterAction, productsOrder } from "../../features/products/productSlice";
import { SliderPrice } from "./slider";
const Filters = () => {
  const dispatch = useDispatch()
  const  {productsName,productsCopy, productsNameCopy } = useSelector(state =>state.products )
    const categories = useSelector(state => state.categories.categories)
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const handleClick1 = () => {
    setShowMenu1(!showMenu1);
    if(showMenu2)setShowMenu2(!showMenu2);
  };

  const handleClick2 = () => {
    setShowMenu2(!showMenu2);
    if(showMenu1)setShowMenu1(!showMenu1);
  }; 
  const handleClick3 = () => {
    setShowMenu3(!showMenu3);
    if(showMenu4)setShowMenu4(!showMenu4);
  }; 
  const handleClick4 = () => {
    setShowMenu4(!showMenu4);
    if(showMenu3)setShowMenu3(!showMenu3);
  }; 

  const handlerCategory = async (e) =>{
   

    let filterCategoryCopy =  productsCopy.filter(doc => {
      return doc.categories.some((a)=>{
       return a.toLowerCase().includes(e.toLowerCase())
         })
      }); 
    dispatch(prodFilterCopy(filterCategoryCopy))
    if(productsName.length){
      
      const filterCategory =  productsNameCopy.filter(doc => {
        return doc.categories.some((a)=>{
         return a.toLowerCase().includes(e.toLowerCase())
           })
        }); 
        dispatch(getProductsActions(filterCategory))
        dispatch(productsFilterAction(filterCategory))
    }
    else{
    
      const filterCategory =  productsCopy.filter(doc => {
        return doc.categories.some((a)=>{
         return a.toLowerCase().includes(e.toLowerCase())
           })
        }); 
        dispatch(getProductsActions(filterCategory))
        dispatch(productsFilterAction(filterCategory))
    }
   


  }
const noFilter = () =>{
  if(productsName.length){
    dispatch(getProductsActions(productsNameCopy))
    dispatch(prodFilterCopy([]))
    dispatch(productsFilterAction([]))
  }
  else{
    dispatch(getProductsActions(productsCopy))
    dispatch(prodFilterCopy([]))
    dispatch(productsFilterAction([]))
  }
  }
  const orderType = (order) =>{
    dispatch(productsOrder(order))
  }
  return (
    <aside className={styles.filtersContainer}>
      <div className={styles.fitersTitle}>filtros</div>
      <div className={styles.fitersTitle}></div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={`${styles.listItem} ${styles.listItemClick}`}>
            <div
              className={`${styles.listButton} ${styles.listButtonClick}`}
              onClick={handleClick1}
            >
              <span className={styles.navLink}>
                Categorias
              </span>
            </div>
            <ul
              className={styles.listShow}
              style={{ height: showMenu1 ? "auto" : "0px" }}
            >
                 <li>
                <Link
                  to="#"
                  onClick={() =>{noFilter() }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                 Todos
                </Link>
              </li>
           { categories?categories.map((a,i) =>
            <li   key={`${a.id}+${i}`} className={styles.listInside}>
                <Link
                  to="#"
                  onClick={()=>{handlerCategory(a.categories)}}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                
                >
                  {a.categories}
                </Link>
              </li>
            )  : (null)
               }
            </ul>
          </li>

          <li className={`${styles.listItem} ${styles.listItemClick}`}>
            <div
              className={`${styles.listButton} ${styles.listButtonClick}`}
              onClick={handleClick2}
            >
              <span className={styles.navLink}>
               Filtros
              </span>
            </div>
            <ul
              className={styles.listShow}
              style={{ height: showMenu2 ? "auto" : "0px" }}
            >
              <li className={styles.listInside}>
                <Link
                  to="#"
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                <li className={`${styles.listItem} ${styles.listItemClick}`}>
            <div
              className={`${styles.listButton} ${styles.listButtonClick}`}
              onClick={handleClick3}
            >
              <span className={styles.navLink}>
               Ordenamientos
              </span>
            </div>
            <ul
              className={styles.listShow}
              style={{ height: showMenu3 ? "auto" : "0px" }}
            >
              <li className={styles.listInside}>
                <Link
                  to="#"
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                <li>
                <Link
                  to="#"
                  onClick={() =>{orderType({orderBy :"name", orderType : "asc"}) }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                 Nombre A - Z 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() =>{orderType({orderBy :"name", orderType : "desc"}) }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                 Nombre Z - A 
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() =>{orderType({orderBy :"rating", orderType : "desc"}) }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                 Mas rating
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() =>{orderType({orderBy :"rating", orderType : "asc"}) }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                 Menos rating
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() =>{orderType({orderBy :"price", orderType : "desc"}) }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                 Mayor precio
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() =>{orderType({orderBy :"price", orderType : "asc"}) }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                 Menor precio
                </Link>
              </li>
                </Link>
              </li>
            </ul>
          </li>
                <li className={`${styles.listItem} ${styles.listItemClick}`}>
            <div
              className={`${styles.listButton} ${styles.listButtonClick}`}
              onClick={handleClick4}
            >
              <span className={styles.navLink}>
               Rango de precios
              </span>
            </div>
            <ul
              className={styles.listShow}
              style={{ height: showMenu4 ? "auto" : "0px" }}
            >
              <li className={styles.listInside}>
                <Link
                  to="#"
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
     <SliderPrice/>
                </Link>
              </li>
            </ul>
          </li>
                </Link>
              </li>
              
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Filters;
