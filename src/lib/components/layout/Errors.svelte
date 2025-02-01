<script lang="ts">
	import { errorReset, errorStore } from '$lib/utils/errorStore.svelte';
	import Buttons from './Buttons.svelte';
	import Button from './Button.svelte';
</script>

{#if errorStore.length > 0}
	<div class="rounded border shadow px-4 py-4 mb-4">
		<p class="text-red-800 font-bold text-lg pb-4">Errors</p>
		{#each errorStore as error}
			<p class="text-red-800 pb-2">{error}</p>
		{/each}
		<Buttons>
			<Button label="Clear" onClick={() => errorReset()} />
		</Buttons>
	</div>
{/if}
