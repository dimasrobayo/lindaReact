//layouts
import LayoutBasic from '../layouts/LayoutBasic';
import LayoutClient from '../layouts/LayoutClient';

//pages client
import HomeClient from '../pages/client/HomeClient';
import StoreClient from '../pages/client/StoreClient';
import Contact from '../pages/client/Contact';
import ProductDetail from '../pages/client/ProductDetail';
import ShopingCart from '../pages/client/ShopingCart';
import Checkout from '../pages/client/Checkout';

//pages dashboard
import Home from '../pages/dashboard/home';
import Setting from '../pages/dashboard/setting';
import AddSetting from '../pages/dashboard/setting/addsetting';
import Error404 from '../pages/error404';

const routes = [
    {
        path: "/",
        layout: LayoutClient,
        component: HomeClient,
        exact: true,
    },
    {
        path: "/store",
        layout: LayoutClient,
        component: StoreClient,
        exact: true,
    },
    {
        path: "/contact",
        layout: LayoutClient,
        component: Contact,
        exact: true,
    },
    {
        path: "/ProductDetail",
        layout: LayoutClient,
        component: ProductDetail,
        exact: true,
    },
    {
        path: "/ShopingCart",
        layout: LayoutClient,
        component: ShopingCart,
        exact: true,
    },
    {
        path: "/Checkout",
        layout: LayoutClient,
        component: Checkout,
        exact: true,
    },
    {
        path: "/dashboard",
        layout: LayoutBasic,
        component: Home,
        exact: true,
    },
    {
        path: "/setting",
        layout: LayoutBasic,
        component: Setting,
        exact: true,
    },
    {
        path: "/addSetting",
        layout: LayoutBasic,
        component: AddSetting,
        exact: true,
    },
    {
        layout: LayoutBasic,
        component: Error404,
    }
];

export default routes;