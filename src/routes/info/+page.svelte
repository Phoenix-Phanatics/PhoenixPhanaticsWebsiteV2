<script lang="ts">
    import frc1 from "$lib/assets/info/frcgallery/frc1.jpg?enhanced";
    import frc2 from "$lib/assets/info/frcgallery/frc2.jpg?enhanced";
    import frc3 from "$lib/assets/info/frcgallery/frc3.jpg?enhanced";
    import frc4 from "$lib/assets/info/frcgallery/frc4.jpg?enhanced";
    import frc5 from "$lib/assets/info/frcgallery/frc5.jpg?enhanced";
    import frc6 from "$lib/assets/info/frcgallery/frc6.jpg?enhanced";
    import team1 from "$lib/assets/info/team/item1.jpg?enhanced";
    import team2 from "$lib/assets/info/team/item2.jpg?enhanced";
    import team3 from "$lib/assets/info/team/item3.jpg?enhanced";
    import team4 from "$lib/assets/info/team/item4.jpg?enhanced";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    const images = [frc1, frc2, frc3, frc4, frc5, frc6];
    let currentIndex = $state(0);

    const quotes = [
        { text: "This was the first official robotics team I had ever been a part of, and it helped me in more ways than I could have thought.", author: "Ayaan Kazi", co:"2029" },
        { text: "This team inspired me to get excited for robotics and pursue it, not just through the competitions but even in my career goals.", author: "Shiva Manikandan", co:"2028" },
        { text: "Exploring every part of this team, from the mechanical to the outreach to my role on software, was such an experience.", author: "Eli Nahoum", co:"2027" }
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

    const setFrcIndex = (i: number) => { currentIndex = i; startFrcTimer(); };
    const prevFrc = () => setFrcIndex((currentIndex - 1 + images.length) % images.length);
    const nextFrc = () => setFrcIndex((currentIndex + 1) % images.length);

    const setQuoteIndex = (i: number) => { currentQuoteIndex = i; startQuoteTimer(); };
    const prevQuote = () => setQuoteIndex((currentQuoteIndex - 1 + quotes.length) % quotes.length);
    const nextQuote = () => setQuoteIndex((currentQuoteIndex + 1) % quotes.length);

    const setTeamIndex = (i: number) => { currentTeamIndex = i; startTeamTimer(); };
    const prevTeam = () => setTeamIndex((currentTeamIndex - 1 + teamImages.length) % teamImages.length);
    const nextTeam = () => setTeamIndex((currentTeamIndex + 1) % teamImages.length);
</script>

<svelte:head>
    <title>Info - Phoenix Phanatics</title>
</svelte:head>

<div class="contents relative">
    <div id="what" class="w-full p-10 overflow-hidden">
        <div class="flex flex-col bg-amber-800 m-auto p-10 relative z-10 w-full shadow-[0_-10px_20px_rgba(0,0,0,0.3)] text-white">
            <h1 class="uppercase text-4xl font-harmoni w-full py-5 max-w-5xl m-auto">What is FRC?</h1>

            <div class="relative w-full max-w-5xl m-auto h-96 overflow-hidden shadow-2xl mb-8">
                {#each images as img, i}
                    <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out {i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}">
                        <enhanced:img
                                src={img}
                                alt="FRC Gallery Image {i + 1}"
                                class="w-full h-full object-cover origin-center animate-ken-burns"
                                style="animation-play-state: {i === currentIndex ? 'running' : 'paused'}"
                        />
                    </div>
                {/each}

                <button onclick={prevFrc} class="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors" aria-label="Previous image">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onclick={nextFrc} class="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors" aria-label="Next image">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {#each images as _, i}
                        <button aria-label="Go to Image {i + 1}" onclick={() => setFrcIndex(i)} class="cursor-pointer w-3 h-3 rounded-full transition-all duration-300 {i === currentIndex ? 'bg-amber-400 scale-125' : 'bg-white/50 hover:bg-white'}"></button>
                    {/each}
                </div>
            </div>

            <div class="max-w-5xl m-auto">
                <h2 class="text-2xl font-bold mb-2">
                    The <b>FIRST® Robotics Competition</b> is FIRST's premiere robotics competition.
                </h2>
                <p class="mb-4">
                    Teams that participate
                    in FRC don't just have to build a robot using LEGO instructions: teams need to fundraise, design, and
                    build lasting mechanisms that can be easily repaired, fully functionable, and bring their team to
                    victory. There is no limit to how many members can be on a team, and no limit to what you can design
                    (within the limits held in place by FIRST's safety book). No matter what you're good at, there's
                    100% a place for you in FRC.
                </p>
                <h2 class="text-2xl font-bold mb-2">
                    Robots in FRC can be as heavy as 120 pounds, and as big as 28 cubic feet.
                </h2>
                <p class="mb-4">
                    They can feature many things,
                    such as mechanical arms, turrets, elevator shafts, large shooters, and huge reservoirs, depending on the
                    game that year. In a single year, you can see a lot of solutions to solve the same problem, and FRC
                    rewards creative thinking and innovative design over a template. Every year incurs a new challenge, and
                    every year brings on new and innovative ideas to optimise for the best robot.
                </p>
                <h2 class="text-2xl font-bold mb-2">
                    It's not just about building either.
                </h2>
                <p class="mb-4">
                    FRC guarantees no funds to any team; in fact, a team's yearly
                    registration costs $6,000, just to sign up. Teams have to reach out to sponsors, perform outreach events,
                    and get donations from the community just to have a chance to play. That's why a big part of any
                    robotics team is the business team: a dedicated subsection of members that help to fundraise, reach out to
                    businesses, and make the team possible.
                </p>
                <h2 class="text-2xl font-bold mb-2">
                    FRC isn't just a robotics competition.
                </h2>
                <p class="mb-4">
                    <b>FIRST's mission is to provide life-changing robotics
                        programs that give young people the skills, confidence, and resilience to build a better world.</b>
                    Or, in other words, to <a href="/#aboutus"><b>spread the love of robotics and competition that FRC inspires.</b></a>
                    FRC is rooted in community, inspiration, and social experiences: teams always try to help out each other,
                    whether it's at competition, off the field, or just a quick email asking for help. It's also the
                    responsibility of the robotics team to inspire others to explore robotics!
                </p>
            </div>

        </div>
    </div>

    <div id="why" class="w-full p-10 overflow-hidden">
        <div class="flex flex-col bg-amber-800 m-auto p-10 relative z-10 w-full shadow-[0_-10px_20px_rgba(0,0,0,0.3)] text-white">
            <h1 class="uppercase text-4xl font-harmoni w-full py-5 max-w-5xl m-auto">Why join us?</h1>

            <div class="max-w-5xl m-auto">
                <h2 class="text-2xl font-bold mb-2">
                    We're a small team!
                </h2>
                <p class="mb-4">
                    Rather than work with a fixed structure, every member of the team has the opportunity to
                    work on every part of the team. This means even if you don't know a ton about the
                    mechanical part, you can learn through experience, or if you have experience with electrical
                    work, you won't be constantly stuck on electrical (which is 100% a boon).
                </p>
                <p class="mb-4">
                    Being a small team, it means that each member's voice is very loud, and has a major place in
                    the direction of the team. Everyone has a say into how the team is run, and what the team does,
                    which makes this team a lot more personal for everyone involved.
                </p>

                <div class=" bg-amber-900/50 rounded-2xl border border-amber-700/50 shadow-inner relative overflow-hidden my-10 md:h-48">
                    <div class="text-9xl text-amber-500 opacity-20 absolute -top-4 -left-2 font-serif pointer-events-none z-0">"</div>

                    {#key currentQuoteIndex}
                        <div class="absolute inset-0 p-8 pt-12 md:pt-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-6"
                             in:fly={{ y: 20, duration: 800, delay: 300 }}
                             out:fade={{ duration: 300 }}>
                            <blockquote class="text-3xl lg:text-4xl font-harmoni text-amber-100 flex-1 text-center md:text-left z-10 px-4 md:px-8 py-4 leading-normal">
                                {quotes[currentQuoteIndex].text}
                            </blockquote>
                            <div class="flex flex-col items-center md:items-end shrink-0 z-10 md:pb-6 md:pr-4">
                                <div class="w-16 h-1 bg-amber-500 mb-3"></div>
                                <cite class="text-base w-min font-sans font-bold text-amber-200 uppercase tracking-widest not-italic text-center md:text-right">
                                    {quotes[currentQuoteIndex].author}
                                </cite>
                                <div class="text-sm font-sans font-bold text-amber-200 not-italic text-center md:text-right">
                                    Class of {quotes[currentQuoteIndex].co}
                                </div>
                            </div>
                        </div>
                    {/key}

                    <button onclick={prevQuote} class="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 text-amber-200/50 hover:text-amber-200 transition-colors" aria-label="Previous quote">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onclick={nextQuote} class="absolute -right-0 top-1/2 -translate-y-1/2 z-30 p-2 text-amber-200/50 hover:text-amber-200 transition-colors" aria-label="Next quote">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>

                    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                        {#each quotes as _, i}
                            <button aria-label="Go to quote {i + 1}" onclick={() => setQuoteIndex(i)} class="cursor-pointer w-2 h-2 rounded-full transition-all duration-300 {i === currentQuoteIndex ? 'bg-amber-400 scale-125' : 'bg-white/30 hover:bg-white/50'}"></button>
                        {/each}
                    </div>
                </div>
                <h2 class="text-2xl font-bold mb-2">
                    We're a student led team!
                </h2>
                <p class="mb-4">
                    A lot of new teams are completely directed by a coach or mentors. Our team, however, is different:
                    we don't have any strict direction we have to follow. The students, as in us, completely direct
                    what we do throughout the season. We're completely dependent on the judgement on some teenagers,
                    so we have a lot of fun with the freedom of design and consequence of decisions!
                </p>
                <p class="mb-4">
                    Because of this, we take a lot of pride in what we design. In everything, from our side panels, to
                    our t-shirt, you can literally see the team's effect on there. Every part of the team works together
                    to give us both direction and magnitude!
                </p>
                <h2 class="text-2xl font-bold mb-2">
                    We're a community team!
                </h2>
                <p class="mb-4">
                    We already mentioned this, but we are a team that serves all of Middlesex. If your school doesn't
                    have a robotics team, it's often hard to get your foot in the door. However, we accept all members
                    from all around Middlesex, so even if your school doesn't have the funds for a team, we can
                    introduce you to this new world.
                </p>

                <div class="relative w-full overflow-hidden shadow-2xl mt-8 rounded-xl h-96">
                    {#each teamImages as img, i}
                        <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out {i === currentTeamIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}">
                            <enhanced:img
                                    src={img}
                                    alt="Team Gallery Image {i + 1}"
                                    class="w-full h-full object-cover origin-center animate-ken-burns"
                                    style="animation-play-state: {i === currentTeamIndex ? 'running' : 'paused'}"
                            />
                        </div>
                    {/each}

                    <button onclick={prevTeam} class="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors" aria-label="Previous image">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button onclick={nextTeam} class="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors" aria-label="Next image">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>

                    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                        {#each teamImages as _, i}
                            <button aria-label="Go to Image {i + 1}" onclick={() => setTeamIndex(i)} class="cursor-pointer w-3 h-3 rounded-full transition-all duration-300 {i === currentTeamIndex ? 'bg-amber-400 scale-125' : 'bg-white/50 hover:bg-white'}"></button>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    @keyframes ken-burns {
        0% { transform: scale(1); }
        100% { transform: scale(1.15); }
    }
    :global(.animate-ken-burns) {
        animation: ken-burns 15s ease-in-out infinite alternate;
    }
</style>
