import { createContext } from "react";

const OrderPageContext = createContext({
  isAdmin: Boolean,
  setIsAdmin: () => {},

  isCollapsed: Boolean,
  setIsCollapsed: () => {},

  selectedTab: "",
  setSelectedTab: () => {},

  menu: [],
  setMenu: () => {},

  selectedCard: {},
  setSelectedCard: () => {},

  isCardSelected: Boolean,
  setIsCardSelected: () => {},

  updatedProduct: {},
  setUpdatedProduct: () => {},

  inputTitleRef: {},

  createCard : () => {},
  updateCard : () => {},
  deleteCard : () => {},

  resetMenu: () => {},

  addProduct : () => {},
  deleteProduct: () => {},
  updateProduct: () => {},

  basket: [],
  setBasket: () => {},

  selectCard: () => {},
  deselectCard: () => {},
  addToBasket: () => {},
  deleteCardAndProduct: () => {},

  selectTab: () => {},
});

export default OrderPageContext;
