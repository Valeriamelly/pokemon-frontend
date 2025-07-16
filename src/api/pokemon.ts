export type Pokemon = {
  name: string;
  url: string;
};
export type PokemonList = { count: number; results: Pokemon[] };

const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function listPokemon(params: {
  limit: number;
  offset: number;
  q?: string;
}): Promise<PokemonList> {
  const { q, ...rest } = params
  const url = new URL("/pokemon", BASE);

  // Agrega los parámetros de consulta a la URL
  Object.entries(rest).forEach(([k, v]) =>
    url.searchParams.append(k, String(v)),
  )
  if (q && q.trim() !== '') {
    url.searchParams.append("q", q);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}
