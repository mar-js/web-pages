import { useEffect, useRef, useState, type FormEvent, type JSX } from "react";
import { BookingEditor, BookingHeading, BookingVisual, Notice, StayDetails } from "./components";
import { Header, Main, Sidebar } from "./layouts";

const dateFromInput = (value: string) => new Date(`${value}T12:00:00`);

const calculateNights = (start: string, end: string) => {
	const nights = Math.round((dateFromInput(end).getTime() - dateFromInput(start).getTime()) / 86_400_000);
	return Math.max(1, nights);
};

export const HotelBookingConfirmationPage = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [checkIn, setCheckIn] = useState("2026-04-25");
	const [checkOut, setCheckOut] = useState("2026-04-29");
	const [guestCount, setGuestCount] = useState(2);
	const [draftCheckIn, setDraftCheckIn] = useState(checkIn);
	const [draftCheckOut, setDraftCheckOut] = useState(checkOut);
	const [draftGuests, setDraftGuests] = useState(guestCount);
	const [copied, setCopied] = useState(false);
	const [notice, setNotice] = useState("");
	const [formError, setFormError] = useState("");
	const dialogRef = useRef<HTMLElement>(null);
	const nights = calculateNights(checkIn, checkOut);
	const checkInDate = dateFromInput(checkIn);
	const checkOutDate = dateFromInput(checkOut);
	const roomTotal = nights * 155;
	const breakfastTotal = nights * guestCount * 12;
	const taxTotal = nights * guestCount * 1.8;
	const total = roomTotal + breakfastTotal + taxTotal;

	useEffect(() => {
		if (!dialogOpen) return;
		const previouslyFocused = document.activeElement as HTMLElement | null;
		dialogRef.current?.querySelector<HTMLElement>("input, select, button")?.focus();
		const manageDialogKeys = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setDialogOpen(false);
				return;
			}
			if (event.key !== "Tab" || !dialogRef.current) return;
			const focusable = Array.from(
				dialogRef.current.querySelectorAll<HTMLElement>(
					'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]',
				),
			);
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last?.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first?.focus();
			}
		};
		document.addEventListener("keydown", manageDialogKeys);
		return () => {
			document.removeEventListener("keydown", manageDialogKeys);
			previouslyFocused?.focus();
		};
	}, [dialogOpen]);

	const openEditor = () => {
		setDraftCheckIn(checkIn);
		setDraftCheckOut(checkOut);
		setDraftGuests(guestCount);
		setDialogOpen(true);
		setMenuOpen(false);
	};

	const confirmStay = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (draftCheckOut <= draftCheckIn) {
			setFormError("Choose a check-out date after your check-in date.");
			return;
		}
		setFormError("");
		setCheckIn(draftCheckIn);
		setCheckOut(draftCheckOut);
		setGuestCount(draftGuests);
		setDialogOpen(false);
		setNotice("Your stay details have been updated.");
	};

	const copyPassword = async () => {
		try {
			await navigator.clipboard.writeText("soleil-2026");
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			setNotice("Copying isn’t available in this browser. Wi-Fi password: soleil-2026");
		}
	};

	const addToCalendar = () => {
		const start = checkIn.replaceAll("-", "");
		const end = checkOut.replaceAll("-", "");
		const event = [
			"BEGIN:VCALENDAR",
			"VERSION:2.0",
			"PRODID:-//Maison Soleil//Stay//EN",
			"BEGIN:VEVENT",
			`DTSTART;VALUE=DATE:${start}`,
			`DTEND;VALUE=DATE:${end}`,
			"SUMMARY:Stay at Maison Soleil",
			"LOCATION:12 Rue des Oliviers\\, Cassis",
			"DESCRIPTION:Your stay at La Garrigue",
			"END:VEVENT",
			"END:VCALENDAR",
		].join("\r\n");
		const url = URL.createObjectURL(new Blob([event], { type: "text/calendar;charset=utf-8" }));
		const link = document.createElement("a");
		link.href = url;
		link.download = "maison-soleil-stay.ics";
		link.click();
		window.setTimeout(() => URL.revokeObjectURL(url), 1000);
	};

	return (
		<div className="hotel-page min-h-screen bg-[#f7f3eb] font-sans text-[#302b26] md:pl-[260px]">
			<Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} openEditor={openEditor} />
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Main>
				<BookingHeading addToCalendar={addToCalendar} />
				<BookingVisual
					checkInDate={checkInDate}
					checkOutDate={checkOutDate}
					nights={nights}
					guestCount={guestCount}
					roomTotal={roomTotal}
					breakfastTotal={breakfastTotal}
					taxTotal={taxTotal}
					total={total}
				/>
				<StayDetails checkInDate={checkInDate} copied={copied} copyPassword={copyPassword} />
				<span className="sr-only" id="messages">For help, contact your host Margaux through your booking confirmation.</span>
				{notice && <Notice notice={notice} dismiss={() => setNotice("")} />}
			</Main>
			{dialogOpen && (
				<BookingEditor
					dialogRef={dialogRef}
					draftCheckIn={draftCheckIn}
					draftCheckOut={draftCheckOut}
					draftGuests={draftGuests}
					formError={formError}
					setDraftCheckIn={(value) => { setDraftCheckIn(value); setFormError(""); }}
					setDraftCheckOut={(value) => { setDraftCheckOut(value); setFormError(""); }}
					setDraftGuests={setDraftGuests}
					setDialogOpen={setDialogOpen}
					confirmStay={confirmStay}
				/>
			)}
		</div>
	);
};
