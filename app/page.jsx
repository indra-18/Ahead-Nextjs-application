import Footer from "@components/Footer";
import Eq from "@components/homePage/Eq";
import Hero from "@components/homePage/Hero";
import Meet from "@components/homePage/Meet";
import Rating from "@components/homePage/Rating";
import Self from "@components/homePage/Self";
import StartTest from "@components/homePage/StartTest";
import Vacancies from "@components/homePage/Vacancies";
import Work from "@components/homePage/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <Eq />
      <Meet />
      <Self />
      <Rating />
      <StartTest />
      <Work />
      <Vacancies />
      <Footer />
    </div>
  )
}
