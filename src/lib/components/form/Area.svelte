<script lang="ts">
	import Wrapper from './Wrapper.svelte';

	type Props = {
		id: string;
		label: string;
		value: string;
		error: string;
	};

	let { id, label, value = $bindable(), error }: Props = $props();
</script>

<Wrapper {id} {label} {error}>
	<textarea class="input" {id} bind:value></textarea>
</Wrapper>
