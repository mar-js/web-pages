import type { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren) => (
	<footer className="bg-[#fafafa] bg-[url('/assets/insure-landing-page-master/bg-pattern-footer-mobile.svg')] bg-left-top bg-no-repeat px-6 py-16 md:bg-[url('/assets/insure-landing-page-master/bg-pattern-footer-desktop.svg')] md:px-0" id="blog">{children}</footer>
);
