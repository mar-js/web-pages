import { ASSET_ROOT_INSURE_LANDING_PAGE } from "../../../constants/data";

export const Hero = () => (
	<section
		className="relative isolate overflow-hidden bg-[#2d2640] text-white md:overflow-visible p-5"
		aria-labelledby="insure-heading"
	>
		<img
			className="pointer-events-none absolute left-0 top-[260px] z-0 w-[175px] md:hidden"
			src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/bg-pattern-intro-left-mobile.svg`}
			alt=""
		/>
		<img
			className="pointer-events-none absolute bottom-0 right-0 z-0 w-[125px] md:hidden"
			src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/bg-pattern-intro-right-mobile.svg`}
			alt=""
		/>
		<img
			className="pointer-events-none absolute bottom-[-280px] left-0 z-0 hidden w-[195px] md:block"
			src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/bg-pattern-intro-left-desktop.svg`}
			alt=""
		/>
		<img
			className="pointer-events-none absolute right-0 top-0 z-0 hidden w-[430px] md:block"
			src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/bg-pattern-intro-right-desktop.svg`}
			alt=""
		/>
		<div className="relative z-10 mx-auto grid max-w-[1110px] items-center gap-0 px-6 md:min-h-[500px] md:grid-cols-2 md:gap-10 md:px-0">
			<div className="order-2 py-10 text-center md:order-1 md:max-w-[540px] md:py-0 md:text-left">
				<div className="mb-8 hidden h-px w-[125px] bg-white/60 md:block" />
				<h1
					className="mb-5 font-serif text-[32px] font-normal leading-[1.05] md:text-[68px] md:leading-[1.02]"
					id="insure-heading"
				>
					Humanizing
					<br className="hidden md:block" /> your insurance.
				</h1>
				<p className="mb-7 text-sm leading-[1.5] text-white/80 md:text-base md:leading-[1.65]">
					Get your life insurance coverage easier and faster. We blend our
					expertise and technology to help you find the plan that’s right for
					you. Ensure you and your loved ones are protected.
				</p>
				<a
					className="inline-block border border-white px-6 py-2.5 text-sm uppercase tracking-[1px] text-white no-underline transition-colors hover:bg-white hover:text-[#2b272f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					href="#plans"
				>
					View plans
				</a>
			</div>
			<picture className="order-1 -mx-6 block w-[calc(100%+3rem)] md:absolute md:right-[max(calc((100vw-1110px)/2),24px)] md:top-[88px] md:z-[1] md:mx-0 md:w-[min(41%,448px)]">
				<source
					media="(max-width: 700px)"
					srcSet={`${ASSET_ROOT_INSURE_LANDING_PAGE}/image-intro-mobile.jpg`}
				/>
				<img
					className="block w-full object-cover"
					src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/image-intro-desktop.jpg`}
					alt="A family walking together outdoors"
				/>
			</picture>
		</div>
	</section>
);
