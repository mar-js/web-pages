import type { AppRoute } from "./global/interfaces";
import { NotFoundPage, WebPages } from "./pages";

export const routes: AppRoute[] = [
  { path: "/", name: "Inicio", element: <WebPages />, exact: true },
  { path: "*", name: "Inicio", element: <NotFoundPage />, exact: true },
];
