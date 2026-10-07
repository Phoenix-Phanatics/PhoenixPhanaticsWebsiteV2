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
	import forward from '$lib/assets/forward.svg';
	import argosy from '$lib/assets/sponsors/sponsor-argosy.png?enhanced';
	import bena from '$lib/assets/sponsors/sponsor-bena.png?enhanced';
	import hc from '$lib/assets/sponsors/sponsor-hc.png?enhanced';
	import nasa from '$lib/assets/sponsors/sponsor-nasa.png?enhanced';
	import slf from '$lib/assets/sponsors/sponsor-slf.webp?enhanced';
	import Link from '$lib/components/Link.svelte';

	let sponsorsList = $state([
		{
			id: 'nasa',
			name: 'NASA',
			logo: nasa,
			url: 'https://www.nasa.gov',
			amount: 'Amount: $6,300',
			help: "Through the rookie grant, NASA helped to sponsor our team's registration costs for our first year. Their sponsorship of registration costs was the biggest contribution to our finances."
		},
		{
			id: 'argosy',
			name: 'Argosy Foundation/Hack Club',
			logo: argosy,
			url: 'https://argosyfnd.org',
			amount: 'Amount: $2,000',
			help: "Argosy Foundation and Hack Club provided $2,000 that allowed us to upgrade our robot's drivetrain and parts, giving us a competitive edge we would not have been able to achieve otherwise."
		},
		{
			id: 'hc',
			name: 'Argosy Foundation/Hack Club',
			logo: hc,
			url: 'https://hackclub.com',
			amount: 'Amount: $2,000',
			help: "Argosy Foundation and Hack Club provided $2,000 that allowed us to upgrade our robot's drivetrain and parts, giving us a competitive edge we would not have been able to achieve otherwise."
		},
		{
			id: 'slf',
			name: 'Sulimani Law Firm',
			logo: slf,
			url: 'https://sulimanilawfirm.com',
			amount: 'Amount: $500',
			help: 'Sulimani Law Firm managed our nonprofit registration and business costs, and has continually sponsored us through both monetary and non-monetary needs that cannot be singly enumerated.'
		},
		{
			id: 'bena',
			name: 'BenaHealth',
			logo: bena,
			url: 'https://benahealth.com',
			amount: 'Amount: $200',
			help: 'BenaHealth provided us with a helpful sponsorship to help us with our transportation and outreach costs.'
		}
	]);
</script>

<svelte:head>
	<title>Info - Phoenix Phanatics</title>
</svelte:head>

<div class="relative contents">
	<div id="sponsors" class="w-full scroll-m-24 overflow-hidden md:p-10">
		<div
			class="relative z-10 m-auto flex w-full flex-col bg-amber-800 p-10 text-white shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl py-5 text-4xl uppercase">Our Sponsors</h1>
			<div class="m-auto max-w-5xl">
				<p class="mb-4">
					We thank every single one of our sponsors and supporters for all of their support,
					monetary or otherwise. Without the grants, sponsorships, and parts that they've provided
					us, we would not be able to participate in any season!
				</p>
				<div class="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-6">
					{#each sponsorsList as sponsor (sponsor.id)}
						<div
							class="group flex flex-col overflow-hidden rounded-xl border border-amber-900 bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] md:flex-row"
						>
							<!-- Image -->
							<div
								class="flex w-full shrink-0 items-center justify-center border-b border-amber-100 bg-white p-6 md:w-1/3 md:border-r md:border-b-0"
							>
								<enhanced:img
									src={sponsor.logo}
									alt={sponsor.name}
									class="h-32 w-full object-contain transition-transform duration-300 group-hover:scale-105 md:h-48"
								/>
							</div>
							<!-- Information -->
							<div
								class="flex w-full flex-col justify-center bg-amber-100 p-6 text-amber-900 md:w-2/3"
							>
								<h3 class="text-2xl leading-tight font-bold text-amber-950">{sponsor.name}</h3>
								<p class="text-md mt-2 font-semibold text-amber-700">{sponsor.amount}</p>
								<p class="mt-3 text-sm leading-relaxed text-amber-900">{sponsor.help}</p>
								<a
									href={sponsor.url}
									target="_blank"
									rel="noopener noreferrer"
									class="mt-4 inline-block w-max text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800 hover:underline"
									>{sponsor.url}</a
								>
							</div>
						</div>
					{/each}
				</div>
			</div>
			<h2
				class="mx-auto mt-4 flex max-w-5xl flex-col items-start gap-3 text-2xl md:flex-row md:items-center"
			>
				<span class="block w-full"
					>If you would be at all interested in <b>sponsoring our team</b>, or otherwise supporting
					us, <b>check out our sponsorship packet below.</b></span
				>
				<Link
					class="w-max shrink-0 text-base font-normal"
					icon={forward}
					url="/Phoenix Phanatics - Sponsorship Packet.pdf">Check us out!</Link
				>
			</h2>
		</div>
	</div>

	<div id="finances" class="mt-10 w-full scroll-m-24 overflow-hidden md:mt-0 md:p-10">
		<div
			class="relative z-10 m-auto flex w-full flex-col bg-amber-800 p-10 text-white shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl py-5 text-4xl uppercase">Our Financials</h1>
			<div class="m-auto max-w-5xl">
				<p class="mb-4">
					We are a 501(c)(3) nonprofit, as assigned by the United States Internal Revenue Service
					(IRS). All donations that go to the team are tax-deductible, and all funds are used for
					the improvement of the robotics team, contributions to outreach, and costs associated with
					running the team. For the benefit of anyone interested in our spending, we have included
					our financials for the 2026 season, which includes a summary of our spending, our sources
					of money, and our sources of spending.
				</p>
				<iframe
					class="h-96 w-full"
					src="https://docs.google.com/document/d/e/2PACX-1vRuNDjS6cCd_2LptRnYdQXdd7f7NcW3cz7J8zoCODmjsgR0b5ZlgCirKGTkqa9hKghaUCDBfcny1yb4/pub?embedded=true"
				></iframe>
				<a
					class="mt-2 text-sm text-neutral-200 underline"
					target="_blank"
					href="https://docs.google.com/document/d/e/2PACX-1vRuNDjS6cCd_2LptRnYdQXdd7f7NcW3cz7J8zoCODmjsgR0b5ZlgCirKGTkqa9hKghaUCDBfcny1yb4/pub"
					>You can view the full document online here.</a
				>
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
