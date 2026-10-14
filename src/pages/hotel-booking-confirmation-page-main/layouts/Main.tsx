import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main className="mx-auto max-w-[1260px] px-5 pb-12 pt-[92px] md:px-10 md:pt-10" id="stay">{children}</main>
);
