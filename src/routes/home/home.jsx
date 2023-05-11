import HeroComponent from "../../components/hero-components/hero-component/hero-component"
import HomeCarousel from "../../components/hero-components/home-carousel/home-carousel";
import ProductsByRaiting from "../../components/hero-components/products-by-raiting/products-by-raiting";
import ProductsBySale from "../../components/hero-components/products-by-sale/products-by-sale";

const Home = () => {
  return (
    <>
      <HeroComponent />
      <ProductsByRaiting />
      <HomeCarousel />
      <ProductsBySale />
    </>
  )
}

export default Home;