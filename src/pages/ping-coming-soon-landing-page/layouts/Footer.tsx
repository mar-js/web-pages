import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="flex flex-col justify-center items-center gap-5">
		{children}
	</footer>
);
