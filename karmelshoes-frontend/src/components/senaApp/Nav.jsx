import { Link } from "react-router-dom";
import { ContainerNavOne } from "./ContainerNavOne";
import { ContainerNavTwo } from "./ContainerNavTwo";
import { ContainerNavThree } from "./ContainerNavThree";
import "/src/css/styleNav.css";

export const Nav = ({
  showShoppingCart,
  showLady,
  showGentleman,
  showBoy,
  initPage,
  activeChild,
  activeLady,
  activeGentleman,
  showWhoWeAre,
  showShop,
  activeWhoWeAre,
  activeShop,
}) => {
  return (
    <>
      <nav className="nav">
        <Link onClick={initPage} to={"/"} className="link">
          <h1 className="title">KARMELSHOES</h1>
        </Link>
        <ContainerNavOne
          showWhoWeAre={showWhoWeAre}
          showShop={showShop}
          activeWhoWeAre={activeWhoWeAre}
          activeShop={activeShop}
        ></ContainerNavOne>
        <ContainerNavTwo
          showLady={showLady}
          showGentleman={showGentleman}
          showBoy={showBoy}
          activeChild={activeChild}
          activeLady={activeLady}
          activeGentleman={activeGentleman}
        ></ContainerNavTwo>
        <ContainerNavThree
          showShoppingCart={showShoppingCart}
        ></ContainerNavThree>
      </nav>
    </>
  );
};
