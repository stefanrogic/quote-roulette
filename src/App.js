import Random from "./pages/random/Random";

import { useGetRandomQuote } from "./hooks/useGetRandomQuote";

function App() {
  const { quote, isLoading, newQuote, newAuthorQuote, setIsLoading, newCategoryQuote } = useGetRandomQuote();

  return (
    <div className="App">
      <Random onQuote={quote} onIsLoading={isLoading} onSetIsLoading={setIsLoading} onNewQuote={newQuote} onNewAuthorQuote={newAuthorQuote} onNewCategoryQuote={newCategoryQuote} />
    </div>
  );
}

export default App;
