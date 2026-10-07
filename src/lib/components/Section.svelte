<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionProps = {
		children: Snippet;
		id?: string;
		title?: string;
		eyebrow?: string;
		/** Adds the top margin used between stacked sections on small screens. */
		spaced?: boolean;
		class?: string;
	};

	let {
		children,
		id,
		title,
		eyebrow,
		spaced = false,
		class: className = ''
	}: SectionProps = $props();
</script>

<div class="w-full overflow-hidden md:p-10 {spaced ? 'mt-10 md:mt-0' : ''}">
	<section
		{id}
		class="relative z-10 m-auto flex w-full scroll-m-24 flex-col bg-amber-800 p-10 text-white shadow-[0_-10px_20px_rgba(0,0,0,0.3)] {className}"
	>
		{#if title}
			<header class="relative m-auto w-full max-w-5xl py-5">
				{#if eyebrow}
					<p class="mb-2 text-xs font-bold tracking-[0.3em] text-amber-300 uppercase">
						{eyebrow}
					</p>
				{/if}
				<h2 class="font-harmoni text-4xl uppercase md:text-5xl">{title}</h2>
			</header>
		{/if}

		{@render children()}
	</section>
</div>
