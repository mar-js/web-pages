import { useState, type FormEvent, type JSX } from "react";
import {
	DATA_MANAGE_TESTIMONIALS,
} from "../../constants/data";
import {
	Features,
	FooterContent,
	Hero,
	Simplify,
	Testimonials,
} from "./components";
import { Footer, Header, Main, Section } from "./layouts";

export const ManageLandingPage = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeTestimonial, setActiveTestimonial] = useState(1);
	const [email, setEmail] = useState("");
	const [formMessage, setFormMessage] = useState("");
	const [emailInvalid, setEmailInvalid] = useState(false);

	const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
		if (!validEmail) {
			setFormMessage(email.trim() ? "Please insert a valid email" : "Please insert your email");
			setEmailInvalid(true);
			return;
		}
		setFormMessage("Thanks for subscribing!");
		setEmailInvalid(false);
		setEmail("");
	};

	const showPrevious = () =>
		setActiveTestimonial((activeTestimonial + DATA_MANAGE_TESTIMONIALS.length - 1) % DATA_MANAGE_TESTIMONIALS.length);
	const showNext = () =>
		setActiveTestimonial((activeTestimonial + 1) % DATA_MANAGE_TESTIMONIALS.length);

	return (
		<div className="min-h-screen overflow-hidden bg-white bg-[url('/assets/manage-landing-page-master/bg-tablet-pattern.svg')] bg-[position:calc(100%+150px)_-150px] bg-[length:360px_auto] bg-no-repeat font-sans text-[#242d52] md:bg-[position:calc(100%+150px)_-150px] md:bg-[length:700px_auto]">
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Main>
				<Hero />
				<Section><Features /></Section>
				<Section>
					<Testimonials activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} showPrevious={showPrevious} showNext={showNext} />
				</Section>
				<Section><Simplify /></Section>
			</Main>
			<Footer>
				<FooterContent
					email={email}
					setEmail={setEmail}
					formMessage={formMessage}
					setFormMessage={setFormMessage}
					emailInvalid={emailInvalid}
					setEmailInvalid={setEmailInvalid}
					submitNewsletter={submitNewsletter}
				/>
			</Footer>
		</div>
	);
};
