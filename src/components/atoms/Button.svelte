<script lang="ts" module>
	export type ButtonVariants =
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'cta'
		| 'ghost'
		| 'outline'
		| 'text'
		| 'destructive';
	export type ButtonSizes = 'normal' | 'sm' | 'lg' | 'text' | 'text md' | 'text sm' | 'sidebar';
</script>

<script lang="ts">
	import { Button } from 'bits-ui';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		variant?: ButtonVariants;
		href?: string;
		size?: ButtonSizes;
		class?: string;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}
	let {
		children,
		variant = 'primary',
		href,
		size = 'normal',
		class: style,
		onclick,
		...restProps
	}: Props = $props();

	let styles: Record<ButtonVariants, string> = {
		primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
		accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
		cta: 'border-2 border-ctp-mauve-400 bg-linear-to-b from-ctp-mauve-800 via-ctp-mauve-950 to-ctp-mauve-950 text-white',
		destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
		ghost: 'hover:bg-primary/10 active:bg-primary/20',
		outline:
			'hover:bg-primary/10 active:bg-primary inset-ring-[1.45px] inset-ring-primary active:text-primary-foreground',
		text: 'hover:text-secondary'
	};

	let sizes: Record<ButtonSizes, string> = {
		normal: 'px-6 py-2.5 gap-3 text-base',
		sm: 'px-4 py-2 gap-2 text-sm',
		lg: 'px-8 py-4 gap-4 text-xl',
		text: 'gap-2',
		'text md': 'gap-2 text-sm',
		'text sm': 'gap-2 text-xs',
		sidebar: 'w-full justify-start rounded-xl px-4 py-2 gap-3 text-sm'
	};

	const baseClass =
		'inline-flex cursor-pointer flex-nowrap items-center justify-center rounded-full align-middle font-bold outline-offset-4 transition-all drop-shadow-[0_12px_var(--color-background)] hover:-translate-y-1 active:translate-y-2 active:opacity-60 active:drop-shadow-none';
</script>

{#if href}
	<Button.Root
		{href}
		{...restProps}
		class="{baseClass} {styles[variant]} {sizes[size]} {style}"
	>
		{@render children()}
	</Button.Root>
{:else}
	<Button.Root
		{...restProps}
		{onclick}
		class="{baseClass} {styles[variant]} {sizes[size]} {style}"
	>
		{@render children()}
	</Button.Root>
{/if}
