import { ASSET_ROOT_HOTEL_BOOKING } from "../../../constants/data";

export const Footer = () => (
	<div className="hotel-sidebar-bottom mt-auto hidden md:block">
		<div className="hotel-weather relative rounded-xl bg-[#eee6d8] p-4">
			<img className="hotel-weather-sun absolute right-[-12px] top-[-32px] w-[92px] opacity-65" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/illustration-sun.svg`} alt="" />
			<p className="hotel-mono mb-2 text-[10px] uppercase tracking-[0.15em]">Today in Cassis</p>
			<strong className="my-1 block text-3xl">27°</strong>
			<span className="text-xs text-[#766b60]">Sunny · light breeze</span>
		</div>
		<div className="hotel-address mt-5 space-y-1 text-[10px] leading-relaxed text-[#766b60]">
			<p>Est. 1987</p>
			<p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
			<p>© 2026 Maison Soleil</p>
		</div>
	</div>
);
