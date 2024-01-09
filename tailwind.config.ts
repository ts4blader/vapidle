import type { Config } from 'tailwindcss'
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--clr-background)',
        text: 'var(--clr-text)',

        //* semantic
        primary: {
          DEFAULT: 'var(--clr-primary)',
          100: 'var(--clr-primary-100)',
          200: 'var(--clr-primary-200)',
          300: 'var(--clr-primary-300)',
          400: 'var(--clr-primary-400)',
          500: 'var(--clr-primary-500)',
          600: 'var(--clr-primary-600)',
          700: 'var(--clr-primary-700)',
          800: 'var(--clr-primary-800)',
          900: 'var(--clr-primary-900)',
        },

        success: {
          DEFAULT: 'var(--clr-success)',
          100: 'var(--clr-success-100)',
          200: 'var(--clr-success-200)',
          300: 'var(--clr-success-300)',
          400: 'var(--clr-success-400)',
          500: 'var(--clr-success-500)',
          600: 'var(--clr-success-600)',
          700: 'var(--clr-success-700)',
          800: 'var(--clr-success-800)',
          900: 'var(--clr-success-900)',
        },

        info: {
          DEFAULT: 'var(--clr-info)',
          100: 'var(--clr-info-100)',
          200: 'var(--clr-info-200)',
          300: 'var(--clr-info-300)',
          400: 'var(--clr-info-400)',
          500: 'var(--clr-info-500)',
          600: 'var(--clr-info-600)',
          700: 'var(--clr-info-700)',
          800: 'var(--clr-info-800)',
          900: 'var(--clr-info-900)',
        },

        warning: {
          DEFAULT: 'var(--clr-warning)',
          100: 'var(--clr-warning-100)',
          200: 'var(--clr-warning-200)',
          300: 'var(--clr-warning-300)',
          400: 'var(--clr-warning-400)',
          500: 'var(--clr-warning-500)',
          600: 'var(--clr-warning-600)',
          700: 'var(--clr-warning-700)',
          800: 'var(--clr-warning-800)',
          900: 'var(--clr-warning-900)',
        },

        danger: {
          DEFAULT: 'var(--clr-danger)',
          100: 'var(--clr-danger-100)',
          200: 'var(--clr-danger-200)',
          300: 'var(--clr-danger-300)',
          400: 'var(--clr-danger-400)',
          500: 'var(--clr-danger-500)',
          600: 'var(--clr-danger-600)',
          700: 'var(--clr-danger-700)',
          800: 'var(--clr-danger-800)',
          900: 'var(--clr-danger-900)',
        },
      },
      fontFamily: {
        main: ["var(--main-font)", ...fontFamily.sans],
      },

    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
