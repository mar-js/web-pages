import { ASSET_ROOT_HOTEL_BOOKING } from "../../../constants/data";

const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
	new Intl.DateTimeFormat("en-GB", options).format(date);

export const StayDetails = ({
	checkInDate,
	copied,
	copyPassword,
}: {
	checkInDate: Date;
	copied: boolean;
	copyPassword: () => void;
}) => (
	<section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Stay details">
		<article className="rounded-2xl border border-[#e5ddcf] bg-[#fffdf9] p-5 shadow-[0_8px_20px_rgb(70_52_34_/_4%)]" id="arrival">
			<div className="flex items-center gap-3">
				<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#bd4824]"><img className="h-5 w-5 brightness-0 invert" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-key.svg`} alt="" /></span>
				<p className="mb-0 font-mono text-[10px] uppercase tracking-[0.16em] text-[#a55337]">Arrival</p>
				<span className="ml-auto font-serif text-2xl text-[#a55337]">01</span>
			</div>
			<h2 className="mb-1 mt-5 font-serif text-xl font-normal">Check-in from 15:00</h2>
			<p className=" mb-3 text-sm text-[#a55337]">{formatDate(checkInDate, { weekday: "short", day: "numeric", month: "short" })}</p>
			<p className="mb-0 text-sm leading-[1.65] text-[#766b60]">Ring the brass bell by the blue door. If we’re at the market, the key is in the terracotta pot by the olive tree.</p>
		</article>

		<article className="rounded-2xl border border-[#e5ddcf] bg-[#fffdf9] p-5 shadow-[0_8px_20px_rgb(70_52_34_/_4%)]" id="town">
			<div className="flex items-center gap-3">
				<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5a68c4]"><img className="h-5 w-5 brightness-0 invert" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-wifi.svg`} alt="" /></span>
				<p className="mb-0 font-mono text-[10px] uppercase tracking-[0.16em] text-[#5a68c4]">WiFi</p>
				<span className="ml-auto font-serif text-2xl text-[#5a68c4]">02</span>
			</div>
			<h2 className="mb-1 mt-5 font-serif text-xl font-normal">Le Soleil · Guest</h2>
			<p className="mb-3 text-sm text-[#a55337]">Password below</p>
			<div className=" divide-y divide-[#e5ddcf] rounded-lg bg-[#f7f3eb] px-3">
				<p className="flex justify-between gap-2 py-2 text-xs"><span className="font-mono text-[9px] uppercase tracking-wider text-[#766b60]">Network</span><span>Le Soleil · Guest</span></p>
				<p className="flex items-center justify-between gap-2 py-2 text-xs">
					<span className="font-mono text-[9px] uppercase tracking-wider text-[#766b60]">Password</span>
					<span className=" font-mono">soleil-2026</span>
					<button className="rounded-full px-2 text-[9px] text-[#a55337] underline hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#a55337]" type="button" onClick={copyPassword} aria-label="Copy Wi-Fi password">
						{copied ? "Copied" : "Copy"}
					</button>
				</p>
			</div>
		</article>

		<article className="rounded-2xl border border-[#e5ddcf] bg-[#fffdf9] p-5 shadow-[0_8px_20px_rgb(70_52_34_/_4%)]" id="breakfast">
			<div className="flex items-center gap-3">
				<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#bb5274]"><img className="h-5 w-5 brightness-0 invert" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-breakfast.svg`} alt="" /></span>
				<p className="mb-0 font-mono text-[10px] uppercase tracking-[0.16em] text-[#bb5274]">Breakfast</p>
				<span className="ml-auto font-serif text-2xl text-[#bb5274]">03</span>
			</div>
			<h2 className="mb-1 mt-5 font-serif text-xl font-normal">Served 8 – 10:30</h2>
			<p className=" mb-3 text-sm text-[#a55337]">On the terrace</p>
			<p className="mb-0 text-sm leading-[1.65] text-[#766b60]">Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.</p>
		</article>
	</section>
);
