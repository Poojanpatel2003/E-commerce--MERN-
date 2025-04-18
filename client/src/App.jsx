import AuthLayout from "./components/auth/layout";
import { AuthLogin } from "./pages/auth/login";
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
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";

const isAuthenticated = false;
const user = null;

export const routes = [
  {
    path: "/auth",
    element: (
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AuthLayout />
      </CheckAuth>
    ),
    children: [
      { path: "login", element: <AuthLogin /> },
      { path: "register", element: <Authregister /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <AdminLayout />
      </CheckAuth>
    ),
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "products", element: <AdminProducts /> },
      { path: "orders", element: <AdminOrders /> },
      { path: "features", element: <AdminFeatures /> },
    ],
  },
  {
    path: "/shop",
    element: (
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <ShoppingLayout />
      </CheckAuth>
    ),
    children: [
      { path: "home", element: <ShoppingHome /> },
      { path: "listing", element: <ShoppingListing /> },
      { path: "checkout", element: <ShoppingCheckout /> },
      { path: "account", element: <ShoppingAccount /> },
    ],
  },
  {
    path: "/unauth-page",
    element: <UnauthPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
