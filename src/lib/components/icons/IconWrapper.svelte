<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="text-blue-600 hover:text-blue-700">
	{@render children()}
</div>
