import {
	ASSET_ROOT_INSURE_LANDING_PAGE,
	DATA_INSURE_BENEFITS,
} from "../../../constants/data";

export const Benefits = () => (
	<section className="insure-different mx-auto max-w-[1110px] px-6 py-24 md:px-0" id="how-we-work" aria-labelledby="different-heading">
		<div className="insure-rule mb-8 h-px w-[150px] bg-[#c396c6]" />
		<h2 className="mb-14 text-4xl font-normal md:text-[68px]" id="different-heading">We’re different</h2>
		<div className="insure-benefits mb-24 grid gap-10 md:grid-cols-3">
			{DATA_INSURE_BENEFITS.map((benefit) => (
				<article className="insure-benefit" key={benefit.title}>
					<img className="mb-8 h-[86px] w-[86px]" src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/${benefit.icon}`} alt="" />
					<h3 className="mb-4 text-[28px] font-normal">{benefit.title}</h3>
					<p className="leading-[1.65] text-[#837d87]">{benefit.copy}</p>
				</article>
			))}
		</div>
	</section>
);
