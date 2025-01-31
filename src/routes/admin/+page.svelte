<script lang="ts">
	import Button from '$lib/components/layout/Button.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import Form from '$lib/components/form/Form.svelte';
	import { githubConfig, githubSetConfig } from '$lib/github/config.svelte';
	import Checkbox from '$lib/components/form/Checkbox.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Buttons from '$lib/components/layout/Buttons.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import { validateEmpty } from '$lib/utils/validate';

	let user = $state(githubConfig.user);
	let userError = $state('');

	let repo = $state(githubConfig.repo);
	let repoError = $state('');

	let token = $state(githubConfig.token);
	let tokenError = $state('');

	let disabled = $state(true);

	const onClick = () => {
		userError = validateEmpty(user);
		repoError = validateEmpty(repo);
		tokenError = validateEmpty(token);

		if (!userError && !repoError && !tokenError) {
			githubSetConfig(user, repo, token);
			disabled = true;
		}
	};
</script>

<Container>
	<PageHeader header="Admin" />
	<Form>
		<Checkbox id="disabled" label="Update" bind:checked={disabled} />
		<Input id="user" label="User" bind:value={user} error={userError} type="text" {disabled} />
		<Input
			id="repo"
			label="Repository"
			bind:value={repo}
			error={repoError}
			type="text"
			{disabled}
		/>
		<Input id="token" label="Token" bind:value={token} error={tokenError} type="text" {disabled} />
	</Form>

	<Buttons>
		<Button label="Save" {onClick} {disabled} />
	</Buttons>
</Container>
