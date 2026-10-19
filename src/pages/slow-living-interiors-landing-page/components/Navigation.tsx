import type { JSX } from "react";

export const Navigation = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
		<a className="text-lg font-medium tracking-[0.14em]" href="#inicio" aria-label="Casa Lenta, inicio">casa lenta<span className="text-[#e2c8a1]">.</span></a>
		<nav className="hidden items-center gap-8 text-xs tracking-[0.08em] sm:flex" aria-label="Navegación principal">
			<a className="transition-colors hover:text-[#e2c8a1]" href="#espacios">Proyectos</a>
			<a className="transition-colors hover:text-[#e2c8a1]" href="#contacto">Estudio</a>
			<a className="border border-white/70 px-4 py-3 transition-colors hover:bg-white hover:text-[#282821]" href="mailto:hola@casalenta.studio">Contactar</a>
		</nav>
		<a className="border border-white/70 px-3 py-2 text-[10px] uppercase tracking-widest sm:hidden" href="mailto:hola@casalenta.studio">Contacto</a>
	</div>
);
