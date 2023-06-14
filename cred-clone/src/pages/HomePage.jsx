import CredExperience from "../components/CredExperience/CredExperience";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductShowCase from "../components/ProductShowCase/ProductShowCase";
import Header from "../components/common/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <CredExperience />
      <CredSecurity />
    </>
  );
};

export default HomePage;
