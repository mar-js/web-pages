export const BookingHeading = ({ addToCalendar }: { addToCalendar: () => void }) => (
	<header className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
		<div>
			<p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#766b60]">Booking · Confirmed</p>
			<h1 className="m-0 font-serif text-4xl font-normal md:text-5xl">Bienvenue, <em className="font-serif text-[#a55337]">Lucia.</em></h1>
		</div>
		<div className="flex flex-wrap gap-3">
			<button type="button" className="rounded-full border border-[#d8cdbd] bg-transparent px-5 py-3 text-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a55337]" onClick={() => window.print()}>Print receipt</button>
			<button type="button" className="rounded-full border border-[#302b26] bg-[#302b26] px-5 py-3 text-sm text-white hover:bg-[#544a3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a55337]" onClick={addToCalendar}>Add to calendar</button>
		</div>
	</header>
);
