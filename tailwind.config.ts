import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4D734FD9",
        secondary: "#BF9877",
        lightPrimary: '#9cbf9b',
        bg: '#F2F2F2'
      }
    },
  },
  plugins: [],
}
export default config
