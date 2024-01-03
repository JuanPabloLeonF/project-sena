import { clientModelId } from "./clientModel";

export const initialStatePageSenaApp = {
  activeSection: "Main",
  activeMainProductsSales: false,
  activeDataAdmin: false,
  activeMainAdmin: false,
  activeShoppingCart: false,
  activeLoging: false,
  activeRegistrer: false,
  activeLady: false,
  activeGentleman: false,
  activeChild: false,
  activeWhoWeAre: false,
  activeShop: false,
  activePurchaseHistory: false,
  activeNavPerfil: false,
  clienteOrAdmin: clientModelId,
  currentPage: 1,
  totalPages: 0,
  dataTableAdmin: [],
  dataAdmin: clientModelId,
  updateMainAdmin: false,
};
