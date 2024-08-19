<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.ImageSlice;
</script>

<PrismicImage field={slice.primary.image} class="w-full h-full my-10 rounded-md not-prose md:my-14 lg:my-16" ></PrismicImage>