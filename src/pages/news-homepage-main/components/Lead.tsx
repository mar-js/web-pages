import { ASSET_ROOT_NEWS } from "../../../constants/data";

export const Lead = () => (
	<section>
		<picture>
			<source media="(max-width: 700px)" srcSet={`${ASSET_ROOT_NEWS}/image-web-3-mobile.jpg`} />
			<img
				className="block aspect-[1.14] w-full object-cover md:aspect-[1.91]"
				src={`${ASSET_ROOT_NEWS}/image-web-3-desktop.jpg`}
				alt="Brightly colored geometric shapes"
			/>
		</picture>
		<div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-8">
			<h1 className="m-0 text-[40px] font-extrabold leading-[1] tracking-[-1px] sm:text-[56px]">The Bright Future of Web 3.0?</h1>
			<div className="flex flex-col items-start">
				<p className="m-0 text-[15px] leading-[1.7] text-[#5e607a]">
					We dive into the next evolution of the web that claims to put the power
					of the platforms back into the hands of the people. But is it really
					fulfilling its promise?
				</p>
				<a className="mt-6 inline-block bg-[#f15e50] px-8 py-4 text-xs font-bold uppercase tracking-[4px] text-white no-underline hover:bg-[#00001a]" href="#top-stories">
					Read more
				</a>
			</div>
		</div>
	</section>
);
