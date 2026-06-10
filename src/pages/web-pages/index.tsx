import type { JSX } from "react";
import { Link } from "wouter";
import { routes } from "../../routes";

export const WebPages = (): JSX.Element => (
  <>
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-indigo-600">WebPages</Link>
      </nav>
    </header>
    <main className="max-w-4xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Páginas</h2>
        <p className="text-sm text-gray-600 mb-6">Haz click en una página para ver sus proyectos freelance.</p>
        <ul className="grid gap-4">
          {routes
            .filter(r => r.path !== "*" && r.path !== "/")
            .map(route => (
              <li key={route.name}>
                <Link href={route.path} className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-indigo-600">{route.name}</h3>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  </>
)
