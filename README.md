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
# PokéDemo – Búsqueda y paginación de Pokémon (React + Nest)

> Demo técnica 2025 • Node 20 • React 19 • Vite 7

## 1. Tecnologías

| Capa | Stack | Por qué |
|------|-------|---------|
| **Backend** | Nest JS 10 (Express) + `@nestjs/cache-manager` | Estructura modular, in‑memory cache con TTL. |
| **Frontend** | React 19 + Vite 7 + Tailwind CSS | Arranque ultrarrápido; estilos utility‑first. |
| **State & Data** | TanStack Query v5 | Caché en RAM + manejo de carga/errores. |
| **HTTP** | Fetch API | Sin dependencias extra. |
| **Tests** | Jest 30 + Testing Library | Unit / e2e para servicio y controlador. |
| **Infra Demo** | Docker multi‑stage (opcional) | Ejecutable en cualquier entorno. |

## 2. Instalación rápida

```bash
# 1. Clonar
git clone https://github.com/<tu‑usuario>/poke-demo.git
cd poke-demo

# 2. Backend
cd backend
cp .env.example .env          # opcional, editar puertos
npm install
npm run start:dev             # http://localhost:3000

# 3. Frontend (nueva terminal)
cd ../frontend
cp .env.example .env          # VITE_API_URL=http://localhost:3000
npm install
npm run dev                   # http://localhost:5173

```
