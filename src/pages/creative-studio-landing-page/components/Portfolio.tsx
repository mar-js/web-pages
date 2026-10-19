import type { JSX } from "react";

const projects = [
	{ category: "Cultura · Identidad", title: "Un nuevo punto de encuentro", image: "/assets/loopstudios-landing-page-main/desktop/image-deep-earth.jpg", alt: "Paisaje de bosque visto desde el aire" },
	{ category: "Tecnología · Digital", title: "Diseñar para descubrir", image: "/assets/loopstudios-landing-page-main/desktop/image-from-above.jpg", alt: "Vista aérea de una persona explorando un paisaje" },
	{ category: "Lifestyle · Campaña", title: "Una noche distinta", image: "/assets/loopstudios-landing-page-main/desktop/image-night-arcade.jpg", alt: "Arcade iluminado con colores neón" },
];

export const Portfolio = (): JSX.Element => (
	<div>
		<div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
			<div>
				<p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b56b4b]">Trabajo seleccionado</p>
				<h2 className="text-4xl font-medium tracking-tight sm:text-5xl" id="studio-portfolio-heading">Pequeño estudio.<br className="sm:hidden" /> Grandes ideas.</h2>
			</div>
			<a className="w-fit border-b border-[#22221f] pb-2 text-xs font-semibold uppercase tracking-[0.16em] hover:text-[#b56b4b] focus-visible:outline-2 focus-visible:outline-offset-4" href="mailto:hola@forma.studio">Cuéntanos tu idea <span aria-hidden="true">↗</span></a>
		</div>
		<div className="grid gap-5 md:grid-cols-3">
			{projects.map((project, index) => (
				<article className="group" key={project.title}>
					<div className="relative overflow-hidden bg-[#ded9d0]">
						<img className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75 sm:h-80" src={project.image} alt={project.alt} loading="lazy" />
						<span className="absolute left-4 top-4 bg-[#f4f1ec] px-3 py-2 text-[10px] font-semibold uppercase tracking-wider">0{index + 1}</span>
					</div>
					<p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9b6147]">{project.category}</p>
					<h3 className="mt-2 text-xl font-medium">{project.title}</h3>
				</article>
			))}
		</div>
	</div>
);
