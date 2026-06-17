import type { JSX } from "react";

export type AppRoute = {
	path: string;
	name: string;
	element: JSX.Element;
	exact?: boolean;
};

export interface ImageComponent {
	path: string;
	alt: string;
	className?: string;
}

export interface DataServiceFyloDarkLandingPage {
	img: string;
	title: string;
	description: string;
}
