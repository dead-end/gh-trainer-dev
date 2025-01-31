<script lang="ts">
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import '../app.css';
	import Footer from '../lib/components/layout/Footer.svelte';
	let { children } = $props();
</script>

<main class="m-auto mt-4 max-w-screen-lg px-4 text-gray-600 lg:px-0">
	<Navigation />
	{@render children()}
	<Footer />
</main>
