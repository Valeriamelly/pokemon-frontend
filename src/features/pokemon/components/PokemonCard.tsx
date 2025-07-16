export function PokemonCard({ name, url }: { name: string; url: string }) {
  const id = url.split('/').at(-2) 
  const sprite =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return (
    <div className="rounded-xl bg-white/80 p-4 shadow flex flex-col items-center gap-2">
      <img src={sprite} alt={name} className="w-24 h-24 object-contain" />
      <span className="capitalize font-medium text-black text-lg">{name}</span>
    </div>
  )
}

