const colorPalette = {
    atlantis: {
        50: '#f8fbea',
        100: '#eff6d1',
        200: '#deeda9',
        300: '#c7e076',
        400: '#afcf4c',
        500: '#97bc2f',
        600: '#719020',
        700: '#566e1d',
        800: '#46581c',
        900: '#3b4b1c',
    },
};
const theme = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: colorPalette.atlantis[500],
        primaryLight: colorPalette.atlantis[400],
        primaryDark: colorPalette.atlantis[900],
        secondary: colorPalette.atlantis[100],
        secondaryLight: colorPalette.atlantis[50],
        secondaryDark: colorPalette.atlantis[700],
        tertiary: colorPalette.atlantis[600],
        tertiaryLight: colorPalette.atlantis[300],
        tertiaryDark: colorPalette.atlantis[800],
        ...colorPalette,
    },
};
/*

EM	    REM	       Pixel	Percent	Point
0.5em	0.5rem	8px	50%	            6pt
0.5625em	0.5625rem	9px	56.25%	6.75pt
0.625em	0.625rem	10px	62.5%	7.5pt
0.6875em	0.6875rem	11px	68.75%	8.25pt
0.75em	0.75rem	12px	75%	9pt
0.8125em	0.8125rem	13px	81.25%	9.75pt
0.875em	0.875rem	14px	87.5%	10.50pt
0.9375em	0.9375rem	15px	93.75%	11.25pt
1em	1rem	16px	100%	12pt
1.0625em	1.0625rem	17px	106.25%	12.75pt
1.125em	1.125rem	18px	112.5%	13.5pt
1.1875em	1.1875rem	19px	118.75%	14.25pt
1.25em	1.25rem	20px	125%	15pt
1.3125em	1.3125rem	21px	131.25%	15.75pt
1.375em	1.375rem	22px	137.5%	16.50pt
1.4375em	1.4375rem	23px	143.75%	17.25pt
1.5em	1.5rem	24px	150%	18pt
1.5625em	1.5625rem	25px	156.25%	18.75pt
1.625em	1.625rem	26px	162.5%	19.5pt
1.6875em	1.6875rem	27px	168.75%	20.25pt
1.75em	1.75rem	28px	175%	21pt
1.8125em	1.8125rem	29px	181.25%	21.75pt
1.875em	1.875rem	30px	187.5%	22.5pt
1.9375em	1.9375rem	31px	193.75%	23.25pt
2em	2rem	32px	200%	24pt
2.0625em	2.0625rem	33px	206.25%	24.75pt
2.125em	2.125rem	34px	212.5%	25.5pt
2.1875em	2.1875rem	35px	218.75%	26.25pt
2.25em	2.25rem	36px	225%	27pt
2.3125em	2.3125rem	37px	231.25%	27.75pt
2.375em	2.375rem	38px	237.5%	28.5pt
2.4375em	2.4375rem	39px	243.75%	29.25pt
2.5em	2.5rem	40px	250%	30pt
2.5625em	2.5625rem	41px	256.25%	30.75pt
2.625em	2.625rem	42px	262.5%	31.5pt
2.6875em	2.6875rem	43px	268.75%	32.25pt
2.75em	2.75rem	44px	275%	33pt
2.8125em	2.8125rem	45px	281.25%	33.75pt
2.875em	2.875rem	46px	287.5%	34.5pt
2.9375em	2.9375rem	47px	293.75%	35.25pt
3em	3rem	48px	300%	36pt */

export { theme, colorPalette };
