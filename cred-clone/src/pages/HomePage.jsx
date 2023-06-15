import BrandsLove from "../components/BrandsLove/BrandsLove";
import CredExperience from "../components/CredExperience/CredExperience";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductShowCase from "../components/ProductShowCase/ProductShowCase";
import WindowPeek from "../components/WindowPeek/WindowPeek";
import Header from "../components/common/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <WindowPeek />
      <CredSecurity />
    </>
  );
};

export default HomePage;
