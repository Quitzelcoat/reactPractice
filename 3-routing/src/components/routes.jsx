import App from "../App.jsx";
import Profile from "./Profile.jsx";
import ErrorPage from "./ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];

/*
import DefaultProfile from "./components/DefaultProfile";
import Spinach from "./components/Spinach.jsx";
import Popeye from "./components/Popeye.jsx";

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    },
    {
    path: "profile",
    element: <Profile />,
    children: [
        { index: true, element: <DefaultProfile /> },
        { path: "spinach", element: <Spinach /> },
        { path: "popeye", element: <Popeye /> },
    ],
    },
]);
*/

export default routes;
