import {
	Ingredients,
	Nutrition,
	Preparation,
	RecipeIntro,
	Instructions,
} from "./components";
import { Header, Main, Section } from "./layouts";
import { ASSET_ROOT_RECIPE } from "../../constants/data";

export const RecipePage = () => (
	<Main>
		<Section>
			<img
				className="block aspect-[2.24] w-full object-cover sm:aspect-[2.19] sm:rounded-t-xl sm:p-10 sm:pb-0"
				src={`${ASSET_ROOT_RECIPE}/image-omelette.jpeg`}
				alt="A folded omelette served with greens and vegetables"
			/>
			<div className="px-8 pb-8 pt-9 sm:px-10 sm:pb-10 sm:pt-8">
				<Header><RecipeIntro /></Header>
				<Preparation />
				<Ingredients />
				<Instructions />
				<Nutrition />
			</div>
		</Section>
	</Main>
);
