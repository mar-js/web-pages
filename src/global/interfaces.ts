export type AppRoute = {
  path: string;
  name: string;
  element: React.FC<() => React.JSX.Element>;
  exact?: boolean;
};
