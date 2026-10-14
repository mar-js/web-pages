import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<div className="min-h-screen bg-white font-['League_Spartan',Arial,sans-serif] text-black">
		<main>{children}</main>
	</div>
);
