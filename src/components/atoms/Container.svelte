<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
		class?: string;
	}
	let { children, class: className }: Props = $props();
</script>

<div class="h-full bg-card/20 p-4 backdrop-blur-[140px] md:p-7 {className}">
	{@render children()}
</div>
