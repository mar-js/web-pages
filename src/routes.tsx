import type { AppRoute } from "./global/interfaces";

export const routes: AppRoute[] = [
  { path: "/", name: "Inicio", element: () => {}, exact: true },
];
