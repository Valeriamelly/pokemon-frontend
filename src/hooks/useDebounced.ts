import { useEffect, useState } from 'react'
// espera un valor y lo devuelve después de un tiempo
// útil para evitar consultas innecesarias mientras el usuario escribe
export function useDebounced<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}
