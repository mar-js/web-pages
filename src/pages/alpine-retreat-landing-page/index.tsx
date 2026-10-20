import type { JSX } from "react";
import { FooterContent, Hero, Navigation, Stay } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const AlpineRetreatLandingPage = (): JSX.Element => (
	<div className="min-h-screen bg-[#f1f0e9] font-sans text-[#23342e]">
		<Header><Navigation /></Header>
		<Main>
			<Section className="relative flex min-h-[660px] items-end overflow-hidden bg-[#243b33] text-white md:min-h-[760px]" id="inicio" ariaLabelledBy="retreat-hero-heading">
				<Hero />
			</Section>
			<Section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28" id="estancias" ariaLabelledBy="retreat-stay-heading">
				<Stay />
			</Section>
		</Main>
		<Footer><FooterContent /></Footer>
	</div>
);
