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
	<section className="hotel-details grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Stay details">
		<article className="hotel-detail-card rounded-xl border border-[#e5ddcf] bg-[#fffdf9] p-5" id="arrival">
			<div className="hotel-detail-top flex items-center gap-3">
				<span className="hotel-detail-icon hotel-icon-terracotta flex h-9 w-9 items-center justify-center rounded-full bg-[#f1e3d7]"><img className="h-4 w-4" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-key.svg`} alt="" /></span>
				<p className="hotel-mono mb-0 text-[10px] uppercase tracking-[0.16em] text-[#766b60]">Arrival</p>
				<span className="hotel-detail-number ml-auto font-mono text-xs text-[#a55337]">01</span>
			</div>
			<h2 className="mb-1 mt-5 font-serif text-xl font-normal">Check-in from 15:00</h2>
			<p className="hotel-detail-subtitle mb-3 text-sm text-[#a55337]">{formatDate(checkInDate, { weekday: "short", day: "numeric", month: "short" })}</p>
			<p className="mb-0 text-sm leading-[1.65] text-[#766b60]">Ring the brass bell by the blue door. If we’re at the market, the key is in the terracotta pot by the olive tree.</p>
		</article>

		<article className="hotel-detail-card rounded-xl border border-[#e5ddcf] bg-[#fffdf9] p-5" id="town">
			<div className="hotel-detail-top flex items-center gap-3">
				<span className="hotel-detail-icon hotel-icon-blue flex h-9 w-9 items-center justify-center rounded-full bg-[#dce9e8]"><img className="h-4 w-4" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-wifi.svg`} alt="" /></span>
				<p className="hotel-mono mb-0 text-[10px] uppercase tracking-[0.16em] text-[#766b60]">WiFi</p>
				<span className="hotel-detail-number ml-auto font-mono text-xs text-[#a55337]">02</span>
			</div>
			<h2 className="mb-1 mt-5 font-serif text-xl font-normal">Le Soleil · Guest</h2>
			<p className="hotel-detail-subtitle mb-3 text-sm text-[#a55337]">Password below</p>
			<div className="hotel-wifi-credentials divide-y divide-[#e5ddcf] rounded-lg bg-[#f7f3eb] px-3">
				<p className="flex justify-between gap-2 py-2 text-xs"><span className="hotel-mono text-[9px] uppercase tracking-wider text-[#766b60]">Network</span><span>Le Soleil · Guest</span></p>
				<p className="flex items-center justify-between gap-2 py-2 text-xs">
					<span className="hotel-mono text-[9px] uppercase tracking-wider text-[#766b60]">Password</span>
					<span className="hotel-password-value font-mono">soleil-2026</span>
					<button className="text-[#a55337] underline" type="button" onClick={copyPassword} aria-label="Copy Wi-Fi password">
						{copied ? "Copied" : "Copy"}
					</button>
				</p>
			</div>
		</article>

		<article className="hotel-detail-card rounded-xl border border-[#e5ddcf] bg-[#fffdf9] p-5" id="breakfast">
			<div className="hotel-detail-top flex items-center gap-3">
				<span className="hotel-detail-icon hotel-icon-rose flex h-9 w-9 items-center justify-center rounded-full bg-[#f4e1e2]"><img className="h-4 w-4" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-breakfast.svg`} alt="" /></span>
				<p className="hotel-mono mb-0 text-[10px] uppercase tracking-[0.16em] text-[#766b60]">Breakfast</p>
				<span className="hotel-detail-number ml-auto font-mono text-xs text-[#a55337]">03</span>
			</div>
			<h2 className="mb-1 mt-5 font-serif text-xl font-normal">Served 8 – 10:30</h2>
			<p className="hotel-detail-subtitle mb-3 text-sm text-[#a55337]">On the terrace</p>
			<p className="mb-0 text-sm leading-[1.65] text-[#766b60]">Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.</p>
		</article>
	</section>
);
