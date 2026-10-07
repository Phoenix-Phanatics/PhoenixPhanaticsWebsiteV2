<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import CtaLink from '$lib/components/CtaLink.svelte';
	import { SPONSORSHIP_PACKET, EMAIL, GOFUNDME } from '$lib/site';

	const tiers = [
		{
			name: 'Supporter',
			amount: '$200+',
			benefits: ['Thank you letter', 'Displayed on our website as a supporter'],
			color: 'bg-red-500' // Matches the red from the image
		},
		{
			name: 'Bronze',
			amount: '$500+',
			benefits: ['Logo on Robot', 'Small logo on our apparel'],
			color: 'bg-orange-500' // Matches the orange from the image
		},
		{
			name: 'Silver',
			amount: '$1000+',
			benefits: [
				'Large logo on banner at events',
				'Large logo on our apparel',
				'Shoutout on our social media'
			],
			color: 'bg-gray-300 text-gray-900' // Matches the silver/gray from the image
		},
		{
			name: 'Gold',
			amount: '$2000+',
			benefits: [
				'Prominent logo displayed on website',
				'Mention in social media bio',
				'In person robot demonstration'
			],
			color: 'bg-yellow-400 text-yellow-900' // Matches the gold/yellow from the image
		},
		{
			name: 'Platinum',
			amount: '$5000+',
			benefits: ['Anytime robot demonstration', 'Advertisement in outreach pamphlets'],
			color: 'bg-slate-100 text-slate-900' // Matches the platinum/white from the image
		}
	];
</script>

<svelte:head>
	<title>Help Us - Phoenix Phanatics</title>
</svelte:head>

<div class="relative contents">
	<Section id="support" title="Support the Phanatics" eyebrow="Fundraising">
		<div class="m-auto max-w-5xl">
			<p class="mb-8 max-w-3xl text-lg text-amber-100">
				We are a 501(c)(3) nonprofit robotics team. Our mission relies heavily on the generous
				contributions of our community, sponsors, and individual supporters. Running a competitive
				FRC team requires significant funding for robot parts, registration fees, travel expenses,
				and community outreach initiatives. Your support makes it all possible.
			</p>

			<div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- Corporate Sponsorship -->
				<div
					class="flex h-full flex-col rounded-2xl border border-amber-700/50 bg-amber-900/50 p-8 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)]"
				>
					<h3 class="mb-4 text-2xl font-bold text-white">Corporate Sponsorship</h3>
					<p class="mb-6 flex-grow text-amber-200">
						Partner with us as a corporate sponsor. Your business will gain visibility on our robot,
						merchandise, and website while directly supporting STEM education in our community.
						Check out our sponsorship packet below for detailed tier information.
					</p>
					<div class="mt-auto flex items-center justify-between pt-4">
						<CtaLink
							href="mailto:{EMAIL}"
							variant="primary"
							onclick={(e) => {
								e.preventDefault();
								window.open(`mailto:${EMAIL}`, '_blank', 'noopener,noreferrer');
							}}
						>
							Email Us
						</CtaLink>
						<span class="text-xs font-semibold tracking-widest text-amber-400 uppercase"
							>Tax Deductible</span
						>
					</div>
				</div>

				<!-- Individual Donations -->
				<div
					class="flex h-full flex-col rounded-2xl border border-amber-700/50 bg-amber-900/50 p-8 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)]"
				>
					<h3 class="mb-4 text-2xl font-bold text-white">Individual Donations</h3>
					<p class="mb-6 flex-grow text-amber-200">
						Every contribution, no matter the size, makes a difference. You can support our team
						directly through our GoFundMe campaign. Help us reach our season goals and provide our
						students with incredible engineering opportunities.
					</p>
					<div class="mt-auto flex items-center justify-between pt-4">
						<CtaLink href={GOFUNDME} target="_blank" rel="noopener noreferrer">Donate Now</CtaLink>
						<span class="text-xs font-semibold tracking-widest text-amber-400 uppercase"
							>Tax Deductible</span
						>
					</div>
				</div>
			</div>
		</div>
	</Section>

	<Section id="tiers" title="Sponsorship Tiers" spaced>
		<div class="m-auto max-w-5xl">
			<div class="flex flex-col gap-4">
				{#each tiers as tier}
					<div
						class="overflow-hidden rounded-xl {tier.color ||
							'bg-amber-900/50 text-white'} border border-amber-700/20 shadow-[inset_0_6px_15px_rgba(0,0,0,0.2)]"
					>
						<div class="flex flex-col md:flex-row">
							<div
								class="flex w-full flex-col justify-center border-black/10 p-8 md:w-1/3 md:border-r"
							>
								<h4 class="font-harmoni text-4xl uppercase md:text-5xl">{tier.name}</h4>
								<p class="mt-3 text-3xl font-bold opacity-90">{tier.amount}</p>
							</div>
							<div class="w-full p-8 md:w-2/3">
								<ul class="list-inside list-disc space-y-3 opacity-90">
									{#each tier.benefits as benefit}
										<li class="text-xl md:text-2xl">{benefit}</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Section>

	<Section id="sponsorship-packet" title="Sponsorship Packet" spaced>
		<div class="m-auto max-w-5xl">
			<p class="mb-6 text-amber-100">
				Our sponsorship packet outlines our mission, our history, and the various benefits of
				partnering with the Phoenix Phanatics. You can view it directly below or download it for
				your records.
			</p>

			<div
				class="overflow-hidden rounded-xl border border-amber-700/50 bg-amber-900/50 p-2 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)]"
			>
				<iframe
					title="Phoenix Phanatics Sponsorship Packet"
					class="h-[800px] w-full rounded-lg bg-white"
					src={SPONSORSHIP_PACKET}
				></iframe>
			</div>

			<div class="mt-8 flex justify-center gap-4">
				<CtaLink
					href={SPONSORSHIP_PACKET}
					download="Phoenix Phanatics - Sponsorship Packet.pdf"
					variant="outline"
				>
					Download PDF
				</CtaLink>
			</div>
		</div>
	</Section>
</div>
