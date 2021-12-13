// Layout 
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

// Admin Pages
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';
import AdminUsers from '../pages/Admin/Users';

// Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import UsersSignIn from '../pages/Users/SignIn';
import Profile from '../pages/Users/AccountPages/Profile';

// Other
import Error404 from '../pages/Error404';

const routes = [    
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true,
            },
            {
                path: '/admin/login',
                component: AdminSignIn,
                exact: true,
            },
            {
                path: '/admin/users',
                component: AdminUsers,
                exact: true,
            },
            {
                component: Error404,
            }
        ]
    },
    {
        path: '/',
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
            },
            {
                path: '/login',
                component: UsersSignIn,
                exact: true,
            },
            {
                path: '/profile',
                component: Profile,
                exact: true,
            },
            {
                path: '/contact',
                component: Contact,
                exact: true,
            },
            {
                path: '/about-us',
                component: AboutUs,
                exact: true,
            },
            {
                component: Error404,
            },
        ]
    }
];    

export default routes;

