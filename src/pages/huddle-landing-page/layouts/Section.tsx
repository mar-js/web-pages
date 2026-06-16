import type { JSX, PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren): JSX.Element => (
	<section className="flex items-center flex-col gap-4 text-center xl:items-start xl:text-left xl:w-2/5">
		{children}
	</section>
);
