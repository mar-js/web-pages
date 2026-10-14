import type { JSX } from "react";
import { ASSET_ROOT_DIGITALBANK_LANDING_PAGE, DATA_DIGITALBANK_BENEFITS } from "../../../constants/data";

export const Benefits = (): JSX.Element => (
	<section className="relative z-0 bg-[#f3f4f6] px-0 py-20 md:py-[100px]" id="about" aria-labelledby="db-benefits-title">
		<div className="mx-auto w-[calc(100%_-_48px)] max-w-[1110px]">
			<div className="mx-auto mb-14 max-w-[650px] text-center md:mx-0 md:mb-[70px] md:text-left">
				<h2 className="mb-5 text-[32px] font-light tracking-[-1px] md:text-[40px]" id="db-benefits-title">Why choose Digitalbank?</h2>
				<p className="text-base leading-[1.55] text-[#9698a6] md:text-[17px]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
			</div>
			<div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
				{DATA_DIGITALBANK_BENEFITS.map((benefit) => (
					<article key={benefit.title}>
						<img className="mx-auto mb-8 h-[72px] w-[72px] md:mx-0" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/${benefit.image}`} alt="" />
						<h3 className="mb-5 text-2xl font-light">{benefit.title}</h3>
						<p className="text-[15px] leading-[1.65] text-[#9698a6]">{benefit.description}</p>
					</article>
				))}
			</div>
		</div>
	</section>
);
