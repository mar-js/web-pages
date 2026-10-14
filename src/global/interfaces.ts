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

export interface DataCeoFyloDarkLandingPage {
	img: string;
	title: string;
	subtitle: string;
	description: string;
}

export interface DataContactFyloDarkLandingPage {
	icon: string;
	text: string;
}

export interface DataSnippetClipboardLandingPage {
	title: string;
	description: string;
}

export interface DataToolClipboardLandingPage {
	img: string;
	title: string;
	description: string;
}

export interface BookmarkFeature {
	tab: string;
	title: string;
	description: string;
	image: string;
}

export interface BookmarkQuestion {
	question: string;
	answer: string;
}

export interface BookmarkExtension {
	image: string;
	name: string;
	version: string;
}

export interface CrowdfundingReward {
	id: string;
	title: string;
	minimum: number;
	description: string;
	remaining: number | null;
}

export interface DigitalBankBenefit {
	image: string;
	title: string;
	description: string;
}

export interface DigitalBankArticle extends DigitalBankBenefit {
	author: string;
}

export interface GridImpactStat {
	value: string;
	icon: string;
	label: string;
	description: string;
}

export interface InsureBenefit {
	icon: string;
	title: string;
	copy: string;
}

export interface InsureFooterGroup {
	title: string;
	links: string[];
}

export interface LoopCreation {
	slug: string;
	title: string;
}

export interface ManageTestimonial {
	name: string;
	image: string;
	quote: string;
}

export interface ManageFeature {
	title: string;
	description: string;
}

export interface NewsStory {
	title: string;
	description: string;
}

export interface NewsTopStory extends NewsStory {
	number: string;
	image: string;
}

export interface NotificationItem {
	id: number;
	name: string;
	avatar: string;
	time: string;
	action: string;
	target?: string;
	unread?: boolean;
	message?: string;
	picture?: string;
}

export interface RecipeInstruction {
	title: string;
	text: string;
}

export interface RecipeNutrition {
	label: string;
	value: string;
}

export interface RoomSlide {
	image: string;
	mobileImage: string;
	title: string;
	description: string;
}

export interface SpaceDestination {
	name: string;
	image: string;
	description: string;
	distance: string;
	travel: string;
}

export interface SpaceCrewMember {
	name: string;
	role: string;
	image: string;
	bio: string;
}

export interface SpaceTechnology {
	name: string;
	image: string;
	description: string;
}

export type SpaceTourismPage = "home" | "destination" | "crew" | "technology";

export interface SpaceNavigationItem {
	id: SpaceTourismPage;
	label: string;
}

export interface ShortenedLink {
	id: string;
	original: string;
	short: string;
}

export interface UrlShorteningFeature {
	image: string;
	title: string;
	description: string;
}

export interface UrlShorteningFooterGroup {
	heading: string;
	links: string[];
}
