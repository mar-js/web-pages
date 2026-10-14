import { Lead, NewsSidebar, TopStories } from "./components";
import { Header, Main } from "./layouts";

export const NewsHomepage = () => (
	<div className="news-page mx-auto min-h-screen max-w-[1110px] px-4 font-sans text-[#00001a] sm:px-6">
		<Header />
		<Main>
			<Lead />
			<NewsSidebar />
			<TopStories />
		</Main>
	</div>
);
