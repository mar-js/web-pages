import type { JSX } from "react";
import { Section } from "../layouts";

export const Boost = (): JSX.Element => (
	<Section className="bg-[url('/assets/url-shortening-api-master/bg-boost-desktop.svg')] bg-[#3b3054] bg-cover bg-center px-6 py-20 text-center text-white max-md:bg-[url('/assets/url-shortening-api-master/bg-boost-mobile.svg')]">
		<h2 className="text-[1.75rem] font-bold md:text-[2.5rem]">
			Boost your links today
		</h2>
		<a
			href="#shorten"
			className="mt-5 inline-flex rounded-full bg-[#2acfcf] px-9 py-3 font-bold transition-colors hover:bg-[#9be3e2]"
		>
			Get Started
		</a>
	</Section>
);
