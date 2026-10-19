import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="bg-[#22221f] text-white" id="estudio">{children}</footer>
);
