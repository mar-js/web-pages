import type { FormEvent } from "react";
import {
	ASSET_ROOT_MANAGE,
	DATA_MANAGE_FOOTER_LINK_GROUPS,
	DATA_MANAGE_SOCIAL_NETWORKS,
} from "../../../constants/data";

const asset = (name: string) => `${ASSET_ROOT_MANAGE}/${name}`;

export const FooterContent = ({
	email,
	setEmail,
	formMessage,
	setFormMessage,
	emailInvalid,
	setEmailInvalid,
	submitNewsletter,
}: {
	email: string;
	setEmail: (value: string) => void;
	formMessage: string;
	setFormMessage: (value: string) => void;
	emailInvalid: boolean;
	setEmailInvalid: (value: boolean) => void;
	submitNewsletter: (event: FormEvent<HTMLFormElement>) => void;
}) => (
	<div className="mx-auto grid max-w-[1110px] gap-10 md:grid-cols-[1fr_1.3fr_1.3fr]">
		<div className="flex flex-col items-center justify-between gap-8 md:order-1 md:items-start">
			<a href="#home" aria-label="Manage home">
				<img className="brightness-0 invert" src={asset("logo.svg")} alt="manage" />
			</a>
			<nav className="flex gap-5" aria-label="Social media">
				{DATA_MANAGE_SOCIAL_NETWORKS.map((social) => (
					<a href="#signup" key={social} aria-label={social}>
						<img src={asset(`icon-${social}.svg`)} alt="" />
					</a>
				))}
			</nav>
		</div>
		<nav className="grid grid-cols-2 gap-x-8 gap-y-4 md:order-2 md:mx-auto md:grid-rows-4">
			{DATA_MANAGE_FOOTER_LINK_GROUPS[0].map((item) => (
				<a className="text-sm text-white no-underline hover:text-[#f3603c]" href="#home" key={item}>{item}</a>
			))}
			{DATA_MANAGE_FOOTER_LINK_GROUPS[1].map((item) => (
				<a className="text-sm text-white no-underline hover:text-[#f3603c]" href="#features" key={item}>{item}</a>
			))}
		</nav>
		<div className="md:order-3">
			<form className="flex gap-2" onSubmit={submitNewsletter} noValidate>
				<label className="sr-only" htmlFor="manage-email">Email address</label>
				<input
					id="manage-email"
					type="email"
					className={`h-10 min-w-0 flex-1 rounded-full border-2 px-5 text-sm text-[#242d52] outline-none placeholder:text-[#9095a7] focus-visible:border-[#f3603c] ${emailInvalid ? "border-red-500" : "border-transparent"}`}
					placeholder="Updates in your inbox..."
					value={email}
					aria-invalid={emailInvalid}
					aria-describedby="manage-form-message"
					onChange={(event) => {
						setEmail(event.target.value);
						setFormMessage("");
						setEmailInvalid(false);
					}}
				/>
				<button className="h-10 rounded-full bg-[#f3603c] px-6 text-sm font-bold text-white hover:bg-[#f98f75] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" type="submit">Go</button>
			</form>
			<p id="manage-form-message" className={`mt-2 min-h-4 text-xs italic ${emailInvalid ? "text-red-400" : "text-[#9095a7]"}`} role="status">
				{formMessage}
			</p>
		</div>
		<small className="text-center text-xs text-[#9095a7] md:col-span-3 md:text-right">Copyright 2020. All Rights Reserved</small>
	</div>
);
