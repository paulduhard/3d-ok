<script lang="ts">
	import { type Content, isFilled } from "@prismicio/client";
	import { PrismicLink } from "@prismicio/svelte";
    import IconGithub from '~icons/fa6-brands/github';
    import IconLinkedin from '~icons/fa6-brands/linkedin'
    import IconBluesky from '~icons/fa6-brands/bluesky'
	import Bounded from "./Bounded.svelte";

    export let settings: Content.SettingsDocument;
</script>

<Bounded class="text-slate-600">
    <div class="container flex flex-col items-center justify-between gap-6 py-8 mx-auto mt-20 sm:flex-row">
        <div class="flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start name">
            <a href="/" class="text-xl font-extrabold tracking-tighter transition-colors duration-150 text-slate-100 hover:text-yellow-400">
            {settings.data.name}
            </a>
            <span class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline" aria-hidden="true">/</span>
            <p class="text-sm text-slate-300">
                © {new Date().getFullYear()} {settings.data.name}
            </p>
        </div>
        <nav class="navigation" aria-label="Footer Navigation">
            <ul class="flex items-center gap-1">
                {#each settings.data.nav_item as {link, label}, index}
                    <li>
                        <PrismicLink field={link} class="block px-3 py-1 text-base font-bold transition-colors duration-150 text-slate-100 hover:text-yellow-400">{label}</PrismicLink>
                    </li>
                    {#if index < settings.data.nav_item.length - 1}
                        <span class="text-4xl font-thin leading-[0] text-slate-400" aria-hidden="true">/</span>
                    {/if}
                {/each}
            </ul>
        </nav>
        <div class="flex justify-center inline socials sm:justify-end">
            {#if isFilled.link(settings.data.github_link) || isFilled.link(settings.data.linkedin_link)}
            <PrismicLink field={settings.data.github_link}
            class="p-2 text-2xl transition-all duration-150 transform text-slate-300 hover:text-yellow-400 hover:scale-125"
            aria-label={settings.data.name + ' on Github'}>
                <IconGithub />
            </PrismicLink>
            {/if}
            {#if isFilled.link(settings.data.linkedin_link) || isFilled.link(settings.data.linkedin_link)}
            <PrismicLink field={settings.data.linkedin_link}
            class="p-2 text-2xl transition-all duration-150 transform text-slate-300 hover:text-yellow-400 hover:scale-125"
            aria-label={settings.data.name + ' on Github'}>
                <IconLinkedin />
            </PrismicLink> 
            {/if}
            {#if isFilled.link(settings.data.bluesky_link) || isFilled.link(settings.data.bluesky_link)}
            <PrismicLink field={settings.data.bluesky_link}
            class="p-2 text-2xl transition-all duration-150 transform text-slate-300 hover:text-yellow-400 hover:scale-125"
            aria-label={settings.data.name + ' on Github'}>
                <IconBluesky />
            </PrismicLink>
            {/if}
            
        </div>
    </div>
</Bounded>