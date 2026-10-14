import type { JSX } from "react";
import { ASSET_ROOT_DIGITALBANK_LANDING_PAGE, DATA_DIGITALBANK_SOCIAL_NETWORKS } from "../../../constants/data";

export const Footer = (): JSX.Element => (
	<footer className="bg-[#2d314d] px-0 py-12 text-white" id="footer">
		<div className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1110px] grid-cols-1 items-center gap-7 text-center md:grid-cols-[1.2fr_1.7fr_1fr] md:text-left">
			<div className="flex flex-col items-center gap-8 md:items-start md:gap-[50px]">
				<a href="#home" aria-label="Digitalbank home"><img className=" w-[140px] brightness-0 invert" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/logo-light.svg`} alt="" /></a>
				<div className="flex gap-[13px]">
					{DATA_DIGITALBANK_SOCIAL_NETWORKS.map((social) => (
						<a href="#footer" key={social} aria-label={social[0].toUpperCase() + social.slice(1)}>
							<img className="h-5 w-5" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/icon-${social}.svg`} alt="" />
						</a>
					))}
				</div>
			</div>
			<nav className="grid grid-cols-2 gap-x-10 gap-y-4 text-left md:grid-rows-3" aria-label="Footer navigation">
				<a className="text-sm text-white hover:text-[#30c88f]" href="#about">About Us</a><a className="text-sm text-white hover:text-[#30c88f]" href="#footer">Contact</a><a className="text-sm text-white hover:text-[#30c88f]" href="#articles">Blog</a>
				<a className="text-sm text-white hover:text-[#30c88f]" href="#footer">Careers</a><a className="text-sm text-white hover:text-[#30c88f]" href="#footer">Support</a><a className="text-sm text-white hover:text-[#30c88f]" href="#footer">Privacy Policy</a>
			</nav>
			<div className="text-center md:text-right">
				<a className="mb-6 inline-flex rounded-full bg-gradient-to-r from-[#31d35c] to-[#2bb7da] px-8 py-[15px] text-sm font-bold text-white no-underline" href="#home">Request Invite</a>
				<p className="m-0 text-[13px] text-white/50">© Digitalbank. All Rights Reserved</p>
			</div>
		</div>
	</footer>
);
