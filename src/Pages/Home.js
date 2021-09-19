import { AuxMain } from "../Components/AuxMain/auxMain";
import { End } from "../Components/End/end";
import { Footer } from "../Components/Footer/footer";
import { Main } from "../Components/Main/main";
import { MobileImage1 } from "../Components/MobileImage1/mobileImage1";
import { MobileImage2 } from "../Components/MobileImage2/mobileImage2";
import { MobileImage3 } from "../Components/MobileImage3/mobileImage3";
import { Navbar } from "../Components/Nav Bar/navBar";
import { Obejctive1 } from "../Components/Objective1/objective1";
import { Obejctive2 } from "../Components/Objective2/objective2";

export const Home = () => {
  return (
    <>
      <div className="bg" >
      <Navbar />
      <Main />
      <AuxMain/>
      <MobileImage1/>
      <Obejctive1/>
      <MobileImage2/>
      <Obejctive2/>
      <MobileImage3/>
      <End/>
      <Footer/>
      </div>
    </>
  );
};
