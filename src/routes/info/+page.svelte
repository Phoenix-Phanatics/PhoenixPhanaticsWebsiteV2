<script lang="ts">
	import frc1 from '$lib/assets/info/frcgallery/frc1.jpg?enhanced';
	import frc2 from '$lib/assets/info/frcgallery/frc2.jpg?enhanced';
	import frc3 from '$lib/assets/info/frcgallery/frc3.jpg?enhanced';
	import frc4 from '$lib/assets/info/frcgallery/frc4.jpg?enhanced';
	import frc5 from '$lib/assets/info/frcgallery/frc5.jpg?enhanced';
	import frc6 from '$lib/assets/info/frcgallery/frc6.jpg?enhanced';
	import team1 from '$lib/assets/info/team/item1.jpg?enhanced';
	import team2 from '$lib/assets/info/team/item2.jpg?enhanced';
	import team3 from '$lib/assets/info/team/item3.jpg?enhanced';
	import team4 from '$lib/assets/info/team/item4.jpg?enhanced';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const images = [frc1, frc2, frc3, frc4, frc5, frc6];
	let currentIndex = $state(0);

	const quotes = [
		{
			text: 'This was the first official robotics team I had ever been a part of, and it helped me in more ways than I could have thought.',
			author: 'Ayaan Kazi',
			co: '2029'
		},
		{
			text: 'This team inspired me to get excited for robotics and pursue it, not just through the competitions but even in my career goals.',
			author: 'Shiva Manikandan',
			co: '2028'
		},
		{
			text: 'Exploring every part of this team, from the mechanical to the outreach to my role on software, was such an experience.',
			author: 'Eli Nahoum',
			co: '2027'
		}
	];
	let currentQuoteIndex = $state(0);

	const teamImages = [team1, team2, team3, team4];
	let currentTeamIndex = $state(0);

	let frcInterval: ReturnType<typeof setInterval>;
	let quoteInterval: ReturnType<typeof setInterval>;
	let teamInterval: ReturnType<typeof setInterval>;

	const startFrcTimer = () => {
		clearInterval(frcInterval);
		frcInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
		}, 5000);
	};

	const startQuoteTimer = () => {
		clearInterval(quoteInterval);
		quoteInterval = setInterval(() => {
			currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
		}, 6000);
	};

	const startTeamTimer = () => {
		clearInterval(teamInterval);
		teamInterval = setInterval(() => {
			currentTeamIndex = (currentTeamIndex + 1) % teamImages.length;
		}, 5000);
	};

	onMount(() => {
		startFrcTimer();
		startQuoteTimer();
		startTeamTimer();

		return () => {
			clearInterval(frcInterval);
			clearInterval(quoteInterval);
			clearInterval(teamInterval);
		};
	});

	const setFrcIndex = (i: number) => {
		currentIndex = i;
		startFrcTimer();
	};
	const prevFrc = () => setFrcIndex((currentIndex - 1 + images.length) % images.length);
	const nextFrc = () => setFrcIndex((currentIndex + 1) % images.length);

	const setQuoteIndex = (i: number) => {
		currentQuoteIndex = i;
		startQuoteTimer();
	};
	const prevQuote = () => setQuoteIndex((currentQuoteIndex - 1 + quotes.length) % quotes.length);
	const nextQuote = () => setQuoteIndex((currentQuoteIndex + 1) % quotes.length);

	const setTeamIndex = (i: number) => {
		currentTeamIndex = i;
		startTeamTimer();
	};
	const prevTeam = () =>
		setTeamIndex((currentTeamIndex - 1 + teamImages.length) % teamImages.length);
	const nextTeam = () => setTeamIndex((currentTeamIndex + 1) % teamImages.length);
</script>

<svelte:head>
	<title>Info - Phoenix Phanatics</title>
</svelte:head>

