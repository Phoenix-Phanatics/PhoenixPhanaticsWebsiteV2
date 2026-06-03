<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	import favicon from '$lib/assets/phoenix.png';
	import phoenixImg from '$lib/assets/phoenix.png?enhanced';
	import { onMount, tick } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';

	let { children } = $props();

	let scrollY = $state(0);
	let scrolled = $derived(scrollY > 250);

	let clips = [
		'/clip12.mp4',
		'/clip6.mp4',
		'/clip3.mp4',
		'/clip4.mp4',
		'/clip5.mp4',
		'/clip2.mp4',
		'/clip8.mp4',
		'/clip9.mp4',
		'/clip10.mp4',
		'/clip11.mp4'
	];
	let currentClipIndex = $state(0);
	let mounted = $state(false);
	let videoPlayer: HTMLVideoElement | undefined = $state();

	onMount(() => {
		const eventHandler = () => {
			if (videoPlayer) {
				videoPlayer.addEventListener('ended', () => {
					currentClipIndex = (currentClipIndex + 1) % clips.length;
					tick().then(() => eventHandler());
				});
			}
		};
		if (videoPlayer) {
			videoPlayer.addEventListener('ended', () => {
				currentClipIndex = (currentClipIndex + 1) % clips.length;
				tick().then(() => eventHandler());
			});
		}
		mounted = true;
	});
</script>

<svelte:window bind:scrollY />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header
	class="fixed top-0 left-0 z-500 w-full {scrolled
		? 'bg-black/20 shadow-md backdrop-blur-md'
		: 'border-transparent bg-transparent text-white'}  flex items-center justify-between px-8 py-3 transition-all duration-300"
>
	<a
		href="/#home"
		class="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
	>
		<span
			class="font-harmoni mt-1 hidden overflow-hidden text-2xl tracking-widest whitespace-nowrap uppercase transition-all duration-500 md:block {scrolled
				? 'max-w-xs translate-x-0 opacity-100'
				: 'max-w-0 -translate-x-8 opacity-0'}">Phoenix Phanatics</span
		>
	</a>
	<nav
		class="flex items-center justify-end gap-6 text-sm font-bold tracking-widest uppercase md:gap-10"
	>
		<div class="group relative">
			<a
				href="/#home"
				class="py-2 {page.url.pathname == '/' &&
					'border-b-2'} flex cursor-pointer items-center gap-1 transition-colors hover:text-white"
				>Home <svg
					class="h-4 w-4 transition-transform group-hover:rotate-180"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"
					></path></svg
				></a
			>
			<div
				class="invisible absolute left-0 mt-2 flex w-48 flex-col overflow-hidden rounded-xl rounded-tl-none border border-purple-800 bg-purple-900 opacity-0 shadow-2xl transition-all duration-300 *:px-4 *:py-3 *:transition-colors group-hover:visible group-hover:opacity-100 *:hover:bg-purple-800"
			>
				<a href="/#about">About Us</a>
				<a href="/#sponsors">Our Sponsors</a>
				<a href="/#info">Find Out More</a>
			</div>
		</div>

		<div class="group relative">
			<a href="/info#what" class="contacts">
				<span
					class="border-white py-2 hover:text-white {page.url.pathname == '/info' &&
						'border-b-2'} flex cursor-pointer items-center gap-1 transition-colors">Info</span
				>
			</a>
		</div>

		<div class="group relative">
			<a href="/sponsors#sponsors" class="contacts">
				<span
					class="flex cursor-pointer items-center gap-1 py-2 transition-colors hover:text-white {page
						.url.pathname == '/sponsors' && 'border-b-2'}">Sponsors</span
				>
			</a>
		</div>
	</nav>
</header>

