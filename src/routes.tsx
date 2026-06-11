import type { AppRoute } from "./global/interfaces";
import { NotFoundPage, WebPages } from "./pages";
import { HuddleLandingPage } from "./pages/huddle-landing-page";

export const routes: AppRoute[] = [
  { path: "/", name: "Home", element: <WebPages />, exact: true },
  { path: "/pages/huddle-landing-page", name: "Huddle Landing Page", element: <HuddleLandingPage />, exact: true },
  { path: "*", name: "Not Found", element: <NotFoundPage />, exact: true },
];
