import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => (
	<footer className="insure-footer bg-[#fafafa] px-6 py-16 md:px-0" id="blog">{children}</footer>
);
