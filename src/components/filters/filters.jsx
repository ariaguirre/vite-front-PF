import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductsActions, prodFilterCopy, productsFilterAction, productsOrder } from "../../features/products/productSlice";
import { SliderPrice } from "./slider";
const Filters = () => {
  const dispatch = useDispatch()
  const { productsName, productsCopy, productsNameCopy } = useSelector(state => state.products)
  const categories = useSelector(state => state.categories.categories)
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const handleClick1 = () => {
    setShowMenu1(!showMenu1);
    if (showMenu2) setShowMenu2(!showMenu2);
  };

  const handleClick2 = () => {
    setShowMenu2(!showMenu2);
    if (showMenu1) setShowMenu1(!showMenu1);
  };
  const handleClick3 = () => {
    setShowMenu3(!showMenu3);
    if (showMenu4) setShowMenu4(!showMenu4);
  };
  const handleClick4 = () => {
    setShowMenu4(!showMenu4);
    if (showMenu3) setShowMenu3(!showMenu3);
  };

  const handlerCategory = async (e) => {


    let filterCategoryCopy = productsCopy.filter(doc => {
      return doc.categories.some((a) => {
        return a.toLowerCase().includes(e.toLowerCase())
      })
    });
    dispatch(prodFilterCopy(filterCategoryCopy))
    if (productsName.length) {

      const filterCategory = productsNameCopy.filter(doc => {
        return doc.categories.some((a) => {
          return a.toLowerCase().includes(e.toLowerCase())
        })
      });
      dispatch(getProductsActions(filterCategory))
      dispatch(productsFilterAction(filterCategory))
    }
    else {

      const filterCategory = productsCopy.filter(doc => {
        return doc.categories.some((a) => {
          return a.toLowerCase().includes(e.toLowerCase())
        })
      });
      dispatch(getProductsActions(filterCategory))
      dispatch(productsFilterAction(filterCategory))
    }



  }
  const noFilter = () => {
    if (productsName.length) {
      dispatch(getProductsActions(productsNameCopy))
      dispatch(prodFilterCopy([]))
      dispatch(productsFilterAction([]))
    }
    else {
      dispatch(getProductsActions(productsCopy))
      dispatch(prodFilterCopy([]))
      dispatch(productsFilterAction([]))
    }
  }
  const orderType = (order) => {
    dispatch(productsOrder(order))
  }
  return (
    <aside className={styles.filtersContainer}>
      <div className={styles.fitersTitle}>filtros</div>
      
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={`${styles.listItem} ${styles.listItemClick}`}>
            <div
              className={`${styles.listButton} ${styles.listButtonClick}`}
              onClick={handleClick1}
            >
              <span className={`${styles.navLink} ${styles.navLinkPrincipal}`}>
                <span className={styles.filterIcons}>&#9673;</span> Categorias
              </span>
            </div>
            <ul
              className={styles.listShow}
              style={{ height: showMenu1 ? "auto" : "0px" }}
            >
              <li>
                <span                  
                  onClick={() => { noFilter() }}
                  className={`${styles.navLink} ${styles.navLinkInside}`}
                >
                  Todos
                </span>
              </li>
              {categories ? categories.map((a, i) =>
                <li key={`${a.id}+${i}`} className={styles.listInside}>
                  <span
                    to="#"
                    onClick={() => { handlerCategory(a.categories) }}
                    className={`${styles.navLink} ${styles.navLinkInside}`}

                  >
                    {a.categories}
                  </span>
                </li>
              ) : (null)
              }
            </ul>
          </li>

          <li className={`${styles.listItem} ${styles.listItemClick}`}>
            <div
              className={`${styles.listButton} ${styles.listButtonClick}`}
              onClick={handleClick2}
            >
              <span className={`${styles.navLink} ${styles.navLinkPrincipal}`}>
                <span className={styles.filterIcons}>&#9673;</span> Filtros
              </span>
            </div>
            <ul
              className={styles.listShow}
              style={{ height: showMenu2 ? "auto" : "0px" }}
            >
              <ul className={styles.listInside}>
                <span className={`${styles.navLink}`} >
                  <li className={`${styles.listItem} ${styles.listItemClick}`}>
                    <div
                      className={`${styles.listButton} ${styles.listButtonClick}`}
                      onClick={handleClick3}
                    >
                      <span className={`${styles.navLink} ${styles.navLinkPrincipal}`}>
                      <span className={styles.filterIcons}>&#9673;</span> Ordenamientos
                      </span>
                    </div>
                    <ul
                      className={styles.listShow}
                      style={{ height: showMenu3 ? "auto" : "0px" }}
                    >
                      <ul className={styles.listInside}>
                        <span                          
                          className={`${styles.navLink} `}
                        >
                          <li className={`${styles.listItem}`}>
                            <Link
                              to="#"
                              onClick={() => { orderType({ orderBy: "name", orderType: "asc" }) }}
                              className={`${styles.navLink} ${styles.navLinkInside}`}
                            >
                              Nombre A - Z
                            </Link>
                          </li>
                          <li className={`${styles.listItem}`}>
                            <Link
                              to="#"
                              onClick={() => { orderType({ orderBy: "name", orderType: "desc" }) }}
                              className={`${styles.navLink} ${styles.navLinkInside}`}
                            >
                              Nombre Z - A
                            </Link>
                          </li>
                          <li className={`${styles.listItem}`}>
                            <Link
                              to="#"
                              onClick={() => { orderType({ orderBy: "rating", orderType: "desc" }) }}
                              className={`${styles.navLink} ${styles.navLinkInside}`}
                            >
                              Mas rating
                            </Link>
                          </li>
                          <li className={`${styles.listItem}`}>
                            <Link
                              to="#"
                              onClick={() => { orderType({ orderBy: "rating", orderType: "asc" }) }}
                              className={`${styles.navLink} ${styles.navLinkInside}`}
                            >
                              Menos rating
                            </Link>
                          </li>
                          <li className={`${styles.listItem}`}>
                            <Link
                              to="#"
                              onClick={() => { orderType({ orderBy: "price", orderType: "desc" }) }}
                              className={`${styles.navLink} ${styles.navLinkInside}`}
                            >
                              Mayor precio
                            </Link>
                          </li>
                          <li className={`${styles.listItem}`}>
                            <Link
                              to="#"
                              onClick={() => { orderType({ orderBy: "price", orderType: "asc" }) }}
                              className={`${styles.navLink} ${styles.navLinkInside}`}
                            >
                              Menor precio
                            </Link>
                          </li>
                        </span>
                      </ul>
                    </ul>
                  </li>
                  <ul className={`${styles.listItem} ${styles.listItemClick}`}>
                    <div
                      className={`${styles.listButton} ${styles.listButtonClick}`}
                      onClick={handleClick4}
                    >
                      <span className={`${styles.navLink} ${styles.navLinkPrincipal}`}>
                      <span className={styles.filterIcons}>&#9673;</span> Rango de precios                         
                      </span>
                    </div>
                    <ul
                      className={styles.listShow}
                      style={{ height: showMenu4 ? "auto" : "0px" }}
                    >
                      <li className={styles.listInside}>
                        <span                        
                          className={`${styles.navLink} ${styles.navLinkInside}`}
                        >
                          <SliderPrice />
                        </span>
                      </li>
                    </ul>
                  </ul>
                </span>
              </ul>

            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Filters;
