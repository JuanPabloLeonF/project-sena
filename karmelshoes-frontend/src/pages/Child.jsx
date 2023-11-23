import {Header} from "/src/components/senaApp/Header"
import {Nav} from "/src/components/senaApp/Nav.jsx"
import {Main} from "/src/components/senaApp/Main.jsx"
import {Footer} from "/src/components/senaApp/Footer.jsx"
import {SectionProduct} from "/src/components/sectionProduct/SectionProduct";
import "/src/css/styleChild.css";

export const Child = () => {

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