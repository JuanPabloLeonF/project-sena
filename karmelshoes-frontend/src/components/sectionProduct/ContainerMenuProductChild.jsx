/* eslint-disable react/prop-types */
import { useState } from "react";
import { ContainerBoy } from "./ContainerBoy";
import { ContainerGirld } from "./ContainerGirld";
import { getAllProductPageByGender } from "../../services/productsService";

export const ContainerMenuProductChild = ({ dataTableProductAvailable }) => {
  const [selectedCategory, setSelectedCategory] = useState("boy");

  const handlerOnClickBoy = async () => {
    setSelectedCategory("boy");
    try {
      const data = await getAllProductPageByGender(0, 9, "NIÑO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerOnClickGirl = async () => {
    setSelectedCategory("girl");
    try {
      const data = await getAllProductPageByGender(0, 9, "NIÑA");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className={`container-girl ${selectedCategory === "boy" && "inactive"}`}>
        <h2 onClick={handlerOnClickGirl}>Niña</h2>
        {selectedCategory === "girl" && <ContainerGirld />}
      </section>
      <section className={`container-boy ${selectedCategory === "girl" && "inactive"}`}>
        <h2 onClick={handlerOnClickBoy}>Niño</h2>
        {selectedCategory === "boy" && <ContainerBoy dataTableProductAvailable={dataTableProductAvailable} />}
      </section>
    </>
  );
};
