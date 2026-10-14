export const BookingHeading = ({ addToCalendar }: { addToCalendar: () => void }) => (
	<header className="hotel-page-heading mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
		<div>
			<p className="hotel-eyebrow mb-2 text-[11px] uppercase tracking-[0.18em] text-[#a55337]">Booking · Confirmed</p>
			<h1 className="m-0 text-4xl font-normal md:text-5xl">Bienvenue, <em className="font-serif">Lucia.</em></h1>
		</div>
		<div className="hotel-actions flex flex-wrap gap-3">
			<button type="button" className="hotel-button hotel-button-light rounded-full border border-[#d8cdbd] bg-transparent px-5 py-3 text-sm hover:bg-white" onClick={() => window.print()}>Print receipt</button>
			<button type="button" className="hotel-button hotel-button-dark rounded-full border border-[#302b26] bg-[#302b26] px-5 py-3 text-sm text-white hover:bg-[#544a3f]" onClick={addToCalendar}>Add to calendar</button>
		</div>
	</header>
);
