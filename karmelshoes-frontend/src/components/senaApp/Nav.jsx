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
  showPurchaseHistory,
  activeWhoWeAre,
  activeShop,
  activePurchaseHistory,
  showNavPerfil,
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
          showPurchaseHistory={showPurchaseHistory}
          activeWhoWeAre={activeWhoWeAre}
          activeShop={activeShop}
          activePurchaseHistory={activePurchaseHistory}
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
          showNavPerfil={showNavPerfil}
        ></ContainerNavThree>
      </nav>
    </>
  );
};
