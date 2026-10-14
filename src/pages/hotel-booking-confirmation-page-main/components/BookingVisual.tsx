import { ASSET_ROOT_HOTEL_BOOKING } from "../../../constants/data";

const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
	new Intl.DateTimeFormat("en-GB", options).format(date);

export const BookingVisual = ({
	checkInDate,
	checkOutDate,
	nights,
	guestCount,
	roomTotal,
	breakfastTotal,
	taxTotal,
	total,
}: {
	checkInDate: Date;
	checkOutDate: Date;
	nights: number;
	guestCount: number;
	roomTotal: number;
	breakfastTotal: number;
	taxTotal: number;
	total: number;
}) => (
	<>
		<section className="mb-8 grid gap-5 lg:grid-cols-2 lg:gap-0" aria-label="Your booking and welcome note">
			<article className="order-2 rounded-xl bg-[#fffdf9] p-6 shadow-[0_12px_35px_rgb(70_52_34_/_8%)] transition-transform duration-500 sm:p-9 lg:relative lg:z-0 lg:translate-x-5 lg:rotate-[-3deg] lg:hover:-translate-x-12 lg:hover:rotate-[-7deg]" aria-label="Stay receipt">
				<div className="flex items-start justify-between">
					<div>
						<p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#766b60]">Receipt</p>
						<h2 className="m-0 font-serif text-3xl font-normal">Your stay</h2>
					</div>
					<p className="text-right font-mono text-[10px] leading-relaxed tracking-wider text-[#766b60]">№ MS-2026<br />0421-AH</p>
				</div>
				<div className="my-6 grid grid-cols-2 gap-5 border-y border-[#e5ddcf] py-5 text-center">
					<div>
						<p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#766b60]">Check in</p>
						<strong className="block font-serif text-3xl font-normal sm:text-4xl">{formatDate(checkInDate, { day: "2-digit", month: "short" })}</strong>
						<span className="text-sm text-[#766b60]">{formatDate(checkInDate, { weekday: "long" })} · 15:00</span>
					</div>
					<div>
						<p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#766b60]">Check out</p>
						<strong className="block font-serif text-3xl font-normal sm:text-4xl">{formatDate(checkOutDate, { day: "2-digit", month: "short" })}</strong>
						<span className="text-sm text-[#766b60]">{formatDate(checkOutDate, { weekday: "long" })} · 11:00</span>
					</div>
				</div>
				<div className="space-y-3 text-sm text-[#766b60]">
					<p className="flex justify-between gap-3"><span>Room · La Garrigue × {nights} nights</span><span>€ {roomTotal.toFixed(2)}</span></p>
					<p className="flex justify-between gap-3"><span>Breakfast × {guestCount} guests</span><span>€ {breakfastTotal.toFixed(2)}</span></p>
					<p className="flex justify-between gap-3"><span>Tourist tax</span><span>€ {taxTotal.toFixed(2)}</span></p>
				</div>
				<div className="mt-5 flex items-center justify-between border-t border-[#e5ddcf] pt-5">
					<span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#766b60]">Total paid</span>
					<strong className="font-serif text-2xl font-normal">€ {total.toFixed(2)}</strong>
				</div>
				<div className="mt-6 flex items-end justify-between border-t border-dashed border-[#e5ddcf] pt-5">
					<span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#766b60]">Paid · Wise · GBP</span>
					<img className="w-28 opacity-75" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-barcode.svg`} alt="Receipt barcode" />
				</div>
			</article>
			<article className="order-1 relative min-h-[430px] rounded-xl bg-gradient-to-br from-[#c75a2e] to-[#963b1e] p-7 text-white shadow-[0_22px_45px_rgb(165_83_55_/_22%)] transition-transform duration-500 sm:p-10 lg:z-10 lg:-translate-x-5 lg:rotate-[3deg] lg:hover:translate-x-12 lg:hover:rotate-[7deg]">
				<div className="mb-14 font-mono text-[10px] uppercase tracking-[0.16em] text-white/75">Welcome card</div>
				<img className="absolute right-6 top-5 w-12 opacity-80" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-sun.svg`} alt="" />
				<p className="mb-1 font-serif text-lg italic text-[#ffe38a]">A note from your host,</p>
				<h2 className="m-0 font-serif text-4xl font-normal italic">Margaux.</h2>
				<p className="mt-4 max-w-[350px] leading-[1.65] text-white/90">
					We’re so glad you’re coming. The shutters will be open, the lemonade
					cold, and the cat - Poivre - pretending not to notice you.
				</p>
				<div className="absolute bottom-7 left-7 flex flex-col sm:left-10">
					<span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">Room</span>
					<strong className="font-serif text-lg font-normal">La Garrigue</strong>
				</div>
			</article>
		</section>
		<p className="mb-7 mt-4 hidden text-center text-xs uppercase tracking-[0.12em] text-[#766b60] lg:block"><span aria-hidden="true">✦</span> Hover to fan <span aria-hidden="true">✦</span></p>
	</>
);
