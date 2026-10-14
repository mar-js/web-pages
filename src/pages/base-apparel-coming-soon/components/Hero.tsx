import type { JSX } from "react";
import { Form } from "./Form";

export const Hero = (): JSX.Element => (
	<section className="w-full max-w-111.25">
		<h1 className="text-[2.5rem] leading-[1.05] font-semibold tracking-[0.28em] lg:text-[3.5rem] lg:leading-[1.1] xl:text-[4rem]">
			<span className="block font-light text-[#ce9898]">WE&apos;RE</span>
			<span className="block">
				COMING
				<br />
				SOON
			</span>
		</h1>
		<p className="mt-5 text-sm leading-6 text-[#ce9898] lg:mt-6 lg:text-base lg:leading-8">
			Hello fellow shoppers! We&apos;re currently building our new fashion
			store. Add your email below to stay up-to-date with announcements and our
			launch deals.
		</p>
		<Form />
	</section>
);
