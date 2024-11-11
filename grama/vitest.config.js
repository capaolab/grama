import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    dir: './tests',
    environment: 'jsdom',
    reporters: process.env.GITHUB_ACTION ? ['default', 'github-actions'] : ['default'],
    coverage: {
      exclude: [
        ...configDefaults.coverage.exclude,
        '**/database/**',
        '**/e2e/**',
        '**/tests/**',
        '*.config.*'
      ],
    },
    reportOnFailure: true,
    outputFile: 'test-results.json',
  },
})