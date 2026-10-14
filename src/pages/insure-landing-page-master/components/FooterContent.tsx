import {
	ASSET_ROOT_INSURE_LANDING_PAGE,
	DATA_INSURE_FOOTER_GROUPS,
	DATA_INSURE_SOCIAL_NETWORKS,
} from "../../../constants/data";

export const FooterContent = () => (
	<div className="mx-auto max-w-[1110px]">
		<div className="flex flex-col items-center justify-between gap-8 border-b border-[#ddd] pb-8 sm:flex-row">
			<a href="#top" aria-label="Insure home" className="inline-flex items-center">
				<img src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/logo.svg`} alt="Insure" />
			</a>
			<div className="flex gap-4" aria-label="Social media">
				{DATA_INSURE_SOCIAL_NETWORKS.map((network) => (
					<a href="#account" key={network} aria-label={network}>
						<img src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/icon-${network}.svg`} alt="" />
					</a>
				))}
			</div>
		</div>
		<div className="grid grid-cols-1 gap-8 pt-10 sm:grid-cols-4">
			{DATA_INSURE_FOOTER_GROUPS.map((group) => (
				<div className="flex flex-col gap-3 text-center sm:text-left" id={group.title === "Contact" ? "account" : undefined} key={group.title}>
					<h3 className="mb-3 text-xs font-bold uppercase tracking-[1px] text-[#837d87]">{group.title}</h3>
					{group.links.map((link) => (
						<a className="text-sm font-bold uppercase text-[#2b272f] no-underline hover:underline" href={link === "View plans" ? "#plans" : "#how-we-work"} key={link}>
							{link}
						</a>
					))}
				</div>
			))}
		</div>
	</div>
);
