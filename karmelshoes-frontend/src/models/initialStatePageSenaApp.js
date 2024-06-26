import { clientModelId } from "./clientModel";
import { productModel, setDataDetailsProduct } from "./productModel";

export const initialStatePageSenaApp = {
  activeSection: "Main",
  activatePayment: false,
  activeFormularyCreateProduct: false,
  activeMainProductsSales: false,
  activeDataAdmin: false,
  activeDataProduct: false,
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
  currentPageProductAvalable: 1,
  totalPagesProductAvailable: 0,
  currentPage: 1,
  currentPageProduct: 1,
  totalPages: 0,
  totalPagesProduct: 0,
  dataTableAdmin: [],
  dataTableProduct: [],
  dataProduct: productModel,
  dataAdmin: clientModelId,
  updateMainAdmin: false,
  dataTableProductAvailable: [],
  activeDetailsProduct: false,
  dataDetailsProduct: setDataDetailsProduct,
  modelProductsShoppingCart: {},
  shoppingCartModel: {
    modelShoppingCart: {
      cartItemsShoppingCartDto: [],
      idShoppingCartDto: 0,
      productEntitiesShoppingCartDto: [],
      totalPriceShoppingCartDto: 0,
    },
    purcharse: false,
  },
  listModelProductWithColorsAndSizes: [],
};