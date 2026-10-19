import type { JSX } from "react";
import { FooterContent, Hero, Interiors, Navigation } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const SlowLivingInteriorsPage = (): JSX.Element => (
	<div className="min-h-screen bg-[#f5f2ec] font-sans text-[#282821]">
		<Header><Navigation /></Header>
		<Main>
			<Section className="relative flex min-h-[610px] items-end overflow-hidden bg-[#353a30] md:min-h-[680px]" id="inicio" ariaLabelledBy="casa-hero-title">
				<Hero />
			</Section>
			<Section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28" id="espacios" ariaLabelledBy="interiors-heading">
				<Interiors />
			</Section>
		</Main>
		<Footer><FooterContent /></Footer>
	</div>
);
