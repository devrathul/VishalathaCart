import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root'

import CategoryCard from './components/category/CategoryCard'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: CategoryCard },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
