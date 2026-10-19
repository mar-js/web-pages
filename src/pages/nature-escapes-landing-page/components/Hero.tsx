import type { JSX } from "react";

export const Hero = (): JSX.Element => (
	<div className="w-full">
		<img className="absolute inset-0 h-full w-full object-cover" src="/assets/loopstudios-landing-page-main/desktop/image-pocket-borealis.jpg" alt="Cielo nocturno iluminado por auroras boreales" />
		<div className="absolute inset-0 bg-gradient-to-r from-[#0b211d]/80 via-[#0b211d]/30 to-transparent" aria-hidden="true" />
		<div className="relative mx-auto w-full max-w-7xl px-6 py-32 sm:px-10">
			<p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#cde0bb]">Viajes pequeños, recuerdos enormes</p>
			<h1 className="max-w-3xl text-6xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl" id="ruta-hero-title">Sal de la ruta.<br /><span className="font-light italic">Vuelve a ti.</span></h1>
			<p className="mt-7 max-w-md text-base leading-7 text-white/80 sm:text-lg">Escapadas creadas por personas locales para descubrir lugares que no aparecen en los mapas.</p>
			<a className="mt-9 inline-flex items-center gap-5 rounded-full bg-[#d5e2b8] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#172b27] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#escapadas">Encuentra tu escapada <span aria-hidden="true">↗</span></a>
		</div>
		<div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs text-white/75 md:flex"><span className="h-px w-10 bg-white/60" /> 100% local, siempre</div>
	</div>
);
