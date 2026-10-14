import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="layout-container remove-layout-container bg-[#f5f6f8]">
		{children}
	</footer>
);
