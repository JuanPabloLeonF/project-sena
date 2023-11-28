import {Header} from "/src/components/senaApp/Header"
import {Nav} from "/src/components/senaApp/Nav.jsx"
import {Main} from "/src/components/senaApp/Main.jsx"
import {Footer} from "/src/components/senaApp/Footer.jsx"
import {SectionProduct} from "/src/components/sectionProduct/SectionProduct";
import "/src/css/styleChild.css";
import { DivShowProduct } from "../components/senaApp/DivShowProduct";

export const Child = () => {

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
}