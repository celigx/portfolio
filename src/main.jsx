import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectList from "./pages/ProjectList";
import Root from "./routes/root";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const client = new ApolloClient({
  uri: `https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/${import.meta.env.VITE_CONTENT_API}/master`,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/portfolio",
        element: <ProjectList />,
      },
      {
        path: "/portfolio/projects",
        element: <Projects />,
      },
      {
        path: "/portfolio/projects/:id",
        element: <ProjectDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
