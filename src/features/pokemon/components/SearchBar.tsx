export function SearchBar({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <input
      className="w-full max-w-xl mx-auto block p-3 rounded-full shadow focus:outline-none"
      placeholder="Buscar Pokémon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
