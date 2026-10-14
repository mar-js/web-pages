import { DATA_RECIPE_INSTRUCTIONS } from "../../../constants/data";

export const Instructions = () => (
	<section className="border-b border-[#e4ded8] py-7" aria-labelledby="instructions-title">
		<h2 className="mb-5 text-[28px] font-normal text-[#854632]" id="instructions-title">Instructions</h2>
		<ol className="m-0 grid gap-3 pl-6 font-sans text-base leading-[1.5] marker:font-bold marker:text-[#854632]">
			{DATA_RECIPE_INSTRUCTIONS.map((instruction) => (
				<li className="pl-4" key={instruction.title}>
					<p className="m-0">
						<strong>{instruction.title}</strong> {instruction.text}
					</p>
				</li>
			))}
		</ol>
	</section>
);
