import type { JSX } from "react";

const projects = [
	{
		number: "01",
		title: "Luz que permanece",
		copy: "Reforma integral de una vivienda familiar donde la madera, la cal y la luz hacen equipo.",
		image: "/assets/room-homepage-master/image-about-light.jpg",
		alt: "Salón luminoso con mobiliario de líneas sencillas",
	},
	{
		number: "02",
		title: "Materia con memoria",
		copy: "Materiales naturales y piezas recuperadas para una casa que mejora con el paso del tiempo.",
		image: "/assets/room-homepage-master/image-about-dark.jpg",
		alt: "Detalle de un espacio interior de tonos profundos y naturales",
	},
];

export const Interiors = (): JSX.Element => (
	<div>
		<div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
			<div>
				<p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#867756]">Una forma de estar</p>
				<h2 className="max-w-xl text-4xl font-light leading-tight tracking-tight sm:text-5xl" id="interiors-heading">Cada detalle tiene un motivo.</h2>
			</div>
			<p className="max-w-sm text-sm leading-6 text-[#68685f]">Creemos en los espacios que se sienten bien antes incluso de saber por qué. Así pensamos cada proyecto, de principio a fin.</p>
		</div>
		<div className="grid gap-8 md:grid-cols-2">
			{projects.map((space) => (
				<article key={space.number}>
					<div className="overflow-hidden bg-[#e8e3d9]">
						<img className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-80" src={space.image} alt={space.alt} loading="lazy" />
					</div>
					<div className="mt-5 flex gap-5">
						<span className="pt-1 text-xs tracking-widest text-[#9b8968]">{space.number}</span>
						<div>
							<h3 className="text-xl font-medium">{space.title}</h3>
							<p className="mt-2 max-w-md text-sm leading-6 text-[#68685f]">{space.copy}</p>
						</div>
					</div>
				</article>
			))}
		</div>
		<div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-[#d9d4c9] pt-8 sm:flex-row sm:items-center">
			<p className="max-w-xl text-lg font-light leading-7">¿Tienes un espacio que pide una nueva historia?</p>
			<a className="border-b border-[#282821] pb-2 text-xs font-semibold uppercase tracking-[0.18em] hover:text-[#867756] focus-visible:outline-2 focus-visible:outline-offset-4" href="mailto:hola@casalenta.studio">Hablemos <span aria-hidden="true">↗</span></a>
		</div>
	</div>
);
