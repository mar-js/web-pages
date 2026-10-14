import { type FormEvent, type JSX, useRef, useState } from "react";

export const Form = (): JSX.Element => {
	const emailInput = useRef<HTMLInputElement>(null);
	const [hasError, setHasError] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		if (!emailInput.current?.checkValidity()) {
			setHasError(true);
			setIsSubmitted(false);
			emailInput.current?.focus();
			return;
		}

		setHasError(false);
		setIsSubmitted(true);
	};

	return (
		<form
			className="mt-8 md:mt-10"
			onSubmit={handleSubmit}
			noValidate
			aria-label="Join the Base Apparel mailing list"
		>
			<div className="relative">
				<label className="sr-only" htmlFor="base-apparel-email">
					Email Address
				</label>
				<input
					ref={emailInput}
					className={`h-14 w-full rounded-full border bg-transparent py-3 pr-32 pl-6 text-sm text-[#423a3a] placeholder:text-[#ce9898] focus:outline-2 focus:outline-offset-2 focus:outline-[#ce9898] lg:pl-8 ${hasError ? "border-[#f96464]" : "border-[#ce9898]/50"}`}
					id="base-apparel-email"
					name="email"
					type="email"
					placeholder="Email Address"
					autoComplete="email"
					required
					aria-invalid={hasError}
					aria-describedby={
						hasError
							? "base-apparel-email-error"
							: isSubmitted
								? "base-apparel-email-success"
								: undefined
					}
					onChange={() => {
						setHasError(false);
						setIsSubmitted(false);
					}}
				/>
				{hasError && (
					<img
						className="absolute top-1/2 right-20 size-6 -translate-y-1/2"
						src="/assets/base-apparel-coming-soon/icon-error.svg"
						alt=""
					/>
				)}
				<button
					className="absolute top-0 right-0 flex h-14 w-20 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,hsl(0,80%,86%),hsl(0,74%,74%))] shadow-[0_0.75rem_1.5rem_-0.5rem_hsl(0,74%,74%)] transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_1rem_1.75rem_-0.5rem_hsl(0,74%,74%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ce9898] lg:w-25"
					type="submit"
					aria-label="Submit email address"
				>
					<img src="/assets/base-apparel-coming-soon/icon-arrow.svg" alt="" />
				</button>
			</div>
			{hasError && (
				<p
					className="mt-2 pl-6 text-xs text-[#f96464] lg:pl-8"
					id="base-apparel-email-error"
					role="alert"
				>
					Please provide a valid email
				</p>
			)}
			{isSubmitted && (
				<p
					className="mt-2 pl-6 text-xs text-[#ce9898] lg:pl-8"
					id="base-apparel-email-success"
					role="status"
				>
					Thanks for your interest! We&apos;ll be in touch when we launch.
				</p>
			)}
		</form>
	);
};
