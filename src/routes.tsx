import type { AppRoute } from "./global/interfaces";
import { WebPages } from "./pages";

export const routes: AppRoute[] = [
  { path: "/", name: "Inicio", element: <WebPages />, exact: true },
];
