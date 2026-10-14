import type { JSX } from "react";
import {
	Companies,
	Cta,
	Devices,
	Hero,
	Icons,
	Links,
	Logo,
	Snippets,
	Tools,
} from "./components";
import { Footer, Header, Main, Nav, Section } from "./layouts";

export const ClipboardLandingPage = (): JSX.Element => (
	<div className="w-full min-h-screen bg-white bg-[url('/assets/clipboard-landing-page/bg-header-mobile.png')] bg-top bg-no-repeat bg-[length:100%_auto] md:bg-[url('/assets/clipboard-landing-page/bg-header-desktop.png')]">
		<div className="layout layout-container">
			<Header>
				<Logo />
			</Header>
			<Main>
				<Hero />
			</Main>
			<Section>
				<Snippets />
			</Section>
			<Section>
				<Devices />
			</Section>
			<Section>
				<Tools />
			</Section>
			<Section>
				<Companies />
			</Section>
			<Section>
				<Cta />
			</Section>
			<Footer>
				<div className="flex flex-col lg:flex-row justify-between items-center gap-10 [&_h1]:max-w-14">
					<Logo />
					<Nav>
						<Links />
					</Nav>
					<Icons />
				</div>
			</Footer>
		</div>
	</div>
);
