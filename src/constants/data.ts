import type {
	BookmarkExtension,
	BookmarkFeature,
	BookmarkQuestion,
	CrowdfundingReward,
	DataCeoFyloDarkLandingPage,
	DataContactFyloDarkLandingPage,
	DataServiceFyloDarkLandingPage,
	DataSnippetClipboardLandingPage,
	DataToolClipboardLandingPage,
	DigitalBankArticle,
	DigitalBankBenefit,
	GridImpactStat,
	InsureBenefit,
	InsureFooterGroup,
	LoopCreation,
	ManageFeature,
	ManageTestimonial,
	NewsStory,
	NewsTopStory,
	NotificationItem,
	RecipeInstruction,
	RecipeNutrition,
	RoomSlide,
	SpaceCrewMember,
	SpaceDestination,
	SpaceNavigationItem,
	SpaceTechnology,
	SpaceTourismPage,
	UrlShorteningFeature,
	UrlShorteningFooterGroup,
} from "../global/interfaces";

export const IMG_HERO_PING_COMING_SOON_LANDING_PAGE: string =
	"ping-coming-soon-landing-page/illustration-dashboard.png";

export const IMG_LOGO_HUDDLE_LANDING_PAGE: string =
	"huddle-landing-page/logo.svg";

export const IMG_HERO_HUDDLE_LANDING_PAGE: string =
	"huddle-landing-page/illustration-mockups.svg";

export const SOCIAL_MEDIA_ICONS: string[] = [
	"facebook.svg",
	"x.svg",
	"instagram.svg",
];

export const IMG_HERO_FYLO_DARK_LANDING_PAGE: string =
	"fylo-dark-landing-page/illustration-intro.png";

export const IMG_LOGO_FYLO_DARK_LANDING_PAGE: string =
	"fylo-dark-landing-page/logo.svg";

export const IMG_WORK_FYLO_DARK_LANDING_PAGE: string =
	"fylo-dark-landing-page/illustration-stay-productive.png";

export const IMG_WORK_ARROW_FYLO_DARK_LANDING_PAGE: string =
	"fylo-dark-landing-page/icon-arrow.svg";

export const IMG_WORK_QUOTE_FYLO_DARK_LANDING_PAGE: string =
	"fylo-dark-landing-page/bg-quotes.png";

export const DATA_LINKS_FYLO_DARK_LANDING_PAGE: string[] = [
	"Features",
	"Team",
	"Sign In",
];

export const DATA_SERVICES_FYLO_DARK_LANDING_PAGE: DataServiceFyloDarkLandingPage[] =
	[
		{
			img: "fylo-dark-landing-page/icon-access-anywhere.svg",
			title: "Access your files, anywhere",
			description:
				"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
		},
		{
			img: "fylo-dark-landing-page/icon-security.svg",
			title: "Security you can trust",
			description:
				"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
		},
		{
			img: "fylo-dark-landing-page/icon-collaboration.svg",
			title: "Real-time collaboration",
			description:
				"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
		},
		{
			img: "fylo-dark-landing-page/icon-any-file.svg",
			title: "Store any type of file",
			description:
				"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
		},
	];

export const DATA_CEO_FYLO_DARK_LANDING_PAGE: DataCeoFyloDarkLandingPage[] = [
	{
		img: "fylo-dark-landing-page/profile-1.jpg",
		title: "Satish Patel",
		subtitle: "Founder & CEO, Huddle",
		description:
			"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
	},
	{
		img: "fylo-dark-landing-page/profile-2.jpg",
		title: "Bruce McKenzie",
		subtitle: "Founder & CEO, Huddle",
		description:
			"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
	},
	{
		img: "fylo-dark-landing-page/profile-3.jpg",
		title: "Iva Boyd",
		subtitle: "Founder & CEO, Huddle",
		description:
			"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine",
	},
];

export const DATA_LINKS_PAGES_FYLO_DARK_LANDING_PAGE: Array<string[]> = [
	["About Us", "Jobs", "Press", "Blog"],
	["Contact Us", "Terms", "Privacy"],
];

export const DATA_CONTACT_FYLO_DARK_LANDING_PAGE: DataContactFyloDarkLandingPage[] =
	[
		{
			icon: "location.svg",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elitm sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		},
		{
			icon: "phone.svg",
			text: "+1-543-123-4567",
		},
		{
			icon: "email.svg",
			text: "example@fylo.com",
		},
	];

