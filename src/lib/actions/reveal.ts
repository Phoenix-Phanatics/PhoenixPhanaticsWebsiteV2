import type { Action } from 'svelte/action';

type RevealOptions = { delay?: number } | undefined;

/**
 * Fades and slides an element in the first time it scrolls into view.
 * Styling lives in layout.css (`[data-reveal]`). Without JavaScript the element just shows.
 */
export const reveal: Action<HTMLElement, RevealOptions> = (node, options) => {
	node.dataset.reveal = '';
	if (options?.delay) node.style.setProperty('--reveal-delay', `${options.delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('revealed');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('revealed');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
