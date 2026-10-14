import { useEffect, useState } from "react";
import { ASSET_ROOT_ROOM_HOMEPAGE, DATA_ROOM_SLIDES } from "../../../constants/data";
import { Header } from "../layouts";
import { SlideControls } from "./SlideControls";
import { SlideContent } from "./SlideContent";

export const Hero = () => {
	const [activeSlide, setActiveSlide] = useState(0);
	const slide = DATA_ROOM_SLIDES[activeSlide];

	const changeSlide = (direction: number) => {
		setActiveSlide((current) => (current + direction + DATA_ROOM_SLIDES.length) % DATA_ROOM_SLIDES.length);
	};

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") changeSlide(-1);
			if (event.key === "ArrowRight") changeSlide(1);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	return (
		<section className="relative grid md:min-h-[534px] md:grid-cols-[58.33%_41.67%]">
			<div className="relative min-h-[360px] md:min-h-[534px]">
				<picture>
					<source media="(max-width: 767px)" srcSet={`${ASSET_ROOT_ROOM_HOMEPAGE}/${slide.mobileImage}`} />
					<img
						className="absolute inset-0 h-full w-full object-cover"
						src={`${ASSET_ROOT_ROOM_HOMEPAGE}/${slide.image}`}
						alt="Contemporary furniture in a bright living space"
					/>
				</picture>
				<Header />
				<SlideControls onChangeSlide={changeSlide} />
			</div>
			<SlideContent slide={slide} />
		</section>
	);
};
