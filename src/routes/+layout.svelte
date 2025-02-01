<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import { onMount } from 'svelte';
	import Footer from '../lib/components/layout/Footer.svelte';
	import Errors from '$lib/components/layout/Errors.svelte';
	import { githubInitConfig } from '$lib/models/github.svelte';
	let { children } = $props();

	onMount(() => {
		githubInitConfig();
	});
</script>

<main class="m-auto mt-4 max-w-screen-lg px-4 text-gray-600 lg:px-0">
	<Navigation />
	<Errors />
	{@render children()}
	<Footer />
</main>
