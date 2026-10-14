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
	const [activeTestimonial, setActiveTestimonial] = useState(0);
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
		<div className="manage-page min-h-screen overflow-hidden bg-white font-sans text-[#242d52]">
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
