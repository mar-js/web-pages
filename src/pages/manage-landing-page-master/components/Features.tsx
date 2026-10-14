import { DATA_MANAGE_FEATURES } from "../../../constants/data";

export const Features = () => (
	<section id="features" className="grid gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:bg-[url('/assets/manage-landing-page-master/bg-tablet-pattern.svg')] md:bg-[length:420px_auto] md:bg-[position:left_90%] md:bg-no-repeat">
		<div>
			<h2 className="mx-auto mb-5 max-w-[420px] text-center text-[32px] font-bold leading-[1.12] tracking-[-0.7px] md:mx-0 md:text-left md:text-[40px]">What’s different about Manage?</h2>
			<p className="mx-auto max-w-[350px] text-center leading-[1.7] text-[#9095a7] md:mx-0 md:text-left">
				Manage provides all the functionality your team needs, without the
				complexity. Our software is tailor-made for modern digital product teams.
			</p>
		</div>
		<div className="grid gap-8">
			{DATA_MANAGE_FEATURES.map((feature, index) => (
				<article key={feature.title}>
					<div className="mb-3 flex items-center gap-3 rounded-l-full bg-[#fff0ec] md:gap-6 md:bg-transparent">
						<span className="inline-flex h-10 min-w-[50px] items-center justify-center rounded-full bg-[#f3603c] text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
						<h3 className="m-0 text-base font-bold">{feature.title}</h3>
					</div>
					<p className="m-0 text-sm leading-[1.75] text-[#9095a7] md:pl-[88px]">{feature.description}</p>
				</article>
			))}
		</div>
	</section>
);
