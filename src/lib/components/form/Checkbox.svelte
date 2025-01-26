<script lang="ts">
	type Props = {
		id: string;
		label: string;
		checked: boolean;
	};

	let { id, label, checked = $bindable() }: Props = $props();
</script>

<div>
	<label class="mb-2 pr-2 text-sm font-bold text-gray-700" for={id}>{label}</label>
	<input class="checkbox" type="checkbox" {id} bind:checked />
</div>
