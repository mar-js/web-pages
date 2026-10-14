import { useState, type JSX } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE, DATA_BOOKMARK_QUESTIONS } from "../../../constants/data";

export const Faq = (): JSX.Element => {
	const [openQuestion, setOpenQuestion] = useState<number | null>(null);

	return (
		<section className="mx-auto w-[calc(100%_-_48px)] max-w-[1110px] pb-20" aria-labelledby="bm-faq-title">
			<div className=" mx-auto mb-12 max-w-[550px] text-center">
				<h2 id="bm-faq-title" className="mb-4 text-2xl font-medium sm:text-[30px]">Frequently Asked Questions</h2>
				<p className="leading-[1.65] text-[#9194a1]">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
			</div>
			<div className=" mx-auto max-w-[540px] border-t border-[#d9dbe2] text-left">
				{DATA_BOOKMARK_QUESTIONS.map(({ question, answer }, index) => (
					<div className=" border-b border-[#d9dbe2]" key={question}>
						<button
							type="button"
							aria-expanded={openQuestion === index}
							className="flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-1 py-[19px] text-left hover:text-[#fa5757] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5267df]"
							aria-controls={`bm-answer-${index}`}
							onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
						>
							{question}
							<img className={`transition-transform ${openQuestion === index ? "rotate-180" : ""}`} src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/icon-arrow.svg`} alt="" />
						</button>
						{openQuestion === index && <div className="px-1 pb-5 leading-[1.8] text-[#9194a1]" id={`bm-answer-${index}`}>{answer}</div>}
					</div>
				))}
			</div>
			<div className=" mt-12 text-center"><a className="  inline-flex rounded border-2 border-[#5267df] bg-[#5267df] px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-white hover:text-[#5267df]" href="#contact">More Info</a></div>
		</section>
	);
};
