# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

# **PokéDemo – Frontend**  
> React 19 · Vite 7 · Tailwind CSS · TanStack Query v5  

---

## ⚙️ Tecnologías

| Herramienta | Versión | Rol |
|-------------|---------|-----|
| **React** | 19 (alpha) | Componente UI declarativa |
| **Vite** | 7 | Dev‑server ultrarrápido y bundler |
| **Tailwind CSS** | 3.4 | Estilos utility‑first |
| **TanStack Query** | 5 | Fetch + caché en RAM |
| **TypeScript** | 5 | Tipado estático |
| **ESLint + Prettier** | latest | Calidad y formateo |

---

## 🛠️ Instalación

```
# 1 · Clona el repo y entra
git clone https://github.com/<tu‑usuario>/poke-demo.git
cd poke-demo/frontend

# 2 · Copia env de ejemplo
cp .env.example .env          # VITE_API_URL=http://localhost:3000

# 3 · Instala dependencias
npm install

# 4 · Dev‑server
npm run dev                   # http://localhost:5173
```

## Decisiones clave 

| Tema | Qué elegí | Por qué lo elegí |
|------|-----------|------------------|
| **Estado y caché** | **TanStack Query v5** con `useInfiniteQuery` | La librería se encarga del caché en RAM, estados de *loading* y *error*. Solo escribo la lógica de mi API y listo. |
| **Paginación** | **Un único botón “Cargar más”** (no “Siguiente/Anterior”) | El backend ya entiende `limit` y `offset`. Con el botón simplemente pido la siguiente página de 20 Pokémon y React Query concatena los resultados. UX muy simple, menos código. |
| **Búsqueda** | Hook `useDebounced` con 300 ms | Mientras el usuario escribe, espero 300 ms antes de consultar. Así evito llamar al backend por cada letra. |
| **Imágenes** | Construyo la URL del sprite con el `id` que viene en el campo `url` | No necesito otra llamada para conseguir la imagen. Ej.: `…/official-artwork/25.png` para Pikachu. |
| **Caché en navegador** | `staleTime: 5 * 60 000` (5 min) | Durante 5 min React Query sirve la respuesta desde memoria. Si el usuario vuelve atrás o recarga rápido, ve la lista al instante. |
| **Estilos** | **Tailwind CSS** | Utilidades (`p-4`, `rounded-xl`, etc.) en el mismo JSX. Sin archivos CSS propios, menos mantenimiento. |
| **Estructura** | Directorios por funcionalidad (`features/pokemon/...`) | Todo lo que tiene que ver con Pokémon (página, componentes, hooks) vive junto. Fácil de encontrar y de borrar si creara otro feature. |
| **HTTP** | `fetch` nativo + pequeño wrapper `listPokemon()` | Evito Axios hoy; menos dependencias. |
| **Lint** | ESLint + `eslint-plugin-react-hooks` | Me avisa si olvido dependencias en un hook y mantiene estilo de código coherente. |



