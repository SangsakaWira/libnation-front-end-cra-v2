import {
    Routes,
    Route,
} from "react-router-dom";

import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

// Pages
import Home from "./app/Home";
import AddBook from "./app/AddBook";
import Checkout from "./app/Checkout";
import Register from "./auth/Register";
import Login from "./auth/Login";
import MyBook from "./app/MyBook";

function AppRouter() {
    
    const AppLayout = ({children}) =>{
        return(
            <>
                <NavBar></NavBar>
                <Layout>
                    {children}
                </Layout>
            </>
        )
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout><Home/></AppLayout>} />
                <Route path="/add-book" element={<AppLayout><AddBook/></AppLayout>} />
                <Route path="/my-book" element={<AppLayout><MyBook/></AppLayout>} />
                <Route path="/checkout" element={<AppLayout><Checkout/></AppLayout>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </>
    )
}

export default AppRouter;