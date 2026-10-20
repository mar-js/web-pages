import type { JSX } from "react";

const experiences = [
	{
		number: "01",
		title: "Dormir despacio",
		copy: "Habitaciones de madera natural, sábanas suaves y mañanas sin despertador.",
		image: "/assets/room-homepage-master/desktop-image-hero-3.jpg",
		alt: "Habitación acogedora con luz natural y materiales cálidos",
	},
	{
		number: "02",
		title: "Salir al camino",
		copy: "Rutas para todos los pasos, desde un paseo entre pinos hasta cumbres abiertas.",
		image: "/assets/loopstudios-landing-page-main/desktop/image-from-above.jpg",
		alt: "Paisaje montañoso visto desde un sendero elevado",
	},
];

export const Stay = (): JSX.Element => (
	<div>
		<div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
			<div>
				<p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#718471]">Un lugar para volver a ti</p>
				<h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight sm:text-5xl" id="retreat-stay-heading">La montaña pone el resto en perspectiva.</h2>
			</div>
			<p className="max-w-sm text-sm leading-6 text-[#69756c]">Pocas habitaciones, cocina de proximidad y el paisaje siempre a un paso. Aquí cada plan puede esperar.</p>
		</div>
		<div className="grid gap-8 md:grid-cols-2">
			{experiences.map((experience) => (
				<article className="group" key={experience.number}>
					<div className="overflow-hidden bg-[#d9ddd4]">
						<img className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-80" src={experience.image} alt={experience.alt} loading="lazy" />
					</div>
					<div className="mt-5 flex gap-5">
						<span className="pt-1 text-xs tracking-widest text-[#718471]">{experience.number}</span>
						<div>
							<h3 className="text-xl font-medium">{experience.title}</h3>
							<p className="mt-2 max-w-md text-sm leading-6 text-[#69756c]">{experience.copy}</p>
						</div>
					</div>
				</article>
			))}
		</div>
		<div className="mt-16 flex flex-col gap-5 border-t border-[#d3d8cf] pt-8 sm:flex-row sm:items-center sm:justify-between" id="experiencia">
			<div>
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718471]">Tu próxima pausa empieza aquí</p>
				<p className="mt-2 max-w-xl text-lg font-light leading-7">Cuéntanos cuándo vienes y prepararemos la habitación para ti.</p>
			</div>
			<a className="w-fit bg-[#23342e] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#526b5c] focus-visible:outline-2 focus-visible:outline-offset-4" href="mailto:hola@albalodge.example?subject=Quiero%20reservar%20una%20estancia">Consultar disponibilidad <span aria-hidden="true">↗</span></a>
		</div>
	</div>
);
