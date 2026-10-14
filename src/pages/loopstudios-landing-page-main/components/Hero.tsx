import { Header } from "../layouts";

export const Hero = () => (
	<section id="top" className="relative min-h-[405px] bg-[#111] bg-[url('/assets/loopstudios-landing-page-main/desktop/image-hero.jpg')] bg-cover bg-center text-white before:absolute before:inset-0 before:bg-black/30 max-md:bg-[url('/assets/loopstudios-landing-page-main/mobile/image-hero.jpg')] md:min-h-[450px]">
		<Header />
		<div className="relative z-[1] mx-auto mt-[44px] w-[calc(100%_-_48px)] max-w-[1110px] md:mt-7">
			<h1 className="max-w-[450px] border-2 border-white px-4 py-4 text-[clamp(38px,10.5vw,45px)] font-light uppercase leading-[1.03] tracking-[0.015em] sm:px-[28px] sm:py-[24px] md:text-[clamp(48px,5vw,72px)]">Immersive experiences that deliver</h1>
		</div>
	</section>
);
