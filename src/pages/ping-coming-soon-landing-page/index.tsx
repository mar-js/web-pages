import { Image } from "@global/components";
import type { JSX } from "react";
import { IMG_HERO_PING_COMING_SOON_LANDING_PAGE } from "../../constants/data";
import { Copyright, Form, Hero, Icons, Title } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const PingComingSoonLandingPage = (): JSX.Element => (
	<div className="w-full min-h-screen">
		<div className="layout layout-container">
			<Header>
				<Title />
			</Header>
			<Main>
				<Hero />
				<Form />
			</Main>
			<Section>
				<Image
					className="w-150"
					path={IMG_HERO_PING_COMING_SOON_LANDING_PAGE}
					alt="Hero"
				/>
			</Section>
			<Footer>
				<Icons />
				<Copyright />
			</Footer>
		</div>
	</div>
);
