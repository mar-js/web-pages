import type { JSX, PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren): JSX.Element => (
	<header className="mx-auto flex max-w-[1110px] items-center justify-between px-6 py-10 md:px-10 xl:py-12">
		{children}
	</header>
);
