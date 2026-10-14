import type { JSX, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
	className: string;
}

export const Section = ({ children, className }: SectionProps): JSX.Element => (
	<section className={className}>{children}</section>
);
