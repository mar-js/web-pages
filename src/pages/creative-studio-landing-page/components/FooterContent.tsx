import type { JSX } from "react";

export const FooterContent = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between">
		<div>
			<a className="text-2xl font-black tracking-[-0.08em]" href="#inicio">forma<span className="text-[#e7a180]">®</span></a>
			<p className="mt-3 max-w-sm text-sm leading-6 text-white/60">Estudio creativo independiente. Pensamos con intención, diseñamos con carácter.</p>
		</div>
		<div className="text-sm">
			<p className="mb-2 text-xs uppercase tracking-widest text-white/45">¿Empezamos?</p>
			<a className="text-[#e7a180] hover:text-white" href="mailto:hola@forma.studio">hola@forma.studio</a>
		</div>
		<p className="text-xs text-white/45">© 2026 Forma Studio</p>
	</div>
);
