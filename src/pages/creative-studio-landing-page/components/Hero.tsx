import type { JSX } from "react";

export const Hero = (): JSX.Element => (
	<div className="w-full">
		<img className="absolute inset-0 h-full w-full object-cover opacity-35" src="/assets/loopstudios-landing-page-main/desktop/image-interactive.jpg" alt="" />
		<div className="absolute inset-0 bg-gradient-to-r from-[#22221f] via-[#22221f]/65 to-transparent" aria-hidden="true" />
		<div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-28 sm:px-10 md:min-h-[740px]">
			<p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#e7a180]">Estrategia · Identidad · Digital</p>
			<h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl" id="forma-hero-title">Ideas claras.<br /><span className="font-light italic text-[#e7a180]">Marcas vivas.</span></h1>
			<div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
				<p className="max-w-md text-base leading-7 text-white/75">Somos un estudio creativo independiente que convierte negocios con propósito en marcas imposibles de ignorar.</p>
				<a className="inline-flex w-fit items-center gap-5 bg-[#e7a180] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#22221f] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#proyectos">Descubre lo que hacemos <span aria-hidden="true">↘</span></a>
			</div>
			<div className="mt-16 grid max-w-2xl grid-cols-3 border-t border-white/25 pt-6">
				<div><p className="text-3xl font-light">12</p><p className="mt-1 text-[10px] uppercase tracking-widest text-white/55">Años creando</p></div>
				<div><p className="text-3xl font-light">38</p><p className="mt-1 text-[10px] uppercase tracking-widest text-white/55">Marcas lanzadas</p></div>
				<div><p className="text-3xl font-light">04</p><p className="mt-1 text-[10px] uppercase tracking-widest text-white/55">Premios ADC</p></div>
			</div>
		</div>
	</div>
);
