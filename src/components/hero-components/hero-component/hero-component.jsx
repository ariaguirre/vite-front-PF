import styles from "./hero-component.module.css";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <main className={styles.heroContainer}>
      <section className={styles.heroBackgroundImg} />
      <section className={styles.heroSection}>
        <div className={styles.heroHeader}>
          <span>MOM BABY & HOME</span>
        </div>
        <div className={styles.heroLegend}>
          <div className={styles.heroLegendContainer}>
            <span>Asesoramos a mamitas primerizas en la elección de los mejores productos para su embarazo, lactancia y sus bebés.<p>¡Ahorrándoles horas de investigación!</p></span>
          </div>
        </div>
        <div className={styles.heroCallToAction}>
          <div className={styles.heroBtn}>          
              <Link to="/shop" className={styles.heroBtnContainer}>
                <div className={styles.dotsContainer}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <span>Tienda!</span>
              </Link>        
          </div>
        </div>
      </section>
    </main>
  )
}
export default HeroComponent;


