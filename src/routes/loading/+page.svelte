<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h2>Testing github</h2>
{#if data.status === 'ok'}
	<h2>Content</h2>
	<p>{data.content}</p>
	<p>{data.hash}</p>
{:else}
	<p>no data</p>
{/if}
