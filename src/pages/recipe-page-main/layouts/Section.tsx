import type { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => (
	<article className="mx-auto max-w-[736px] overflow-hidden bg-white sm:rounded-3xl">
		{children}
	</article>
);
