<script lang="ts">
	import { slide } from 'svelte/transition';
	import forward from '$lib/assets/forward.svg';
	import Link from '$lib/components/Link.svelte';
	import { cubicInOut } from 'svelte/easing';
	import team from '$lib/assets/team.jpg?enhanced';
	import middlesexCounty from '$lib/assets/middlesex county.jpg?enhanced';
	import Button from '$lib/components/Button.svelte';

	import argosy from '$lib/assets/sponsors/sponsor-argosy.png?enhanced';
	import bena from '$lib/assets/sponsors/sponsor-bena.png?enhanced';
	import hc from '$lib/assets/sponsors/sponsor-hc.png?enhanced';
	import nasa from '$lib/assets/sponsors/sponsor-nasa.png?enhanced';
	import slf from '$lib/assets/sponsors/sponsor-slf.webp?enhanced';
	import tbaImg from '$lib/assets/thebluealliance.png?enhanced';

	let expandedSection1 = $state(false);
	let expandedSection2 = $state(false);
	let expandedSection3 = $state(false);

	let contactName = $state('');
	let contactSubject = $state('');
	let contactMessage = $state('');

	const submitContactForm = (e: Event) => {
		e.preventDefault();
		const body = `Name: ${contactName}\n\nMessage:\n${contactMessage}`;
		window.location.href = `mailto:phoenixphanatics11104@gmail.com?subject=${encodeURIComponent(contactSubject)}&body=${encodeURIComponent(body)}`;
	};
</script>

<svelte:head>
	<title>Phoenix Phanatics</title>
</svelte:head>

