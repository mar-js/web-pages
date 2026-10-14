import type { JSX } from "react";
import { Articles, Benefits, Hero } from "./components";
import { Footer, Header, Main } from "./layouts";

export const DigitalBankLandingPage = (): JSX.Element => (
	<div className="digitalbank-page min-h-screen overflow-hidden bg-[#fafafa] font-sans text-[18px] text-[#2d314d]">
		<Header />
		<Main>
			<Hero />
			<Benefits />
			<Articles />
		</Main>
		<Footer />
	</div>
);
