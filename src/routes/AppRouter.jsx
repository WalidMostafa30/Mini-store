import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Favourite from "../pages/Favourite/Favourite";
import Categories from "../pages/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
      },
      {
        path: "categories/products/:prefix/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
