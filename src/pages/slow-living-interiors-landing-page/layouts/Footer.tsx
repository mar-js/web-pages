import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="bg-[#282821] text-white" id="contacto">{children}</footer>
);
