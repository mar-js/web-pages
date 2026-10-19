import type { JSX } from "react";

export const FooterContent = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-11 sm:px-10 md:flex-row md:items-center md:justify-between">
		<div>
			<a className="text-xl font-bold tracking-[-0.06em]" href="#inicio">ruta<span className="text-[#cde0bb]">.</span></a>
			<p className="mt-2 max-w-sm text-xs leading-5 text-white/55">Viajar ligero. Conocer de cerca. Dejar cada lugar mejor de como lo encontramos.</p>
		</div>
		<a className="text-sm text-[#cde0bb] hover:text-white" href="mailto:hola@rutaescapes.travel">hola@rutaescapes.travel</a>
		<p className="text-xs text-white/45">© 2026 Ruta Escapes</p>
	</div>
);
