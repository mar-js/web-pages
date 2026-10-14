import type { JSX } from "react";
import { Impact, Intro } from "./components";
import { Footer, Header, Main } from "./layouts";

export const GridLandingPage = (): JSX.Element => (
	<div className="flex min-h-screen flex-col bg-[#294fff] font-['Inter',sans-serif] text-[17px] text-white">
		<Header />
		<Main>
			<Intro />
			<Impact />
		</Main>
		<Footer />
	</div>
);
