<script lang="ts">

	interface Props {
		label: string;
		disabled?: boolean;
		type?: 'ok' | 'error' | 'warn' | undefined;
		onClick?: (() => void) | (() => Promise<void>) | null;
	}

	let { label, disabled = false, type = undefined, onClick = null }: Props = $props();

	const getCss = () => {
		if (type === undefined) {
			return 'bg-blue-600 hover:bg-blue-700';
		}

		if (type === 'ok') {
			return 'bg-green-600 hover:bg-green-700';
		}

		if (type === 'error') {
			return 'bg-red-600 hover:bg-red-700';
		}

		if (type === 'warn') {
			return 'bg-yellow-600 hover:bg-yellow-700';
		}

		return '';
	};
</script>

{#if onClick == null}
	<button class={'btn-base ' + getCss()} {disabled} type="submit">{label}</button>
{:else}
	<button class={'btn-base ' + getCss()} {disabled} type="button" onclick={onClick}>{label}</button>
{/if}
