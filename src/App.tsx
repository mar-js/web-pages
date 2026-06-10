import type { JSX } from "react";
import { Route, Switch } from "wouter";
import { routes } from "./routes";

export const App = (): JSX.Element => (
  <Switch>
    {routes.map(route => <Route key={route.name} path={route.path}>{route.element}</Route> )}
  </Switch>
)
