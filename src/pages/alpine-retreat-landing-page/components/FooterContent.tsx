import type { JSX } from "react";

export const FooterContent = (): JSX.Element => (
	<div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
		<div>
			<a className="text-lg tracking-[0.18em]" href="#inicio">ALBA<span className="text-[#d8c39b]">.</span></a>
			<p className="mt-2 text-xs text-white/55">Un refugio entre montañas, a tu propio ritmo.</p>
		</div>
		<div className="text-sm">
			<p>Valle de Tena, Huesca</p>
			<a className="mt-1 inline-block text-[#d8c39b] hover:text-white" href="mailto:hola@albalodge.example">hola@albalodge.example</a>
		</div>
		<p className="text-xs text-white/45">© 2026 Alba Lodge</p>
	</div>
);
