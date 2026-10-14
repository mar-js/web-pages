import { useState, type FormEvent, type JSX } from "react";

export const Newsletter = (): JSX.Element => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [joined, setJoined] = useState(false);

	const subscribe = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
			setEmailError("Please enter a valid email address");
			setJoined(false);
			return;
		}
		setEmailError("");
		setJoined(true);
	};

	return (
		<section className="bm-newsletter bg-[#5267df] px-5 py-16 text-center text-white" id="contact" aria-labelledby="bm-newsletter-title">
			<p className="bm-kicker mb-8 text-[13px] uppercase tracking-[5px]">35,000+ already joined</p>
			<h2 id="bm-newsletter-title" className="mx-auto mb-[30px] max-w-[420px] text-[26px] font-medium leading-tight sm:text-[30px]">Stay up-to-date with what we’re doing</h2>
			<form className="bm-form mx-auto flex max-w-[450px] flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-start" onSubmit={subscribe} noValidate>
				<div className="bm-email-wrap relative w-full text-left sm:max-w-[300px]">
					<label className="sr-only" htmlFor="bm-email">Enter your email address</label>
					<input
						className="bm-email h-12 w-full rounded border-2 border-transparent px-3.5 text-sm text-[#252b46] outline-offset-2 aria-[invalid=true]:border-[#fa5757]"
						id="bm-email"
						type="email"
						autoComplete="email"
						placeholder="Enter your email address"
						value={email}
						aria-invalid={Boolean(emailError)}
						aria-describedby={emailError ? "bm-email-error" : undefined}
						onChange={(event) => { setEmail(event.target.value); setEmailError(""); setJoined(false); }}
					/>
					{emailError && <span className="bm-error absolute top-12 text-xs text-white" id="bm-email-error">{emailError}</span>}
				</div>
				<button className="bm-submit rounded border-2 border-[#fa5757] bg-[#fa5757] px-5 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#fa5757]" type="submit">Contact Us</button>
			</form>
			{joined && <p className="bm-success mt-5" role="status">Thanks for joining! We’ll keep you up-to-date.</p>}
		</section>
	);
};
