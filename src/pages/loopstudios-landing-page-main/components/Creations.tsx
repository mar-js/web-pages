import {
	ASSET_ROOT_LOOPSTUDIOS,
	DATA_LOOPSTUDIOS_CREATIONS,
} from "../../../constants/data";

export const Creations = () => (
	<section className="loop-creations py-24" id="creations" aria-labelledby="loop-creations-heading">
		<div className="loop-section-heading mb-10 flex items-center justify-between">
			<h2 className="m-0 text-3xl font-light uppercase md:text-[40px]" id="loop-creations-heading">Our creations</h2>
			<a className="loop-see-all loop-see-all-desktop hidden border border-black px-9 py-3 text-xs uppercase tracking-[4px] no-underline hover:bg-black hover:text-white md:block" href="#creation-grid">See all</a>
		</div>
		<div className="loop-creation-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="creation-grid">
			{DATA_LOOPSTUDIOS_CREATIONS.map(({ slug, title }) => (
				<article className={`loop-creation loop-creation-${slug} relative block min-w-0 overflow-hidden bg-black`} key={slug}>
					<picture>
						<source media="(max-width: 700px)" srcSet={`${ASSET_ROOT_LOOPSTUDIOS}/mobile/image-${slug}.jpg`} />
						<img className="block h-[120px] w-full object-cover opacity-80 transition-opacity hover:opacity-50 sm:h-[450px]" src={`${ASSET_ROOT_LOOPSTUDIOS}/desktop/image-${slug}.jpg`} alt="" />
					</picture>
					<h3 className="absolute bottom-5 left-5 z-[1] m-0 max-w-[180px] text-2xl font-light uppercase leading-[1.1] text-white sm:bottom-8 sm:left-8 sm:text-[32px]">{title}</h3>
				</article>
			))}
		</div>
		<a className="loop-see-all loop-see-all-mobile mt-8 inline-block border border-black px-9 py-3 text-xs uppercase tracking-[4px] no-underline hover:bg-black hover:text-white md:hidden" href="#creation-grid">See all</a>
	</section>
);
