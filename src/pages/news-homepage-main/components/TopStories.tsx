import { ASSET_ROOT_NEWS, DATA_NEWS_TOP_STORIES } from "../../../constants/data";

export const TopStories = () => (
	<section className="col-span-full grid gap-8 pt-[38px] pb-8 sm:grid-cols-2 lg:grid-cols-3" id="top-stories" aria-label="Popular articles">
		{DATA_NEWS_TOP_STORIES.map((story) => (
			<article className="grid grid-cols-[100px_1fr] gap-5" key={story.number}>
				<img className="h-[127px] w-[100px] object-cover" src={`${ASSET_ROOT_NEWS}/${story.image}`} alt="" />
				<div>
					<span className="text-[32px] font-bold leading-none text-[#c5c6ce]">{story.number}</span>
					<h2 className="mb-2 mt-2 text-lg font-extrabold leading-[1.2]">
						<a className="text-[#00001a] no-underline hover:text-[#f15e50]" href="#top">{story.title}</a>
					</h2>
					<p className="m-0 text-sm leading-[1.6] text-[#5e607a]">{story.description}</p>
				</div>
			</article>
		))}
	</section>
);
