import { useState } from "react";
import { FormularyLogingOrigy } from "./FormularyLogingOrigy";
import { FormularyForgotPasword } from "./FormularyForgotPasword";
import "/src/css/styleLoging.css"

export const MainLoging = ({showLoging, handlerLoging}) => {

  const [activeForgotPassword, setActiveForgotPassword] = useState(false);

  const showForgotPassword = () => {
    setActiveForgotPassword(!activeForgotPassword);
  }

  const renderFormularyOriginOrFormularyForgotPassword = () => {
    if (!activeForgotPassword) {
      return <FormularyLogingOrigy handlerLoging={handlerLoging} showLoging={showLoging} showForgotPassword={showForgotPassword}></FormularyLogingOrigy>;
    } else if (activeForgotPassword){
      return <FormularyForgotPasword showForgotPassword={showForgotPassword}></FormularyForgotPasword>;
    }
  }

  return (
    <>
      <main className="main-loging">
        <div className="div-loging">
          <img src="/src/assets/imgs/icons8-user-48.png" alt="" />
        </div>
        {renderFormularyOriginOrFormularyForgotPassword()}
      </main>
    </>
  );
};