export const IMG_LOGO_CLIPBOARD_LANDING_PAGE: string =
	"clipboard-landing-page/logo.svg";

export const IMG_COMPUTER_CLIPBOARD_LANDING_PAGE: string =
	"clipboard-landing-page/image-computer.png";

export const IMG_DEVICES_CLIPBOARD_LANDING_PAGE: string =
	"clipboard-landing-page/image-devices.png";

export const DATA_SNIPPETS_CLIPBOARD_LANDING_PAGE: DataSnippetClipboardLandingPage[] =
	[
		{
			title: "Quick Search",
			description:
				"Easily search your snippets by content, category, web address, application, and more.",
		},
		{
			title: "iCloud Sync",
			description:
				"Instantly saves and syncs snippets across all your devices.",
		},
		{
			title: "Complete History",
			description:
				"Retrieve any snippets from the first moment you started using the app.",
		},
	];

export const DATA_TOOLS_CLIPBOARD_LANDING_PAGE: DataToolClipboardLandingPage[] =
	[
		{
			img: "clipboard-landing-page/icon-blacklist.svg",
			title: "Create blacklists",
			description:
				"Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
		},
		{
			img: "clipboard-landing-page/icon-text.svg",
			title: "Plain text snippets",
			description:
				"Remove unwanted formatting from copied text for a consistent look.",
		},
		{
			img: "clipboard-landing-page/icon-preview.svg",
			title: "Sneak preview",
			description:
				"Quick preview of all snippets on your Clipboard for easy access.",
		},
	];

export const DATA_COMPANIES_CLIPBOARD_LANDING_PAGE: string[] = [
	"clipboard-landing-page/logo-google.png",
	"clipboard-landing-page/logo-ibm.png",
	"clipboard-landing-page/logo-microsoft.png",
	"clipboard-landing-page/logo-hp.png",
	"clipboard-landing-page/logo-vector-graphics.png",
];

export const DATA_LINKS_PAGES_CLIPBOARD_LANDING_PAGE: Array<string[]> = [
	["FAQs", "Contact Us"],
	["Privacy Policy", "Press Kit"],
	["Install Guide"],
];

export const DATA_SOCIAL_CLIPBOARD_LANDING_PAGE: string[] = [
	"clipboard-landing-page/icon-facebook.svg",
	"clipboard-landing-page/icon-twitter.svg",
	"clipboard-landing-page/icon-instagram.svg",
];

export const IMG_LOGO_BASE_APPAREL_COMING_SOON: string =
	"base-apparel-coming-soon/logo.svg";

export const IMG_HERO_BASE_APPAREL_COMING_SOON_MOBILE: string =
	"base-apparel-coming-soon/hero-mobile.jpg";

export const IMG_HERO_BASE_APPAREL_COMING_SOON_DESKTOP: string =
	"base-apparel-coming-soon/hero-desktop.jpg";

export const ASSET_ROOT_BOOKMARK_LANDING_PAGE = "/assets/bookmark-landing-page";
export const DATA_BOOKMARK_FEATURES: BookmarkFeature[] = [
	{
		tab: "Simple Bookmarking",
		title: "Bookmark in one click",
		description:
			"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
		image: "illustration-features-tab-1.svg",
	},
	{
		tab: "Speedy Searching",
		title: "Intelligent search",
		description:
			"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
		image: "illustration-features-tab-2.svg",
	},
	{
		tab: "Easy Sharing",
		title: "Share your bookmarks",
		description:
			"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
		image: "illustration-features-tab-3.svg",
	},
];
export const DATA_BOOKMARK_QUESTIONS: BookmarkQuestion[] = [
	{
		question: "What is Bookmark?",
		answer:
			"Bookmark is a free productivity tool that helps you organize and access your favourite websites from any device.",
	},
	{
		question: "How can I request a new browser?",
		answer:
			"Please get in touch using the contact link below and let us know which browser you would like us to support.",
	},
	{
		question: "Is there a mobile app?",
		answer:
			"Yes. Bookmark is designed to work beautifully in your mobile browser, so your saved sites are always close at hand.",
	},
	{
		question: "What about other Chromium browsers?",
		answer:
			"Bookmark works with modern Chromium-based browsers. Choose the extension that best fits your setup.",
	},
];
export const DATA_BOOKMARK_EXTENSIONS: BookmarkExtension[] = [
	{
		image: "logo-chrome.svg",
		name: "Add to Chrome",
		version: "Minimum version 62",
	},
	{
		image: "logo-firefox.svg",
		name: "Add to Firefox",
		version: "Minimum version 55",
	},
	{
		image: "logo-opera.svg",
		name: "Add to Opera",
		version: "Minimum version 46",
	},
];

