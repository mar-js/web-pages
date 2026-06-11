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
