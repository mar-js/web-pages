import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="bg-[#172b27] text-white" id="sobre-ruta">{children}</footer>
);
