import { type JSX, useState } from "react";
import type { ImageComponent } from "../interfaces";

export const Image = ({
	path,
	alt,
	className = "w-full h-auto",
}: ImageComponent): JSX.Element => {
	const [error, setError] = useState(false);
	const cleanPath = path.replace(/^\/?public\//, "");
	const imageSrc = `/assets/${cleanPath}`;

	if (error) {
		return (
			<div className="flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg border border-gray-300 p-4 min-h-37.5">
				<span className="text-sm font-medium">Imagen no encontrada</span>
			</div>
		);
	}

	return (
		<img
			src={imageSrc}
			alt={alt}
			onError={() => setError(true)}
			className={`object-cover transition-opacity duration-300 ease-in-out ${className}`}
			loading="lazy"
			decoding="async"
		/>
	);
};
