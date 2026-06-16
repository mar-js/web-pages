import type { JSX, PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren): JSX.Element => (
	<section className="flex items-center flex-col gap-4 text-center px-12 xl:text-left xl:w-[50%] xl:justify-start">
		{children}
	</section>
);
