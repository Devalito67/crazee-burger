import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import OrderPage from "../pages/order/OrderPage";
import ErrorPage from "../pages/error/ErrorPage";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/order/:username" element={<OrderPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
