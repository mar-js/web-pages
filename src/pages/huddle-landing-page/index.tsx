import type { JSX } from "react";
import { Button, Description, Hero, Icons, Logo, Title } from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const HuddleLandingPage = (): JSX.Element => (
	<div className="w-full min-h-screen bg-huddle-purple-700 bg-[url('/assets/huddle-landing-page/bg-mobile.svg')] bg-center bg-cover xl:bg-[url('/assets/huddle-landing-page/bg-desktop.svg')]">
		<div className="layout layout-container">
			<Header>
				<Logo />
			</Header>
			<Main>
				<Hero />
				<Section>
					<Title />
					<Description />
					<Button />
				</Section>
			</Main>
			<Footer>
				<Icons />
			</Footer>
		</div>
	</div>
);
