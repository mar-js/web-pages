import type { JSX } from "react";

export const Navigation = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
		<a className="flex items-center gap-2 text-xl font-bold tracking-[-0.06em]" href="#inicio" aria-label="Ruta, inicio"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d5e2b8] text-sm text-[#172b27]" aria-hidden="true">r</span> ruta<span className="text-[#cde0bb]">.</span></a>
		<nav className="hidden items-center gap-8 text-xs sm:flex" aria-label="Navegación principal">
			<a className="hover:text-[#cde0bb]" href="#escapadas">Escapadas</a>
			<a className="hover:text-[#cde0bb]" href="#sobre-ruta">Nuestra forma</a>
			<a className="rounded-full border border-white/70 px-5 py-3 transition-colors hover:bg-white hover:text-[#172b27]" href="mailto:hola@rutaescapes.travel">Planear un viaje</a>
		</nav>
		<a className="rounded-full border border-white/70 px-3 py-2 text-[10px] uppercase tracking-widest sm:hidden" href="mailto:hola@rutaescapes.travel">Viajar</a>
	</div>
);
