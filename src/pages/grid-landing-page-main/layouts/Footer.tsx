import type { JSX } from "react";

export const Footer = (): JSX.Element => (
	<footer className="grid-footer flex flex-col gap-1 border-t border-white/20 px-6 py-6 text-sm lg:flex-row lg:justify-between lg:gap-5 lg:px-[3.35vw] lg:py-[27px]" id="contact">
		<p>© 2026 Bridge Collective</p>
		<p id="partners">Registered charity 12345678</p>
	</footer>
);
