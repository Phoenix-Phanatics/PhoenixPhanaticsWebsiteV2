<script lang="ts">
    import {slide} from "svelte/transition";
    import forward from "$lib/assets/forward.svg";
    import Link from "$lib/components/Link.svelte";
    import {cubicInOut} from "svelte/easing";
    import team from "$lib/assets/team.JPG?enhanced"
    import middlesexCounty from "$lib/assets/middlesex county.jpg?enhanced";
    import Button from "$lib/components/Button.svelte";

    import argosy from "$lib/assets/sponsors/sponsor-argosy.png?enhanced"
    import bena from "$lib/assets/sponsors/sponsor-bena.png?enhanced"
    import hc from "$lib/assets/sponsors/sponsor-hc.png?enhanced";
    import nasa from "$lib/assets/sponsors/sponsor-nasa.png?enhanced";
    import slf from "$lib/assets/sponsors/sponsor-slf.webp?enhanced";
    import tbaImg from "$lib/assets/thebluealliance.png?enhanced";

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

<div class="contents relative">
    <div class="w-full p-10 overflow-hidden">
        <div id="about" class="flex flex-col bg-amber-800 m-auto p-10 relative z-10 w-full shadow-[0_-10px_20px_rgba(0,0,0,0.3)] scroll-m-24">
            <h1 class="uppercase text-4xl font-harmoni max-w-5xl m-auto w-full py-5">About Us</h1>
            <div class="w-full overflow-clip -rotate-5 scale-120 relative">
                <enhanced:img src={middlesexCounty} alt="Middlesex County" class="overflow-hidden h-72 w-full object-cover -mt-10" />
                <div class="w-full bg-black/60 text-amber-100 py-2 flex whitespace-nowrap overflow-hidden">
                    <div class="animate-marquee inline-block">
                        Carteret &bull; Cranbury &bull; Dunellen &bull; East Brunswick &bull; Edison &bull; Helmetta &bull; Highland Park &bull; Jamesburg &bull; Metuchen &bull; Middlesex &bull; Milltown &bull; Monroe &bull; New Brunswick &bull; North Brunswick &bull; Old Bridge &bull; Perth Amboy &bull; Piscataway &bull; Plainsboro &bull; Sayreville &bull; South Amboy &bull; South Brunswick &bull; South Plainfield &bull; South River &bull; Spotswood &bull; Woodbridge &bull;&nbsp;
                    </div>
                    <div class="animate-marquee inline-block">
                        Carteret &bull; Cranbury &bull; Dunellen &bull; East Brunswick &bull; Edison &bull; Helmetta &bull; Highland Park &bull; Jamesburg &bull; Metuchen &bull; Middlesex &bull; Milltown &bull; Monroe &bull; New Brunswick &bull; North Brunswick &bull; Old Bridge &bull; Perth Amboy &bull; Piscataway &bull; Plainsboro &bull; Sayreville &bull; South Amboy &bull; South Brunswick &bull; South Plainfield &bull; South River &bull; Spotswood &bull; Woodbridge &bull;&nbsp;
                    </div>
                </div>
            </div>
            <div class="mt-25 w-full text-white relative z-30">
                <h2 class="text-4xl mb-4 max-w-5xl mx-auto flex items-start justify-between gap-3">
                    <span class="w-full block">1. We are a <b>community team</b> based out of the general <b>Middlesex County</b> Area.</span>
                    <button class="text-amber-200 hover:text-white transition-all duration-300 cursor-pointer flex-shrink-0 {expandedSection1 ? 'rotate-180' : ''}" onclick={() => expandedSection1 = !expandedSection1} aria-label="Toggle section">
                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </h2>
                {#if expandedSection1}
                    <div class="max-w-5xl mx-auto w-full" transition:slide={{easing: cubicInOut}}>
                        <button
                                class="text-left w-full text-lg shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] bg-amber-900/80 text-amber-50 p-6 rounded-2xl cursor-pointer transition-all hover:bg-amber-900/90"
                                onclick={() => expandedSection1 = false}
                        >
                            <span class="flex w-full flex-col lg:flex-row items-stretch gap-8">
                                <span class="block w-full lg:w-1/3">
                                    <enhanced:img src={team} alt="team photo" class="w-full h-full object-cover rounded-lg shadow-xl" />
                                </span>
                                <span class="flex w-full items-center">
                                    <span class="block">
                                        Rather than be a part of a single school, we serve anyone in Middlesex County who wants to learn
                                        the fun behind robotics! Our members are from schools that don't have dedicated FRC, or even
                                        robotics teams in general, and who want to explore opportunities in robotics. We are currently
                                        based in East Brunswick, and live in the basement of our team captain!
                                    </span>
                                </span>
                            </span>
                        </button>
                    </div>
                {/if}
            </div>
            <div class="mt-5 mx-auto w-full text-white relative z-30">
                <h2 class="text-4xl mb-4 max-w-5xl mx-auto flex items-start md:items-center gap-3">
                    <span class="w-full block">2. We founded our team in the <b>2026 REBUILT®</b> season.</span>
                    <button class="text-amber-200 hover:text-white transition-all duration-300 cursor-pointer flex-shrink-0 {expandedSection2 ? 'rotate-180' : ''}" onclick={() => expandedSection2 = !expandedSection2} aria-label="Toggle section">
                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </h2>
                {#if expandedSection2}
                    <div class="max-w-5xl mx-auto w-full" transition:slide={{easing: cubicInOut}}>
                        <button
                                class="text-left w-full text-lg shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] bg-amber-900/80 text-amber-50 p-6 rounded-2xl cursor-pointer transition-all hover:bg-amber-900/90"
                                onclick={() => expandedSection2 = false}
                        >
                            <span class="block w-full">
                                We founded this team in June 2025, with the intention of creating a team where the students
                                could be in charge of the team. The 2026 season was our rookie season, and despite some
                                early hiccups, we were able to make it pretty far into the competition, and finished in the
                                4th alliance at our second competition!
                                <br><br>
                                Our main goal for our rookie season was to absorb as much information as we could about
                                how to run a robotics team, and to have fun doing it. We were able to accomplish both of those
                                this season, and cannot wait to perform in the 2027 season!
                            </span>
                        </button>
                    </div>
                {/if}
            </div>
            <div class="mt-5 mx-auto w-full text-white relative z-30">
                <h2 class="text-4xl mb-4 max-w-5xl mx-auto flex items-start md:items-center gap-3">
                    <span class="w-full block">3. Our <b>mission</b> is to <b>spread robotics</b> to those who may have not been able to in <b>their own schools</b>. We hope to spread the love of robotics and competition that FRC inspires.</span>
                    <button class="text-amber-200 hover:text-white transition-all duration-300 cursor-pointer flex-shrink-0 {expandedSection3 ? 'rotate-180' : ''}" onclick={() => expandedSection3 = !expandedSection3} aria-label="Toggle section">
                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </h2>
                {#if expandedSection3}
                    <div class="max-w-5xl mx-auto w-full" transition:slide={{easing: cubicInOut}}>
                        <button
                                class="text-left w-full text-lg shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] bg-amber-900/80 text-amber-50 p-6 rounded-2xl cursor-pointer transition-all hover:bg-amber-900/90"
                                onclick={() => expandedSection3 = false}
                        >
                            <span class="block w-full">
                                Through FIRST Robotics, our team learned that robotics doesn't just involve a bunch of
                                parts and LEGO assembly; you need teamwork, time management, and amazing outreach
                                to fundraise, build, and grow our team. Our mission for our team is to inspire others
                                through robotics: the same way we were when we founded our team.
                                <br><br>
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

<div class="contents relative">
    <div class="w-full p-10 overflow-hidden">
        <div id="sponsors" class="flex flex-col bg-amber-800 m-auto p-10 relative z-10 w-full shadow-[0_-10px_20px_rgba(0,0,0,0.3)] scroll-m-24">
            <h1 class="uppercase text-4xl font-harmoni max-w-5xl m-auto w-full">our sponsors</h1>
            <div class="flex flex-row flex-wrap max-w-5xl mx-auto w-full gap-2">
                Without our sponsors and grant-givers, it would not be possible for us to participate in any
                competition, much less a robotics competition.
            </div>
            <div class="flex flex-row flex-wrap justify-center items-center gap-4 mt-8 max-w-5xl mx-auto w-full">
                <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer" class="bg-white p-4 rounded-xl shadow-lg h-32 flex items-center justify-center min-w-37.5 flex-auto max-w-75 transition-transform duration-300 hover:-rotate-10 hover:scale-105 cursor-pointer">
                    <enhanced:img src={nasa} alt="NASA" class="w-full h-full object-contain" />
                </a>
                <a href="https://argosyfnd.org" target="_blank" rel="noopener noreferrer" class="bg-white p-4 rounded-xl shadow-lg h-32 flex items-center justify-center min-w-37.5 flex-auto max-w-75 transition-transform duration-300 hover:-rotate-10 hover:scale-105 cursor-pointer">
                    <enhanced:img src={argosy} alt="Argosy Foundation" class="w-full h-full object-contain" />
                </a>
                <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" class="bg-white p-4 rounded-xl shadow-lg h-32 flex items-center justify-center min-w-37.5 flex-auto max-w-75 transition-transform duration-300 hover:-rotate-10 hover:scale-105 cursor-pointer">
                    <enhanced:img src={hc} alt="Hack Club" class="w-full h-full object-contain" />
                </a>
                <a href="https://benahealth.com" target="_blank" rel="noopener noreferrer" class="bg-white p-4 rounded-xl shadow-lg h-32 flex items-center justify-center min-w-37.5 flex-auto max-w-75 transition-transform duration-300 hover:-rotate-10 hover:scale-105 cursor-pointer">
                    <enhanced:img src={bena} alt="BenaHealth" class="w-full h-full object-contain" />
                </a>
                <a href="https://sulimanilawfirm.com" target="_blank" rel="noopener noreferrer" class="bg-white p-4 rounded-xl shadow-lg h-32 flex items-center justify-center min-w-37.5 flex-auto max-w-75 transition-transform duration-300 hover:-rotate-10 hover:scale-105 cursor-pointer">
                    <enhanced:img src={slf} alt="Sulimani law firm" class="w-full h-full object-contain" />
                </a>
            </div>
            <Link icon={forward} class="w-max self-end" url="/sponsors#sponsors">View more</Link>
        </div>
    </div>
</div>

<div class="contents relative">
    <div class="w-full p-10 overflow-hidden">
        <div id="info" class="flex flex-col bg-amber-800 m-auto p-10 relative z-10 w-full shadow-[0_-10px_20px_rgba(0,0,0,0.3)] scroll-m-24">
            <h1 class="uppercase text-4xl font-harmoni max-w-5xl m-auto w-full">Find out more</h1>
            <div class="flex flex-row flex-wrap max-w-5xl mx-auto w-full gap-2">
                <Link target="_blank" url="https://www.firstinspires.org" icon={forward}>What is FRC?</Link>
                <Link target="_blank" url="https://www.firstinspires.org" icon={forward}>What do robotics teams do?</Link>
            </div>
            <div class="mt-5 w-full max-w-5xl mx-auto flex flex-col justify-center gap-2">
                <h2 class="font-bold uppercase">Our socials</h2>
                <div class="flex flex-row flex-wrap mx-auto w-full gap-2">
                    <Link target="_blank" url="https://instagram.com/phoenixphanatics11104" icon={forward}>Instagram</Link>
                    <Link target="_blank" url="https://youtube.com/@phoenixphanaics11104" icon={forward}>Youtube</Link>
                    <Link target="_blank" url="https://tiktok.com/@phoenixphanatics11104" icon={forward}>TikTok</Link>
                </div>
            </div>

            <div class="mt-4 w-full flex flex-col justify-center">
                <h2 id="stats" class="font-bold uppercase max-w-5xl mx-auto w-full relative z-20 scroll-m-28 text-white">Our TBA Stats</h2>
                <div class="w-full overflow-clip -rotate-5 scale-120 relative">
                    <a href="https://www.thebluealliance.com/team/11104" target="_blank" rel="noopener noreferrer" class="block w-full h-full group relative bg-black">
                        <enhanced:img src={tbaImg} alt="The Blue Alliance" class="inset-0 w-full h-max object-cover transition-all duration-300 group-hover:brightness-50 opacity-90 group-hover:opacity-100" />
                        <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-6 bg-black/40">
                            <svg class="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg>
                            <span class="text-white text-3xl font-bold mb-2">View our TheBlueAlliance stats</span>
                            <span class="text-white text-lg max-w-2xl">TBA is a website where you can see robotics' teams' stats and performance in one aggregated centre.</span>
                        </div>
                    </a>
                </div>
            </div>

            <div class="mt-24 w-full flex flex-col justify-center">
                <h2 id="contact" class="font-bold uppercase max-w-5xl mx-auto w-full relative z-20 mb-6 text-white scroll-m-28">Contact Us</h2>
                <form onsubmit={submitContactForm} class="max-w-5xl mx-auto w-full flex flex-col gap-4 relative z-20 text-white">
                    <div class="flex flex-col md:flex-row gap-4">
                        <input type="text" bind:value={contactName} placeholder="Your Name" required class="flex-1 p-4 rounded-xl bg-amber-900/80 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all" />
                        <input type="text" bind:value={contactSubject} placeholder="Subject" required class="flex-1 p-4 rounded-xl bg-amber-900/80 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all" />
                    </div>
                    <textarea bind:value={contactMessage} rows="5" placeholder="Your Message" required class="w-full p-4 rounded-xl bg-amber-900/80 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-[inset_0_6px_15px_rgba(0,0,0,0.4)] transition-all resize-none"></textarea>
                    <Button type="submit" class="self-end">
                        Send
                    </Button>
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
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
    }
</style>