export const ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE =
	"/assets/crowdfunding-product-page";
export const DATA_CROWDFUNDING_REWARDS: CrowdfundingReward[] = [
	{
		id: "bamboo",
		title: "Bamboo Stand",
		minimum: 25,
		description:
			"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
		remaining: 101,
	},
	{
		id: "black",
		title: "Black Edition Stand",
		minimum: 75,
		description:
			"You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		remaining: 64,
	},
	{
		id: "mahogany",
		title: "Mahogany Special Edition",
		minimum: 200,
		description:
			"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
		remaining: 0,
	},
];

export const ASSET_ROOT_DIGITALBANK_LANDING_PAGE =
	"/assets/digitalbank-landing-page";
export const DATA_DIGITALBANK_BENEFITS: DigitalBankBenefit[] = [
	{
		image: "icon-online.svg",
		title: "Online Banking",
		description:
			"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
	},
	{
		image: "icon-budgeting.svg",
		title: "Simple Budgeting",
		description:
			"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
	},
	{
		image: "icon-onboarding.svg",
		title: "Fast Onboarding",
		description:
			"We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
	},
	{
		image: "icon-api.svg",
		title: "Open API",
		description:
			"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
	},
];
export const DATA_DIGITALBANK_ARTICLES: DigitalBankArticle[] = [
	{
		image: "image-currency.jpg",
		author: "Claire Robinson",
		title: "Receive money in any currency with no fees",
		description:
			"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
	},
	{
		image: "image-restaurant.jpg",
		author: "Wilson Hutton",
		title: "Treat yourself without worrying about money",
		description:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
	},
	{
		image: "image-plane.jpg",
		author: "Wilson Hutton",
		title: "Take your Digitalbank card wherever you go",
		description:
			"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even …",
	},
	{
		image: "image-confetti.jpg",
		author: "Claire Robinson",
		title: "Our invite-only Beta accounts are now live!",
		description:
			"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through …",
	},
];
export const DATA_DIGITALBANK_NAVIGATION: [string, string][] = [
	["Home", "#home"],
	["About", "#about"],
	["Contact", "#footer"],
	["Blog", "#articles"],
	["Careers", "#footer"],
];
export const DATA_DIGITALBANK_SOCIAL_NETWORKS = [
	"facebook",
	"youtube",
	"twitter",
	"pinterest",
	"instagram",
];

export const ASSET_ROOT_GRID_LANDING_PAGE = "/assets/grid-landing-page-main";
export const DATA_GRID_IMPACT_STATS: GridImpactStat[] = [
	{
		value: "2.4M",
		icon: "icon-sparkle.svg",
		label: "Students reached",
		description: "Across 31 countries since 2011.",
	},
	{
		value: "1,284",
		icon: "icon-plus.svg",
		label: "Schools partnered",
		description: "In 14 countries, from Kenya to Guatemala.",
	},
	{
		value: "38K",
		icon: "icon-arrow-right.svg",
		label: "Teachers trained",
		description: "Equipped with modern tools and methodology.",
	},
	{
		value: "3.1×",
		icon: "icon-trending-up.svg",
		label: "Graduation lift",
		description: "Partner schools outperform national averages 3x.",
	},
];
export const DATA_GRID_NAVIGATION: [string, string][] = [
	["About", "#about"],
	["Our impact", "#impact"],
	["Partners", "#partners"],
	["Contact", "#contact"],
];

export const ASSET_ROOT_HOTEL_BOOKING =
	"/assets/hotel-booking-confirmation-page-main";
export const DATA_HOTEL_NAVIGATION: [string, string, string][] = [
	["Your stay", "stay", "icon-bed.svg"],
	["The house", "arrival", "icon-house.svg"],
	["Around town", "town", "icon-pin.svg"],
	["Breakfast", "breakfast", "icon-breakfast-outline.svg"],
	["Messages", "messages", "icon-mail.svg"],
];

export const ASSET_ROOT_INSURE_LANDING_PAGE =
	"/assets/insure-landing-page-master";
