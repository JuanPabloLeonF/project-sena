import { Footer } from "../components/senaApp/Footer";
import { Header } from "../components/senaApp/Header";
import { Main } from "../components/senaApp/Main";
import { Nav } from "../components/senaApp/Nav";
import { Section } from "../components/senaApp/Section";
import "/src/css/styleSenaApp.css";
import "/src/css/index.css"

export const SenaApp = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Section></Section>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};
