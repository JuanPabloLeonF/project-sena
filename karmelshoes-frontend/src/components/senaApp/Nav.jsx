import { Link } from "react-router-dom";
import "/src/css/styleNav.css";
import { ContainerNavOne } from "./ContainerNavOne";
import { ContainerNavTwo } from "./ContainerNavTwo";
import { ContainerNavThree } from "./ContainerNavThree";

export const Nav = ({showShoppingCart}) => {
  return (
    <>
      <nav className="nav">
        <Link to={"/"} className="link">
          <h1 className="title">KARMELSHOES</h1>
        </Link>
        <ContainerNavOne></ContainerNavOne>
        <ContainerNavTwo></ContainerNavTwo>
        <ContainerNavThree showShoppingCart={showShoppingCart}></ContainerNavThree>
      </nav>
    </>
  );
};
