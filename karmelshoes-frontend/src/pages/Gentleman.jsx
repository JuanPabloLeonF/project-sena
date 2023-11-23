
import { SectionProduct } from "../components/sectionProduct/SectionProduct";
import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import "/src/css/styleGentleman.css";

export const Gentleman = () => {

    return (
        <>
        <Header></Header>
        <Nav></Nav>
        <section></section>
        <Main></Main>
        <Footer></Footer>
        <SectionProduct></SectionProduct>
        </>
    );
}