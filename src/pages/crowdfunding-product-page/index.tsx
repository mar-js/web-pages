import type { JSX } from "react";
import { Campaign } from "./components";
import { Header } from "./layouts";

export const CrowdfundingProductPage = (): JSX.Element => (
	<div className="min-h-screen overflow-hidden bg-[#fafafa] font-['Commissioner',sans-serif] text-base text-black">
		<Header />
		<Campaign />
	</div>
);
