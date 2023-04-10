import type { ContainerPluginOptions } from '@vuepress/plugin-container'
import type { DefaultThemeData } from '../../shared'

export const resolveContainerPluginOptions = (
    localeOptions: DefaultThemeData,
    type: 'tip' | 'warning' | 'danger'
): ContainerPluginOptions => {
    const locales = Object.entries(localeOptions.locales || {}).reduce(
        (result, [key, value]) => {
            result[key] = { defaultInfo: value?.[type] ?? localeOptions[type] }
            return result;
        },
        {}
    );

    return {
        type,
        locales,
    }
}
