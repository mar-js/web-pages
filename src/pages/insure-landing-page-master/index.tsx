import type { JSX } from "react";
import { Benefits, Callout, FooterContent, Hero } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const InsureLandingPage = (): JSX.Element => (
	<div className="min-h-screen overflow-hidden bg-white font-sans text-[#2b272f] pt-0 p-5">
		<Header />
		<Main>
			<Hero />
			<Section>
				<Benefits />
				<Callout />
			</Section>
		</Main>
		<Footer>
			<FooterContent />
		</Footer>
	</div>
);
