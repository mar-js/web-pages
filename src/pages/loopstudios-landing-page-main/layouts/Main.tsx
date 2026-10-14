import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main className="loop-main relative mx-auto w-[calc(100%_-_48px)] max-w-[1110px]">{children}</main>
);
