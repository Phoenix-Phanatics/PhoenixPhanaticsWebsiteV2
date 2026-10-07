<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type CtaLinkProps = HTMLAnchorAttributes & {
		href: string;
		variant?: 'primary' | 'outline';
		children: Snippet;
	};

	let {
		href,
		variant = 'primary',
		class: className = '',
		children,
		...rest
	}: CtaLinkProps = $props();

	const variants = {
		primary:
			'border border-primary-300/40 bg-linear-to-r from-primary-600 via-primary-500 to-secondary-500 bg-size-[200%_100%] bg-left text-white shadow-glow hover:bg-right hover:shadow-glow-blue',
		outline:
			'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/15'
	};
</script>

<a
	{href}
	{...rest}
	class="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0 {variants[
		variant
	]} {className}"
>
	{@render children()}
	<svg
		class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2.5"
			d="M5 12h14M13 6l6 6-6 6"
		/>
	</svg>
</a>