export const DATA_INSURE_NAVIGATION: [string, string][] = [
	["How we work", "#how-we-work"],
	["Blog", "#blog"],
	["Account", "#account"],
];
export const DATA_INSURE_BENEFITS: InsureBenefit[] = [
	{
		icon: "icon-snappy-process.svg",
		title: "Snappy Process",
		copy: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
	},
	{
		icon: "icon-affordable-prices.svg",
		title: "Affordable Prices",
		copy: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
	},
	{
		icon: "icon-people-first.svg",
		title: "People First",
		copy: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
	},
];
export const DATA_INSURE_FOOTER_GROUPS: InsureFooterGroup[] = [
	{
		title: "Our company",
		links: ["How we work", "Why Insure?", "View plans", "Reviews"],
	},
	{
		title: "Help me",
		links: ["FAQ", "Terms of use", "Privacy policy", "Cookies"],
	},
	{ title: "Contact", links: ["Sales", "Support", "Live chat"] },
	{ title: "Others", links: ["Careers", "Press", "Licenses"] },
];
export const DATA_INSURE_SOCIAL_NETWORKS = [
	"facebook",
	"twitter",
	"pinterest",
	"instagram",
];

export const ASSET_ROOT_LOOPSTUDIOS = "/assets/loopstudios-landing-page-main";
export const DATA_LOOPSTUDIOS_LINKS = [
	"About",
	"Careers",
	"Events",
	"Products",
	"Support",
];
export const DATA_LOOPSTUDIOS_CREATIONS: LoopCreation[] = [
	{ slug: "deep-earth", title: "Deep earth" },
	{ slug: "night-arcade", title: "Night arcade" },
	{ slug: "soccer-team-vr", title: "Soccer team VR" },
	{ slug: "grid", title: "The grid" },
	{ slug: "from-above", title: "From up above VR" },
	{ slug: "pocket-borealis", title: "Pocket borealis" },
	{ slug: "curiosity", title: "The curiosity" },
	{ slug: "fisheye", title: "Make it fisheye" },
];
export const DATA_LOOPSTUDIOS_SOCIAL_NETWORKS = [
	"facebook",
	"twitter",
	"pinterest",
	"instagram",
];

export const ASSET_ROOT_MANAGE = "/assets/manage-landing-page-master";
export const DATA_MANAGE_TESTIMONIALS: ManageTestimonial[] = [
	{
		name: "Anisha Li",
		image: "avatar-anisha.png",
		quote:
			"“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
	},
	{
		name: "Ali Bravo",
		image: "avatar-ali.png",
		quote:
			"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
	},
	{
		name: "Richard Watts",
		image: "avatar-richard.png",
		quote:
			"“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
	},
	{
		name: "Shanai Gough",
		image: "avatar-shanai.png",
		quote:
			"“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
	},
];
export const DATA_MANAGE_FEATURES: ManageFeature[] = [
	{
		title: "Track company-wide progress",
		description:
			"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",
	},
	{
		title: "Advanced built-in reports",
		description:
			"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
	},
	{
		title: "Everything you need in one place",
		description:
			"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
	},
];
export const DATA_MANAGE_NAVIGATION = [
	"Pricing",
	"Product",
	"About Us",
	"Careers",
	"Community",
];
export const DATA_MANAGE_TESTIMONIAL_OFFSETS = [0, 1, 2];
export const DATA_MANAGE_SOCIAL_NETWORKS = [
	"facebook",
	"youtube",
	"twitter",
	"pinterest",
	"instagram",
];
export const DATA_MANAGE_FOOTER_LINK_GROUPS = [
	["Home", "Pricing", "Products", "About Us"],
	["Careers", "Community", "Privacy Policy"],
];

export const ASSET_ROOT_NEWS = "/assets/news-homepage-main";
export const DATA_NEWS_NAVIGATION = [
	"Home",
	"New",
	"Popular",
	"Trending",
	"Categories",
];
export const DATA_NEWS_NEW_STORIES: NewsStory[] = [
	{
		title: "Hydrogen VS Electric Cars",
		description: "Will hydrogen-fueled cars ever catch up to EVs?",
	},
	{
		title: "The Downsides of AI Artistry",
		description:
			"What are the possible adverse effects of on-demand AI image generation?",
	},
	{
		title: "Is VC Funding Drying Up?",
		description:
			"Private funding by VC firms is down 50% YOY. We take a look at what that means.",
	},
];
export const DATA_NEWS_TOP_STORIES: NewsTopStory[] = [
	{
		number: "01",
		title: "Reviving Retro PCs",
		description: "What happens when old PCs are given modern upgrades?",
		image: "image-retro-pcs.jpg",
	},
	{
		number: "02",
		title: "Top 10 Laptops of 2022",
		description: "Our best picks for various needs and budgets.",
		image: "image-top-laptops.jpg",
	},
	{
		number: "03",
		title: "The Growth of Gaming",
		description: "How the pandemic has sparked fresh opportunities.",
		image: "image-gaming-growth.jpg",
	},
];

