<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
	}
	let { children, class: className }: Props = $props();
</script>

<div class="px-2 pb-2 sm:px-6 sm:pb-6">
	<div
		class="relative h-full overflow-hidden rounded-3xl border border-foreground/15 bg-card/20 p-4 md:p-7 {className}"
	>
		{@render children()}
	</div>
</div>
