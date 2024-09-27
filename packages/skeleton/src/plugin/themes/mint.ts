import type { Theme } from '@skeletonlabs/skeleton/themes';

const mint = {
	name: 'mint',
	properties: {
		'--type-scale-factor': '1.125',
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
		'--base-font-family': 'system-ui, sans-serif',
		'--base-font-size': '16px',
		'--base-line-height': '24px',
		'--base-font-weight': 'normal',
		'--base-font-style': 'normal',
		'--base-letter-spacing': '0em',
		'--heading-font-color': 'inherit',
		'--heading-font-color-dark': 'inherit',
		'--heading-font-family': 'inherit',
		'--heading-font-weight': 'normal',
		'--heading-font-style': 'normal',
		'--heading-letter-spacing': 'inherit',
		'--anchor-font-color': 'var(--color-primary-500)',
		'--anchor-font-color-dark': 'var(--color-primary-500)',
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
		'--radii-default': '12px',
		'--radii-container': '24px',
		'--border-width-default': '0px',
		'--divide-width-default': '1px',
		'--outline-width-default': '1px',
		'--ring-width-default': '1px',
		'--body-background-color': 'var(--color-surface-200)',
		'--body-background-color-dark': 'var(--color-surface-700)',
		'--color-primary-50': '196 248 219',
		'--color-primary-100': '175 245 207',
		'--color-primary-200': '159 247 191',
		'--color-primary-300': '143 250 176',
		'--color-primary-400': '127 252 160',
		'--color-primary-500': '111 255 144',
		'--color-primary-600': '98 228 128',
		'--color-primary-700': '85 201 112',
		'--color-primary-800': '73 175 95',
		'--color-primary-900': '60 148 79',
		'--color-primary-950': '47 121 63',
		'--color-primary-contrast-dark': 'var(--color-surface-950)',
		'--color-primary-contrast-light': '255 255 255',
		'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-500': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-600': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-700': 'var(--color-primary-contrast-dark)',
		'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
		'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
		'--color-secondary-50': '218 211 253',
		'--color-secondary-100': '197 189 251',
		'--color-secondary-200': '176 166 249',
		'--color-secondary-300': '156 144 247',
		'--color-secondary-400': '135 121 245',
		'--color-secondary-500': '114 99 243',
		'--color-secondary-600': '98 86 217',
		'--color-secondary-700': '82 73 191',
		'--color-secondary-800': '67 61 164',
		'--color-secondary-900': '51 48 138',
		'--color-secondary-950': '35 35 112',
		'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
		'--color-secondary-contrast-light': 'var(--color-secondary-50)',
		'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-400': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-500': 'var(--color-secondary-contrast-dark)',
		'--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
		'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
		'--color-tertiary-50': '211 195 213',
		'--color-tertiary-100': '187 172 189',
		'--color-tertiary-200': '164 149 166',
		'--color-tertiary-300': '140 125 142',
		'--color-tertiary-400': '117 102 119',
		'--color-tertiary-500': '93 79 95',
		'--color-tertiary-600': '83 71 85',
		'--color-tertiary-700': '72 63 75',
		'--color-tertiary-800': '62 54 64',
		'--color-tertiary-900': '51 46 54',
		'--color-tertiary-950': '41 38 44',
		'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
		'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
		'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-dark)',
		'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
		'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
		'--color-success-50': '230 243 249',
		'--color-success-100': '211 234 238',
		'--color-success-200': '192 224 227',
		'--color-success-300': '173 215 217',
		'--color-success-400': '154 205 206',
		'--color-success-500': '135 196 195',
		'--color-success-600': '110 173 172',
		'--color-success-700': '85 150 149',
		'--color-success-800': '60 126 125',
		'--color-success-900': '35 103 102',
		'--color-success-950': '10 80 79',
		'--color-success-contrast-dark': 'var(--color-success-950)',
		'--color-success-contrast-light': 'var(--color-success-50)',
		'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-600': 'var(--color-success-contrast-dark)',
		'--color-success-contrast-700': 'var(--color-success-contrast-light)',
		'--color-success-contrast-800': 'var(--color-success-contrast-light)',
		'--color-success-contrast-900': 'var(--color-success-contrast-light)',
		'--color-success-contrast-950': 'var(--color-success-contrast-light)',
		'--color-warning-50': '255 255 255',
		'--color-warning-100': '249 244 230',
		'--color-warning-200': '243 233 205',
		'--color-warning-300': '238 223 181',
		'--color-warning-400': '232 212 156',
		'--color-warning-500': '226 201 131',
		'--color-warning-600': '196 174 110',
		'--color-warning-700': '167 147 90',
		'--color-warning-800': '137 121 69',
		'--color-warning-900': '108 94 49',
		'--color-warning-950': '78 67 28',
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
		'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
		'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
		'--color-error-50': '255 255 255',
		'--color-error-100': '243 231 234',
		'--color-error-200': '231 207 213',
		'--color-error-300': '220 183 193',
		'--color-error-400': '208 159 172',
		'--color-error-500': '196 135 151',
		'--color-error-600': '172 113 129',
		'--color-error-700': '148 91 108',
		'--color-error-800': '124 70 86',
		'--color-error-900': '100 48 65',
		'--color-error-950': '76 26 43',
		'--color-error-contrast-dark': 'var(--color-error-950)',
		'--color-error-contrast-light': 'var(--color-error-50)',
		'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
		'--color-error-contrast-500': 'var(--color-error-contrast-light)',
		'--color-error-contrast-600': 'var(--color-error-contrast-light)',
		'--color-error-contrast-700': 'var(--color-error-contrast-light)',
		'--color-error-contrast-800': 'var(--color-error-contrast-light)',
		'--color-error-contrast-900': 'var(--color-error-contrast-light)',
		'--color-error-contrast-950': 'var(--color-error-contrast-light)',
		'--color-surface-50': '203 226 210',
		'--color-surface-100': '170 197 182',
		'--color-surface-200': '138 168 155',
		'--color-surface-300': '105 140 127',
		'--color-surface-400': '73 111 100',
		'--color-surface-500': '40 82 72',
		'--color-surface-600': '34 72 63',
		'--color-surface-700': '29 61 54',
		'--color-surface-800': '23 51 46',
		'--color-surface-900': '18 40 37',
		'--color-surface-950': '12 30 28',
		'--color-surface-contrast-dark': 'var(--color-surface-950)',
		'--color-surface-contrast-light': 'var(--color-surface-50)',
		'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
		'--color-surface-contrast-400': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
		'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
	}
} satisfies Theme;

export default mint;
