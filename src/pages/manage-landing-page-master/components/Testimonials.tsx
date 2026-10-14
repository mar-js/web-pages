import {
	ASSET_ROOT_MANAGE,
	DATA_MANAGE_TESTIMONIAL_OFFSETS,
	DATA_MANAGE_TESTIMONIALS,
} from "../../../constants/data";

const asset = (name: string) => `${ASSET_ROOT_MANAGE}/${name}`;

export const Testimonials = ({
	activeTestimonial,
	setActiveTestimonial,
	showPrevious,
	showNext,
}: {
	activeTestimonial: number;
	setActiveTestimonial: (index: number) => void;
	showPrevious: () => void;
	showNext: () => void;
}) => (
	<section className="py-14 text-center" aria-labelledby="manage-testimonials-title">
		<h2 className="mb-20 text-[32px] font-bold md:text-[40px]" id="manage-testimonials-title">What they’ve said</h2>
		<div className="grid grid-cols-1 gap-16 md:grid-cols-3">
			{DATA_MANAGE_TESTIMONIAL_OFFSETS.map((offset) => {
				const testimonial =
					DATA_MANAGE_TESTIMONIALS[(activeTestimonial + offset - 1 + DATA_MANAGE_TESTIMONIALS.length) % DATA_MANAGE_TESTIMONIALS.length];
				return (
					<article className={`relative bg-[#fafafa] px-6 pb-8 pt-16 ${offset !== 1 ? "hidden md:block" : ""}`} key={testimonial.name}>
						<img className="absolute -top-9 left-1/2 h-[72px] w-[72px] -translate-x-1/2 rounded-full" src={asset(testimonial.image)} alt="" />
						<h3 className="mb-4 text-base font-bold">{testimonial.name}</h3>
						<p className="m-0 text-sm leading-[1.7] text-[#9095a7]">{testimonial.quote}</p>
					</article>
				);
			})}
		</div>
		<fieldset className="my-8 flex justify-center gap-2 border-0 p-0">
			<legend className="sr-only">Testimonials</legend>
			<button className="sr-only focus:not-sr-only" type="button" onClick={showPrevious} aria-label="Previous testimonial">Previous</button>
			{DATA_MANAGE_TESTIMONIALS.map((testimonial, index) => (
				<button
					type="button"
					key={testimonial.name}
					className={`h-2.5 w-2.5 rounded-full border border-[#f3603c] p-0 ${index === activeTestimonial ? "bg-[#f3603c]" : "bg-white"}`}
					aria-label={`Show ${testimonial.name}'s testimonial`}
					aria-pressed={index === activeTestimonial}
					onClick={() => setActiveTestimonial(index)}
				/>
			))}
			<button className="sr-only focus:not-sr-only" type="button" onClick={showNext} aria-label="Next testimonial">Next</button>
		</fieldset>
		<a href="#signup" className="inline-flex rounded-full bg-[#f3603c] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#f3603c]/25 no-underline transition-colors hover:bg-[#f98f75] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242d52]">
			Get Started
		</a>
	</section>
);
