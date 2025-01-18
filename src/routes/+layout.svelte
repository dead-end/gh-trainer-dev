<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	let { children } = $props();
</script>

<div class="container mx-auto bg-slate-100">
	{@render children()}
	<Footer />
</div>
