import type { JSX, PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren): JSX.Element => (
	<section className="flex flex-col items-center justify-center mb-28">
		{children}
	</section>
);
