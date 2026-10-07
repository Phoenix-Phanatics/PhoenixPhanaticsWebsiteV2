<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	type NavItem = { label: string; href: string; description?: string };

	type NavDropdownProps = {
		label: string;
		/** If set, the label is a link and a separate chevron button opens the menu. */
		href?: string;
		items: NavItem[];
		active?: boolean;
	};

	let { label, href, items, active = false }: NavDropdownProps = $props();

	let open = $state(false);
	let root: HTMLDivElement | undefined = $state();
	const menuId = $derived(`nav-menu-${label.toLowerCase().replace(/\s+/g, '-')}`);

	afterNavigate(() => (open = false));

	const onWindowClick = (e: MouseEvent) => {
		if (open && root && !root.contains(e.target as Node)) open = false;
	};
	const onWindowKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') open = false;
	};
</script>

<svelte:window onclick={onWindowClick} onkeydown={onWindowKeydown} />

{#snippet chevron()}
	<svg
		class="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 {open
			? 'rotate-180'
			: ''}"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
	</svg>
{/snippet}

<div
	bind:this={root}
	class="group relative"
	onfocusout={(e) => {
		if (!root?.contains(e.relatedTarget as Node | null)) open = false;
	}}
>
	{#if href}
		<div class="flex items-center gap-1">
			<a
				{href}
				class="relative py-2 transition-colors hover:text-white {active
					? 'text-white'
					: 'text-white/80'}"
			>
				{label}
				{#if active}
					<span
						class="from-primary-400 to-secondary-400 absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-linear-to-r"
					></span>
				{/if}
			</a>
			<button
				type="button"
				class="cursor-pointer py-2 text-white/80 transition-colors hover:text-white"
				aria-expanded={open}
				aria-controls={menuId}
				aria-label="Toggle {label} menu"
				onclick={() => (open = !open)}
			>
				{@render chevron()}
			</button>
		</div>
	{:else}
		<button
			type="button"
			class="relative flex cursor-pointer items-center gap-1 py-2 font-bold tracking-widest uppercase transition-colors hover:text-white {active
				? 'text-white'
				: 'text-white/80'}"
			aria-expanded={open}
			aria-controls={menuId}
			onclick={() => (open = !open)}
		>
			{label}
			{@render chevron()}
			{#if active}
				<span
					class="from-primary-400 to-secondary-400 absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-linear-to-r"
				></span>
			{/if}
		</button>
	{/if}

	<!-- pt-2 (not margin) keeps the hover area unbroken between the trigger and the menu -->
	<div
		id={menuId}
		class="absolute top-full right-0 pt-2 transition-all duration-200 lg:right-auto lg:left-0 {open
			? 'visible translate-y-0 opacity-100'
			: 'invisible -translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100'}"
	>
		<div
			class="border-secondary-700/60 bg-secondary-950/95 w-64 overflow-hidden rounded-xl border shadow-2xl shadow-black/50 backdrop-blur-md"
		>
			{#each items as item (item.href)}
				<a
					href={item.href}
					class="hover:border-primary-400 hover:bg-secondary-800/70 block border-l-2 border-transparent px-4 py-3 transition-colors"
				>
					<span class="block">{item.label}</span>
					{#if item.description}
						<span
							class="mt-0.5 block text-xs font-normal tracking-normal text-white/60 normal-case"
						>
							{item.description}
						</span>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</div>