export const ASSET_ROOT_NOTIFICATIONS = "/assets/notifications-page-main";
export const DATA_INITIAL_NOTIFICATIONS: NotificationItem[] = [
	{
		id: 1,
		name: "Mark Webber",
		avatar: "avatar-mark-webber.webp",
		time: "1m ago",
		action: "reacted to your recent post",
		target: "My first tournament today!",
		unread: true,
	},
	{
		id: 2,
		name: "Angela Gray",
		avatar: "avatar-angela-gray.webp",
		time: "5m ago",
		action: "followed you",
		unread: true,
	},
	{
		id: 3,
		name: "Jacob Thompson",
		avatar: "avatar-jacob-thompson.webp",
		time: "1 day ago",
		action: "has joined your group",
		target: "Chess Club",
		unread: true,
	},
	{
		id: 4,
		name: "Rizky Hasanuddin",
		avatar: "avatar-rizky-hasanuddin.webp",
		time: "5 days ago",
		action: "sent you a private message",
		message:
			"Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
	},
	{
		id: 5,
		name: "Kimberly Smith",
		avatar: "avatar-kimberly-smith.webp",
		time: "1 week ago",
		action: "commented on your picture",
		picture: "image-chess.webp",
	},
	{
		id: 6,
		name: "Nathan Peterson",
		avatar: "avatar-nathan-peterson.webp",
		time: "2 weeks ago",
		action: "reacted to your recent post",
		target: "5 end-game strategies to increase your win rate",
	},
	{
		id: 7,
		name: "Anna Kim",
		avatar: "avatar-anna-kim.webp",
		time: "2 weeks ago",
		action: "left the group",
		target: "Chess Club",
	},
];

