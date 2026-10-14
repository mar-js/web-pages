import { DATA_NEWS_NAVIGATION } from "../../../constants/data";

interface NavigationProps {
	open: boolean;
	onNavigate: () => void;
}

export const Navigation = ({ open, onNavigate }: NavigationProps) => (
	<nav className={`${open ? "absolute right-0 top-0 flex h-screen w-[68%] flex-col gap-6 bg-[#fffdfa] px-6 pt-36 shadow-xl" : "hidden"} z-20 md:static md:flex md:h-auto md:w-auto md:flex-row md:items-center md:gap-10 md:bg-transparent md:p-0 md:shadow-none`} aria-label="Main">
		{DATA_NEWS_NAVIGATION.map((item) => (
			<button
				type="button"
				className="border-0 bg-transparent p-0 text-left text-lg text-[#00001a] hover:text-[#f15e50] md:text-[15px] md:text-[#5e607a]"
				key={item}
				onClick={() => {
					onNavigate();
					document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
				}}
			>
				{item}
			</button>
		))}
	</nav>
);
