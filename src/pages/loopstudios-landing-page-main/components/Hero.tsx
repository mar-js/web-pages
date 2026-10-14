import { Header } from "../layouts";

export const Hero = () => (
	<section className="loop-hero relative min-h-[650px] bg-[#111] bg-[url('/assets/loopstudios-landing-page-main/desktop/image-hero.jpg')] bg-cover bg-center text-white before:absolute before:inset-0 before:bg-black/30 max-md:min-h-[650px] max-md:bg-[url('/assets/loopstudios-landing-page-main/mobile/image-hero.jpg')]">
		<Header />
		<div className="loop-hero-content relative z-[1] mx-auto mt-28 w-[calc(100%_-_48px)] max-w-[1110px]" id="top">
			<h1 className="max-w-[650px] border-2 border-white px-6 py-7 text-[clamp(38px,10.5vw,45px)] font-light uppercase leading-[1.03] tracking-[0.015em] sm:px-[38px] sm:py-[31px] sm:text-[clamp(48px,5vw,72px)]">Immersive experiences that deliver</h1>
		</div>
	</section>
);
