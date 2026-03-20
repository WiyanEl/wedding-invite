/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        figtree: ['var(--font-figtree)'],
        ibm: ['var(--font-ibm-plex-sans)'],
        cinzel: ['var(--font-cinzel)']
      }
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      'fade-right': {
        '0%': {
          opacity: '0',
          transform: 'translateX(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      'zoom-in': {
        '0%': {
          opacity: '0',
          transform: 'scale(0.95)',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
      'menu-in': {
        '0%': {
          transform: 'scale(0, 0)',
          transformOrigin: 'top left',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
      'menu-out': {
        '0%': {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
        '100%': {
          transform: 'scale(0)',
          transformOrigin: 'top left'
        },
      },
      'close-menu-in': {
        '0%': {
          opacity: '0',
          transform: 'scaleY(0)',
          transformOrigin: '100% 0%',
        },
        '100%': {
          opacity: '1',
          transform: 'scaleY(1)',
          transformOrigin: '100% 0%',
        },
      },
      'item-menu-in': {
        '0%': {
          opacity: '0',
          transform: 'scaleY(0)',
          transformOrigin: '0% 100%',
        },
        '100%': {
          opacity: '1',
          transform: 'scaleY(1)',
          transformOrigin: '0% 100%',
        },
      },
      'item-in': {
        '0%': {
          opacity: '0',
          transform: 'scaleY(0)',
          transformOrigin: '0% 100%',
        },
        '100%': {
          opacity: '1',
          transform: 'scaleY(1)',
          transformOrigin: '0% 100%',
        },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out forwards',
      'fade-up': 'fade-up 0.8s ease-out forwards',
      'fade-down': 'fade-down 0.8s ease-out forwards',
      'fade-left': 'fade-left 0.8s ease-out forwards',
      'fade-right': 'fade-right 0.8s ease-out forwards',
      'zoom-in': 'zoom-in 0.5s ease-out forwards',
      'menu-in': 'menu-in 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      'menu-out': 'menu-out 0.5s ease-in forwards',
      'close-menu-in': 'close-menu-in 1s ease 0s 1 normal forwards',
      'item-menu-in': 'item-menu-in 1s ease 0s 1 normal forwards',
      'item-in': 'item-in 1s ease 0s 1 normal forwards'
    },
  },
  plugins: [],
}

