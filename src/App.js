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
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Random /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
