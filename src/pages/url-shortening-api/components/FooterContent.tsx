import type { JSX } from "react";
import {
	ASSET_ROOT_URL_SHORTENING_API,
	DATA_URL_SHORTENING_FOOTER_GROUPS,
	DATA_URL_SHORTENING_SOCIAL_NETWORKS,
} from "../../../constants/data";

export const FooterContent = (): JSX.Element => (
	<>
		<a href="#top" aria-label="Shortly home" className="mx-auto md:mx-0">
			<img
				src={`${ASSET_ROOT_URL_SHORTENING_API}/logo.svg`}
				alt="Shortly"
				className="w-[120px] brightness-0 invert"
			/>
		</a>
		{DATA_URL_SHORTENING_FOOTER_GROUPS.map((group) => (
			<div key={group.heading}>
				<h3 className="mb-5 font-bold">{group.heading}</h3>
				<ul className="grid gap-3 text-sm text-[#bfbfbf]">
					{group.links.map((item) => (
						<li key={item}>
							<a
								href="#resources"
								className="transition-colors hover:text-[#2acfcf]"
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>
		))}
		<div className="flex items-start justify-center gap-6 md:justify-end">
			{DATA_URL_SHORTENING_SOCIAL_NETWORKS.map((social) => (
				<a
					key={social}
					href="#resources"
					aria-label={social}
					className="transition-opacity hover:opacity-60"
				>
					<img
						src={`${ASSET_ROOT_URL_SHORTENING_API}/icon-${social}.svg`}
						alt=""
						className="h-6 w-6"
					/>
				</a>
			))}
		</div>
	</>
);
