import type { JSX } from "react";
import { useState } from "react";
import { Crew, Destination, Home, Technology } from "./components";
import { Header, Main } from "./layouts";
import type { SpaceTourismPage } from "../../global/interfaces";
import { DATA_SPACE_BACKGROUND_CLASSES } from "../../constants/data";

export const SpaceTourismWebsite = (): JSX.Element => {
	const [page, setPage] = useState<SpaceTourismPage>("home");
	const [destinationIndex, setDestinationIndex] = useState(0);
	const [crewIndex, setCrewIndex] = useState(0);
	const [technologyIndex, setTechnologyIndex] = useState(0);

	return (
		<div
			className={`${DATA_SPACE_BACKGROUND_CLASSES[page]} min-h-screen overflow-hidden bg-[#0b0d17] bg-cover bg-center text-white`}
		>
			<Header page={page} onPageChange={setPage} />
			<Main>
				{page === "home" && <Home onExplore={() => setPage("destination")} />}
				{page === "destination" && (
					<Destination
						destinationIndex={destinationIndex}
						onDestinationChange={setDestinationIndex}
					/>
				)}
				{page === "crew" && (
					<Crew crewIndex={crewIndex} onCrewChange={setCrewIndex} />
				)}
				{page === "technology" && (
					<Technology
						technologyIndex={technologyIndex}
						onTechnologyChange={setTechnologyIndex}
					/>
				)}
			</Main>
		</div>
	);
};
