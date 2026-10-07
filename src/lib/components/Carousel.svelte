<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	type CarouselProps = {
		items: T[];
		/** Renders one slide. */
		slide: Snippet<[T, number]>;
		/** Optional custom indicator (e.g. avatar thumbnails). Falls back to dots. */
		indicator?: Snippet<[T, number, boolean]>;
		/** Accessible name for the carousel region. */
		label: string;
		/** Word used in button labels, e.g. "quote" leads to "Next quote". */
		itemName?: string;
		/** Auto-advance delay in ms. Set to 0 to disable. */
		interval?: number;
		class?: string;
	};

	let {
		items,
		slide,
		indicator,
		label,
		itemName = 'slide',
		interval = 6000,
		class: className = ''
	}: CarouselProps = $props();

	let index = $state(0);
	let paused = $state(false);
	let reducedMotion = $state(false);
	let timer: ReturnType<typeof setInterval> | undefined;
	let touchStartX: number | null = null;

	const restartTimer = () => {
		clearInterval(timer);
		if (interval > 0 && !reducedMotion && items.length > 1) {
			timer = setInterval(() => {
				if (!paused) index = (index + 1) % items.length;
			}, interval);
		}
	};

	const goTo = (i: number) => {
		index = (i + items.length) % items.length;
		restartTimer();
	};
	const prev = () => goTo(index - 1);
	const next = () => goTo(index + 1);

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			next();
		}
	};

	const onTouchStart = (e: TouchEvent) => {
		touchStartX = e.touches[0]?.clientX ?? null;
	};
	const onTouchEnd = (e: TouchEvent) => {
		if (touchStartX === null) return;
		const dx = (e.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
		if (Math.abs(dx) > 50) {
			if (dx < 0) next();
			else prev();
		}
		touchStartX = null;
	};

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		restartTimer();
		return () => clearInterval(timer);
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<section
	aria-roledescription="carousel"
	aria-label={label}
	class="border-primary-400/30 bg-primary-950/50 shadow-well relative overflow-hidden rounded-2xl border backdrop-blur-sm {className}"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	onfocusin={() => (paused = true)}
	onfocusout={() => (paused = false)}
	onkeydown={onKeydown}
	ontouchstart={onTouchStart}
	ontouchend={onTouchEnd}
>
	<!-- Slides are stacked in one grid cell so the height fits the tallest visible slide -->
	<div class="grid px-10 pt-8 pb-14 md:px-16">
		{#key index}
			<div
				class="col-start-1 row-start-1"
				role="group"
				aria-roledescription={itemName}
				aria-label="{index + 1} of {items.length}"
				in:fly={{ y: 20, duration: reducedMotion ? 0 : 800, delay: reducedMotion ? 0 : 300 }}
				out:fade={{ duration: reducedMotion ? 0 : 300 }}
			>
				{@render slide(items[index], index)}
			</div>
		{/key}
	</div>

	{#if items.length > 1}
		<button
			onclick={prev}
			class="text-primary-200/50 hover:text-primary-100 absolute top-1/2 left-0 z-30 -translate-y-1/2 cursor-pointer p-2 transition-colors md:left-2"
			aria-label="Previous {itemName}"
		>
			<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
		</button>
		<button
			onclick={next}
			class="text-primary-200/50 hover:text-primary-100 absolute top-1/2 right-0 z-30 -translate-y-1/2 cursor-pointer p-2 transition-colors md:right-2"
			aria-label="Next {itemName}"
		>
			<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>

		<div class="absolute right-0 bottom-4 left-0 z-20 flex flex-wrap justify-center gap-2 px-4">
			{#each items as item, i (i)}
				<button
					aria-label="Go to {itemName} {i + 1}"
					aria-current={i === index}
					onclick={() => goTo(i)}
					class="cursor-pointer rounded-full transition-all duration-300 {indicator
						? ''
						: `h-2 w-2 ${i === index ? 'bg-primary-300 scale-125' : 'bg-white/30 hover:bg-white/50'}`}"
				>
					{#if indicator}
						{@render indicator(item, i, i === index)}
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</section>
