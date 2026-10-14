import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => (
	<footer className="loop-footer bg-black px-6 py-12 text-white" id="footer">{children}</footer>
);
