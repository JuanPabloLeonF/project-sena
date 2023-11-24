import { useState } from "react";
import { ContainerBoy } from "./ContainerBoy";
import { ContainerGirld } from "./ContainerGirld";

export const ContainerMenuProductChild = () => {
  const [selectedCategory, setSelectedCategory] = useState("boy");

  return (
    <>
      <section className={`container-girl ${selectedCategory === "boy" && "inactive"}`}>
        <h2 onClick={() => setSelectedCategory("girl")}>Niña</h2>
        {selectedCategory === "girl" && <ContainerGirld />}
      </section>
      <section className={`container-boy ${selectedCategory === "girl" && "inactive"}`}>
        <h2 onClick={() => setSelectedCategory("boy")}>Niño</h2>
        {selectedCategory === "boy" && <ContainerBoy />}
      </section>
    </>
  );
};