<div class="relative contents">
	<div class="w-full overflow-hidden md:p-10">
		<div
			id="about"
			class="relative z-10 m-auto flex w-full scroll-m-24 flex-col bg-amber-800 p-10 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl py-5 text-4xl uppercase">About Us</h1>
			<div
				class="relative hidden w-full overflow-clip md:block md:scale-130 md:-rotate-5 lg:scale-120"
			>
				<enhanced:img
					src={middlesexCounty}
					alt="Middlesex County"
					class="-mt-10 h-72 w-full overflow-hidden object-cover"
				/>
				<div class="flex w-full overflow-hidden bg-black/60 py-2 whitespace-nowrap text-amber-100">
					<div class="animate-marquee inline-block">
						Carteret &bull; Cranbury &bull; Dunellen &bull; East Brunswick &bull; Edison &bull;
						Helmetta &bull; Highland Park &bull; Jamesburg &bull; Metuchen &bull; Middlesex &bull;
						Milltown &bull; Monroe &bull; New Brunswick &bull; North Brunswick &bull; Old Bridge
						&bull; Perth Amboy &bull; Piscataway &bull; Plainsboro &bull; Sayreville &bull; South
						Amboy &bull; South Brunswick &bull; South Plainfield &bull; South River &bull; Spotswood
						&bull; Woodbridge &bull;&nbsp;
					</div>
					<div class="animate-marquee inline-block">
						Carteret &bull; Cranbury &bull; Dunellen &bull; East Brunswick &bull; Edison &bull;
						Helmetta &bull; Highland Park &bull; Jamesburg &bull; Metuchen &bull; Middlesex &bull;
						Milltown &bull; Monroe &bull; New Brunswick &bull; North Brunswick &bull; Old Bridge
						&bull; Perth Amboy &bull; Piscataway &bull; Plainsboro &bull; Sayreville &bull; South
						Amboy &bull; South Brunswick &bull; South Plainfield &bull; South River &bull; Spotswood
						&bull; Woodbridge &bull;&nbsp;
					</div>
				</div>
			</div>
			<div class="relative z-30 w-full text-white md:mt-25">
				<h2
					class="mx-auto mb-4 flex max-w-5xl items-start justify-between gap-3 text-2xl md:text-4xl"
				>
					<span class="block w-full"
						>1. We are a <b>community team</b> based out of the general <b>Middlesex County</b> Area.</span
					>
					<button
						class="shrink-0 cursor-pointer text-amber-200 transition-all duration-300 hover:text-white {expandedSection1
							? 'rotate-180'
							: ''}"
						onclick={() => (expandedSection1 = !expandedSection1)}
						aria-label="Toggle section"
					>
						<svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M19 9l-7 7-7-7"
							></path></svg
						>
					</button>
				</h2>
				{#if expandedSection1}
					<div class="w-full md:mx-auto md:max-w-5xl" transition:slide={{ easing: cubicInOut }}>
						<button
							class="w-full cursor-pointer rounded-2xl bg-amber-900/80 p-2 text-left text-lg text-amber-50 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all hover:bg-amber-900/90 md:p-6"
							onclick={() => (expandedSection1 = false)}
						>
							<span class="flex w-full flex-col items-stretch gap-8 lg:flex-row">
								<span class="block w-full lg:w-1/3">
									<enhanced:img
										src={team}
										alt="team photo"
										class="h-full w-full rounded-lg object-cover shadow-xl"
									/>
								</span>
								<span class="flex w-full items-center">
									<span class="block">
										Rather than be a part of a single school, we serve anyone in Middlesex County
										who wants to learn the fun behind robotics! Our members are from schools that
										don't have dedicated FRC, or even robotics teams in general, and who want to
										explore opportunities in robotics. We are currently based in East Brunswick, and
										live in the basement of our team captain!
									</span>
								</span>
							</span>
						</button>
					</div>
				{/if}
			</div>
			<div class="relative z-30 mx-auto mt-5 w-full text-white">
				<h2
					class="mx-auto mb-4 flex max-w-5xl items-start gap-3 text-2xl md:items-center md:text-4xl"
				>
					<span class="block w-full"
						>2. We founded our team in the <b>2026 REBUILT®</b> season.</span
					>
					<button
						class="flex-shrink-0 cursor-pointer text-amber-200 transition-all duration-300 hover:text-white {expandedSection2
							? 'rotate-180'
							: ''}"
						onclick={() => (expandedSection2 = !expandedSection2)}
						aria-label="Toggle section"
					>
						<svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M19 9l-7 7-7-7"
							></path></svg
						>
					</button>
				</h2>
				{#if expandedSection2}
					<div class="mx-auto w-full max-w-5xl" transition:slide={{ easing: cubicInOut }}>
						<button
							class="w-full cursor-pointer rounded-2xl bg-amber-900/80 p-2 text-left text-lg text-amber-50 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all hover:bg-amber-900/90 md:p-6"
							onclick={() => (expandedSection2 = false)}
						>
							<span class="block w-full">
								We founded this team in June 2025, with the intention of creating a team where the
								students could be in charge of the team. The 2026 season was our rookie season, and
								despite some early hiccups, we were able to make it pretty far into the competition,
								and finished in the 4th alliance at our second competition!
								<br /><br />
								Our main goal for our rookie season was to absorb as much information as we could about
								how to run a robotics team, and to have fun doing it. We were able to accomplish both
								of those this season, and cannot wait to perform in the 2027 season!
							</span>
						</button>
					</div>
				{/if}
			</div>
			<div class="relative z-30 mx-auto mt-5 w-full text-white">
				<h2
					class="mx-auto mb-4 flex max-w-5xl items-start gap-3 text-2xl md:items-center md:text-4xl"
				>
					<span class="block w-full"
						>3. Our <b>mission</b> is to <b>spread robotics</b> to those who may have not been able
						to in <b>their own schools</b>. We hope to spread the love of robotics and competition
						that FRC inspires.</span
					>
					<button
						class="flex-shrink-0 cursor-pointer text-amber-200 transition-all duration-300 hover:text-white {expandedSection3
							? 'rotate-180'
							: ''}"
						onclick={() => (expandedSection3 = !expandedSection3)}
						aria-label="Toggle section"
					>
						<svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M19 9l-7 7-7-7"
							></path></svg
						>
					</button>
				</h2>
				{#if expandedSection3}
					<div class="mx-auto w-full max-w-5xl" transition:slide={{ easing: cubicInOut }}>
						<button
							class="w-full cursor-pointer rounded-2xl bg-amber-900/80 p-2 text-left text-lg text-amber-50 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all hover:bg-amber-900/90 md:p-6"
							onclick={() => (expandedSection3 = false)}
						>
							<span class="block w-full">
								Through FIRST Robotics, our team learned that robotics doesn't just involve a bunch
								of parts and LEGO assembly; you need teamwork, time management, and amazing outreach
								to fundraise, build, and grow our team. Our mission for our team is to inspire
								others through robotics: the same way we were when we founded our team.
								<br /><br />
								Our 3 founders, Muye, Eli, and Adithiya, founded this team as a result of their respective
								schools not having a dedicated FRC team. Having experienced some of the magic of robotics
								previously, they came together to form Phoenix Phanatics: a team where learning and building
								took place over bureaucracy and chain of command.
							</span>
						</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div class="relative contents">
	<div class="mt-10 w-full overflow-hidden md:mt-0 md:p-10">
		<div
			id="sponsors"
			class="relative z-10 m-auto flex w-full scroll-m-24 flex-col bg-amber-800 p-10 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl text-4xl uppercase">our sponsors</h1>
			<div class="mx-auto flex w-full max-w-5xl flex-row flex-wrap gap-2">
				Without our sponsors and grant-givers, it would not be possible for us to participate in any
				competition, much less a robotics competition.
			</div>
			<div
				class="mx-auto mt-8 flex w-full max-w-5xl flex-row flex-wrap items-center justify-center gap-4"
			>
				<a
					href="https://www.nasa.gov"
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-32 max-w-75 min-w-37.5 flex-auto cursor-pointer items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-10"
				>
					<enhanced:img src={nasa} alt="NASA" class="h-full w-full object-contain" />
				</a>
				<a
					href="https://argosyfnd.org"
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-32 max-w-75 min-w-37.5 flex-auto cursor-pointer items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-10"
				>
					<enhanced:img src={argosy} alt="Argosy Foundation" class="h-full w-full object-contain" />
				</a>
				<a
					href="https://hackclub.com"
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-32 max-w-75 min-w-37.5 flex-auto cursor-pointer items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-10"
				>
					<enhanced:img src={hc} alt="Hack Club" class="h-full w-full object-contain" />
				</a>
				<a
					href="https://sulimanilawfirm.com"
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-32 max-w-75 min-w-37.5 flex-auto cursor-pointer items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-10"
				>
					<enhanced:img src={slf} alt="Sulimani law firm" class="h-full w-full object-contain" />
				</a>
				<a
					href="https://benahealth.com"
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-32 max-w-75 min-w-37.5 flex-auto cursor-pointer items-center justify-center rounded-xl bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-10"
				>
					<enhanced:img src={bena} alt="BenaHealth" class="h-full w-full object-contain" />
				</a>
			</div>
			<Link icon={forward} class="mt-2 w-max self-end" url="/sponsors#sponsors">View more</Link>
		</div>
	</div>
</div>

<div class="relative contents">
	<div class="mt-10 w-full overflow-hidden md:mt-0 md:p-10">
		<div
			id="info"
			class="relative z-10 m-auto flex w-full scroll-m-24 flex-col bg-amber-800 p-10 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl text-4xl uppercase">Find out more</h1>
			<div class="mx-auto mt-2 flex w-full max-w-5xl flex-row flex-wrap gap-2">
				<Link url="https://firstinspires.org" icon={forward}>FIRST's website</Link>
				<Link url="/info#what" icon={forward}>What is FRC?</Link>
				<Link url="/info#why" icon={forward}>Why join us?</Link>
				<Link url="/sponsors#finances" icon={forward}>Our Financials</Link>
			</div>
			<div class="mx-auto mt-5 flex w-full max-w-5xl flex-col justify-center gap-2">
				<h2 class="font-bold uppercase">Our socials</h2>
				<div class="mx-auto flex w-full flex-row flex-wrap gap-2">
					<Link target="_blank" url="https://instagram.com/phoenixphanatics11104" icon={forward}
						>Instagram</Link
					>
					<Link target="_blank" url="https://youtube.com/@phoenixphanaics11104" icon={forward}
						>Youtube</Link
					>
					<Link target="_blank" url="https://tiktok.com/@phoenixphanatics11104" icon={forward}
						>TikTok</Link
					>
				</div>
			</div>

			<div class="mt-4 flex w-full flex-col justify-center">
				<h2
					id="stats"
					class="relative z-20 mx-auto w-full max-w-5xl scroll-m-28 font-bold text-white uppercase"
				>
					Our TBA Stats
				</h2>
				<div
					class="relative w-full overflow-clip py-2 md:scale-130 md:-rotate-5 md:py-0 lg:scale-120"
				>
					<a
						href="https://www.thebluealliance.com/team/11104"
						target="_blank"
						rel="noopener noreferrer"
						class="group relative block h-full w-full bg-black"
					>
						<enhanced:img
							src={tbaImg}
							alt="The Blue Alliance"
							class="inset-0 h-max w-full object-cover opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-50"
						/>
						<div
							class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center transition-opacity duration-300 group-hover:opacity-100 md:opacity-0"
						>
							<svg
								class="hidden text-white md:mb-4 md:block md:h-12 md:w-12"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
								></path></svg
							>
							<span class="text- font-bold text-white md:mb-2 md:text-3xl"
								>Click to view our TheBlueAlliance stats</span
							>
							<span class="hidden max-w-2xl text-white md:block md:text-lg"
								>TBA is a website where you can see robotics' teams' stats and performance in one
								aggregated centre.</span
							>
						</div>
					</a>
				</div>
			</div>

			<div class="flex w-full flex-col justify-center md:mt-24">
				<h2
					id="contact"
					class="relative z-20 mx-auto mb-6 w-full max-w-5xl scroll-m-28 font-bold text-white uppercase"
				>
					Contact Us
				</h2>
				<form
					onsubmit={submitContactForm}
					class="relative z-20 mx-auto flex w-full max-w-5xl flex-col gap-4 text-white"
				>
					<div class="flex flex-col gap-4 md:flex-row">
						<input
							type="text"
							bind:value={contactName}
							placeholder="Your Name"
							required
							class="flex-1 rounded-xl bg-amber-900/80 p-4 text-white placeholder-amber-200 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none"
						/>
						<input
							type="text"
							bind:value={contactSubject}
							placeholder="Subject"
							required
							class="flex-1 rounded-xl bg-amber-900/80 p-4 text-white placeholder-amber-200 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none"
						/>
					</div>
					<textarea
						bind:value={contactMessage}
						rows="5"
						placeholder="Your Message"
						required
						class="w-full resize-none rounded-xl bg-amber-900/80 p-4 text-white placeholder-amber-200 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none"
					></textarea>
					<Button type="submit" class="self-end">Send</Button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.animate-marquee {
		animation: marquee 30s linear infinite;
	}
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
