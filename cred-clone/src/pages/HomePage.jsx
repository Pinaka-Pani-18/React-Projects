import FreeSpace from "../components/FreeSpace/FreeSpace";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductShowCase from "../components/ProductShowCase/ProductShowCase";
import Header from "../components/common/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FreeSpace />
    </>
  );
};

export default HomePage;
