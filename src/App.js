import Random from "./pages/random/Random";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="App">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/random",
      element: <Layout />,
      children: [{ path: "/random", element: <Random /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
