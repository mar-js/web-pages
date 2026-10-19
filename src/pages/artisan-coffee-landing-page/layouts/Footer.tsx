import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="bg-[#32271f] text-white">{children}</footer>
);
