import type { JSX } from "react";
import { ASSET_ROOT_DIGITALBANK_LANDING_PAGE, DATA_DIGITALBANK_ARTICLES } from "../../../constants/data";

export const Articles = (): JSX.Element => (
	<section className="bg-[#fafafa] px-0 py-20 md:py-[92px]" id="articles" aria-labelledby="db-articles-title">
		<div className="mx-auto w-[calc(100%_-_48px)] max-w-[1110px]">
			<h2 className="mb-10 text-center text-[32px] font-light tracking-[-1px] md:text-left md:text-[40px]" id="db-articles-title">Latest Articles</h2>
			<div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
				{DATA_DIGITALBANK_ARTICLES.map((article) => (
					<article className="overflow-hidden rounded-[5px] bg-white transition hover:-translate-y-1 hover:shadow-xl" key={article.title}>
						<img className="h-[160px] w-full object-cover md:h-[200px]" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/${article.image}`} alt="" />
						<div className="px-6 pb-6 pt-6 text-left">
							<p className="mb-3 text-[10px] text-[#9698a6]">By {article.author}</p>
							<h3 className="mb-2 text-[17px] leading-[1.35]"><a className="text-[#2d314d] no-underline hover:text-[#30c88f]" href="#articles">{article.title}</a></h3>
							<p className="text-xs leading-[1.55] text-[#9698a6]">{article.description}</p>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
);
