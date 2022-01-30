//layouts
import LayoutBasic from '../layouts/LayoutBasic';

//pages
import Home from '../pages/home';
import Setting from '../pages/setting';
import Error404 from '../pages/error404';

const routes = [
    {
        path: "/",
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
        layout: LayoutBasic,
        component: Error404,
    }
];

export default routes;