import { ASSET_ROOT_ROOM_HOMEPAGE } from "../../../constants/data";
import type { RoomSlide } from "../../../global/interfaces";

interface SlideContentProps {
	slide: RoomSlide;
}

export const SlideContent = ({ slide }: SlideContentProps) => (
	<div className="flex min-h-[410px] items-center px-8 py-16 sm:px-12 md:min-h-[534px] md:px-[12.5%] md:pb-20">
		<div className="mx-auto w-full max-w-[450px]">
			<h1 className="text-[2.25rem] font-semibold leading-[0.98] tracking-[-1.8px] md:text-[2.6rem]">
				{slide.title}
			</h1>
			<p className="mt-5 text-[15px] leading-[1.45] text-[#a1a1a1] md:mt-6 md:text-[16px] md:leading-[1.4]">
				{slide.description}
			</p>
			<a
				href="#shop"
				className="mt-8 inline-flex items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.8em] transition-opacity hover:opacity-40"
			>
				Shop now <img src={`${ASSET_ROOT_ROOM_HOMEPAGE}/icon-arrow.svg`} alt="" />
			</a>
		</div>
	</div>
);
