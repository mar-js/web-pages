import type { JSX, PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren): JSX.Element => (
	<header className="flex justify-between items-center mb-28">
		{children}
	</header>
);
