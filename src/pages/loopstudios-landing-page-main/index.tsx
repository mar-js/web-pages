import type { JSX } from "react";
import { About, Creations, FooterContent, Hero } from "./components";
import { Footer, Main, Section } from "./layouts";

export const LoopstudiosLandingPage = (): JSX.Element => (
	<div className="loop-page min-h-screen bg-white font-sans text-black">
		<Hero />
		<Main>
			<Section>
				<About />
			</Section>
			<Section>
				<Creations />
			</Section>
		</Main>
		<Footer>
			<FooterContent />
		</Footer>
	</div>
);
