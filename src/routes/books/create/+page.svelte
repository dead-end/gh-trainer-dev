<script lang="ts">
	import Button from '$lib/components/layout/Button.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Area from '$lib/components/form/Area.svelte';
	import Form from '$lib/components/form/Form.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Buttons from '$lib/components/layout/Buttons.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import { validateEmpty } from '$lib/utils/validate';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let id = $state('');
	let idError = $state('');

	let title = $state('');
	let titleError = $state('');

	let description = $state('');
	let descriptionError = $state('');

	const onClick = () => {
		idError = validateEmpty(id);
		titleError = validateEmpty(title);
		descriptionError = validateEmpty(description);

		if (!idError && !titleError && !descriptionError) {
			console.log('id', id, 'title:', title, 'description:', description);
			goto(`${base}/books`);
		}
	};
</script>

<Container>
	<PageHeader header="Create Book" />
	<Form>
		<Input id="id" label="Id" bind:value={id} error={idError} type="text" />
		<Input id="title" label="Title" bind:value={title} error={titleError} type="text" />
		<Area id="description" label="Description" bind:value={description} error={descriptionError} />
	</Form>

	<Buttons>
		<Button label="Save" {onClick} />
	</Buttons>
</Container>
