import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: false,
        setupFiles: [ './src/tests/setupTests.js' ],
        coverage: {
            provider: 'istanbul',
            include: ['src/**/*.{js,jsx}'],
            exclude: ['src/tests/**', 'src/main.jsx']
        }
    }
})
