import { useLocation } from "react-router-dom";
import { ContainerMenuProductGentleman } from "./ContainerMenuProductGentleman";
import { ContainerMenuProductLady } from "./ContainerMenuProductLady";
import { ContainerMenuProductChild } from "./ContainerMenuProductChild";

export const SectionProduct = () => {
  const location = useLocation();

  
  const renderProductContainer = () => {
    if (location.pathname === "/lady") {
      return <ContainerMenuProductLady />;
    } else if (location.pathname === "/gentleman") {
      return <ContainerMenuProductGentleman />;
    } else if (location.pathname === "/child") {
      return <ContainerMenuProductChild></ContainerMenuProductChild>;
    } else {
      return null;
    }
  };

  const sectionClassName = () => {
    if (location.pathname === "/lady") {
      return "section-product";
    } else if (location.pathname === "/gentleman") {
      return "section-product";
    } else if (location.pathname === "/child") {
      return "section-boy";
    } else {
      return "section-product";
    }
  };

  return (
    <section className={sectionClassName()}>{renderProductContainer()}</section>
  );
};
