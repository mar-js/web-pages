import type { JSX } from "react";

export const FooterContent = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
		<div>
			<a className="text-base tracking-[0.14em]" href="#inicio">casa lenta<span className="text-[#e2c8a1]">.</span></a>
			<p className="mt-2 text-xs text-white/60">Interiorismo con calma. Madrid y donde nos necesites.</p>
		</div>
		<a className="text-sm text-[#e2c8a1] hover:text-white" href="mailto:hola@casalenta.studio">hola@casalenta.studio</a>
		<p className="text-xs text-white/50">© 2026 Casa Lenta Studio</p>
	</div>
);
