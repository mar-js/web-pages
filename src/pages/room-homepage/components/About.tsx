import { ASSET_ROOT_ROOM_HOMEPAGE } from "../../../constants/data";

export const About = () => (
	<>
		<img
			src={`${ASSET_ROOT_ROOM_HOMEPAGE}/image-about-dark.jpg`}
			alt="Dark contemporary living room with a coffee table"
			className="h-[238px] w-full object-cover md:h-full"
		/>
		<div className="flex items-center px-8 py-14 sm:px-12 md:px-[10%] md:py-12">
			<div className="mx-auto max-w-[500px]">
				<h2 className="text-[13px] font-bold uppercase tracking-[0.32em]">About our furniture</h2>
				<p className="mt-4 text-[14px] leading-[1.5] text-[#a1a1a1] md:text-[15px]">
					Our multifunctional collection blends design and function to suit your individual taste.
					Make each room unique, or pick a cohesive theme that best express your interests and what
					inspires you. Find the furniture pieces you need, from traditional to contemporary styles
					or anything in between. Product specialists are available to help you create your dream
					space.
				</p>
			</div>
		</div>
		<img
			src={`${ASSET_ROOT_ROOM_HOMEPAGE}/image-about-light.jpg`}
			alt="Minimal white chair in a light room"
			className="h-[238px] w-full object-cover md:h-full"
		/>
	</>
);
