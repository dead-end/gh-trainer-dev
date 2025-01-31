<script lang="ts">
	import { base } from '$app/paths';
	import IconBook from '../icons/IconBook.svelte';
	import IconHome from '../icons/IconHome.svelte';
</script>

<nav class="mb-4 flex items-center justify-end gap-2">
	<a href={base}><IconHome /></a>
	<a href="{base}/books"><IconBook /></a>
	<a href="{base}/admin" class="text-blue-800 underline hover:text-blue-700">Admin</a>
	<a href="{base}/loading" class="text-blue-800 underline hover:text-blue-700">Loading</a>
</nav>
