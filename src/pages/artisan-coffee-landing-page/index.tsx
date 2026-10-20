import type { JSX } from "react";
import { FooterContent, Menu, Navigation, Story } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const ArtisanCoffeeLandingPage = (): JSX.Element => (
	<div className="min-h-screen bg-[#f5f0e8] font-sans text-[#32271f]">
		<Header><Navigation /></Header>
		<Main>
			<Section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#38281f] text-white md:min-h-[740px]" id="inicio" ariaLabelledBy="coffee-hero-heading">
				<Story />
			</Section>
			<Section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28" id="carta" ariaLabelledBy="coffee-menu-heading">
				<Menu />
			</Section>
		</Main>
		<Footer><FooterContent /></Footer>
	</div>
);
