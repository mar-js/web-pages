import type { JSX } from "react";
import { Impact, Intro } from "./components";
import { Footer, Header, Main } from "./layouts";

export const GridLandingPage = (): JSX.Element => (
	<div className="grid-page flex min-h-screen flex-col bg-[#294fff] text-white">
		<Header />
		<Main>
			<Intro />
			<Impact />
		</Main>
		<Footer />
	</div>
);
