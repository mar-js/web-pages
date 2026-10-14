import { DATA_RECIPE_INGREDIENTS } from "../../../constants/data";

export const Ingredients = () => (
	<section className="border-b border-[#e4ded8] pb-7" aria-labelledby="ingredients-title">
		<h2 className="mb-5 text-[28px] font-normal text-[#854632]" id="ingredients-title">Ingredients</h2>
		<ul className="m-0 grid gap-3 pl-6 font-sans text-base marker:text-[#854632]">
			{DATA_RECIPE_INGREDIENTS.map((ingredient) => (
				<li className="pl-4" key={ingredient}>{ingredient}</li>
			))}
		</ul>
	</section>
);
