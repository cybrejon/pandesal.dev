<script lang="ts">
	import { onMount } from 'svelte';

	// Too lazy to do this properly
	let {
		title = 'Pandev - Community of Filipino Software Developers',
		description = 'Pandev - A Community of Filipino Software Developers. Where the fun tech talks take place.',
		keywords = 'Filipino developers, software development, tech community, programming, developers, Philippines',
		url = 'https://pandesal.dev/',
		image = '/images/logo.png',
		type = 'website',
		siteName = 'Pandev',
		twitterCard = 'summary_large_image',
		author = 'Pandev Community',
		locale = 'en_US'
	}: Record<string, string> = $props();

	// JSON LD
	onMount(() => {
		const ld = {
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: siteName,
			url: url,
			sameAs: ['https://discord.gg/pandesal-dev']
		};

		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.textContent = JSON.stringify(ld);
		document.head.appendChild(script);
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
	<link rel="canonical" href={url} />

	<!-- Book of Faces -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content={locale} />

	<!-- Elon -->
	<meta property="twitter:card" content={twitterCard} />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>
