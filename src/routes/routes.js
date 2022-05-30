//layouts
import LayoutBasic from '../layouts/LayoutBasic';
import LayoutClient from '../layouts/LayoutClient';

//pages client
import HomeClient from '../pages/client/HomeClient';

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