import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer className="bg-[#23342e] text-white">{children}</footer>
);
