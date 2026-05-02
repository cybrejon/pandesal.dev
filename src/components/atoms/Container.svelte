<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
		classInner?: string;
	}
	let { children, class: className, classInner }: Props = $props();
</script>

<div class="px-2 pb-2 sm:px-6 sm:pb-6 {className}">
	<div
		class="relative h-full overflow-hidden rounded-3xl border border-foreground/15 bg-card/20 p-4 md:p-12 {classInner}"
	>
		{@render children()}
	</div>
</div>
