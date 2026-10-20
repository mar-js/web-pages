import type { JSX } from "react";

export const FooterContent = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
		<div>
			<a className="text-2xl font-black tracking-[-0.08em]" href="#inicio">bruma<span className="text-[#e5ae68]">.</span></a>
			<p className="mt-2 text-xs text-white/55">Café de especialidad, sin complicaciones.</p>
		</div>
		<div className="text-sm">
			<p>Martes a domingo · 8:00–18:00</p>
			<p className="mt-1 text-white/55">Calle del Olmo 18, Madrid</p>
		</div>
		<a className="text-sm text-[#e5ae68] hover:text-white" href="mailto:hola@brumacafe.example">hola@brumacafe.example</a>
	</div>
);
