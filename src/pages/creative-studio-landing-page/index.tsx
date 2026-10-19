import type { JSX } from "react";
import { FooterContent, Hero, Navigation, Portfolio } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const CreativeStudioLandingPage = (): JSX.Element => (
	<div className="min-h-screen bg-[#f4f1ec] font-sans text-[#22221f]">
		<Header><Navigation /></Header>
		<Main>
			<Section className="relative min-h-[650px] overflow-hidden bg-[#252522] text-white md:min-h-[740px]" id="inicio" ariaLabelledBy="forma-hero-title">
				<Hero />
			</Section>
			<Section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28" id="proyectos" ariaLabelledBy="studio-portfolio-heading">
				<Portfolio />
			</Section>
		</Main>
		<Footer><FooterContent /></Footer>
	</div>
);
