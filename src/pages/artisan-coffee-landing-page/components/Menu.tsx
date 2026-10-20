import type { JSX } from "react";

const favorites = [
	{
		category: "De nuestra cocina",
		name: "Tostada de la huerta",
		detail: "Masa madre, tomate de temporada, aceite de oliva y hierbas frescas.",
		price: "8 €",
		image: "/assets/recipe-page-main/image-omelette.jpeg",
		alt: "Desayuno artesanal servido recién hecho",
	},
	{
		category: "De origen",
		name: "Filtro de la semana",
		detail: "Un café distinto cada semana, tostado con cuidado y servido sin prisa.",
		price: "4 €",
		image: "/assets/digitalbank-landing-page/image-currency.jpg",
		alt: "Café preparado para disfrutar en una pausa",
	},
];

export const Menu = (): JSX.Element => (
	<div>
		<div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end">
			<div>
				<p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9d633c]">Hecho aquí, con tiempo</p>
				<h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl" id="coffee-menu-heading">Lo sencillo también puede sorprender.</h2>
			</div>
			<p className="max-w-lg text-sm leading-7 text-[#76695e]">Trabajamos con ingredientes de temporada y productores que conocemos por su nombre. Cada cosa en la carta tiene una historia detrás.</p>
		</div>
		<div className="grid gap-8 md:grid-cols-2">
			{favorites.map((item) => (
				<article className="group grid overflow-hidden bg-white sm:grid-cols-[0.9fr_1.1fr]" key={item.name}>
					<div className="overflow-hidden">
						<img className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full" src={item.image} alt={item.alt} loading="lazy" />
					</div>
					<div className="flex flex-col justify-center p-6 sm:p-8">
						<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9d633c]">{item.category}</p>
						<div className="mt-3 flex items-baseline justify-between gap-3">
							<h3 className="text-xl font-medium">{item.name}</h3>
							<span className="text-sm font-semibold">{item.price}</span>
						</div>
						<p className="mt-3 text-sm leading-6 text-[#76695e]">{item.detail}</p>
					</div>
				</article>
			))}
		</div>
		<div className="mt-16 flex flex-col gap-5 border-t border-[#ded4c8] pt-8 sm:flex-row sm:items-center sm:justify-between">
			<div id="origen">
				<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9d633c]">De la finca a tu taza</p>
				<p className="mt-2 max-w-xl text-lg font-light leading-7">Cuidamos cada paso para que tú solo tengas que disfrutar el primero.</p>
			</div>
			<a className="w-fit border-b border-[#32271f] pb-2 text-xs font-semibold uppercase tracking-[0.16em] hover:text-[#9d633c] focus-visible:outline-2 focus-visible:outline-offset-4" href="mailto:hola@brumacafe.example">Conoce nuestra historia <span aria-hidden="true">↗</span></a>
		</div>
	</div>
);
