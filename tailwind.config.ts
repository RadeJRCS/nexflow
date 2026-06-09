import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#5B47E0', light: '#EEF0FF', mid: '#7B68EE', dark: '#3D2DB8' },
        ink: { DEFAULT: '#0F0F1A', 2: '#4A4A6A', 3: '#9090A8' },
        surface: { DEFAULT: '#FAFAFA', 2: '#F3F3F8', 3: '#E8E8F0' },
      }
    }
  },
  plugins: [],
}
export default config
