import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./component/RootLayout";
import HomePage from "./component/HomePage";
import SearchResultPage from "./component/SearchResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search-results",
        element: <SearchResultPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
