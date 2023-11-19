import { MainWhoWeAre } from "../components/whoWeAre/MainWhoWeAre";
import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Nav } from "../components/senaApp/Nav";

export const WhoWeAre = () => {

    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <MainWhoWeAre></MainWhoWeAre>
            <Footer></Footer>
        </>
    );
}