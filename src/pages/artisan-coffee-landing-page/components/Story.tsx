import type { JSX } from "react";

export const Story = (): JSX.Element => (
	<div className="w-full">
		<img className="absolute inset-0 h-full w-full object-cover opacity-55" src="/assets/digitalbank-landing-page/image-restaurant.jpg" alt="Mesa preparada para compartir un desayuno artesanal" />
		<div className="absolute inset-0 bg-gradient-to-r from-[#241912]/85 via-[#241912]/45 to-transparent" aria-hidden="true" />
		<div className="relative mx-auto w-full max-w-7xl px-6 py-36 sm:px-10">
			<p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#e5ae68]">Café de especialidad · Pan de masa madre</p>
			<h1 className="max-w-3xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl" id="coffee-hero-heading">El día sabe<br /><span className="font-light italic text-[#f0cf9e]">mejor aquí.</span></h1>
			<p className="mt-7 max-w-md text-base leading-7 text-white/80 sm:text-lg">Café de fincas pequeñas, cocina de temporada y un lugar para alargar la sobremesa.</p>
			<a className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#e5ae68] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#32271f] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#carta">Descubre la carta <span aria-hidden="true">↘</span></a>
			<p className="mt-12 text-xs uppercase tracking-[0.18em] text-white/65">Tu café de barrio, todos los días · Madrid</p>
		</div>
	</div>
);
