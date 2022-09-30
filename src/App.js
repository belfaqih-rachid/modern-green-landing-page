import { Explore, Footer, Hero, Logos, MiddelSection, Navbar, NewsLatter, Pricing } from "./components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  footerAPI,
} from "./data/TravelData";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <MiddelSection memory={memory} />
      <Explore title="Explore The Beauty Of World" placesAPI={placesAPI} />
      <Logos brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <NewsLatter  />
      <Footer footerAPI={footerAPI} />
    </div>
  );
}

export default App;
