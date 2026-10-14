import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => (
	<footer className="bg-[#1d1e25] px-6 py-12 text-white" id="signup">{children}</footer>
);
