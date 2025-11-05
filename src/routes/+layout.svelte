<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import SEO from '$lib/SEO.svelte';
	import '@fontsource/dela-gothic-one';
	// Supports weights 300-900
	import '@fontsource-variable/darker-grotesque';

	interface Data {
		seo?: {
			title?: string;
			description?: string;
			url?: string;
			image?: string;
			keywords?: string;
		};
	}

	let { children, data }: { children: any; data?: Data } = $props();

	// Default SEO fallback(?)
	const defaultSeo = {
		title: 'Pandev - Community of Filipino Software Developers',
		description:
			'Pandev - A Community of Filipino Software Developers. Where the fun tech talks take place.',
		url: 'https://pandesal.dev/',
		image: '/images/logo.png',
		keywords:
			'Filipino developers, software development, tech community, programming, developers, Philippines'
	};

	// Use page-specific SEO data if available, otherwise use defaults
	const seo = data?.seo || defaultSeo;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SEO {...seo} />
{@render children?.()}
