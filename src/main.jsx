import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectList from "./pages/ProjectList";
import Root from "./routes/root";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";

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
        path: "/",
        element: <ProjectList />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetail />,
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
