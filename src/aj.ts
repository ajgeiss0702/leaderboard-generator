
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const aj: CustomThemeConfig = {
	name: 'aj',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		"--theme-font-family-heading": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #f97316
		"--color-primary-50": "254 234 220", // #feeadc
		"--color-primary-100": "254 227 208", // #fee3d0
		"--color-primary-200": "254 220 197", // #fedcc5
		"--color-primary-300": "253 199 162", // #fdc7a2
		"--color-primary-400": "251 157 92", // #fb9d5c
		"--color-primary-500": "249 115 22", // #f97316
		"--color-primary-600": "224 104 20", // #e06814
		"--color-primary-700": "187 86 17", // #bb5611
		"--color-primary-800": "149 69 13", // #95450d
		"--color-primary-900": "122 56 11", // #7a380b
		// secondary | #eab308
		"--color-secondary-50": "252 244 218", // #fcf4da
		"--color-secondary-100": "251 240 206", // #fbf0ce
		"--color-secondary-200": "250 236 193", // #faecc1
		"--color-secondary-300": "247 225 156", // #f7e19c
		"--color-secondary-400": "240 202 82", // #f0ca52
		"--color-secondary-500": "234 179 8", // #eab308
		"--color-secondary-600": "211 161 7", // #d3a107
		"--color-secondary-700": "176 134 6", // #b08606
		"--color-secondary-800": "140 107 5", // #8c6b05
		"--color-secondary-900": "115 88 4", // #735804
		// tertiary | #10b981
		"--color-tertiary-50": "219 245 236", // #dbf5ec
		"--color-tertiary-100": "207 241 230", // #cff1e6
		"--color-tertiary-200": "195 238 224", // #c3eee0
		"--color-tertiary-300": "159 227 205", // #9fe3cd
		"--color-tertiary-400": "88 206 167", // #58cea7
		"--color-tertiary-500": "16 185 129", // #10b981
		"--color-tertiary-600": "14 167 116", // #0ea774
		"--color-tertiary-700": "12 139 97", // #0c8b61
		"--color-tertiary-800": "10 111 77", // #0a6f4d
		"--color-tertiary-900": "8 91 63", // #085b3f
		// success | #c1dd97
		"--color-success-50": "246 250 239", // #f6faef
		"--color-success-100": "243 248 234", // #f3f8ea
		"--color-success-200": "240 247 229", // #f0f7e5
		"--color-success-300": "230 241 213", // #e6f1d5
		"--color-success-400": "212 231 182", // #d4e7b6
		"--color-success-500": "193 221 151", // #c1dd97
		"--color-success-600": "174 199 136", // #aec788
		"--color-success-700": "145 166 113", // #91a671
		"--color-success-800": "116 133 91", // #74855b
		"--color-success-900": "95 108 74", // #5f6c4a
		// warning | #f8e45c
		"--color-warning-50": "254 251 231", // #fefbe7
		"--color-warning-100": "254 250 222", // #fefade
		"--color-warning-200": "253 248 214", // #fdf8d6
		"--color-warning-300": "252 244 190", // #fcf4be
		"--color-warning-400": "250 236 141", // #faec8d
		"--color-warning-500": "248 228 92", // #f8e45c
		"--color-warning-600": "223 205 83", // #dfcd53
		"--color-warning-700": "186 171 69", // #baab45
		"--color-warning-800": "149 137 55", // #958937
		"--color-warning-900": "122 112 45", // #7a702d
		// error | #ef4444
		"--color-error-50": "253 227 227", // #fde3e3
		"--color-error-100": "252 218 218", // #fcdada
		"--color-error-200": "251 208 208", // #fbd0d0
		"--color-error-300": "249 180 180", // #f9b4b4
		"--color-error-400": "244 124 124", // #f47c7c
		"--color-error-500": "239 68 68", // #ef4444
		"--color-error-600": "215 61 61", // #d73d3d
		"--color-error-700": "179 51 51", // #b33333
		"--color-error-800": "143 41 41", // #8f2929
		"--color-error-900": "117 33 33", // #752121
		// surface | #2b2e40
		"--color-surface-50": "223 224 226", // #dfe0e2
		"--color-surface-100": "213 213 217", // #d5d5d9
		"--color-surface-200": "202 203 207", // #cacbcf
		"--color-surface-300": "170 171 179", // #aaabb3
		"--color-surface-400": "107 109 121", // #6b6d79
		"--color-surface-500": "43 46 64", // #2b2e40
		"--color-surface-600": "39 41 58", // #27293a
		"--color-surface-700": "32 35 48", // #202330
		"--color-surface-800": "26 28 38", // #1a1c26
		"--color-surface-900": "21 23 31", // #15171f

	}
}