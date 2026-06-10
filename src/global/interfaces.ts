import type { JSX } from "react";

export type AppRoute = {
  path: string;
  name: string;
  element: JSX.Element;
  exact?: boolean;
};
