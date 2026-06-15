import type { JSX, PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren): JSX.Element => (
	<section className="flex items-center flex-col gap-4 text-center xl:text-left px-12 mb-28">
		{children}
	</section>
);
