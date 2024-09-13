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

  newProduct: {},
  setNewProduct: () => {},

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
});

export default OrderPageContext;
