import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root.jsx";
import Card from "../components/Card.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/card",
        element: <Card />
    }
]);
export default router;
