import type { JSX, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
	className: string;
	id?: string;
}

export const Section = ({
	children,
	className,
	id,
}: SectionProps): JSX.Element => (
	<section id={id} className={className}>
		{children}
	</section>
);
