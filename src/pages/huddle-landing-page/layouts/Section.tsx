import type { JSX, PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren): JSX.Element => (
	<section className="flex items-center flex-col gap-4 text-center md:text-left px-16 mb-28">
		{children}
	</section>
);
