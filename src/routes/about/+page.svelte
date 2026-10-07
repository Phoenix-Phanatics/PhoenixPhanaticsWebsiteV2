<script lang="ts">
	import team from '$lib/assets/team.jpg?enhanced';
	import venky from '$lib/assets/venky.png?enhanced';
	import muye from '$lib/assets/muye.jpg?enhanced';
	import eli from '$lib/assets/eli.jpg?enhanced';
	import Section from '$lib/components/Section.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import PlaceholderPhoto from '$lib/components/PlaceholderPhoto.svelte';
	import CtaLink from '$lib/components/CtaLink.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { SEASON } from '$lib/site';
	import forward from '$lib/assets/forward.svg';
	import Link from '$lib/components/Link.svelte';

	type Member = {
		name: string;
		role: string;
		classOf?: number;
		bio: string;
		photo?: typeof team;
		recruit?: boolean;
	};

	// TODO: Replace the placeholder roles, bios, and photos with real ones.
	const members: Member[] = [
		{
			name: 'Muye Chen',
			role: 'Co-founder · Mechanical Lead',
			classOf: 2027,
			bio: 'Muye turns sketches into metal. He led the design of our drivetrain and the intake on our rookie robot. When he is not in CAD, he is probably taking something apart to see how it works.',
			photo: muye
		},
		{
			name: 'Eli Nahoum',
			role: 'Co-founder · Software Lead',
			classOf: 2027,
			bio: "Eli writes the code that makes the robot move, from autonomous routines to driver controls. He's tried just about every part of the team, from mechanical to outreach, and loves helping new members get started with programming.",
			photo: eli
		},
		{
			name: 'Adithiya Venkatakrishnan',
			role: 'Co-founder · Business Lead',
			classOf: 2027,
			bio: 'Adithiya handles sponsorships, finances, and outreach. He wrote our first sponsorship packet and spends more time on emails than he would like to admit. Off the field, he is into debate and long bike rides.',
			photo: venky
		},
		{
			name: 'You?',
			role: `Our next ${SEASON} member`,
			bio: 'No experience needed, and no school team required. If you are in high school in Middlesex County and curious about robotics, there is a spot for you on Phoenix Phanatics.',
			recruit: true
		}
	];

	const milestones = [
		{ when: 'June 2025', title: 'Team founded', text: 'Three students start Phoenix Phanatics.' },
		{
			when: 'Fall 2025',
			title: 'First competitions',
			text: 'We play in unofficial preseason events and reach the semifinals at GIRLPower.'
		},
		{
			when: 'Fall 2025',
			title: 'Community outreach',
			text: 'A Halloween robot candy run, plus a visit to Thomas Jefferson Middle School in Edison.'
		},
		{
			when: 'Spring 2026',
			title: 'Rookie All-Star',
			text: 'We win the Rookie All-Star Award at Seneca and reach the semifinals at Montgomery.'
		},
		{
			when: 'June 2026',
			title: 'Duel on the Delaware',
			text: 'We bring new students to an offseason event to try FRC for the first time.'
		},
		{
			when: `${SEASON} season`,
			title: "What's next",
			text: 'Our second season and our biggest one yet. Join us!'
		}
	];
</script>

<svelte:head>
	<title>About Us | Phoenix Phanatics</title>
	<meta
		name="description"
		content="Meet Phoenix Phanatics, FRC Team 11104: a student-led community robotics team from Middlesex County, NJ."
	/>
</svelte:head>

