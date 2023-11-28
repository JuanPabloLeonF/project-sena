import { Header } from "/src/components/senaApp/Header";
import { Nav } from "/src/components/senaApp/Nav";
import { Footer } from "/src/components/senaApp/Footer";
import { MainLoging } from "../components/loging/MainLoging";

import "/src/css/styleLoging.css"

export const Loging = () => {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <MainLoging></MainLoging>
      <Footer></Footer>
    </>
  );
};
