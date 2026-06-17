import type { JSX, PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren): JSX.Element => (
	<section className="layout-container remove-layout-container bg-fylo-dark-navy-900">
		{children}
	</section>
);
