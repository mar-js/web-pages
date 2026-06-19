import type { JSX } from "react";

export const Form = (): JSX.Element => (
	<div className="remove-layout-container layout-container bg-linear-to-b from-fylo-dark-navy-900 from-50% to-fylo-dark-navy-950 to-50%">
		<div className="text-center flex flex-col gap-5 bg-fylo-dark-navy-850 p-6 shadow rounded-xl md:px-20 md:py-10">
			<h5 className="text-white md:text-4xl">Get early access today</h5>
			<p className="text-white opacity-80 text-lg">
				It only takes a minute to sign up and our free starter tier is extremely
				generous. If you have any questions, our support team would be happy to
				help you.
			</p>
			<form className="min-w-72 flex flex-wrap justify-center items-center gap-5">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email@example.com"
					className="text-fylo-dark-navy-950 placeholder:text-gray-300 w-80 md:min-w-135 bg-white text-md py-3 px-10 rounded-full"
				/>
				<button
					type="submit"
					className="text-white w-80 text-md py-3 bg-linear-to-r from-fylo-dark-teal-200 to-fylo-dark-cyan-500 rounded-full hover:brightness-110"
				>
					Get Started For Free
				</button>
			</form>
		</div>
	</div>
);
