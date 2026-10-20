import type { JSX } from "react";

export const Navigation = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
		<a className="text-lg font-medium tracking-[0.18em]" href="#inicio" aria-label="Alba Lodge, inicio">ALBA<span className="text-[#d8c39b]">.</span></a>
		<nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.12em] sm:flex" aria-label="Navegación principal">
			<a className="transition-colors hover:text-[#d8c39b]" href="#estancias">El refugio</a>
			<a className="transition-colors hover:text-[#d8c39b]" href="#experiencia">La experiencia</a>
			<a className="border border-white/70 px-5 py-3 transition-colors hover:bg-white hover:text-[#23342e]" href="mailto:hola@albalodge.example?subject=Quiero%20reservar">Reservar</a>
		</nav>
		<a className="border border-white/70 px-3 py-2 text-[10px] uppercase tracking-widest sm:hidden" href="mailto:hola@albalodge.example?subject=Quiero%20reservar">Reservar</a>
	</div>
);
