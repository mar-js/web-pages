import type { JSX } from "react";
import {
	Boost,
	Features,
	FooterContent,
	Hero,
	Navigation,
	Shortener,
} from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const UrlShorteningApi = (): JSX.Element => (
	<div className="min-h-screen overflow-hidden font-['Poppins',sans-serif] text-[#35323e]">
		<Header>
			<Navigation />
		</Header>
		<Main>
			<Hero />
			<Section id="shorten" className="bg-[#f0f1f6] px-6 pb-16 md:px-10 md:pb-24">
				<Shortener />
				<Features />
			</Section>
			<Boost />
		</Main>
		<Footer>
			<FooterContent />
		</Footer>
	</div>
);
