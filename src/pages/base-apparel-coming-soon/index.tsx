import { Image } from "@global/components";
import type { JSX } from "react";
import {
	IMG_HERO_BASE_APPAREL_COMING_SOON_DESKTOP,
	IMG_HERO_BASE_APPAREL_COMING_SOON_MOBILE,
} from "../../constants/data";
import { Hero, Logo } from "./components";

export const BaseApparelComingSoonPage = (): JSX.Element => (
	<div className="min-h-screen bg-[linear-gradient(135deg,#fff,#fff5f5)] font-['Josefin_Sans',sans-serif] text-[#423a3a] lg:grid lg:grid-cols-[57.64%_42.36%]">
		<div className="flex min-h-screen flex-col">
			<div className="mx-auto flex w-full max-w-207.5 grow flex-col">
				<header className="px-8 py-7.75 lg:h-33 lg:shrink-0 lg:py-16 lg:pl-[20%]">
					<Logo />
				</header>
				<picture className="lg:hidden">
					<Image
						className="h-62.5 w-full object-cover object-center"
						path={IMG_HERO_BASE_APPAREL_COMING_SOON_MOBILE}
						alt="Model wearing a coral blouse in a fashion studio"
					/>
				</picture>
				<main className="flex grow items-center px-8 py-14 text-center lg:px-0 lg:py-16 lg:pl-[20%] lg:pr-16 lg:text-left">
					<Hero />
				</main>
			</div>
		</div>
		<aside className="hidden min-h-screen lg:block">
			<Image
				className="h-full min-h-screen w-full object-cover object-top"
				path={IMG_HERO_BASE_APPAREL_COMING_SOON_DESKTOP}
				alt="Model wearing a coral blouse in a fashion studio"
			/>
		</aside>
	</div>
);
