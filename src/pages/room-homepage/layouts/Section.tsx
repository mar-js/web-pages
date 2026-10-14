import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
	id?: string;
	className: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
	<section id={id} className={className}>
		{children}
	</section>
);
