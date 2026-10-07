<script lang="ts">
	type PlaceholderPhotoProps = {
		/** Used for the initials and the accessible label. */
		name: string;
		class?: string;
		/** Hide the initials (useful for tiny thumbnails). */
		hideInitials?: boolean;
	};

	let { name, class: className = '', hideInitials = false }: PlaceholderPhotoProps = $props();

	const initials = $derived(
		name
			.split(/\s+/)
			.filter(Boolean)
			.map((part) => part[0]?.toUpperCase())
			.slice(0, 2)
			.join('')
	);

	// Alternate the gradient direction per person so the placeholders don't all look the same.
	const flip = $derived([...name].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 2 === 0);
</script>

<div
	role="img"
	aria-label="Photo of {name} (placeholder)"
	class="@container relative isolate overflow-hidden bg-linear-to-br {flip
		? 'from-primary-600 via-primary-800 to-secondary-800'
		: 'from-secondary-600 via-secondary-800 to-primary-800'} {className}"
>
	<!-- Generic silhouette -->
	<svg
		class="absolute inset-x-0 bottom-0 mx-auto h-[85%] w-auto text-white/15"
		viewBox="0 0 100 100"
		fill="currentColor"
		aria-hidden="true"
	>
		<circle cx="50" cy="34" r="20" />
		<path d="M10 100c0-24 18-40 40-40s40 16 40 40z" />
	</svg>
	{#if !hideInitials}
		<span
			class="font-harmoni absolute inset-0 grid place-items-center text-[clamp(1rem,30cqw,4rem)] tracking-widest text-white/90"
			aria-hidden="true"
		>
			{initials}
		</span>
	{/if}
</div>
