import Random from "./pages/random/Random";
import ExactQuote from "./pages/exactQuote/ExactQuote";

import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
  const Root = () => <Outlet />;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Random />} />
        <Route path="/:id" element={<ExactQuote />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
