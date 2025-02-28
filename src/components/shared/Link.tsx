import Astro from 'astro:global';
import type { RFC } from '@/types';

const urlIsActive = (url: URL): boolean => {
	return url.pathname === Astro.url.pathname;
};

const urlIsInternal = (url: URL): boolean => {
	return url.hostname === Astro.url.hostname;
};

// TODO: This feels jank, refactor
export const parseHref = (href: string | URL): URL => {
	// If it's an URL already, crack on
	if (href instanceof URL) {
		return href;
	}
	// If the href is an external url, we don't want to prepend our hostname
	//  so attempt to create an URL with the string as-is
	try {
		return new URL(href);
	} catch {
		try {
			// If that fails, try again with the site URL
			return new URL(href, String(Astro.url));
		} catch (e) {
			throw new Error(`Link: Error parsing href (${href}):${e as string}`);
		}
	}
};

export type LinkProps = {
	href: string | URL;
	activeClassName?: string;
};

export const Link: RFC<'a', LinkProps> = ({ href, children, ...attrs }) => {
	const url = parseHref(href);
	const isInternal = urlIsInternal(url);

	attrs['aria-label'] = isInternal
		? `Internal link to ${url.pathname}`
		: `External link to a page on ${url.hostname} (opens in a new tab)`;

	if (!isInternal) {
		// noopener is often inferred but perhaps not on old browsers
		attrs.rel = 'external noopener noreferrer';
		attrs.target = '_blank';
	}

	if (attrs.activeClassName && urlIsActive(url)) {
		attrs.className = attrs.activeClassName;
	}

	return (
		<a {...attrs} href={url.toString()}>
			{children}
		</a>
	);
};

export default Link;
