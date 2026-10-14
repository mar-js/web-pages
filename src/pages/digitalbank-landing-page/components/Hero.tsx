import type { JSX } from "react";
import { ASSET_ROOT_DIGITALBANK_LANDING_PAGE } from "../../../constants/data";

export const Hero = (): JSX.Element => (
	<section className="db-hero relative min-h-[560px] bg-[#fafafa] pb-20 text-center md:h-[600px] md:pb-0 md:text-left" id="home" aria-labelledby="db-hero-title">
		<div className="db-container db-hero-inner relative mx-auto flex h-full w-[calc(100%_-_48px)] max-w-[1110px] items-center">
			<img className="mb-8 block w-full md:hidden" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/image-mockups.png`} alt="" />
			<div className="db-hero-copy relative z-[2] w-full pt-10 md:w-[460px] md:pb-4 md:pt-0">
				<h1 className="mb-6 text-[40px] font-light leading-[1.13] tracking-[-1.5px] md:text-[54px]" id="db-hero-title">Next generation digital banking</h1>
				<p className="mb-7 text-base leading-[1.55] text-[#9698a6] md:text-lg">Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
				<a className="inline-flex rounded-full bg-gradient-to-r from-[#31d35c] to-[#2bb7da] px-8 py-[15px] text-sm font-bold text-white no-underline hover:opacity-70" href="#footer">Request Invite</a>
			</div>
			<div className="db-hero-visual absolute right-[-12vw] top-[-150px] hidden h-[820px] w-[min(760px,60vw)] bg-[url('/assets/digitalbank-landing-page/bg-intro-desktop.svg')] bg-cover bg-left md:block" aria-hidden="true">
				<img className="absolute left-0 top-[61px] w-full max-w-[735px]" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/image-mockups.png`} alt="" />
			</div>
		</div>
	</section>
);
