import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./page-404";
import PageMaintenance from "./page-maintenance";
import PageIndex from "./PageIndex";

const routes = [
  {
    path: "/",
    element: <PageIndex />,
  },
  {
    path: "/404",
    element: <Page404 />,
  },
  {
    path: "/maintenance",
    element: <PageMaintenance />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
