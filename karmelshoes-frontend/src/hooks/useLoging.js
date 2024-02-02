import { useReducer } from "react";
import { logingReducer } from "../reducer/logingReducer";
import { logingAuthentication } from "/src/services/logingAuthentication";
import { initialLogin } from "../models/initialLogin";

export const useLoging = () => {
  const [login, dispach] = useReducer(logingReducer, initialLogin);

  const handlerLoging = async ({ name, password }) => {
    try {
      const response = await logingAuthentication({ name, password });
      const token = response.data.token;
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      const clientId = claims.clientId;
      const user = { name: claims.sub, clientId: clientId };

      dispach({
        type: "login",
        payload: { user, isAdmin: claims.isAdmin },
      });

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user: user,
          isAdmin: claims.isAdmin, 
        })
      );

      console.log("Todo bien incio sesion: " + user.name + "Bienvenido")
      

      sessionStorage.setItem("token", `Bearer ${token}`);
    } catch (error) {
      if (error.response?.status == 401) {
        console.log("Error Login", "Username o Password invalidos", "error");
      } else if (error.response?.status == 403) {
        console.log(
          "Error Login",
          "No tiene permisos al recursos o permisos",
          "error"
        );
      } else {
        throw error;
      }
    }
  };

  const handlerLogout = () => {
    dispach({
      type: "logout",
    });
    sessionStorage.removeItem("login");
    sessionStorage.removeItem("token");
    sessionStorage.clear();
  };

  return {
    login,
    handlerLoging,
    handlerLogout,
  };
};
