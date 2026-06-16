import type { AppRoute } from "./global/interfaces";
import {
	FyloDarkLandingPage,
	HuddleLandingPage,
	NotFoundPage,
	WebPages,
} from "./pages";

export const routes: AppRoute[] = [
	{ path: "/", name: "Home", element: <WebPages />, exact: true },
	{
		path: "/pages/huddle-landing-page",
		name: "Huddle Landing Page",
		element: <HuddleLandingPage />,
		exact: true,
	},
	{
		path: "/pages/fylo-dark-landing-page",
		name: "Fylo Dark Landing Page",
		element: <FyloDarkLandingPage />,
		exact: true,
	},
	{ path: "*", name: "Not Found", element: <NotFoundPage />, exact: true },
];