export const ASSET_ROOT_RECIPE = "/assets/recipe-page-main";
export const DATA_RECIPE_INGREDIENTS = [
	"2-3 large eggs",
	"Salt, to taste",
	"Pepper, to taste",
	"1 tablespoon of butter or oil",
	"Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];
export const DATA_RECIPE_INSTRUCTIONS: RecipeInstruction[] = [
	{
		title: "Beat the eggs:",
		text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
	},
	{
		title: "Heat the pan:",
		text: "Place a non-stick frying pan over medium heat and add butter or oil.",
	},
	{
		title: "Cook the omelette:",
		text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
	},
	{
		title: "Add fillings (optional):",
		text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
	},
	{
		title: "Fold and serve:",
		text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
	},
	{
		title: "Enjoy:",
		text: "Serve hot, with additional salt and pepper if needed.",
	},
];
export const DATA_RECIPE_NUTRITION: RecipeNutrition[] = [
	{ label: "Calories", value: "277kcal" },
	{ label: "Carbs", value: "0g" },
	{ label: "Protein", value: "20g" },
	{ label: "Fat", value: "22g" },
];

export const ASSET_ROOT_ROOM_HOMEPAGE = "/assets/room-homepage-master";
export const DATA_ROOM_SLIDES: RoomSlide[] = [
	{
		image: "desktop-image-hero-1.jpg",
		mobileImage: "mobile-image-hero-1.jpg",
		title: "Discover innovative ways to decorate",
		description:
			"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
	},
	{
		image: "desktop-image-hero-2.jpg",
		mobileImage: "mobile-image-hero-2.jpg",
		title: "We are available all across the globe",
		description:
			"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
	},
	{
		image: "desktop-image-hero-3.jpg",
		mobileImage: "mobile-image-hero-3.jpg",
		title: "Manufactured with the best materials",
		description:
			"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
	},
];
export const DATA_ROOM_NAVIGATION = ["home", "shop", "about", "contact"];

export const ASSET_ROOT_SPACE_TOURISM = "/assets/space-tourism-website-main";
export const DATA_SPACE_DESTINATIONS: SpaceDestination[] = [
	{
		name: "Moon",
		image: "image-moon.webp",
		description:
			"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
		distance: "384,400 km",
		travel: "3 days",
	},
	{
		name: "Mars",
		image: "image-mars.webp",
		description:
			"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
		distance: "225 mil. km",
		travel: "9 months",
	},
	{
		name: "Europa",
		image: "image-europa.webp",
		description:
			"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
		distance: "628 mil. km",
		travel: "3 years",
	},
	{
		name: "Titan",
		image: "image-titan.webp",
		description:
			"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
		distance: "1.6 bil. km",
		travel: "7 years",
	},
];
export const DATA_SPACE_CREW: SpaceCrewMember[] = [
	{
		name: "Douglas Hurley",
		role: "Commander",
		image: "image-douglas-hurley.webp",
		bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
	},
	{
		name: "Mark Shuttleworth",
		role: "Mission Specialist",
		image: "image-mark-shuttleworth.webp",
		bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
	},
	{
		name: "Victor Glover",
		role: "Pilot",
		image: "image-victor-glover.webp",
		bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
	},
	{
		name: "Anousheh Ansari",
		role: "Flight Engineer",
		image: "image-anousheh-ansari.webp",
		bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
	},
];
export const DATA_SPACE_TECHNOLOGY: SpaceTechnology[] = [
	{
		name: "Launch vehicle",
		image: "image-launch-vehicle",
		description:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
	},
	{
		name: "Spaceport",
		image: "image-spaceport",
		description:
			"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
	},
	{
		name: "Space capsule",
		image: "image-space-capsule",
		description:
			"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
	},
];
export const DATA_SPACE_NAVIGATION: SpaceNavigationItem[] = [
	{ id: "home", label: "Home" },
	{ id: "destination", label: "Destination" },
	{ id: "crew", label: "Crew" },
	{ id: "technology", label: "Technology" },
];
export const DATA_SPACE_BACKGROUND_CLASSES: Record<SpaceTourismPage, string> = {
	home: "bg-[url('/assets/space-tourism-website-main/home/background-home-desktop.jpg')] [@media(max-width:767px)]:bg-[url('/assets/space-tourism-website-main/home/background-home-mobile.jpg')] [@media(min-width:768px)_and_(max-width:1199px)]:bg-[url('/assets/space-tourism-website-main/home/background-home-tablet.jpg')]",
	destination:
		"bg-[url('/assets/space-tourism-website-main/destination/background-destination-desktop.jpg')] [@media(max-width:767px)]:bg-[url('/assets/space-tourism-website-main/destination/background-destination-mobile.jpg')] [@media(min-width:768px)_and_(max-width:1199px)]:bg-[url('/assets/space-tourism-website-main/destination/background-destination-tablet.jpg')]",
	crew: "bg-[url('/assets/space-tourism-website-main/crew/background-crew-desktop.jpg')] [@media(max-width:767px)]:bg-[url('/assets/space-tourism-website-main/crew/background-crew-mobile.jpg')] [@media(min-width:768px)_and_(max-width:1199px)]:bg-[url('/assets/space-tourism-website-main/crew/background-crew-tablet.jpg')]",
	technology:
		"bg-[url('/assets/space-tourism-website-main/technology/background-technology-desktop.jpg')] [@media(max-width:767px)]:bg-[url('/assets/space-tourism-website-main/technology/background-technology-mobile.jpg')] [@media(min-width:768px)_and_(max-width:1199px)]:bg-[url('/assets/space-tourism-website-main/technology/background-technology-tablet.jpg')]",
};

export const ASSET_ROOT_URL_SHORTENING_API =
	"/assets/url-shortening-api-master";
export const DATA_URL_SHORTENING_FEATURES: UrlShorteningFeature[] = [
	{
		image: "icon-brand-recognition.svg",
		title: "Brand Recognition",
		description:
			"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
	},
	{
		image: "icon-detailed-records.svg",
		title: "Detailed Records",
		description:
			"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
	},
	{
		image: "icon-fully-customizable.svg",
		title: "Fully Customizable",
		description:
			"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
	},
];
export const DATA_URL_SHORTENING_SOCIAL_NETWORKS = [
	"facebook",
	"twitter",
	"pinterest",
	"instagram",
];
export const DATA_URL_SHORTENING_FOOTER_GROUPS: UrlShorteningFooterGroup[] = [
	{
		heading: "Features",
		links: ["Link Shortening", "Branded Links", "Analytics"],
	},
	{ heading: "Resources", links: ["Blog", "Developers", "Support"] },
	{
		heading: "Company",
		links: ["About", "Our Team", "Careers", "Contact"],
	},
];
