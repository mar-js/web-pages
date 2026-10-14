import type { JSX } from "react";
import { Campaign } from "./components";
import { Header } from "./layouts";

export const CrowdfundingProductPage = (): JSX.Element => (
	<div className="crowdfund-page min-h-screen overflow-hidden bg-[#fafafa] font-sans text-black">
		<Header />
		<Campaign />
	</div>
);
