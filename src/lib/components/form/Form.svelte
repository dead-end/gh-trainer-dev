<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<form class="flex flex-col gap-5 lg:w-2/3">
	{@render children()}
</form>
