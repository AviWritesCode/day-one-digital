/** @type {import('tailwindcss').Config} */
// Brand tokens parsed from BrandKit.JSON
// colors.primary_bg: #192945
// colors.secondary:  #595da1
// colors.accent:     #a981b0
// colors.cta:        #e8a3a2
// typography.heading: Playfair Display
// typography.body:    Inter
// typography.tracking: -0.02em
// typography.line_height: 1.6

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Day One Digital Brand Colors from BrandKit.JSON
        'brand-bg':       '#192945',
        'brand-secondary':'#595da1',
        'brand-accent':   '#a981b0',
        'brand-cta':      '#e8a3a2',
        // Derived palette
        'brand-bg-light': '#1f3560',
        'brand-bg-dark':  '#0f1c30',
        'brand-glass':    'rgba(255,255,255,0.04)',
        'brand-glass-border': 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '-0.02em',
      },
      lineHeight: {
        brand: '1.6',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #192945 0%, #1f3560 50%, #595da1 100%)',
        'hero-gradient':  'linear-gradient(180deg, #192945 0%, #0f1c30 100%)',
        'cta-gradient':   'linear-gradient(135deg, #a981b0 0%, #e8a3a2 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'glass':    '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-lg': '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
        'cta':      '0 0 30px rgba(232,163,162,0.3), 0 8px 32px rgba(0,0,0,0.4)',
        'cta-hover':'0 0 50px rgba(232,163,162,0.5), 0 16px 48px rgba(0,0,0,0.5)',
        'nav':      '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-up':       'fadeUp 0.8s ease forwards',
        'fade-up-delay': 'fadeUp 0.8s 0.15s ease forwards',
        'fade-in':       'fadeIn 0.6s ease forwards',
        'marquee':       'marquee 25s linear infinite',
        'shimmer':       'shimmer 2s linear infinite',
        'float':         'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
