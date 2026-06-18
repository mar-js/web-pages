import type { JSX } from "react";
import {
	IMG_WORK_ARROW_FYLO_DARK_LANDING_PAGE,
	IMG_WORK_FYLO_DARK_LANDING_PAGE,
} from "../../../constants/data";
import { Image } from "./Image";

export const Work = (): JSX.Element => (
	<div className="flex flex-wrap justify-between items-center gap-15 text-white">
		<Image
			path={IMG_WORK_FYLO_DARK_LANDING_PAGE}
			alt="Stay productive"
			className="min-w-60"
		/>
		<div className="max-w-160 flex flex-col gap-5">
			<h4 className="text-2xl font-semibold md:text-4xl">
				Stay productive, wherever you are
			</h4>
			<p className="text-xl opacity-80">
				Never let location be an issue when accessing your files. Fylo has you
				covered for all of your file storage needs.
			</p>
			<p className="text-xl opacity-80">
				Securely share files and folders with friends, family and colleagues for
				live collaboration. No email attachments required.
			</p>
			<div className="max-w-44 border-b border-fylo-dark-teal-200 pb-1 hover:grayscale">
				<a
					href="./pages/fylo-dark-landing-page"
					className="flex gap-2 text-fylo-dark-teal-200"
				>
					See how Fylo works
					<Image
						path={IMG_WORK_ARROW_FYLO_DARK_LANDING_PAGE}
						alt="See how Fylo works"
						className="min-w-5"
					/>
				</a>
			</div>
		</div>
	</div>
);
