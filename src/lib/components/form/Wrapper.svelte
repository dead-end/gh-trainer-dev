<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		id: string;
		label: string;
		error: string;
		children: Snippet;
	};
	let { id, label, error, children }: Props = $props();
</script>

<div>
	<label class="mb-2 block text-sm font-bold text-gray-700" for={id}>{label}</label>
	{@render children()}
	{#if error}
		<p class="mt-1 text-sm text-red-600">{error}</p>
	{/if}
</div>
