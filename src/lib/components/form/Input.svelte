<script lang="ts">
	import Wrapper from './Wrapper.svelte';

	type Props = {
		id: string;
		label: string;
		value: string;
		type: string;
		error: string;
		disabled: boolean;
	};

	let { id, label, value = $bindable(), type = 'text', error, disabled = false }: Props = $props();
</script>

<Wrapper {id} {label} {error}>
	<input {id} class="input" {type} bind:value {disabled} />
</Wrapper>
