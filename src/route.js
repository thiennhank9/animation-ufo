import Page404 from "./page-404";
import PageMaintenance from "./page-maintenance";
import PageIndex from "./PageIndex";
import Page500 from "./page-500";

const route = [
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
  {
    path: "/500",
    element: <Page500 />,
  },
];

export default route;
