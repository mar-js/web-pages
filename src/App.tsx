import type { JSX } from "react";
import { Link, Route, Switch } from "wouter";
import { routes } from "./routes";

export const App = (): JSX.Element => (
  <>
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-indigo-600">WebPages</Link>
      </nav>
    </header>
    <Switch>
      {routes.map(route => <Route key={route.name} path={route.path}>{route.element}</Route> )}
    </Switch>
  </>
)
