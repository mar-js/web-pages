import type { JSX } from "react";
import { Link } from "wouter";

export const NotFoundPage = (): JSX.Element => (
  <article className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <h1 className="text-xl font-semibold text-indigo-600">WebPages</h1>
      </div>
    </header>
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold">Página no encontrada</h2>
        <p className="text-sm text-gray-600 mt-2">La página solicitada no existe.</p>
        <Link href="/" className="mt-4 inline-block text-indigo-600">← Volver al inicio</Link>
      </div>
    </section>
  </article>
)
