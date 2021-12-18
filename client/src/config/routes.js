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
import UsersSignIn from '../pages/Users/AccountPages/External/SignIn';

// External Pages
import ExternalSignIn from '../pages/Users/AccountPages/External/SignIn';
import Profile from '../pages/Users/AccountPages/External/Profile';
import Agenda from '../pages/Users/AccountPages/External/ExternalUsersAgenda/ExternalUsersAgenda';
import Result from '../pages/Users/AccountPages/External/ExternalUsersResult/ExternalUsersResult';
import Notification from '../pages/Users/AccountPages/External/ExternalUsersNotification/ExternalUsersNotification';

// Internal Pages
import InternalSignIn from '../pages/Users/AccountPages/Internal/SignIn';
import InternalProfile from '../pages/Users/AccountPages/Internal/InternalProfile';
import InternalAgenda from '../pages/Users/AccountPages/Internal/InternalUsersAgenda/InternalUsersAgenda';
import InternalResult from '../pages/Users/AccountPages/Internal/InternalUsersResult/InternalUsersResult';
import InternalExam from '../pages/Users/AccountPages/Internal/InternalUsersExam/InternalUsersExam';

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
                path: '/agenda',
                component: Agenda,
                exact: true,
            },
            {
                path: '/result',
                component: Result,
                exact: true,
            },
            {
                path: '/notification',
                component: Notification,
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
            // Internal 
            {
                path: '/internal/login',
                component: InternalSignIn,
                exact: true,
            },
            {
                path: '/internal-profile',
                component: InternalProfile,
                exact: true,
            },
            {
                path: '/internal-agenda',
                component: InternalAgenda,
                exact: true,
            },
            {
                path: '/internal-exam',
                component: InternalExam,
                exact: true,
            },
            {
                path: '/internal-result',
                component: InternalResult,
                exact: true,
            },
            // External
            {
                path: '/external/login',
                component: ExternalSignIn,
                exact: true,
            },

            // Error 404
            {
                component: Error404,
            },
        ]
    }
];    

export default routes;

