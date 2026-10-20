import type { JSX } from "react";

export const Navigation = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
		<a className="text-2xl font-black tracking-[-0.08em]" href="#inicio" aria-label="Bruma Café, inicio">bruma<span className="text-[#e5ae68]">.</span></a>
		<nav className="hidden items-center gap-8 text-sm text-white sm:flex" aria-label="Navegación principal">
			<a className="transition-colors hover:text-[#e5ae68]" href="#carta">La carta</a>
			<a className="transition-colors hover:text-[#e5ae68]" href="#origen">Nuestro origen</a>
			<a className="rounded-full bg-[#e5ae68] px-5 py-3 font-semibold text-[#32271f] transition-colors hover:bg-white" href="mailto:hola@brumacafe.example">Ven a visitarnos</a>
		</nav>
		<a className="rounded-full border border-white/70 px-4 py-2 text-xs sm:hidden" href="mailto:hola@brumacafe.example">Visítanos</a>
	</div>
);
