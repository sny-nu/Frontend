const colors = require('tailwindcss/colors')

module.exports = {
    future: {
        purgeLayersByDefault: true,
    },
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            trueGray: colors.trueGray,
            teal: colors.teal,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            orange: colors.orange,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
        }
        //extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
