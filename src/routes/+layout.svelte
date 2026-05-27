<script lang="ts">
	import './layout.css';
    import { page } from '$app/state';
	import favicon from '$lib/assets/phoenix.png';
	import phoenixImg from "$lib/assets/phoenix.png?enhanced";
	import {onMount, tick} from "svelte";
	import {fly} from "svelte/transition";
	import Button from "$lib/components/Button.svelte";

	let { children } = $props();

	let scrollY = $state(0);
	let scrolled = $derived(scrollY > 250);

	let clips = ['/clip12.mp4', '/clip6.mp4', '/clip3.mp4', '/clip4.mp4', '/clip5.mp4', '/clip2.mp4', '/clip8.mp4', '/clip9.mp4', '/clip10.mp4', '/clip11.mp4']
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

<svelte:window bind:scrollY={scrollY}></svelte:window>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header class="w-full fixed top-0 left-0 z-500 {scrolled ? 'backdrop-blur-md shadow-md bg-black/20' : 'bg-transparent border-transparent text-white'}  flex items-center justify-between px-8 py-3 transition-all duration-300">
    <a href="/#home" class="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
        <span class="font-harmoni text-2xl uppercase tracking-widest hidden md:block mt-1 transition-all duration-500 whitespace-nowrap overflow-hidden {scrolled ? 'max-w-xs opacity-100 translate-x-0' : 'max-w-0 opacity-0 -translate-x-8'}">Phoenix Phanatics</span>
    </a>
    <nav class="flex gap-6 md:gap-10 items-center justify-end text-sm uppercase font-bold tracking-widest">
        <div class="group relative">
            <a href="/#home" class="py-2 {page.url.pathname == '/' && 'border-b-2'} hover:text-white transition-colors cursor-pointer flex items-center gap-1">Home <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></a>
            <div class="absolute left-0 mt-2 w-48 bg-purple-900 *:px-4 *:py-3 *:hover:bg-purple-800 *:transition-colors rounded-xl rounded-tl-none shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden border border-purple-800">
                <a href="/#about" >About Us</a>
                <a href="/#sponsors">Our Sponsors</a>
                <a href="/#info">Find Out More</a>
            </div>
        </div>

        <div class="group relative">
            <a href="/info#what" class="contacts ">
                <span class="py-2 hover:text-white border-white {page.url.pathname == '/info' && 'border-b-2'} transition-colors cursor-pointer flex items-center gap-1">Info</span>
            </a>
        </div>

        <div class="group relative">
            <a href="/sponsors#sponsors" class="contacts">
                <span class="py-2 hover:text-white transition-colors cursor-pointer flex items-center gap-1 {page.url.pathname == '/sponsors' && 'border-b-2'}">Sponsors</span>
            </a>
        </div>
    </nav>
</header>

<div id="home" class="relative h-168 bg-amber-500 flex items-center justify-center overflow-clip">
    <div class="fixed top-0 left-0 w-full h-168 z-0">
        {#each clips as clip, i}
            {#if currentClipIndex == i}
                <video preload="none" autoplay muted class="absolute inset-0 w-full h-full object-cover object-bottom" bind:this={videoPlayer}>
                    <source src={clip} type="video/mp4" />
                </video>
            {/if}
        {/each}
        <div class="absolute inset-0 from-black/50 to-black/90 bg-linear-to-b"></div>
    </div>

    <div class="relative z-20 text-center mt-30">
        <h1 class="relative text-13xl/24 uppercase font-harmoni text-amber-100">
            Phoenix Phanatics
<!--            -bottom-48 -left-42-->
            <span class="absolute pointer-events-none z-50 -bottom-64 -right-56 flex">
                {#if mounted}
                    <div transition:fly={{y: 2000, duration: 3000, opacity: 1}} class="rotate-60 display-contents">
                        <enhanced:img src={phoenixImg} alt="Flying Phoenix" class="h-144 scale-50 w-auto filter-[drop-shadow(5px_5px_5px_#222)]" />
                    </div>
                {/if}
            </span>
        </h1>
        <h2 class="text-4xl uppercase font-sans text-amber-100">Team 11104</h2>
        <p class="mt-4 text-xl max-w-2xl m-auto">
            We're a small happy-go-lucky <b>rookie team</b> who's in FIRST Robotics Competition to both
            <b>inspire and become inspired</b> by and through robotics! We've made it through
            our first season, and are ready to go forward!
        </p>
        <div class="p-5 flex flex-row gap-2 mx-auto w-max">
            <Button href="/">Join us</Button>
            <Button href="/">Contact us</Button>
        </div>
    </div>
    <div class="bottom-8 absolute text-sm opacity-50 text-white">
        Sponsored by Sulimani Law Firm, NASA, Hack Club, Argosy Foundation, BenaHealth for the 2026 Season.
    </div>
</div>

{@render children()}

<footer class="w-full bg-purple-950 text-amber-100 py-8 px-10 relative z-50 shadow-inner">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div class="flex flex-col items-center md:items-start gap-4">
            <div class="flex items-center justify-center gap-3">
                <div class="h-20 overflow-hidden rounded-full flex items-center justify-center">
                    <enhanced:img src={phoenixImg} alt="Phoenix Phanatics Logo" class="h-10 w-auto object-contain" />
                </div>
                <span class="font-harmoni text-2xl/6 uppercase tracking-wider">Phoenix<br>Phanatics</span>
            </div>
            <div class="mx-auto text-center text-sm text-amber-200/50">
                &copy; 2026 Phoenix Phanatics Team 11104. All rights reserved.
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
            <div class="flex flex-col gap-2">
                <h3 class="font-bold uppercase tracking-wider text-amber-500 mb-2">Team</h3>
                <a href="#about" class="hover:text-white transition-colors">About Us</a>
                <a href="#sponsors" class="hover:text-white transition-colors">Sponsors</a>
                <a href="#contact" class="hover:text-white transition-colors">Contact</a>
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="font-bold uppercase tracking-wider text-amber-500 mb-2">Resources</h3>
                <a href="https://www.firstinspires.org" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">FIRST Robotics</a>
                <a href="https://www.thebluealliance.com/team/11104" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">The Blue Alliance</a>
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="font-bold uppercase tracking-wider text-amber-500 mb-2">Socials</h3>
                <a href="https://instagram.com/phoenixphanatics11104" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Instagram</a>
                <a href="https://youtube.com/@phoenixphanatics11104" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">YouTube</a>
                <a href="https://tiktok.com/@phoenixphanatics11104" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">TikTok</a>
            </div>
        </div>
    </div>
</footer>
