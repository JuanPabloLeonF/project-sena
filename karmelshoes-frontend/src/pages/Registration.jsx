import { MainRegistration } from "../components/registration/MainRegistration";
import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";


export const Registration = () => {

    return (
        <>
         <Header></Header>
         <Nav></Nav>
         <Section></Section>
         <Main></Main>
         <MainRegistration></MainRegistration>
         <Footer></Footer>
        </>
    );
}