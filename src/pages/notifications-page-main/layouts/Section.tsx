import type { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => (
	<section className="mx-auto w-full max-w-[730px] rounded-none bg-white px-0 py-6 sm:rounded-2xl sm:px-[30px] sm:pb-5 sm:pt-[34px] sm:shadow-[0_14px_40px_rgb(10_30_70_/_3%)]" aria-labelledby="notifications-title">
		{children}
	</section>
);
