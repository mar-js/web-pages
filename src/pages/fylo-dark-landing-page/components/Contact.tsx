import type { JSX } from "react";
import { DATA_CONTACT_FYLO_DARK_LANDING_PAGE } from "../../../constants/data";
import { Image } from "./Image";

export const Contact = (): JSX.Element => (
	<ul className="max-w-80">
		{DATA_CONTACT_FYLO_DARK_LANDING_PAGE.map((contact) => (
			<li key={contact.icon} className="flex gap-5 my-5">
				<Image path={contact.icon} alt={contact.text} className="size-5" />
				<p className="text-md text-white opacity-80">{contact.text}</p>
			</li>
		))}
	</ul>
);
