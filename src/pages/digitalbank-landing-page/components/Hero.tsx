import type { JSX } from "react";
import { ASSET_ROOT_DIGITALBANK_LANDING_PAGE } from "../../../constants/data";

export const Hero = (): JSX.Element => (
	<section className="relative bg-[#fafafa] pb-16 text-center md:h-[580px] md:pb-0 md:text-left" id="home" aria-labelledby="db-hero-title">
		<div className="relative mx-auto w-[calc(100%_-_48px)] max-w-[1110px] md:flex md:h-full md:items-center">
			<div className="relative -mx-6 h-[300px] overflow-hidden bg-[url('/assets/digitalbank-landing-page/bg-intro-mobile.svg')] bg-cover bg-center bg-no-repeat md:hidden">
				<img className="absolute left-1/2 top-[-92px] w-[380px] max-w-none -translate-x-1/2" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/image-mockups.png`} alt="" />
			</div>
			<div className="relative z-[2] w-full pt-1 md:w-[460px] md:pb-4 md:pt-0">
				<h1 className="mb-6 text-[40px] font-light leading-[1.13] tracking-[-1.5px] md:text-[54px]" id="db-hero-title">Next generation digital banking</h1>
				<p className="mb-7 text-base leading-[1.55] text-[#9698a6] md:text-lg">Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
				<a className="inline-flex rounded-full bg-gradient-to-r from-[#31d35c] to-[#2bb7da] px-8 py-[15px] text-sm font-bold text-white no-underline transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#31d35c]" href="#footer">Request Invite</a>
			</div>
			<div className="absolute right-[-12vw] top-[-150px] hidden h-[820px] w-[min(760px,60vw)] bg-[url('/assets/digitalbank-landing-page/bg-intro-desktop.svg')] bg-cover bg-left md:block" aria-hidden="true">
				<img className="absolute left-0 top-[61px] w-full max-w-[735px]" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/image-mockups.png`} alt="" />
			</div>
		</div>
	</section>
);
