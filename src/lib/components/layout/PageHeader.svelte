<script lang="ts">
	interface Props {
		header: string;
	}

	let { header }: Props = $props();
</script>

<h2 class="text-2xl font-extrabold">{header}</h2>
