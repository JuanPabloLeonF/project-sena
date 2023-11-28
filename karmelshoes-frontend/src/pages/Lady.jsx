import { Header } from "../components/senaApp/Header";
import { Nav } from "../components/senaApp/Nav";
import { Footer } from "../components/senaApp/Footer";
import { Main } from "../components/senaApp/Main";
import { SectionProduct } from "../components/sectionProduct/SectionProduct";
import { DivShowProduct } from "../components/senaApp/DivShowProduct";
import "/src/css/styleLady.css";

export const Lady = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <DivShowProduct></DivShowProduct>
      <Footer></Footer>
      <SectionProduct></SectionProduct>
    </>
  );
};
