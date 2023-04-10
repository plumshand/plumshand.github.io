import { DefaultThemeLocaleData, DefaultThemeLocaleOptions } from "../../shared";

export const DEFAULT_LOCALE_OPTIONS: DefaultThemeLocaleOptions = {
    colorMode: 'light',
    colorModeSwitch: false,

    navbar: [],
    logo: null,
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',

    sidebar: 'auto',
    sidebarDepth: 2,

    toggleSidebar: 'toggle sidebar',
}

export const DEFAULT_LOCALE_DATA: DefaultThemeLocaleData = {
}

export const assignDefaultLocaleOptions = (
    localeOptions: DefaultThemeLocaleOptions
): void => {
    if (!localeOptions.locales) {
        localeOptions.locales = {}
    }

    if (!localeOptions.locales['/']) {
        localeOptions.locales['/'] = {}
    }

    Object.assign(localeOptions, {
        ...DEFAULT_LOCALE_OPTIONS,
        ...localeOptions,
    })

    Object.assign(localeOptions.locales['/'], {
        ...DEFAULT_LOCALE_DATA,
        ...localeOptions.locales['/'],
    })
}
