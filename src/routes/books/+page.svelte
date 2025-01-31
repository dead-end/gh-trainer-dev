<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/layout/Button.svelte';
	import Buttons from '$lib/components/layout/Buttons.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Container>
	<PageHeader header="List Books" />

	<table class="w-full">
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Description</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each data.books as book}
				<tr>
					<td>{book.id}</td>
					<td>{book.title}</td>
					<td>{book.description}</td>
					<td></td>
				</tr>
			{/each}
		</tbody>
	</table>

	<Buttons>
		<Button onClick={() => goto('./books/create')} label="Create" />
	</Buttons>
</Container>
