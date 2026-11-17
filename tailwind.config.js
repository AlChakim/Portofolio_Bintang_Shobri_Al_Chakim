/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: {
          bg: '#FFFFFF',
          secondary: '#F4F8FF',
          soft: '#E8F1FF',
          border: '#E2E8F0',
        },
        navy: {
          DEFAULT: '#172554',
          900: '#0F172A',
          800: '#1E293B',
        },
        dark: {
          bg: '#0A0C14',
          surface: '#111624',
          card: '#161C2E',
          border: '#1F293D',
          hover: '#242F48',
          text: '#F8FAFC',
          muted: '#94A3B8'
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB', // Primary Blue
          700: '#1D4ED8', // Deep Blue
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554', // Navy
        },
        surface: {
          white: '#FFFFFF',
          card: '#FFFFFF',
          soft: '#F4F8FF',
          accent: '#E8F1FF',
        },
        text: {
          main: '#111827',
          secondary: '#64748B',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        display: [
          'Syne',
          'Plus Jakarta Sans',
          'Inter',
          'sans-serif'
        ],
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace'
        ],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(37, 99, 235, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(37, 99, 235, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'blue-glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      }
    },
  },
  plugins: [],
}
