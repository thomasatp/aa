import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '4/3': '4 / 3',
      },
      transitionProperty: {
        'size': 'width, height',
        'scale': 'scale',
        'hop': "transform, opacity"
      },
      scale: {
        "103": "1.03"
      },
      transitionDelay: {
        '50': '50ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
      },
      colors: {
        'coral': "#FF6A5F",
        'bkg': "#f5f5f2"
      }
    },
  },
  plugins: [],
}
export default config
