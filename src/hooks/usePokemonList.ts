// permite hacer consultas con scroll infinito
import { useInfiniteQuery } from '@tanstack/react-query'
// custom hook para debouncing
import { useDebounced } from './useDebounced'
import { listPokemon } from '../api/pokemon'

export function usePokemonList(limit = 20, search = '') {
  const q = useDebounced(search)

   return useInfiniteQuery({
    // clave de la consulta, se usa para identificar y almacenar en caché
    queryKey: ['pokemon', limit, q],
    
    // función que se llama para obtener los datos
    queryFn: ({ pageParam = 0 }) =>
      listPokemon({ limit, offset: pageParam, q: q || undefined }),
    initialPageParam: 0,
    
    // función que se llama para obtener el siguiente parámetro de página
    getNextPageParam: (last, pages) =>
      last.results.length ? pages.length * limit : undefined,
    staleTime: 5 * 60_000,
  })
}
