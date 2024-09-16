import styled from "styled-components"
import Navbar from "../../components/reusable-ui/Navbar"
import Main from "./Main"
import { useRef, useState } from "react"
import OrderPageContext from "../../context/OrderPageContext"
import { fakeMenu2 } from "../../data__mocked/fakeMenu"
import { EMPTY_PRODUCT } from "../../enums/product"

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("addProduct");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menu, setMenu] = useState(fakeMenu2);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardSelected, setIsCardSelected] = useState(false)
  const [updatedProduct, setUpdatedProduct] = useState(EMPTY_PRODUCT);
  const inputTitleRef = useRef();
  const [basket, setBasket] = useState([])

  const updateItemList = (itemToUpdate, isQuantity = false) => {
    return (prevItemList) => {
      const itemIndex = prevItemList.findIndex((product) => product.id === itemToUpdate.id);

      if (itemIndex === -1) return prevItemList;

      const existingItem = prevItemList[itemIndex];
      const updatedItem = {
        ...existingItem,
        ...itemToUpdate,
        ...(isQuantity && { quantity: existingItem.quantity })
      };
      const updatedList = [...prevItemList];
      updatedList[itemIndex] = updatedItem;
      return updatedList;
    };
  };

  const updateCard = (itemToUpdate) => {
    setMenu(updateItemList(itemToUpdate));
  };

  const updateProduct = (itemToUpdate) => {
    setBasket(updateItemList(itemToUpdate, true));
  };

  const deleteCard = (idToDelete) => {
    setMenu((prevMenu) => {
      const menuFiltered = prevMenu.filter((cardMenu) => cardMenu.id !== idToDelete);
      return menuFiltered;
    });
  };

  const createCard = (newProduct) => {
    const updatedProduct = {
      ...newProduct, id: crypto.randomUUID()
    }

    const copyMenu = [updatedProduct, ...menu];
    setMenu(copyMenu);
  };

  const resetMenu = () => {
    setMenu(fakeMenu2);
    setSelectedCard({})
  };

  const addProduct = (productToAdd) => {
    const basketCopy = [productToAdd, ...basket];
    setBasket(basketCopy);
  };

  const deleteProduct = (idTodelete) => {
    const updateBasket = basket.filter((product) => product.id !== idTodelete);
    setBasket(updateBasket);
  };

  const selectCard = async (id) => {
    const card = menu.find((cardMenu) => cardMenu.id === id);
    setSelectedCard(card);
    setUpdatedProduct(card);
    setIsCardSelected(true);
    setIsCollapsed(false);
    await setSelectedTab("editProduct");
    inputTitleRef.current.focus();
  };

  const deselectCard = () => {
    setSelectedCard({});
    setUpdatedProduct(EMPTY_PRODUCT);
    setIsCardSelected(false);
  };

  const selectTab = async (keyTab) => {
    await setSelectedTab(keyTab);
    await setIsCollapsed(false);
    if (inputTitleRef.current) {
      inputTitleRef.current.focus();
    }
  }

  const addToBasket = (id) => {
    const cardSelected = menu.find((cardMenu) => cardMenu.id === id);
    const basketCopy = [...basket];
    const basketProductIndex = basket.findIndex((product) => product.id === cardSelected.id);

    if (basketProductIndex !== -1) {
      basketCopy[basketProductIndex].quantity += 1;
      setBasket(basketCopy);
    } else {
      addProduct({ ...cardSelected, quantity: 1 });
    }
  };

  const deleteCardAndProduct = (id) => {
    deleteCard(id);
    const productIndex = basket.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      deleteProduct(basket[productIndex].id);
    }
  };

  const orderPageContextValue = {
    isAdmin,
    setIsAdmin,
    menu,
    isCollapsed,
    setIsCollapsed,
    selectedTab,
    selectTab,
    selectedCard,
    setSelectedCard,
    isCardSelected,
    setIsCardSelected,
    updatedProduct,
    setUpdatedProduct,
    inputTitleRef,
    createCard,
    updateCard,
    deleteCard,
    resetMenu,
    addProduct,
    basket,
    setBasket,
    deleteProduct,
    updateProduct,
    deleteCardAndProduct,
    addToBasket,
    selectCard,
    deselectCard,
  }

  return (
    <OrderPageStyled>
      <OrderPageContext.Provider value={orderPageContextValue}>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageContext.Provider>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
display: flex;
height: 100vh;
background-color: #ffa01b;
align-items: center;
justify-content: center;
  .container {
    width: 1400px;
    display: flex;
    flex-direction: column;
    height: 95vh;
    position: relative;
    border-radius: 15px;
    overflow: hidden;
  }
`
