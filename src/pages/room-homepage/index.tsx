import { About, Hero } from "./components";
import { Main, Section } from "./layouts";

export const RoomHomepage = () => (
	<Main>
		<Hero />
		<Section id="about" className="grid md:min-h-[266px] md:grid-cols-[29.17%_41.66%_29.17%]">
			<About />
		</Section>
	</Main>
);
