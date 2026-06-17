import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => (
	<main className="p-10 sm:p-14 md:p-20 remove-layout bg-[url('/assets/fylo-dark-landing-page/bg-curvy-mobile.svg')] bg-bottom bg-no-repeat bg-cover xl:bg-[url('/assets/fylo-dark-landing-page/bg-curvy-desktop.svg')]">
		{children}
	</main>
);