<div class="relative contents">
	<Section id="about" title="About us">
		<!-- Team photo -->
		<div class="mx-auto w-full max-w-5xl" use:reveal>
			<figure class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
				<enhanced:img
					src={team}
					alt="The Phoenix Phanatics team standing together"
					class="aspect-4/3 w-full object-cover transition-transform duration-1000 group-hover:scale-105 md:aspect-video"
					sizes="(min-width: 1024px) 1024px, 100vw"
				/>
				<div
					class="absolute inset-0 bg-linear-to-t from-amber-950/90 via-amber-950/10 to-transparent"
				></div>
				<figcaption class="absolute right-0 bottom-0 left-0 p-5 md:p-8">
					<p class="font-harmoni text-3xl uppercase md:text-5xl">Phoenix Phanatics</p>
					<p class="mt-1 text-sm font-semibold tracking-widest text-amber-200 uppercase">
						FRC Team 11104 · The {SEASON - 1} rookie team
					</p>
				</figcaption>
			</figure>
		</div>

		<h2
			class="mx-auto mt-4 flex max-w-5xl flex-col items-start gap-3 text-2xl md:flex-row md:items-center"
		>
			<span class="block w-full"
				>Want to learn more about our team and what we do? Check out our information page for a
				deeper dive into the specifics of our team and the FIRST Robotics Competition.</span
			>
			<Link class="w-max shrink-0 text-base font-normal" icon={forward} url="/info"
				>Check us out!</Link
			>
		</h2>
	</Section>

	<Section id="team" title="Meet the team" spaced>
		<div class="mx-auto w-full max-w-5xl" use:reveal>
			<Carousel items={members} label="Team members" itemName="member" interval={7000}>
				{#snippet slide(member)}
					<div class="grid items-center gap-6 md:grid-cols-[minmax(0,240px)_1fr] md:gap-10">
						<div class="mx-auto w-40 sm:w-48 md:w-full">
							{#if member.photo}
								<enhanced:img
									src={member.photo}
									alt="Photo of {member.name}"
									class="aspect-square w-full rounded-2xl object-cover shadow-lg"
								/>
							{:else if member.recruit}
								<div
									class="grid aspect-square w-full place-items-center rounded-2xl border-2 border-dashed border-amber-300/60 bg-amber-950/50 shadow-lg"
								>
									<span class="font-harmoni text-8xl text-amber-200" aria-hidden="true">?</span>
								</div>
							{:else}
								<PlaceholderPhoto
									name={member.name}
									class="aspect-square w-full rounded-2xl shadow-lg"
								/>
							{/if}
						</div>
						<div class="text-center md:text-left">
							<h3 class="font-harmoni text-3xl text-amber-50 uppercase md:text-4xl">
								{member.name}
							</h3>
							<div
								class="mx-auto my-3 h-1 w-16 bg-linear-to-r from-amber-400 to-amber-600 md:mx-0"
							></div>
							<p class="text-sm font-bold tracking-widest text-amber-200 uppercase">
								{member.role}
							</p>
							{#if member.classOf}
								<p class="mt-1 text-sm font-semibold text-white/60">Class of {member.classOf}</p>
							{/if}
							<p class="mt-4 leading-relaxed text-amber-50 md:text-lg">{member.bio}</p>
							{#if member.recruit}
								<CtaLink href="/#join" class="mt-6">Join the team</CtaLink>
							{/if}
						</div>
					</div>
				{/snippet}

				{#snippet indicator(member, _i, active)}
					<span
						class="block h-9 w-9 overflow-hidden rounded-full ring-2 transition-all duration-300 {active
							? 'scale-110 ring-amber-300'
							: 'opacity-60 ring-transparent hover:opacity-100'}"
					>
						{#if member.photo}
							<enhanced:img src={member.photo} alt="" class="h-full w-full object-cover" />
						{:else if member.recruit}
							<span
								class="font-harmoni grid h-full w-full place-items-center bg-amber-950 text-amber-200"
								>?</span
							>
						{:else}
							<PlaceholderPhoto name={member.name} class="h-full w-full" />
						{/if}
					</span>
				{/snippet}
			</Carousel>
		</div>
	</Section>

	<Section id="journey" eyebrow="Our story so far" title="Milestones" spaced>
		<ol class="relative mx-auto w-full max-w-5xl border-l border-amber-300/30 pl-8 md:pl-10">
			{#each milestones as m, i (m.title)}
				<li class="relative pb-10 last:pb-0" use:reveal={{ delay: i * 80 }}>
					<span
						class="absolute top-1.5 -left-[calc(2rem+7px)] h-3.5 w-3.5 rounded-full bg-linear-to-br from-amber-300 to-amber-500 shadow-lg md:-left-[calc(2.5rem+7px)]"
						aria-hidden="true"
					></span>
					<p class="text-xs font-bold tracking-[0.25em] text-amber-300 uppercase">{m.when}</p>
					<h3 class="mt-1 text-xl font-bold">{m.title}</h3>
					<p class="mt-1 text-white/75">{m.text}</p>
				</li>
			{/each}
		</ol>
		<div class="mx-auto mt-10 flex w-full max-w-5xl flex-col gap-3 sm:flex-row" use:reveal>
			<CtaLink href="/#join">Join the {SEASON} team</CtaLink>
			<CtaLink href="/help-us#help" variant="outline">Support our season</CtaLink>
		</div>
	</Section>
</div>
