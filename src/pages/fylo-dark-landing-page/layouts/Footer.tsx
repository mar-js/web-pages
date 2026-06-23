import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="layout-container remove-layout-container bg-fylo-dark-navy-950">
		{children}
	</footer>
);
