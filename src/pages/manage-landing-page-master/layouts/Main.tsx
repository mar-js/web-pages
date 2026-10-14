import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main id="home" className="mx-auto max-w-[1110px] px-6 md:px-10 xl:px-0">{children}</main>
);