<div class="relative contents">
	<div id="what" class="w-full scroll-m-24 overflow-hidden md:p-10">
		<div
			class="relative z-10 m-auto flex w-full flex-col bg-amber-800 p-10 text-white shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl py-5 text-4xl uppercase">What is FRC?</h1>

			<div class="relative m-auto mb-8 h-96 w-full max-w-5xl overflow-hidden shadow-2xl">
				{#each images as img, i}
					<div
						class="absolute inset-0 transition-opacity duration-1000 ease-in-out {i === currentIndex
							? 'z-10 opacity-100'
							: 'z-0 opacity-0'}"
					>
						<enhanced:img
							src={img}
							alt="FRC Gallery Image {i + 1}"
							class="animate-ken-burns h-full w-full origin-center object-cover"
							style="animation-play-state: {i === currentIndex ? 'running' : 'paused'}"
						/>
					</div>
				{/each}

				<button
					onclick={prevFrc}
					class="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/60"
					aria-label="Previous image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
				</button>
				<button
					onclick={nextFrc}
					class="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/60"
					aria-label="Next image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</button>

				<div class="absolute right-0 bottom-4 left-0 z-20 flex justify-center gap-2">
					{#each images as _, i}
						<button
							aria-label="Go to Image {i + 1}"
							onclick={() => setFrcIndex(i)}
							class="h-3 w-3 cursor-pointer rounded-full transition-all duration-300 {i ===
							currentIndex
								? 'scale-125 bg-amber-400'
								: 'bg-white/50 hover:bg-white'}"
						></button>
					{/each}
				</div>
			</div>

			<div class="m-auto max-w-5xl">
				<h2 class="mb-2 text-2xl font-bold">
					The <b>FIRST® Robotics Competition</b> is FIRST's premiere robotics competition.
				</h2>
				<p class="mb-4">
					Teams that participate in FRC don't just have to build a robot using LEGO instructions:
					teams need to fundraise, design, and build lasting mechanisms that can be easily repaired,
					fully functionable, and bring their team to victory. There is no limit to how many members
					can be on a team, and no limit to what you can design (within the limits held in place by
					FIRST's safety book). No matter what you're good at, there's 100% a place for you in FRC.
				</p>
				<h2 class="mb-2 text-2xl font-bold">
					Robots in FRC can be as heavy as 120 pounds, and as big as 28 cubic feet.
				</h2>
				<p class="mb-4">
					They can feature many things, such as mechanical arms, turrets, elevator shafts, large
					shooters, and huge reservoirs, depending on the game that year. In a single year, you can
					see a lot of solutions to solve the same problem, and FRC rewards creative thinking and
					innovative design over a template. Every year incurs a new challenge, and every year
					brings on new and innovative ideas to optimise for the best robot.
				</p>
				<h2 class="mb-2 text-2xl font-bold">It's not just about building either.</h2>
				<p class="mb-4">
					FRC guarantees no funds to any team; in fact, a team's yearly registration costs $6,000,
					just to sign up. Teams have to reach out to sponsors, perform outreach events, and get
					donations from the community just to have a chance to play. That's why a big part of any
					robotics team is the business team: a dedicated subsection of members that help to
					fundraise, reach out to businesses, and make the team possible.
				</p>
				<h2 class="mb-2 text-2xl font-bold">FRC isn't just a robotics competition.</h2>
				<p class="mb-4">
					<b>
						FIRST's mission is to provide life-changing robotics programs that give young people the
						skills, confidence, and resilience to build a better world.
					</b>
					Or, in other words, to
					<a href="/#aboutus">
						<b>spread the love of robotics and competition that FRC inspires.</b>
					</a>
					FRC is rooted in community, inspiration, and social experiences: teams always try to help out
					each other, whether it's at competition, off the field, or just a quick email asking for help.
					It's also the responsibility of the robotics team to inspire others to explore robotics!
					<br /><br />
					With 87,000 youth participants from 28 nations, FRC gives students around the world opportunities
					to gain hands-on experience in engineering as well as other fields like business, community
					outreach, and leadership. FRC is also home to one of the nicest and most cohesive communities,
					with students around the world adhering to ideals like Gracious Professionalism and teams readily
					helping each other to achieve shared goals.
				</p>
				<h2 class="mb-2 text-2xl font-bold">
					FRC draws from the abilities of many students with different talents.
				</h2>
				<p class="mb-4">
					On top of building robots, teams must acquire and maintain business partnerships, conduct
					community outreach and education, and design their own branding and merch. FRC is a great
					opportunity for students to gain hands-on experience in many fields, including:
				</p>
				<ul class="list-inside list-disc">
					<li>Mechanical Engineering</li>
					<li>Electrical Engineering</li>
					<li>Computer Science</li>
					<li>Machining</li>
					<li>Woodwork</li>
					<li>Business</li>
					<li>Marketing</li>
					<li>Social Media</li>
					<li>Community Outreach</li>
					<li>Graphic Design</li>
				</ul>
			</div>
		</div>
	</div>

	<div id="why" class="mt-10 w-full scroll-m-24 overflow-hidden md:mt-0 md:p-10">
		<div
			class="relative z-10 m-auto flex w-full flex-col bg-amber-800 p-10 text-white shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl py-5 text-4xl uppercase">Why join us?</h1>

			<div class="m-auto max-w-5xl">
				<h2 class="mb-2 text-2xl font-bold">We're a small team!</h2>
				<p class="mb-4">
					Rather than work with a fixed structure, every member of the team has the opportunity to
					work on every part of the team. This means even if you don't know a ton about the
					mechanical part, you can learn through experience, or if you have experience with
					electrical work, you won't be constantly stuck on electrical (which is 100% a boon).
				</p>
				<p class="mb-4">
					Being a small team, it means that each member's voice is very loud, and has a major place
					in the direction of the team. Everyone has a say into how the team is run, and what the
					team does, which makes this team a lot more personal for everyone involved.
				</p>

				<div
					class=" relative my-10 h-88 overflow-hidden rounded-2xl border border-amber-700/50 bg-amber-900/50 shadow-inner md:h-48"
				>
					<div
						class=" pointer-events-none absolute -top-4 -left-2 z-0 font-serif text-amber-500 opacity-20"
					>
						"
					</div>

					{#key currentQuoteIndex}
						<div
							class="absolute inset-0 flex flex-col items-center gap-6 p-2 pt-8 md:flex-row md:items-end md:justify-between md:p-8 md:pt-8"
							in:fly={{ y: 20, duration: 800, delay: 300 }}
							out:fade={{ duration: 300 }}
						>
							<blockquote
								class="font-harmoni z-10 flex-1 px-4 text-center text-2xl/20 leading-normal text-amber-100 md:px-8 md:py-4 md:text-left md:text-2xl lg:text-4xl"
							>
								{quotes[currentQuoteIndex].text}
							</blockquote>
							<div
								class="z-10 flex shrink-0 flex-col items-center pb-6 md:items-end md:pr-4 md:pb-6"
							>
								<div class="mb-3 h-1 w-16 bg-amber-500"></div>
								<cite
									class="text-center font-sans text-base font-bold tracking-widest text-amber-200 uppercase not-italic md:w-min md:text-right"
								>
									{quotes[currentQuoteIndex].author}
								</cite>
								<div
									class="text-center font-sans text-sm font-bold text-amber-200 not-italic md:text-right"
								>
									Class of {quotes[currentQuoteIndex].co}
								</div>
							</div>
						</div>
					{/key}

					<button
						onclick={prevQuote}
						class="absolute top-1/2 left-0 z-30 -translate-y-1/2 p-2 text-amber-200/50 transition-colors hover:text-amber-200"
						aria-label="Previous quote"
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
					</button>
					<button
						onclick={nextQuote}
						class="absolute top-1/2 -right-0 z-30 -translate-y-1/2 p-2 text-amber-200/50 transition-colors hover:text-amber-200"
						aria-label="Next quote"
					>
						<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
							></path>
						</svg>
					</button>

					<div class="absolute right-0 bottom-4 left-0 z-20 flex justify-center gap-2">
						{#each quotes as _, i}
							<button
								aria-label="Go to quote {i + 1}"
								onclick={() => setQuoteIndex(i)}
								class="h-2 w-2 cursor-pointer rounded-full transition-all duration-300 {i ===
								currentQuoteIndex
									? 'scale-125 bg-amber-400'
									: 'bg-white/30 hover:bg-white/50'}"
							></button>
						{/each}
					</div>
				</div>
				<h2 class="mb-2 text-2xl font-bold">We're a student led team!</h2>
				<p class="mb-4">
					A lot of new teams are completely directed by a coach or mentors. Our team, however, is
					different: we don't have any strict direction we have to follow. The students, as in us,
					completely direct what we do throughout the season. We're completely dependent on the
					judgement on some teenagers, so we have a lot of fun with the freedom of design and
					consequence of decisions!
				</p>
				<p class="mb-4">
					Because of this, we take a lot of pride in what we design. In everything, from our side
					panels, to our t-shirt, you can literally see the team's effect on there. Every part of
					the team works together to give us both direction and magnitude!
				</p>
				<h2 class="mb-2 text-2xl font-bold">We're a community team!</h2>
				<p class="mb-4">
					We already mentioned this, but we are a team that serves all of Middlesex. If your school
					doesn't have a robotics team, it's often hard to get your foot in the door. However, we
					accept all members from all around Middlesex, so even if your school doesn't have the
					funds for a team, we can introduce you to this new world.
				</p>

				<div class="relative mt-8 h-96 w-full overflow-hidden shadow-2xl">
					{#each teamImages as img, i}
						<div
							class="absolute inset-0 transition-opacity duration-1000 ease-in-out {i ===
							currentTeamIndex
								? 'z-10 opacity-100'
								: 'z-0 opacity-0'}"
						>
							<enhanced:img
								src={img}
								alt="Team Gallery Image {i + 1}"
								class="animate-ken-burns h-full w-full origin-center object-cover"
								style="animation-play-state: {i === currentTeamIndex ? 'running' : 'paused'}"
							/>
						</div>
					{/each}

					<button
						onclick={prevTeam}
						class="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/60"
						aria-label="Previous image"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
					</button>
					<button
						onclick={nextTeam}
						class="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/60"
						aria-label="Next image"
					>
						<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
							></path>
						</svg>
					</button>

					<div class="absolute right-0 bottom-4 left-0 z-20 flex justify-center gap-2">
						{#each teamImages as _, i}
							<button
								aria-label="Go to Image {i + 1}"
								onclick={() => setTeamIndex(i)}
								class="h-3 w-3 cursor-pointer rounded-full transition-all duration-300 {i ===
								currentTeamIndex
									? 'scale-125 bg-amber-400'
									: 'bg-white/50 hover:bg-white'}"
							></button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes ken-burns {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.15);
		}
	}

	:global(.animate-ken-burns) {
		animation: ken-burns 15s ease-in-out infinite alternate;
	}
</style>