<div id="home" class="relative flex h-168 items-center justify-center overflow-clip bg-amber-500">
	<div class="fixed top-0 left-0 z-0 h-168 w-full">
		{#each clips as clip, i}
			{#if currentClipIndex == i}
				<video
					preload="none"
					autoplay
					muted
					class="absolute inset-0 h-full w-full object-cover object-bottom"
					bind:this={videoPlayer}
				>
					<source src={clip} type="video/mp4" />
				</video>
			{/if}
		{/each}
		<div class="absolute inset-0 bg-linear-to-b from-black/50 to-black/90"></div>
	</div>

	<div class="relative z-20 mt-30 text-center">
		<h1
			class="font-harmoni relative text-8xl/20 text-amber-100 uppercase md:text-11xl/28 lg:text-11xl/24 xl:text-13xl/24"
		>
			Phoenix Phanatics
			<!--            -bottom-48 -left-42-->
			<span class="pointer-events-none absolute -right-56 -bottom-64 z-50 flex hidden lg:block">
				{#if mounted}
					<div
						transition:fly={{ y: 2000, duration: 3000, opacity: 1 }}
						class="display-contents rotate-60"
					>
						<enhanced:img
							src={phoenixImg}
							alt="Flying Phoenix"
							class="h-144 w-auto scale-50 filter-[drop-shadow(5px_5px_5px_#222)]"
						/>
					</div>
				{/if}
			</span>
		</h1>
		<h2 class="font-sans text-4xl text-amber-100 uppercase">Team 11104</h2>
		<p class="m-auto mt-4 max-w-2xl p-2 md:text-xl">
			We're a small happy-go-lucky <b>rookie team</b> who's in FIRST Robotics Competition to both
			<b>inspire and become inspired</b> by and through robotics! We've made it through our first season,
			and are ready to go forward!
		</p>
		<div class="mx-auto flex w-max flex-row gap-2 p-5">
			<!--            <Button href="/">Join us</Button>-->
			<!--            <Button href="/">Contact us</Button>-->
		</div>
	</div>
	<div class="absolute bottom-8 px-2 text-center text-sm text-white/50">
		Sponsored by Sulimani Law Firm, NASA, Hack Club, Argosy Foundation, BenaHealth for the 2026
		Season.<br />
		<b class="text-white"
			>Are you interested in joining us and want to experience how it feels to be in FRC? Consider
			joining us for <a class="animate-pulse underline" href="/duelday#main"
				>Duel on the Delaware!</a
			></b
		>
	</div>
</div>

{@render children()}

<footer class="relative z-50 w-full bg-purple-950 px-10 py-8 text-amber-100 shadow-inner">
	<div
		class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row md:items-start"
	>
		<div class="flex flex-col items-center gap-4 md:items-start">
			<div class="flex items-center justify-center gap-3">
				<div class="flex h-20 items-center justify-center overflow-hidden rounded-full">
					<enhanced:img
						src={phoenixImg}
						alt="Phoenix Phanatics Logo"
						class="h-10 w-auto object-contain"
					/>
				</div>
				<span class="font-harmoni text-2xl/6 tracking-wider uppercase">Phoenix<br />Phanatics</span>
			</div>
			<div class="mx-auto text-center text-sm text-amber-200/50">
				&copy; 2026 Phoenix Phanatics Team 11104. All rights reserved.
			</div>
		</div>

		<div class="flex flex-col gap-8 text-center md:flex-row md:gap-16 md:text-left">
			<div class="flex flex-col gap-2">
				<h3 class="mb-2 font-bold tracking-wider text-amber-500 uppercase">Team</h3>
				<a href="#about" class="transition-colors hover:text-white">About Us</a>
				<a href="#sponsors" class="transition-colors hover:text-white">Sponsors</a>
				<a href="#contact" class="transition-colors hover:text-white">Contact</a>
			</div>
			<div class="flex flex-col gap-2">
				<h3 class="mb-2 font-bold tracking-wider text-amber-500 uppercase">Resources</h3>
				<a
					href="https://www.firstinspires.org"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-white">FIRST Robotics</a
				>
				<a
					href="https://www.thebluealliance.com/team/11104"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-white">The Blue Alliance</a
				>
			</div>
			<div class="flex flex-col gap-2">
				<h3 class="mb-2 font-bold tracking-wider text-amber-500 uppercase">Socials</h3>
				<a
					href="https://instagram.com/phoenixphanatics11104"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-white">Instagram</a
				>
				<a
					href="https://youtube.com/@phoenixphanatics11104"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-white">YouTube</a
				>
				<a
					href="https://tiktok.com/@phoenixphanatics11104"
					target="_blank"
					rel="noopener noreferrer"
					class="transition-colors hover:text-white">TikTok</a
				>
			</div>
		</div>
	</div>
</footer>
