import { DATA_NEWS_NEW_STORIES } from "../../../constants/data";

export const NewsSidebar = () => (
	<aside className="bg-[#00001a] px-5 py-6 text-white md:px-6 md:py-7" aria-labelledby="news-sidebar-title">
		<h2 className="mb-7 mt-0 text-[32px] font-bold text-[#e9ab53]" id="news-sidebar-title">New</h2>
		{DATA_NEWS_NEW_STORIES.map((story) => (
			<article className="border-b border-[#5e607a] py-6 first:pt-0 last:border-0 last:pb-0" key={story.title}>
				<h3 className="mb-2 mt-0 text-xl font-bold leading-[1.2]">
					<a className="text-white no-underline hover:text-[#e9ab53]" href="#top-stories">{story.title}</a>
				</h3>
				<p className="m-0 text-[15px] leading-[1.65] text-[#c5c6ce]">{story.description}</p>
			</article>
		))}
	</aside>
);
