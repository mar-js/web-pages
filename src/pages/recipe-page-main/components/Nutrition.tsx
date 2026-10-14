import { DATA_RECIPE_NUTRITION } from "../../../constants/data";

export const Nutrition = () => (
	<section className="recipe-section recipe-nutrition pt-7 font-sans" aria-labelledby="nutrition-title">
		<h2 className="mb-4 font-['Young_Serif',Georgia,serif] text-[28px] font-normal text-[#854632]" id="nutrition-title">Nutrition</h2>
		<p className="mb-4 text-base leading-[1.5]">
			The table below shows nutritional values per serving without the additional
			fillings.
		</p>
		<table className="w-full border-collapse text-left">
			<tbody>
				{DATA_RECIPE_NUTRITION.map(({ label, value }) => (
					<tr className="border-b border-[#e4ded8] last:border-0" key={label}>
						<th className="w-1/2 py-3 pl-8 font-normal" scope="row">{label}</th>
						<td className="py-3 font-bold text-[#854632]">{value}</td>
					</tr>
				))}
			</tbody>
		</table>
	</section>
);
