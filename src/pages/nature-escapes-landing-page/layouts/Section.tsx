import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
	className: string;
	id: string;
	ariaLabelledBy: string;
}

export const Section = ({ children, className, id, ariaLabelledBy }: SectionProps) => (
	<section className={className} id={id} aria-labelledby={ariaLabelledBy}>{children}</section>
);
