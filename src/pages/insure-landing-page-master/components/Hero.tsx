import { ASSET_ROOT_INSURE_LANDING_PAGE } from "../../../constants/data";

export const Hero = () => (
	<section className="insure-hero relative bg-[#2d2640] text-white" aria-labelledby="insure-heading">
		<div className="insure-hero-inner mx-auto grid max-w-[1110px] items-center gap-10 px-6 md:min-h-[600px] md:grid-cols-2 md:px-0">
			<div className="insure-hero-copy order-2 py-14 text-center md:order-1 md:max-w-[540px] md:py-0 md:text-left">
				<div className="insure-rule mb-8 hidden h-px w-[150px] bg-white/60 md:block" />
				<h1 className="mb-5 text-[40px] font-normal leading-[1.02] md:text-[68px]" id="insure-heading">
					Humanizing<br className="insure-desktop-break" /> your insurance.
				</h1>
				<p className="mb-7 text-[15px] leading-[1.65] text-white/80 md:text-base">
					Get your life insurance coverage easier and faster. We blend our
					expertise and technology to help you find the plan that’s right for
					you. Ensure you and your loved ones are protected.
				</p>
				<a className="insure-light-button inline-block border border-white px-6 py-3 text-sm uppercase tracking-[1px] text-white no-underline hover:bg-white hover:text-[#2b272f]" href="#plans">View plans</a>
			</div>
			<picture className="insure-hero-image order-1 block md:absolute md:right-[max(calc((100vw-1110px)/2),24px)] md:top-[105px] md:z-[1] md:w-[48%]">
				<source media="(max-width: 700px)" srcSet={`${ASSET_ROOT_INSURE_LANDING_PAGE}/image-intro-mobile.jpg`} />
				<img className="block w-full object-cover" src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/image-intro-desktop.jpg`} alt="A family walking together outdoors" />
			</picture>
		</div>
	</section>
);
