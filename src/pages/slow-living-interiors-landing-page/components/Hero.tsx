import type { JSX } from "react";

export const Hero = (): JSX.Element => (
	<div className="w-full">
		<img className="absolute inset-0 h-full w-full object-cover opacity-70" src="/assets/room-homepage-master/desktop-image-hero-2.jpg" alt="Interior cálido bañado de luz natural" />
		<div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" aria-hidden="true" />
		<div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 text-white sm:px-10 md:pb-24">
			<p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#e2c8a1]">Espacios para vivir mejor</p>
			<h1 className="max-w-2xl text-5xl font-light leading-[1.04] tracking-tight sm:text-6xl md:text-7xl" id="casa-hero-title">Menos ruido.<br />Más hogar.</h1>
			<p className="mt-6 max-w-md text-base leading-7 text-white/85 sm:text-lg">Diseñamos interiores honestos, serenos y hechos para acompañar tu vida cotidiana.</p>
			<a className="mt-8 inline-flex border border-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#282821] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#espacios">Explorar proyectos <span className="ml-5" aria-hidden="true">↗</span></a>
		</div>
		<p className="absolute bottom-8 right-8 hidden text-xs uppercase tracking-[0.18em] text-white/75 md:block">Estudio independiente · Madrid</p>
	</div>
);
