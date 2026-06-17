import { type JSX, useEffect, useState } from "react";
import type { ImageComponent } from "../../../global/interfaces";

export const Image = ({
	path,
	alt,
	className = "w-full h-auto",
}: ImageComponent): JSX.Element => {
	const [imageSrc, setImageSrc] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		// Importación dinámica desde src/public/assets/
		import(`/public/assets/${path}`)
			.then((image) => {
				setImageSrc(image.default);
			})
			.catch((err) => {
				console.error("Error cargando la imagen:", err);
				setError(true);
			});
	}, [path]);

	// Estado de error: cuadro gris con texto de aviso
	if (error) {
		return (
			<div className="flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg border border-gray-300 p-4 min-h-37.5">
				<span className="text-sm font-medium">Imagen no encontrada</span>
			</div>
		);
	}

	// Estado de carga: Esqueleto animado con Tailwind
	if (!imageSrc) {
		return (
			<div
				className={`animate-pulse bg-gray-300 rounded-lg min-h-50 ${className}`}
			/>
		);
	}

	// Renderizado final de la imagen optimizada
	return (
		<img
			src={imageSrc}
			alt={alt}
			className={`object-cover transition-opacity duration-300 ease-in-out ${className}`}
			loading="lazy"
			decoding="async"
		/>
	);
};
