
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import { Authlogin } from "./pages/auth/login";
import { Authregister } from "./pages/auth/register";
import { AdminLayout } from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/Home";
import ShoppingListing from "./pages/shopping-view/Listing";
import ShoppingAccount from "./pages/shopping-view/Account";
import ShoppingCheckout from "./pages/shopping-view/Checkout";

const App=()=>{
  return(
    <div className="flex flex-col overflow-hidden bg-white">
 
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Authlogin/>}/>
        <Route path="register" element={<Authregister/>}/>
      </Route>
      <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
      </Route>
      <Route path="/shop" element={<ShoppingLayout/>}>
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
      </Route>
      <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default App;