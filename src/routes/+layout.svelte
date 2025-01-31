<script lang="ts">
	import '../app.css';
	import Footer from '../lib/components/layout/Footer.svelte';
	let { children } = $props();
</script>

<main class="m-auto mt-4 max-w-screen-lg px-4 text-gray-600 lg:px-0">
	{@render children()}
	<Footer />
</main>
