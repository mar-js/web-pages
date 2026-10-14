import {
	ASSET_ROOT_INSURE_LANDING_PAGE,
	DATA_INSURE_BENEFITS,
} from "../../../constants/data";

export const Benefits = () => (
	<section className="mx-auto max-w-[1110px] px-6 pb-0 pt-[72px] md:px-0 md:pt-[250px]" id="how-we-work" aria-labelledby="different-heading">
		<div className="mx-auto mb-8 h-px w-[110px] bg-[#c396c6] md:mx-0 md:w-[125px]" />
		<h2 className="mb-14 text-center font-serif text-[40px] font-bold md:text-left md:text-[68px]" id="different-heading">We’re different</h2>
		<div className="mb-16 grid gap-10 text-center md:mb-24 md:grid-cols-3 md:text-left">
			{DATA_INSURE_BENEFITS.map((benefit) => (
				<article className="flex flex-col items-center md:items-start" key={benefit.title}>
					<img className="mb-8 h-[76px] w-[76px]" src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/${benefit.icon}`} alt="" />
					<h3 className="mb-4 font-serif text-[24px] font-bold">{benefit.title}</h3>
					<p className="max-w-[350px] leading-[1.65] text-[#837d87]">{benefit.copy}</p>
				</article>
			))}
		</div>
	</section>
);
