import { useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { SearchBar } from '../components/SearchBar'
import { usePokemonList } from '../../../hooks/usePokemonList'

export default function ListPage() {
  const [search, setSearch] = useState('')
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = usePokemonList(20, search)

  return (
    <div className="p-4">
      <SearchBar value={search} onChange={setSearch} />

      {isLoading && <p className="mt-6">Cargando...</p>}
      {error instanceof Error && <p className="mt-6 text-red-500">{error.message}</p>}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {data?.pages.flatMap((p) =>
          p.results.map((pk) => <PokemonCard key={pk.name} {...pk} />),
        )}
      </div>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-8 px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500"
        >
          {isFetchingNextPage ? 'Cargando…' : 'Cargar más'}
        </button>
      )}
    </div>
  )
}
