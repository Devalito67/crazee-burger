import { createContext } from "react";

const OrderPageContext = createContext({
  isAdmin: Boolean,
  setIsAdmin: () => {},

  isCollapsed: Boolean,
  setIsCollapsed: () => {},

  selectedTab: "",
  setSelectedTab: () => {},
});

export default OrderPageContext;
