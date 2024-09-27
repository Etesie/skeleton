import type { Theme } from '@skeletonlabs/skeleton/themes';

const vox = {
	name: 'vox',
	properties: {
		'--type-scale-factor': '1.067',
		'--type-scale-1': 'calc(0.75rem * var(--type-scale-factor))',
		'--type-scale-2': 'calc(0.875rem * var(--type-scale-factor))',
		'--type-scale-3': 'calc(1rem * var(--type-scale-factor))',
		'--type-scale-4': 'calc(1.125rem * var(--type-scale-factor))',
		'--type-scale-5': 'calc(1.25rem * var(--type-scale-factor))',
		'--type-scale-6': 'calc(1.5rem * var(--type-scale-factor))',
		'--type-scale-7': 'calc(1.875rem * var(--type-scale-factor))',
		'--type-scale-8': 'calc(2.25rem * var(--type-scale-factor))',
		'--type-scale-9': 'calc(3rem * var(--type-scale-factor))',
		'--type-scale-10': 'calc(3.75rem * var(--type-scale-factor))',
		'--type-scale-11': 'calc(4.5rem * var(--type-scale-factor))',
		'--type-scale-12': 'calc(6rem * var(--type-scale-factor))',
		'--type-scale-13': 'calc(8rem * var(--type-scale-factor))',
		'--base-font-color': 'var(--color-surface-950)',
		'--base-font-color-dark': 'var(--color-surface-50)',
		'--base-font-family': 'Seravek, Gill Sans Nova, Ubuntu, Calibri, DejaVu Sans, source-sans-pro, sans-serif',
		'--base-font-size': '20px',
		'--base-line-height': '32px',
		'--base-font-weight': 'normal',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',
		'--heading-font-color': 'inherit',
		'--heading-font-color-dark': 'inherit',
		'--heading-font-family': 'Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif',
		'--heading-font-weight': '600',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': '0.025em',
		'--anchor-font-color': 'var(--color-tertiary-900)',
		'--anchor-font-color-dark': 'var(--color-secondary-500)',
		'--anchor-font-family': 'inherit',
		'--anchor-font-size': 'inherit',
		'--anchor-line-height': 'inherit',
		'--anchor-font-weight': 'inherit',
		'--anchor-font-style': 'inherit',
		'--anchor-letter-spacing': 'inherit',
		'--anchor-text-decoration': 'none',
		'--anchor-text-decoration-hover': 'underline',
		'--anchor-text-decoration-active': 'none',
		'--anchor-text-decoration-focus': 'none',
		'--space-scale-factor': '1',
		'--radii-default': '9999px',
		'--radii-container': '24px',
		'--border-width-default': '0px',
		'--divide-width-default': '1px',
		'--outline-width-default': '1px',
		'--ring-width-default': '1px',
		'--body-background-color': 'var(--color-surface-50)',
		'--body-background-color-dark': 'var(--color-surface-950)',
		'--color-primary-50': '255 242 235',
		'--color-primary-100': '252 238 229',
		'--color-primary-200': '252 223 206',
		'--color-primary-300': '251 209 184',
		'--color-primary-400': '251 194 161',
		'--color-primary-500': '251 180 138',
		'--color-primary-600': '232 165 126',
		'--color-primary-700': '213 151 114',
		'--color-primary-800': '195 136 101',
		'--color-primary-900': '176 122 89',
		'--color-primary-950': '157 93 77',
		'--color-primary-contrast-dark': '0 0 0',
		'--color-primary-contrast-light': 'var(--color-primary-50)',
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
		'--color-secondary-50': '255 255 240',
		'--color-secondary-100': '246 254 214',
		'--color-secondary-200': '236 253 187',
		'--color-secondary-300': '227 251 161',
		'--color-secondary-400': '217 250 134',
		'--color-secondary-500': '208 249 108',
		'--color-secondary-600': '186 229 87',
		'--color-secondary-700': '164 209 66',
		'--color-secondary-800': '143 190 45',
		'--color-secondary-900': '121 170 24',
		'--color-secondary-950': '99 150 3',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
		'--color-tertiary-50': '255 255 255',
		'--color-tertiary-100': '244 239 255',
		'--color-tertiary-200': '233 223 255',
		'--color-tertiary-300': '222 206 255',
		'--color-tertiary-400': '211 190 255',
		'--color-tertiary-500': '200 174 255',
		'--color-tertiary-600': '177 153 232',
		'--color-tertiary-700': '155 132 209',
		'--color-tertiary-800': '132 112 185',
		'--color-tertiary-900': '110 91 162',
		'--color-tertiary-950': '87 70 139',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
		'--color-success-50': '255 255 255',
		'--color-success-100': '238 253 248',
		'--color-success-200': '220 251 241',
		'--color-success-300': '203 249 233',
		'--color-success-400': '185 247 226',
		'--color-success-500': '168 245 219',
		'--color-success-600': '144 220 195',
		'--color-success-700': '119 196 171',
		'--color-success-800': '95 171 148',
		'--color-success-900': '70 147 124',
		'--color-success-950': '46 122 100',
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': 'var(--color-success-50)',
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-600': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-700': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',
		'--color-warning-50': '255 255 255',
		'--color-warning-100': '252 253 238',
		'--color-warning-200': '249 251 220',
		'--color-warning-300': '246 249 203',
		'--color-warning-400': '243 247 185',
		'--color-warning-500': '240 245 168',
		'--color-warning-600': '215 221 145',
		'--color-warning-700': '190 196 122',
		'--color-warning-800': '166 172 99',
		'--color-warning-900': '141 147 76',
		'--color-warning-950': '116 123 53',
		'--color-warning-contrast-dark': 'var(--color-warning-950)',
		'--color-warning-contrast-light': 'var(--color-warning-50)',
		'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-600': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-700': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-800': 'var(--color-warning-contrast-dark)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
		'--color-error-50': '255 255 255',
		'--color-error-100': '253 238 245',
		'--color-error-200': '251 220 235',
		'--color-error-300': '249 203 225',
		'--color-error-400': '247 185 215',
		'--color-error-500': '245 168 205',
		'--color-error-600': '220 145 182',
		'--color-error-700': '195 122 158',
		'--color-error-800': '169 99 135',
		'--color-error-900': '144 76 111',
		'--color-error-950': '119 53 88',
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': 'var(--color-error-50)',
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-600': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',
		'--color-surface-50': '217 212 235',
		'--color-surface-100': '201 195 220',
		'--color-surface-200': '185 178 205',
		'--color-surface-300': '170 161 189',
		'--color-surface-400': '154 144 174',
		'--color-surface-500': '138 127 159',
		'--color-surface-600': '122 110 144',
		'--color-surface-700': '106 93 128',
		'--color-surface-800': '91 76 113',
		'--color-surface-900': '75 59 97',
		'--color-surface-950': '59 42 82',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	}
} satisfies Theme;

export default vox;
