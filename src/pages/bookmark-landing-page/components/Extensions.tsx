import type { JSX } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE, DATA_BOOKMARK_EXTENSIONS } from "../../../constants/data";

export const Extensions = (): JSX.Element => (
	<section className=" mx-auto w-[calc(100%_-_48px)] max-w-[1110px] py-20" id="extensions" aria-labelledby="bm-extensions-title">
		<div className=" mx-auto mb-12 max-w-[550px] text-center">
			<h2 id="bm-extensions-title" className="mb-4 text-2xl font-medium sm:text-[30px]">Download the extension</h2>
			<p className="leading-[1.65] text-[#9194a1]">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
		</div>
		<div className=" flex flex-col items-center justify-center gap-[30px] md:flex-row md:items-start">
			{DATA_BOOKMARK_EXTENSIONS.map((extension, index) => (
				<article className={` my-0 w-[280px] rounded-[10px] bg-white px-5 pb-6 pt-[42px] text-center shadow-[0_10px_18px_#4953a51a] ${index === 1 ? "md:mt-10" : index === 2 ? "md:mt-20" : ""}`} key={extension.name}>
					<img className="mb-[25px] h-[90px] w-auto" src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/${extension.image}`} alt="" />
					<h3 className="mb-2 text-xl font-medium">{extension.name}</h3>
					<p className="mb-[30px] text-sm text-[#9194a1]">{extension.version}</p>
					<div className="mb-5 h-1 bg-[url('/assets/bookmark-landing-page/bg-dots.svg')] bg-repeat-x" aria-hidden="true" />
					<a className="  block w-full rounded border-2 border-[#5267df] bg-[#5267df] px-2 py-3 text-[13px] font-medium text-white hover:bg-white hover:text-[#5267df]" href="#contact">Add &amp; Install Extension</a>
				</article>
			))}
		</div>
	</section>
);
