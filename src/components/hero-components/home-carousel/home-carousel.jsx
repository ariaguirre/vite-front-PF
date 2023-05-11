import styles from "./home-carousel.module.css"
import Slider from "react-slick"

const HomeCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.homeCarouselContainer}>
      <Slider {...settings}>
        <div className={styles.homeCarousel} >
          <h3>CLARO QUE HAY DIAS O ETAPAS DIFICILES Y ESO TAMBIEN ES NORMAL</h3>
        </div >
        <div className={styles.homeCarousel}>
          <h3>DIOS TE ELIGIÓ PARA SER MADRE EN EL MOMENTO JUSTO</h3>
        </div>
        <div className={styles.homeCarousel}>
          <h3>Y TE DOTO DE TODO LO QUE NECESITAS PARA SER LA MAMÁ PERFECTA PARA TU BEBE</h3>
        </div>
        <div className={styles.homeCarousel}>
          <h3>LA MATERNIDAD ES UN CAMINO QUE TE ENSEÑA A SER PERSEVERANTE, POSITIVA, RECURSIVA Y MAGICA</h3>
        </div>        
      </Slider>
    </div>
    </div>
    
  )
}

export default HomeCarousel