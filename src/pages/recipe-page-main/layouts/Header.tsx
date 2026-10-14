import type { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => (
	<header className="recipe-intro mb-8">{children}</header>
);
