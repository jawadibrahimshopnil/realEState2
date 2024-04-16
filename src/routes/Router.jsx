import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root.jsx";
import Card from "../components/Card.jsx";
import Slider from "../components/Slider.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/card",
        element: <Card />
    },
    {
        path: "/slider",
        element: <Slider />
    }
]);
export default router;
