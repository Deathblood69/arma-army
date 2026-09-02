import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout.tsx";
import Home from "./ui/Home.tsx";
import ArmyOrg from "./ui/ArmyOrg.tsx";
import BattalionOrg from "./ui/BattalionOrg.tsx";
import CompanyOrg from "./ui/CompanyOrg.tsx";
import BrigadeOrg from "./ui/BrigadeOrg.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: ":army",
        children: [
          { index: true, Component: ArmyOrg },
          { path: ":brigade", Component: BrigadeOrg },
          { path: ":brigade/:battalion", Component: BattalionOrg },
          { path: ":brigade/:battalion/:company", Component: CompanyOrg },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
