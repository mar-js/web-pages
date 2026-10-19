import type { JSX } from "react";
import { FooterContent, Hero, Navigation, Trips } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const NatureEscapesLandingPage = (): JSX.Element => (
	<div className="min-h-screen bg-[#f6f6f1] font-sans text-[#172b27]">
		<Header><Navigation /></Header>
		<Main>
			<Section className="relative flex min-h-[640px] items-center overflow-hidden bg-[#264b40] text-white md:min-h-[720px]" id="inicio" ariaLabelledBy="ruta-hero-title">
				<Hero />
			</Section>
			<Section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28" id="escapadas" ariaLabelledBy="nature-trips-heading">
				<Trips />
			</Section>
		</Main>
		<Footer><FooterContent /></Footer>
	</div>
);
