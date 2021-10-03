const Theme = {
    global: {
        colors: {
            brand: {
                dark: '#8099E9',
                light: '#67bdd7',
            },
            background: {
                dark: '#111111',
                light: '#dce1e1',
            },
            'background-back': {
                dark: '#8099E9',
                light: '#8099E9',
            },
            'background-front': {
                dark: '#C1C4CB',
                light: '#C1C4CB',
            },
            'background-contrast': {
                dark: '#FFFFFF11',
                light: '#11111111',
            },
            text: {
                dark: '#C1C4CB',
                light: '#dce1e1',
            },
            'text-strong': {
                dark: '#FFFFFF',
                light: '#000000',
            },
            'text-weak': {
                dark: '#CCCCCC',
                light: '#444444',
            },
            border: {
                dark: '#444444',
                light: '#CCCCCC',
            },
            control: 'brand',
            'active-background': {
                light: 'background-contrast',
                dark: 'brand',
            },
            'active-text': {
                light: 'text-strong',
                dark: 'brand',
            },
        },
        font: {
            family: `Frutiger LT,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Oxygen,
                Ubuntu,
                Cantarell,
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue",
                Arial, sans-serif,
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol"`,
        },
        active: {
            background: { color: '#FFAA15' },
            color: 'active-text',
        },
        hover: {
            background: 'active-background',
            color: 'active-text',
        },
        selected: {
            background: 'selected-background',
            color: 'selected-text',
        },
    }
};

export default Theme;