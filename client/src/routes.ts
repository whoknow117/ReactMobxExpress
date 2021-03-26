import Admin from "./pages/Admin/Admin";
import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    SUBCATEGORY_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket/Basket";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth/Auth";
import DevicePage from "./pages/DevicePage/DevicePage";
import SubCategoryPage from "./pages/SubCategoryPage/SubCategoryPage";
import About from "./pages/About/About";


export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },

]

export const publicRoutes = [

    {
        path:BASKET_ROUTE,
        Component: Basket
    },
    {
        path: SHOP_ROUTE ,
        Component: Shop
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: SUBCATEGORY_ROUTE + '/:typeId',
        Component: SubCategoryPage
    },
    {
        path: LOGIN_ROUTE ,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE ,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id' ,
        Component: DevicePage
    }
]