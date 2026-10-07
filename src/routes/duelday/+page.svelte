<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelector('#address')!.textContent =
			'64 Independence Drive, East Brunswick, NJ 08816';
	});
</script>

<svelte:head>
	<title>Info - Phoenix Phanatics</title>
</svelte:head>

<div class="relative contents">
	<div id="main" class="w-full scroll-m-24 overflow-hidden md:p-10">
		<div
			class="relative z-10 m-auto flex w-full flex-col bg-amber-800 p-10 text-white shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl py-5 text-4xl uppercase">
				Duel on the Delaware
			</h1>

			<div class="m-auto max-w-5xl">
				<p class="mb-4">
					<b>Duel on the Delaware</b> is an unofficial off-season competition that uses the 2026 FRC theme.
					It is hosted by 316 LunaTecs, and is a great opportunity for anyone interested in robotics to
					experience the thrill of FRC without the commitment of a full season. It's a great way to get
					a taste of what FRC is like, and to see if it's something you would be interested in pursuing
					further!
				</p>
				<p class="mb-4">
					Whether you're a incoming freshman or soon-to-be senior, experience with robotics and FRC
					will provide for a great opportunity to learn about engineering, programming, teamwork,
					and most importantly, the FRC community. At Duel on the Delaware, you'll get to not only
					witness, but also actively participate in helping our robot make it onto the field!
				</p>
				<p class="mb-4">
					While this competition is aimed towards high school students who will be attending grade
					9-12 in the 2026-27 school year, younger students are also invited to come, albeit with
					parental supervision to meet child safety rules. Parents of students are welcome to join
					us, but due to space limitations, they may not be able to enter our team's workspace. This
					event is free and does not require any future commitment to our team; it is meant to be a
					preview to FIRST Robotics for anyone interested.
				</p>
				<iframe
					src="https://drive.google.com/file/d/10Rgu_y2t97EaiDcZ79tL8FtK-zUj8oQE/preview"
					width="100%"
					height="480"
				></iframe>
				<div class="mt-1 text-sm">
					Duel on the Delaware Event Packet. <a
						class="underline"
						href="https://drive.google.com/file/d/10Rgu_y2t97EaiDcZ79tL8FtK-zUj8oQE/view"
						>View on Google Drive</a
					>
				</div>

				<h2 class="mb-2 pt-4 text-2xl font-bold">Event Information</h2>
				<p>
					Date: Saturday, June 20th, 2026<br />
					Time: 7am-6pm (you can come late/leave early but please provide us with warning)<br />
					Location: Salem Community College, Davidow Building, 460 Hollywood Ave, Carneys Point, NJ 08069<br
					/>
					Please note that
					<b>our team will be trying to arrange transportation for anyone who needs it.</b> If you are
					unable to find transportation to or from the event, you may still be able to come; we will do
					our best to accommodate you.
				</p>
			</div>
		</div>
		<div
			class="relative z-10 m-auto mt-10 flex w-full flex-col bg-amber-800 p-10 text-white shadow-[0_-10px_20px_rgba(0,0,0,0.3)]"
		>
			<h1 class="font-harmoni m-auto w-full max-w-5xl py-5 text-4xl uppercase">Join us!</h1>

			<div class="m-auto max-w-5xl">
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSc6-C_5mVUcoGpSouVSdm_BM9EfKQJ5V8dAEJE0r7LyFQoiOQ/viewform?usp=header"
					width="100%"
					height="480"
				></iframe>
				<div class="mt-1 text-sm">
					Registration form. <a
						class="underline"
						href="https://docs.google.com/forms/d/e/1FAIpQLSc6-C_5mVUcoGpSouVSdm_BM9EfKQJ5V8dAEJE0r7LyFQoiOQ/viewform?usp=header"
						>View on Google Forms</a
					>
				</div>
				<p class="mt-1 mb-4">
					If you'd like to join us for Duel on the Delaware, fill out the <b>registration form</b>
					above! This will provide us with information necessary to ensure you'll be able to
					<b>attend as a part of our team</b>, and join us with the robot.
				</p>
				<p class="mb-4">
					We also highly recommend you try to <b>join us at a build meeting</b> before the
					competition. Over the next two and a half weeks before the event, our team will be meeting
					on every weekday at <span class="font-bold" id="address">ENABLE JAVASCRIPT</span>, from 7
					PM to 9 PM. Attending team meetings will allow you to meet our team, receive training, and
					participate in more roles at Duel.
					<br /><br />
					If you're interested in joining us for a build meeting, please reach out to us through our
					<a class="underline" href="mailto:phoenixphanatics11104@gmail.com"
						>email (phoenixphanatics11104@gmail.com)</a
					>, our Instagram (<a
						class="underline"
						href="https://instagram.com/phoenixphanatics11104"
						target="_blank"
						rel="noopener noreferrer">@phoenixphanatics11104</a
					>) or in our Discord server (<a class="underline" href="https://discord.gg/cwMGPzth53"
						>https://discord.gg/cwMGPzth53</a
					>)! We would be more than happy to accommodate and introduce the team to you!
				</p>

				<p class="mb-4">
					You can find out more about our team on our main page, and if you have any other
					questions, we are always available to answer them!
				</p>
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
