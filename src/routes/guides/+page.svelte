<script>
	let { data } = $props();

	let selectedSlug = $state('');

	$effect(() => {
		if (!selectedSlug && data.guides[0]) {
			selectedSlug = data.guides[0].slug;
		}
	});

	let activeGuide = $derived.by(
		() => data.guides.find((guide) => guide.slug === selectedSlug) ?? data.guides[0]
	);
</script>

<svelte:head>
	<title>guides | shuffle</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="guides-page">
	<header class="topbar" aria-label="Main navigation">
		<a class="brand" href="/">shuffle</a>
		<nav class="top-links" aria-label="Secondary links">
			<a href="/">home</a>
			<a href="/#how-it-works-title">about</a>
			<a href="/#faq-title">faq</a>
			<a href="/guides" aria-current="page">guides</a>
		</nav>
	</header>

	<aside class="sidebar" aria-label="Guide list">
		<div class="guide-list">
			{#each data.guides as guide}
				<div class="guide-entry">
					<button
						type="button"
						class:active={guide.slug === selectedSlug}
						onclick={() => (selectedSlug = guide.slug)}
					>
						{guide.title}
					</button>

					{#if guide.slug === selectedSlug && guide.headings.length > 0}
						<ul class="heading-tree">
							{#each guide.headings as heading}
								<li class={`depth-${Math.min(heading.depth, 6)}`}>
									<a href={`#${heading.id}`}>{heading.text}</a>
								</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	</aside>

	<section class="guide-shell" aria-live="polite">
		<article class="guide-card">
			<p class="guide-kicker">{activeGuide.title}.md</p>
			<div class="guide-body">
				{@html activeGuide.html}
			</div>
		</article>
	</section>
</main>

<style>
	.guides-page {
		--topbar-height: 4.5rem;
		--sidebar-width: 18rem;
		position: relative;
		min-height: 100vh;
		padding-top: var(--topbar-height);
		background: transparent;
	}

	.topbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: var(--topbar-height);
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'terminal', monospace;
		font-size: 2rem;
		text-transform: lowercase;
		z-index: 20;
	}

	.brand,
	.top-links a {
		color: #0d3dff;
	}

	.top-links {
		display: flex;
		gap: 1.5rem;
	}

	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: var(--sidebar-width);
		padding: calc(var(--topbar-height) + 1.75rem) 1.25rem 1.75rem 2rem;
		border-right: 5px solid #0d3dff;
		overflow-y: auto;
	}

	.guide-list {
		display: flex;
		flex-direction: column;
		gap: 1.3rem;
	}

	.guide-entry {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.guide-list button {
		appearance: none;
		border: 0;
		background: transparent;
		padding: 0;
		text-align: left;
		font-family: 'terminal', monospace;
		font-size: 1.2rem;
		text-transform: lowercase;
		cursor: pointer;
		opacity: 0.7;
	}

	.guide-list button.active {
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.18em;
	}

	.heading-tree {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.heading-tree li {
		font-family: 'terminal', monospace;
		font-size: 0.82rem;
		line-height: 1.2;
		opacity: 0.9;
	}

	.heading-tree a {
		display: inline-block;
	}

	.heading-tree .depth-1 {
		padding-left: 0;
	}

	.heading-tree .depth-2 {
		padding-left: 0.35rem;
	}

	.heading-tree .depth-3 {
		padding-left: 0.75rem;
	}

	.heading-tree .depth-4,
	.heading-tree .depth-5,
	.heading-tree .depth-6 {
		padding-left: 1.1rem;
	}

	.guide-shell {
		padding: 2rem 2.5rem 3rem calc(var(--sidebar-width) + 10px + 2.5rem);
		min-height: calc(100vh - var(--topbar-height));
	}

	.guide-card {
		max-width: 120ch;
		color: #000000;
	}

	.guide-kicker {
		margin: 0 0 1.5rem;
		font-family: 'terminal', monospace;
		font-size: 0.9rem;
		text-transform: lowercase;
	}

	.guide-body {
		font-family: 'EB Garamond', serif;
		font-size: clamp(1.2rem, 1vw, 1.5rem);
		line-height: 1.55;
	}

	.guide-body :global(h1),
	.guide-body :global(h2),
	.guide-body :global(h3),
	.guide-body :global(h4),
	.guide-body :global(h5),
	.guide-body :global(h6) {
		font-family: 'terminal', monospace;
		line-height: 1.15;
		margin: 1.5rem 0 0.75rem;
	}

	.guide-body :global(h1) {
		font-size: clamp(2rem, 4vw, 3.2rem);
		margin-top: 0;
	}

	.guide-body :global(h2) {
		font-size: clamp(1.25rem, 2.1vw, 1.8rem);
	}

	.guide-body :global(h3) {
		font-size: clamp(1rem, 1.7vw, 1.35rem);
	}

	.guide-body :global(p),
	.guide-body :global(li),
	.guide-body :global(blockquote) {
		font-family: 'EB Garamond', serif;
		color: #000000;
	}

	.guide-body :global(p) {
		margin: 0 0 1rem;
	}

	.guide-body :global(ul),
	.guide-body :global(ol) {
		margin: 0 0 1rem 1.25rem;
		padding: 0;
	}

	.guide-body :global(li + li) {
		margin-top: 0.35rem;
	}

	.guide-body :global(code) {
		font-family: 'terminal', monospace;
		font-size: 0.95em;
	}

	.guide-body :global(img) {
		display: block;
		max-width: 100%;
		height: auto;
		margin: 1rem 0;
	}

	@media (max-width: 760px) {
		.guides-page {
			--sidebar-width: 0;
		}

		.topbar {
			padding: 1rem;
			font-size: 0.9rem;
		}

		.sidebar {
			position: static;
			width: auto;
			border-right: 0;
			border-bottom: 10px solid #0d3dff;
			padding: 1rem;
		}

		.heading-tree {
			margin-left: 0.2rem;
		}

		.guide-shell {
			padding: 1.5rem 1rem 2rem;
		}
	}
</style>
