<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	export let slice: Content.ExperienceSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading tag='h2' size='lg'>
		{slice.primary.heading} 
	</Heading>
	{#each slice.primary.item as item}
		<div class="mt-8 ml-6 max-w-prose md:ml-12 md:mt-16">
			<Heading tag='h3' size='sm'>
				{item.title}
			</Heading>
			<p class="flex items-center gap-1 mt-1 text-2xl font-semibold tracking-light w-fit text-slate-400">
				<span>
					{item.time_period} {' '}
				</span>
				<span class="text-3xl font-extralight">/</span>
				<span>
					{item.institution}
				</span>
			</p>
			<div class="mt-4 prose prose-lg prose-invert">
				<PrismicRichText field={item.description} />
			</div>
		</div>
	{/each}
</Bounded>
