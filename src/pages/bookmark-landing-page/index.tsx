import type { JSX } from "react";
import { Extensions, Features, Faq, Hero, Newsletter } from "./components";
import { Footer, Header, Main } from "./layouts";

export const BookmarkLandingPage = (): JSX.Element => (
	<div id="top" className="min-h-screen overflow-hidden bg-white font-['Rubik',sans-serif] text-[#252b46]">
		<Header />
		<Main>
			<Hero />
			<Features />
			<Extensions />
			<Faq />
			<Newsletter />
		</Main>
		<Footer />
	</div>
);
