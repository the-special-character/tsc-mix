import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    listStyleImage: {
      check: 'url("/icons/check.svg")',
    },
    fontFamily: {
      sans: ["var(--font-kumbh)", ...fontFamily.sans],
      serif: ["var(--font-newsreader)", ...fontFamily.serif],
      cursive: ["var(--font-block)", "cursive"],
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontSize: {
      xs: ["14px", "1.5em"],
      sm: ["15px", "1.6em"],
      base: ["16px", "1.44em"],
      lg: ["18px", "1.667em"],
      xl: ["20px", "1.5em"],
      xxl: ["22px", "1.5em"],
      "2xl": ["24px", "1.583em"],
      "3xl": ["26px", "1.289em"],
      "4xl": ["32px", "1.289em"],
      "5xl": ["36px", "1.3em"],
      "6xl": ["38px", "1.289em"],
      "7xl": ["42px", "1.3em"],
      "8xl": ["52px", "1.3em"],
      "9xl": ["60px", "1.3em"],
    },

    extend: {
      colors: {
        transparent: "transparent",
        primary: "#064EA4",
        secondary1: "#E1EDFB",
        secondary2: "#FCDF69",
        secondary3: "#F99D77",
        secondary4: "#7EB7FB",
        error: "#ff9494",
        neutral: {
          100: "#FFFFFF",
          200: "#F9FAFB",
          300: "#E7EAEE",
          400: "#BECAD7",
          500: "#8096B0",
          600: "#62778F",
          700: "#1E3D60",
          800: "#0F437F",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        yellow: "rgb(var(--color-yellow) / <alpha-value>)",
        gray: "rgb(var(--color-gray) / <alpha-value>)",
        darkblue: "rgb(var(--color-darkblue) / <alpha-value>)",
        darkblue1: "rgb(var(--color-darkblue1) / <alpha-value>)",
        darkblue2: "rgb(var(--color-darkblue2) / <alpha-value>)",
        gray1: "rgb(var(--color-gray1) / <alpha-value>)",
        lightpink: "rgb(var(--color-lightpink) / <alpha-value>)",
        lightblue: "rgb(var(--color-lightblue) / <alpha-value>)",
        textgray: "rgb(var(--color-textgray) / <alpha-value>)",
        skyblue: "rgb(var(--color-skyblue) / <alpha-value>)",
        specialblue: "rgb(var(--color-specialblue) / <alpha-value>)",
        offwhite: "hsl(var(--color-offwhite))",
        white: "rgb(var(--color-white))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        heading1: [
          "clamp(2.25rem, 2.5vw + 1.25rem, 3.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "700",
            // fontWeight: "600",
          },
        ],
        heading2: [
          "clamp(2rem, 2.1875vw + 1.125rem, 2.875rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading3: [
          "clamp(1.75rem, 1.875vw + 1rem, 2.5rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading4: [
          "clamp(1.5rem, 1.875vw + 0.75rem, 2.25rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading5: [
          "clamp(1.375rem, 1.5625vw + 0.75rem, 2rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        heading6: [
          "clamp(1.25rem, 1.25vw + 0.75rem, 1.75rem)",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            // fontWeight: "700",
            fontWeight: "600",
          },
        ],
        subtitle1: [
          "clamp(1.25rem, 0.625vw + 1rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        subtitle2: [
          "clamp(1.015rem, 0.625vw + 0.875rem, 1.075rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        subtitle3: [
          "clamp(1.315rem, 0.625vw + 0.875rem, 1.75rem)",
          {
            letterSpacing: "-0.01em",
            // fontWeight: "600",
            fontWeight: "500",
          },
        ],
        body1: [
          "clamp(1.125rem, 0.625vw + 0.875rem, 1.375rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        body2: [
          "clamp(1rem, 0.625vw + 0.75rem, 1.25rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption1: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        caption2: [
          "clamp(0.75rem, 0.3125vw + 0.625rem, 0.875rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        btn: [
          "clamp(0.875rem, 0.3125vw + 0.75rem, 1rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
        xxs: [
          "clamp(0.63rem, 0.21vw + 0.58rem, 0.75rem)",
          {
            lineHeight: "1.8",
            letterSpacing: "-0.01em",
          },
        ],
      },
      spacing: {
        container: `max(
          1rem,
          calc((100vw - calc(1280px - 1rem * 2)) / 2)
        )`,
        "md-container": `max(
          1rem,
          calc((100vw - calc(1024px - 1rem * 2)) / 2)
        )`,
        "sm-container": `max(
          1rem,
          calc((100vw - calc(550px - 1rem * 2)) / 2)
        )`,
      },
      aspectRatio: {
        image: "3 / 4",
        "h-image": "4 / 3",
        "blog-image": "16/9",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        base: "0 5px 15px 0 rgb(30 61 96 / 3%)",
        dark: "0 15px 15px 0.01px rgba(30, 61, 96, 0.03)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
          transform: {},
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        fadeleft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-60%,0,0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        customanimation: {
          "0%": {
            opacity: "0",
            transform: "scale3d(.5,.5,.5)",
          },
          "50%": {
            opacity: "1",
          },
        },
        fadeinup: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0,60%,0)",
          },
          "100%": {
            opacity: "1",
            transform: "translatez(0)",
          },
        },

        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
        fadeleft: "fadeleft 2s both .3s",
        customanimation: "customanimation 2s both ",
        fadeinup: "fadeinup 3s both .3s",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
} satisfies Config;

export default config;
