import type { JSX } from "react";
import {
	Ceo,
	Contact,
	Form,
	Hero,
	Icons,
	Links,
	LinksPages,
	Logo,
	Services,
	Work,
} from "./components";
import { Footer, Header, Main, Nav, Section } from "./layouts";

export const FyloDarkLandingPage = (): JSX.Element => (
	<div className="w-full min-h-screen bg-fylo-dark-navy-800">
		<div className="layout layout-container">
			<Header>
				<Logo />
				<Nav>
					<Links />
				</Nav>
			</Header>
			<Main>
				<Hero />
			</Main>
			<Section>
				<Services />
			</Section>
			<Section>
				<Work />
			</Section>
			<Section>
				<Ceo />
			</Section>
			<Section>
				<Form />
			</Section>
			<Footer>
				<Logo />
				<div className="flex flex-col lg:flex-row justify-between gap-15">
					<Contact />
					<Nav>
						<LinksPages />
					</Nav>
					<Icons />
				</div>
			</Footer>
		</div>
	</div>
);
