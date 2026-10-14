import { ASSET_ROOT_MANAGE } from "../../../constants/data";

const asset = (name: string) => `${ASSET_ROOT_MANAGE}/${name}`;

export const Hero = () => (
	<section className="manage-hero grid items-center gap-8 py-10 md:grid-cols-2 md:py-16">
		<div className="manage-hero-copy">
			<h1 className="mb-5 max-w-[470px] text-center text-[40px] font-bold leading-[1.12] tracking-[-1px] md:text-left md:text-[54px]">Bring everyone together to build better products.</h1>
			<p className="mx-auto mb-8 max-w-[350px] text-center leading-[1.7] text-[#9095a7] md:mx-0 md:text-left">
				Manage makes it simple for software teams to plan day-to-day tasks while
				keeping the larger team goals in view.
			</p>
			<a href="#signup" className="manage-button inline-flex rounded-full bg-[#f3603c] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#f3603c]/25 no-underline hover:bg-[#f98f75]">
				Get Started
			</a>
		</div>
		<img src={asset("illustration-intro.svg")} alt="Charts showing a team's progress and performance" className="manage-hero-art order-first mx-auto w-full max-w-[540px] md:order-last" />
	</section>
);
