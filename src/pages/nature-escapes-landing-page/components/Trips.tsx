import type { JSX } from "react";

const trips = [
	{
		place: "Asturias · 3 noches",
		title: "Bosque adentro",
		detail: "Cabaña entre montañas, cocina de temporada y senderos sin prisa.",
		image: "/assets/loopstudios-landing-page-main/desktop/image-deep-earth.jpg",
		alt: "Bosque verde y frondoso visto desde lo alto",
	},
	{
		place: "Islandia · 5 noches",
		title: "Bajo otra luz",
		detail: "Pequeñas casas junto al fiordo y una noche entera bajo las estrellas.",
		image: "/assets/loopstudios-landing-page-main/desktop/image-pocket-borealis.jpg",
		alt: "Aurora boreal sobre un paisaje oscuro",
	},
	{
		place: "Costa Rica · 4 noches",
		title: "La vida en verde",
		detail: "Despierta con la selva, aprende de quienes la cuidan y baja el ritmo.",
		image: "/assets/loopstudios-landing-page-main/desktop/image-from-above.jpg",
		alt: "Paisaje natural y senderos contemplados desde el aire",
	},
];

export const Trips = (): JSX.Element => (
	<div>
		<div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
			<div>
				<p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#64816b]">Para ir más despacio</p>
				<h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl" id="nature-trips-heading">Un lugar nuevo.<br className="sm:hidden" /> Otra manera de estar.</h2>
			</div>
			<p className="max-w-sm text-sm leading-6 text-[#65736b]">Viajes en grupos pequeños, alojamientos con alma y anfitriones que conocen cada rincón.</p>
		</div>
		<div className="grid gap-5 md:grid-cols-3">
			{trips.map((escape) => (
				<article className="group overflow-hidden rounded-sm bg-white shadow-sm" key={escape.title}>
					<div className="overflow-hidden">
						<img className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72" src={escape.image} alt={escape.alt} loading="lazy" />
					</div>
					<div className="p-6">
						<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64816b]">{escape.place}</p>
						<h3 className="mt-3 text-2xl font-medium">{escape.title}</h3>
						<p className="mt-3 text-sm leading-6 text-[#65736b]">{escape.detail}</p>
						<a className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] hover:text-[#64816b] focus-visible:outline-2 focus-visible:outline-offset-4" href="mailto:hola@rutaescapes.travel?subject=Quiero%20planear%20una%20escapada">Explorar viaje <span aria-hidden="true">→</span></a>
					</div>
				</article>
			))}
		</div>
		<div className="mt-14 flex flex-col gap-5 rounded-sm bg-[#e6eadf] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
			<div>
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64816b]">El viaje empieza aquí</p>
				<h3 className="mt-2 text-2xl font-medium">¿Qué necesitas encontrar?</h3>
			</div>
			<a className="inline-flex w-fit items-center gap-4 rounded-full bg-[#172b27] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#36584d] focus-visible:outline-2 focus-visible:outline-offset-4" href="mailto:hola@rutaescapes.travel">Cuéntanoslo <span aria-hidden="true">↗</span></a>
		</div>
	</div>
);
