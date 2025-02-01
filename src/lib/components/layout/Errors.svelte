<script lang="ts">
	import { errorReset, errorStore } from '$lib/utils/errorStore.svelte';
	import Buttons from './Buttons.svelte';
	import Button from './Button.svelte';
</script>

{#if errorStore.length > 0}
	<div class="mb-4 rounded border px-4 py-4 shadow">
		<p class="pb-4 text-lg font-bold text-red-800">Errors</p>
		{#each errorStore as error}
			<p class="pb-2 text-red-800">{error}</p>
		{/each}
		<Buttons>
			<Button label="Clear" onClick={() => errorReset()} />
		</Buttons>
	</div>
{/if}
