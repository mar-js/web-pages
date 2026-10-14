import type { JSX, PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren): JSX.Element => (
	<footer
		id="resources"
		className="bg-[#232127] px-6 py-14 text-center text-white md:px-10 md:py-16"
	>
		<div className="mx-auto grid max-w-[1110px] gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.5fr] md:gap-8 md:text-left">
			{children}
		</div>
	</footer>
);
