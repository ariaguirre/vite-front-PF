import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel.module.css";

const Carousel = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (    
    
      <Slider {...settings}>
          {
            images.map((img, index) => (<div key={`${index}`}>
              <img src={img} alt="Img defaul MBAH" className={styles.imgSlider} />
            </div>) )
          }      
        </Slider>      
  )
}

export default Carousel
