/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // primary: '#48AAE1',
                // primaryFocus: '#0078DC',
                // primaryHover: '#238ade',
                // lightGray: '#F4F4F4',
                // midGray: '#C4C4C4',
                // darkGray: '#555555',
                // darkBlack: '#3A3939',
                // green: '#60C664',
                // errorBg: '#FFC300',

                primary: '#F44BB6',
                secondary: '#447CF9',
                secondaryDark: '#1C3177', // eg, Edit Loan Structure title
                secondaryLight: '#447cf9', // eg, Dropdown select
                error: '#fff8e0',
                errorDark: '#FFBA00',
                success: '#27DA4C',
                grey: '#BDBDBD',
                lightGrey: '#D3D3D3',
                textPrimary: '#4E4E4E',
            },
            // screens: {
            //   lg: '1190px',
            // },
            boxShadow: {
                '3xl': '0 4px 4px rgb(0 0 0 / 25%)',
            },
        },
    },
    plugins: [],
};
