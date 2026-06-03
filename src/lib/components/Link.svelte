<script>
	let { url = '', class: className = '', icon, ...prop } = $props();
</script>

<a
	href={url}
	{...prop}
	class="relative flex cursor-pointer flex-row place-items-center rounded-full border border-amber-300/50 py-2 font-bold transition-all hover:bg-neutral-400/25 active:bg-neutral-400/50 {className}"
>
	<span class="flex h-6 content-center align-middle">
		<span
			class="ml-2 grid aspect-square h-full place-items-center place-self-center rounded-full border-white"
		>
			<img src={icon} alt="icon" class="block h-6" />
		</span>
		<span class="place-self-center border-gray-800 py-4 pr-3 pl-2 font-bold">
			<slot />
		</span>
	</span>
</a>
