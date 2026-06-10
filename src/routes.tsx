import type { AppRoute } from "./global/interfaces";
import { NotFoundPage, WebPages } from "./pages";

export const routes: AppRoute[] = [
  { path: "/", name: "Home", element: <WebPages />, exact: true },
  { path: "*", name: "Not Found", element: <NotFoundPage />, exact: true },
];
