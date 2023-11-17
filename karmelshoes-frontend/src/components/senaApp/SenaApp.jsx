import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { Nav } from "./Nav";
import { Section } from "./Section";
import "/src/css/styleSenaApp.css";

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
