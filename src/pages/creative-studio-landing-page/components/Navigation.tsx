import type { JSX } from "react";

export const Navigation = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
		<a className="text-xl font-black tracking-[-0.08em]" href="#inicio" aria-label="Forma Studio, inicio">forma<span className="text-[#e7a180]">®</span></a>
		<nav className="hidden items-center gap-8 text-xs sm:flex" aria-label="Navegación principal">
			<a className="hover:text-[#e7a180]" href="#proyectos">Proyectos</a>
			<a className="hover:text-[#e7a180]" href="#estudio">Estudio</a>
			<a className="border border-white/60 px-5 py-3 transition-colors hover:bg-white hover:text-[#22221f]" href="mailto:hola@forma.studio">Hablemos <span aria-hidden="true">↗</span></a>
		</nav>
		<a className="border border-white/60 px-3 py-2 text-[10px] uppercase tracking-widest sm:hidden" href="mailto:hola@forma.studio">Hablemos</a>
	</div>
);
