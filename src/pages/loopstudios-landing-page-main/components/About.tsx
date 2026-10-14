import { ASSET_ROOT_LOOPSTUDIOS } from "../../../constants/data";

export const About = () => (
	<section className="loop-about relative mt-24 flex flex-col items-stretch md:mt-40 md:flex-row md:items-end" id="about" aria-labelledby="loop-about-heading">
		<picture className="loop-about-image block w-full md:w-[65%]">
			<source media="(max-width: 700px)" srcSet={`${ASSET_ROOT_LOOPSTUDIOS}/mobile/image-interactive.jpg`} />
			<img className="block h-auto w-full" src={`${ASSET_ROOT_LOOPSTUDIOS}/desktop/image-interactive.jpg`} alt="A visitor explores a virtual reality experience" />
		</picture>
		<div className="loop-about-copy relative w-full bg-white px-2 pt-10 text-center md:absolute md:bottom-0 md:right-0 md:w-[49%] md:pl-[95px] md:pt-[78px] md:text-left">
			<h2 className="m-0 text-[34px] font-light uppercase leading-[1.12] tracking-[0.015em] md:text-[clamp(38px,4.2vw,56px)] md:leading-[1.04]" id="loop-about-heading">The leader in interactive VR</h2>
			<p className="mt-4 text-[15px] leading-[1.72] text-[#777] md:mt-6">
				Founded in 2011, Loopstudios has been producing world-class virtual
				reality projects for some of the best companies around the globe. Our
				award-winning creations have transformed businesses through digital
				experiences that bind to their brand.
			</p>
		</div>
	</section>
);
