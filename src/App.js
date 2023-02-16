import Nav from "./components/nav/Nav";
import Random from "./pages/random/Random";

import Search from "./components/search/Search";
import { useState } from "react";
import { useGetRandomQuote } from "./hooks/useGetRandomQuote";

// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const { quote, isLoading, newQuote, newAuthorQuote, setIsLoading, newCategoryQuote } = useGetRandomQuote();

  // const Layout = () => {
  //   return (
  //     <div className="App">
  //       <Outlet />
  //     </div>
  //   );
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [{ path: "/", element: <Random /> }],
  //   },
  // ]);

  // return <RouterProvider router={router}></RouterProvider>;

  const searchModalSwitch = () => {
    setShowSearch((prev) => !prev);
  };

  const hideSearchModal = () => {
    setShowSearch(false);
  };

  return (
    <div className="App">
      <Nav switchModal={searchModalSwitch} />
      {showSearch && <Search onHideModal={hideSearchModal} onSetIsLoading={setIsLoading} onNewAuthorQuote={newAuthorQuote} />}
      <Random onQuote={quote} onIsLoading={isLoading} onSetIsLoading={setIsLoading} onNewQuote={newQuote} onNewAuthorQuote={newAuthorQuote} onNewCategoryQuote={newCategoryQuote} />
    </div>
  );
}

export default App;
