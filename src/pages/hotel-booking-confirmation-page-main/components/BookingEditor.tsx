import type { FormEvent, RefObject } from "react";

export const BookingEditor = ({
	dialogRef,
	draftCheckIn,
	draftCheckOut,
	draftGuests,
	formError,
	setDraftCheckIn,
	setDraftCheckOut,
	setDraftGuests,
	setDialogOpen,
	confirmStay,
}: {
	dialogRef: RefObject<HTMLElement | null>;
	draftCheckIn: string;
	draftCheckOut: string;
	draftGuests: number;
	formError: string;
	setDraftCheckIn: (value: string) => void;
	setDraftCheckOut: (value: string) => void;
	setDraftGuests: (value: number) => void;
	setDialogOpen: (open: boolean) => void;
	confirmStay: (event: FormEvent<HTMLFormElement>) => void;
}) => (
	<div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto bg-black/50 p-5" onMouseDown={(event) => {
		if (event.target === event.currentTarget) setDialogOpen(false);
	}}>
		<section ref={dialogRef} className="relative my-auto w-full max-w-[520px] rounded-2xl bg-[#fffdf9] p-6 shadow-2xl sm:p-9" role="dialog" aria-modal="true" aria-labelledby="hotel-dialog-heading">
			<button className="absolute right-5 top-4 text-2xl text-[#766b60] hover:text-[#302b26] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a55337]" type="button" onClick={() => setDialogOpen(false)} aria-label="Close stay editor">×</button>
			<p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#a55337]">Make yourself at home</p>
			<h2 className="m-0 font-serif text-3xl font-normal" id="hotel-dialog-heading">Your stay</h2>
			<p className="mb-6 mt-3 text-sm leading-[1.6] text-[#766b60]">Update your dates and guests. Your receipt will refresh with the new stay details.</p>
			<form className="grid gap-4" onSubmit={confirmStay}>
				<label className="grid gap-2 text-sm font-medium">
					Check in
					<input className="rounded-lg border border-[#d8cdbd] bg-white p-3 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#a55337]" type="date" required value={draftCheckIn} onChange={(event) => setDraftCheckIn(event.target.value)} />
				</label>
				<label className="grid gap-2 text-sm font-medium">
					Check out
					<input className="rounded-lg border border-[#d8cdbd] bg-white p-3 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#a55337]" type="date" required min={draftCheckIn} value={draftCheckOut} onChange={(event) => setDraftCheckOut(event.target.value)} />
				</label>
				{formError && <p className="m-0 text-sm text-red-700" role="alert">{formError}</p>}
				<label className="grid gap-2 text-sm font-medium">
					Guests
					<select className="rounded-lg border border-[#d8cdbd] bg-white p-3 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#a55337]" value={draftGuests} onChange={(event) => setDraftGuests(Number(event.target.value))}>
						<option value={1}>1 guest</option>
						<option value={2}>2 guests</option>
						<option value={3}>3 guests</option>
						<option value={4}>4 guests</option>
					</select>
				</label>
				<div className="mt-3 flex justify-end gap-3">
					<button type="button" className="rounded-full border border-[#d8cdbd] px-5 py-3 text-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a55337]" onClick={() => setDialogOpen(false)}>Cancel</button>
					<button type="submit" className="rounded-full border border-[#302b26] bg-[#302b26] px-5 py-3 text-sm text-white hover:bg-[#544a3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a55337]">Confirm stay</button>
				</div>
			</form>
		</section>
	</div>
);
