import type { JSX } from "react";

export const Hero = (): JSX.Element => (
	<div className="w-full">
		<img className="absolute inset-0 h-full w-full object-cover" src="/assets/loopstudios-landing-page-main/desktop/image-deep-earth.jpg" alt="Bosque de montaña rodeado de naturaleza" />
		<div className="absolute inset-0 bg-gradient-to-t from-[#101f1b]/80 via-[#101f1b]/15 to-[#101f1b]/30" aria-hidden="true" />
		<div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 sm:px-10 md:pb-24">
			<p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c39b]">Un refugio entre montañas · Pirineo aragonés</p>
			<h1 className="max-w-4xl text-6xl font-light leading-[0.96] tracking-[-0.06em] sm:text-7xl md:text-8xl" id="retreat-hero-heading">Haz sitio<br />para el <span className="italic text-[#d8c39b]">silencio.</span></h1>
			<div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
				<p className="max-w-md text-base leading-7 text-white/80">Un pequeño lodge de montaña para bajar el ritmo, respirar aire limpio y volver a lo esencial.</p>
				<a className="inline-flex w-fit items-center gap-5 border border-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-white hover:text-[#23342e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#estancias">Conoce el refugio <span aria-hidden="true">↘</span></a>
			</div>
			<p className="mt-14 text-xs uppercase tracking-[0.16em] text-white/60">A 1.400 m de altura · Todo el año</p>
		</div>
	</div>
);
