import { createBrowserRouter, RouterProvider } from "react-router-dom";
import route from "./route";

const router = createBrowserRouter(route);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
