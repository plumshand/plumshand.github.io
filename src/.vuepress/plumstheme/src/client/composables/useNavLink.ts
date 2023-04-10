import type { NavLink } from '../../shared'
import { useResolveRouteWithRedirect } from './useResolveRouteWithRedirect'

declare module 'vue-router' {
	interface RouteMeta {
		title?: string
	}
}

export const useNavLink = (item: string): NavLink => {
	const resolved = useResolveRouteWithRedirect(encodeURI(item))
	return {
		text: resolved.meta.title || item,
		link: resolved.name === '404' ? item : resolved.fullPath,
	}
}
