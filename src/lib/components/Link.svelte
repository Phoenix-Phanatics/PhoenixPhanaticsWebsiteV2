<script>
    let {
        url = "",
        class: className = "",
        icon,
        ...prop
    } = $props()
</script>

<a href={url} {...prop}
   class="rounded-full relative place-items-center py-2 cursor-pointer hover:bg-neutral-400/25 active:bg-neutral-400/50 border-amber-300/50 border font-bold transition-all flex flex-row {className}">
        <span class="flex content-center align-middle h-6 ">
            <span class="ml-2 place-self-center h-full rounded-full grid place-items-center aspect-square border-white">
                <img src={icon} alt="icon" class="block h-6"/>
            </span>
            <span class="border-gray-800 py-4 pl-2 pr-3 place-self-center font-bold">
                <slot/>
            </span>
        </span>
</a>