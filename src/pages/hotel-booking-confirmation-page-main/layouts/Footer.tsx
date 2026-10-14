import { ASSET_ROOT_HOTEL_BOOKING } from "../../../constants/data";

export const Footer = () => (
	<div className="mt-auto hidden md:block">
		<div className="relative overflow-hidden rounded-xl bg-[#f5d779] p-4">
			<img className="absolute right-[-12px] top-[-32px] w-[92px] opacity-65" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/illustration-sun.svg`} alt="" />
			<p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em]">Today in Cassis</p>
			<strong className="my-1 block text-3xl">27°</strong>
			<span className="text-xs text-[#766b60]">Sunny · light breeze</span>
		</div>
		<div className="mt-5 space-y-1 border-t border-dashed border-[#e5ddcf] pt-4 font-mono text-[10px] leading-relaxed text-[#766b60]">
			<p>Est. 1987</p>
			<p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
			<p>© 2026 Maison Soleil</p>
		</div>
	</div>
);
