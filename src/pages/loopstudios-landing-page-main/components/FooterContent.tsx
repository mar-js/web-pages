import {
	ASSET_ROOT_LOOPSTUDIOS,
	DATA_LOOPSTUDIOS_LINKS,
	DATA_LOOPSTUDIOS_SOCIAL_NETWORKS,
} from "../../../constants/data";

export const FooterContent = () => (
	<div className="loop-footer-inner mx-auto flex max-w-[1110px] flex-col items-center justify-between gap-8 sm:flex-row">
		<div className="loop-footer-left flex flex-col items-center gap-8 sm:items-start">
			<a href="#top" aria-label="Loopstudios home" className="loop-logo">
				<img src={`${ASSET_ROOT_LOOPSTUDIOS}/logo.svg`} alt="loopstudios" />
			</a>
			<nav className="loop-footer-nav flex flex-col gap-6 text-center sm:flex-row sm:text-left" aria-label="Footer navigation">
				{DATA_LOOPSTUDIOS_LINKS.map((link) => (
					<a className="text-sm text-white no-underline hover:underline" href={link === "About" ? "#about" : "#creations"} key={link}>
						{link}
					</a>
				))}
			</nav>
		</div>
		<div className="loop-footer-right flex flex-col items-center gap-6 sm:items-end">
			<div className="loop-socials flex gap-4" aria-label="Social media">
				{DATA_LOOPSTUDIOS_SOCIAL_NETWORKS.map((network) => (
					<a href="#footer" key={network} aria-label={network}>
						<img className="h-6 w-6" src={`${ASSET_ROOT_LOOPSTUDIOS}/icon-${network}.svg`} alt="" />
					</a>
				))}
			</div>
			<p className="m-0 text-sm text-white/50">© 2021 Loopstudios. All rights reserved.</p>
		</div>
	</div>
);
