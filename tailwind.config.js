/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryLightColor: "#fff",
      primaryGreyColor: "#F5F7FA",
      primaryTextColor: "#1E293B",
      primaryBlue: "#2563EB",
      primaryBlueHover: "#1D4ED8",
      secondaryText: '#94A3B8',
      borderGray: '#E2E8F0',
      darkGray: '#64748B',
      disabledGray: '#CBD5E1',
      exmapleTaskButton: "#F59E0B",
      exmapleTaskButtonHover: "#D97706",
      doneButton: "#22C55E",
      doneButtonDone: "#dffad8",
      removeButton: "#EF4444",
      transparentDarkBackground: "#2d3033b8"
    },

    extend: {
      width: {
        buttons: "min(max(6.412vw,30px),35px)"
      },
      height: {
        buttons: "min(max(6.412vw,30px),35px)"
      },
      size: {
        buttons: "min(max(6.412vw,30px),35px)"
      },
      screens: {
        "mobile-t": "769px",
        "mobile-l": "425px",
        "mobile-m": "375px",
      }
    },
  },
  plugins: [],
}

