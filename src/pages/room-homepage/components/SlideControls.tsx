import { ASSET_ROOT_ROOM_HOMEPAGE } from "../../../constants/data";

interface SlideControlsProps {
	onChangeSlide: (direction: number) => void;
}

export const SlideControls = ({ onChangeSlide }: SlideControlsProps) => (
	<div className="absolute bottom-0 right-0 z-10 flex h-14 w-28 bg-black md:right-[-1px] md:h-20 md:w-40">
		<button
			type="button"
			aria-label="Previous slide"
			onClick={() => onChangeSlide(-1)}
			className="flex flex-1 items-center justify-center transition-colors hover:bg-[#454545] focus-visible:outline-2 focus-visible:outline-white"
		>
			<img src={`${ASSET_ROOT_ROOM_HOMEPAGE}/icon-angle-left.svg`} alt="" />
		</button>
		<button
			type="button"
			aria-label="Next slide"
			onClick={() => onChangeSlide(1)}
			className="flex flex-1 items-center justify-center transition-colors hover:bg-[#454545] focus-visible:outline-2 focus-visible:outline-white"
		>
			<img src={`${ASSET_ROOT_ROOM_HOMEPAGE}/icon-angle-right.svg`} alt="" />
		</button>
	</div>
);
