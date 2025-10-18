import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import AdminLayout from "./AdminLayout";
import Info from './Info/Info';
import About from './About/About';
import Services from './Services/Services';
import Calculator from './Calculator/Calculator';
import Contacts from './Contacts/Contacts';
import Gallery from './Gallery/Gallery';
import Blogs from './Blogs/Blogs';
import Blog from "./Blog/Blog";
import AdminServices from "./AdminServices/AdminServices";
import AdminExamples from "./AdminExamples/AdminExamples";
import AdminBlog from "./AdminBlog/AdminBlog";
import AdminClients from "./AdminClients/AdminClients";
import AdminSubscribers from "./AdminSubscribers/AdminSubscribers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Info />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: "/calculate",
            element: <Calculator />
        },
        {
            path: "/contacts",
            element: <Contacts />
        },
        {
            path: "/gallery",
            element: <Gallery />
        },
        {
            path: "/blogs",
            element: <Blogs />
        },
        {
            path: "/blogs/:id",
            element: <Blog />
        }
    ]},
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                path: "services",
                element: <AdminServices />
            },
            {
                path: "examples",
                element: <AdminExamples />
            },
            {
                path: "blogs",
                element: <AdminBlog />
            },
            {
                path: "cliens",
                element: <AdminClients />
            },
            {
                path: "subscribers",
                element: <AdminSubscribers />
            },
        ]},
]);

function App() {
    return (<>
        <RouterProvider router={router} />
    </>);
}
  
export default App;