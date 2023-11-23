import {Header} from "../components/senaApp/Header"
import {Nav} from "../components/senaApp/Nav"
import {Footer} from "../components/senaApp/Footer"
import {Main} from "../components/senaApp/Main"
import {SectionProduct} from "../components/lady/SectionProduct"
import "/src/css/styleSectionProduct.css"

export const Lady = () => {

    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
            <SectionProduct></SectionProduct>
        </>
    );
}