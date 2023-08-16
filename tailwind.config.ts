import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'rosa': '#FFC7DB',
      'rosEsc': '#BF959A',
      'amarelo': '#F6F894',
      'amareloEsc': '#DCDE81',
      'verde': '#88C7BC',
      'verdeEsc': '#63998F',
      'cinza': '#F5F5F5',
    },
  },
  plugins: [],
}
export default config
